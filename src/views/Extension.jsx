import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { FiSettings } from "react-icons/fi";
import { AiOutlineCloseCircle, AiOutlineAudio } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TiTabsOutline } from "react-icons/ti";
import { GoDeviceCameraVideo } from "react-icons/go";
import { logo } from "../assets";

const Extension = () => {
  const [recording, setRecording] = useState(false);
  const mediaRecorder = useRef(null);
  const screenStream = useRef(null);
  const screenChunks = useRef([]);
  const [screenUrl, setScreenUrl] = useState(null);
  const [checked, setChecked] = useState(false);
  const [audio, setAudio] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [popup, setPopUp] = useState(false);
  const startRecording = async () => {
    try {
      // Request access to screen capture
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: checked,
        audio: audio,
      });
      setPopUp(true);
      screenStream.current = stream;

      // Create a MediaRecorder instance
      mediaRecorder.current = new MediaRecorder(stream);

      // Event handler when data becomes available (chunks of video)
      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          screenChunks.current.push(event.data);
        }
      };

      // Event handler when recording stops
      mediaRecorder.current.onstop = () => {
        const screenBlob = new Blob(screenChunks.current, {
          type: "video/webm",
        });
        const link = URL.createObjectURL(screenBlob);
        // You can use screenUrl to play or share the recording
        setScreenUrl(link);
      };

      // Start recording
      mediaRecorder.current.start();

      setRecording(true);
    } catch (error) {
      console.error("Error starting screen recording:", error);
      if (error.name === "NotAllowedError") {
        setErrorMessage(
          "Permission denied: You need to grant permission to record your screen and audio."
        );
      } else if (!checked) {
        setErrorMessage("Camera permission needed");
      } else {
        setErrorMessage("An error occurred while starting the recording.");
      }
    }
  };
  const screenBlob = new Blob(screenChunks.current, {
    type: "video/webm",
  });

  const screenFile = new File([screenBlob], "recorded.webm", {
    type: "video/webm",
  });

  const sendVideoToBackend = async (file) => {
    try {
      const formData = new FormData();
      formData.append("video", file);

      const response = await fetch("https://abdulhngx-cevh.onrender.com/api", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Video uploaded successfully");
      } else {
        console.error("Failed to upload video");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  // Call the function to send the video to the backend
  useEffect(() => {
    sendVideoToBackend(screenFile);
  }, []);

  const stopRecording = () => {
    if (mediaRecorder.current && recording) {
      mediaRecorder.current.stop();
      screenStream.current.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }
  };
  const handleCheckBoxChange = (e) => {
    setChecked(e.target.checked);
  };
  const handleAudioChange = (e) => {
    setAudio(e.target.checked);
  };
  const conditionalStyling = popup ? "yes" : "no";
  return (
    <div className={conditionalStyling}>
      <Wrapper>
        <Container>
          <NavBar>
            <Logo>
              <img src={logo} alt="logoImg" /> <span>HelpMeOut</span>
            </Logo>
            <NavLeft>
              <FiSettings />{" "}
              <AiOutlineCloseCircle
                style={{
                  opacity: "0.7",
                  color: "gray",
                }}
                onClick={() => {
                  window.close();
                }}
              />
            </NavLeft>
          </NavBar>
          <MainBody>
            <Intro>
              This extension helps you record and share help videos with ease.
            </Intro>
            <Screens>
              <div>
                <HiOutlineDesktopComputer /> <span>Full Screen</span>
              </div>
              <div>
                <TiTabsOutline /> <span>Current Tab</span>
              </div>
            </Screens>
            <Actions>
              <div>
                <p>
                  <GoDeviceCameraVideo /> <span>Camera</span>
                </p>
                <input
                  type="checkbox"
                  id="checkBox"
                  checked={checked}
                  onChange={handleCheckBoxChange}
                />
                <label htmlFor="checkBox">
                  <div>
                    <div></div>
                  </div>
                </label>
              </div>
              <div>
                <p>
                  <AiOutlineAudio /> <span>Audio</span>
                </p>
                <input
                  type="checkbox"
                  id="checkBox2"
                  checked={audio}
                  onChange={handleAudioChange}
                />
                <label htmlFor="checkBox2">
                  <div>
                    <div></div>
                  </div>
                </label>
              </div>
            </Actions>
            <Submit onClick={startRecording} disabled={recording}>
              Start Recording
            </Submit>
            <button onClick={stopRecording}>stp</button>
            {screenUrl && (
              <>
                {
                  <a href={screenUrl} target="_blank" rel="noopener noreferrer">
                    {screenUrl}
                  </a>
                }
              </>
            )}
            <ErrorMessages>{errorMessage && <>{errorMessage}</>}</ErrorMessages>
          </MainBody>
        </Container>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Work Sans", sans-serif;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: 700;
    color: #120b48;
    font-family: "Sora", sans-serif;
  }
`;
const NavLeft = styled.div`
  display: flex;
  gap: 10px;
  font-size: 30px;
`;
const MainBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
const Intro = styled.p`
  text-wrap: balance;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  text-align: center;
`;
const Screens = styled.div`
  display: flex;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  justify-content: space-around;
  width: 100%;
  color: #120b48;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 50px;
    span {
      font-size: 16px;
    }
  }
`;
const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  font-family: "Work Sans", sans-serif;
  margin-top: 10px;
  div {
    border-radius: 10px;
    border: 1px solid #120b48;
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    p {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 30px;
      span {
        font-size: 20px;
        font-weight: 500;
        font-style: normal;
      }
    }
    input[type="checkbox"] {
      display: none;
    }
    label {
      div {
        border: 1px solid #100a42;
        width: 60px;
        height: 20px;
        border-radius: 50px;
        background-color: #d2d0d05f;
        transition: 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        div {
          width: 10px;
          height: 10px;
          border: 1px solid #100a42;
          margin-left: -7px;
          border-radius: 50%;
          background-color: white;
        }
      }
    }
  }
  input[type="checkbox"]:checked + label {
    div {
      background-color: #100a42;
      div {
        margin-left: 30px;
        background-color: white;
      }
    }
  }
`;
const Submit = styled.button`
  background-color: #120b48;
  border-radius: 10px;
  padding: 15px;
  color: white;
  outline: none;
  border: none;
  font-family: "Work Sans", sans-serif;
  width: 80%;
  transition: 0.3s ease;
  &:hover {
    background-color: #150f3a;
    cursor: pointer;
  }
`;

const ErrorMessages = styled.div`
  color: red;
`;
export default Extension;
