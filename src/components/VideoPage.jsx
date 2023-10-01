import React, { useState } from "react";
import { styled } from "styled-components";
import { logo, footerLogo } from "../assets";
import { FaRegPenToSquare } from "react-icons/fa6";
import { TbCopy } from "react-icons/tb";
import { BsFacebook, BsWhatsapp, BsTelegram } from "react-icons/bs";

const VideoPage = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
    setCopied(true);
  };
  return (
    <Wrapper>
      <Container>
        <Navbar>
          <Logo>
            <img src={logo} alt="logoImg" /> <span>HelpMeOut</span>
          </Logo>
          <div>
            <span>Features</span> <span>How It Works</span>
          </div>
          <p>Get Started</p>
        </Navbar>
        <Main>
          <Box1>
            <Box1Intro>Your video is ready!</Box1Intro>
            <VideoData>
              <div>
                <span>Name</span>
                <p>
                  Untitled_Video_1234567 <FaRegPenToSquare />
                </p>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="enter email of reciever"
                />
                <button>Send</button>
              </div>
              <div>
                <span>Video Url</span>
                <div>
                  <p id="videoLink">
                    https://www.helpmeout/Untitled_Video_20232509
                  </p>
                  {copied ? (
                    <button>Copied!</button>
                  ) : (
                    <button onClick={handleCopy}>
                      <TbCopy />
                      copy
                    </button>
                  )}
                </div>
              </div>
            </VideoData>
            <ShareVideo>
              <p>Share your video</p>
              <div>
                <Medias>
                  <span>
                    <BsFacebook
                      style={{
                        color: "blue",
                      }}
                    />
                  </span>
                  Facebook
                </Medias>
                <Medias>
                  <span>
                    <BsWhatsapp
                      style={{
                        color: "lightGreen",
                      }}
                    />
                  </span>
                  Facebook
                </Medias>
                <Medias>
                  <span>
                    <BsTelegram
                      style={{
                        color: "blue",
                      }}
                    />
                  </span>
                  Facebook
                </Medias>
              </div>
            </ShareVideo>
          </Box1>
          <Box2>
            <DisplayVideo>
              <video
                src=""
                controls
                contentEditable
                style={{
                  width: "100%",
                  height: "100%",
                }}
              ></video>
            </DisplayVideo>
            <Transcription>
              <div>
                <span>Transcript</span>
                <div>
                  <select name="" id="">
                    <option value="">English</option>
                    <option value="">English</option>
                    <option value="">English</option>
                    <option value="">English</option>
                  </select>
                </div>
                <div>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe iusto harum accusantium, voluptas et debitis. Beatae
                    doloribus similique ea incidunt?
                  </span>
                </div>
              </div>
            </Transcription>
          </Box2>
        </Main>
        <SaveVideo>
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
          <SaveVideoButton>Save video</SaveVideoButton>
        </SaveVideo>
        <CreateAccount>
          Don't have an account? <span>Create account</span>
        </CreateAccount>
      </Container>
        <Footer>
          <FooterContents>
            <FooterLogo>
              <img src={footerLogo} alt="footerLogo" /> <span>HelpMeOut</span>
            </FooterLogo>

            <Content>
              <span>Menu</span>
              <sub>Home</sub>
              <sub>Converter</sub>
              <sub>How it works</sub>
            </Content>
            <Content>
              <span>Menu</span>
              <sub>About</sub>
              <sub>Contact Us</sub>
              <sub>Praivacy Policy</sub>
            </Content>
            <Content>
              <span>Menu</span>
              <sub>Broser Window</sub>
              <sub>Desktop</sub>
              <sub>Application</sub>
            </Content>
          </FooterContents>
        </Footer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #120b48;
  font-family: "Sora", sans-serif;
  width: 100%;
  flex-direction: column;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 20px 50px;
  gap: 20px;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
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
const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: 30px;
`;
const Box1 = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 600px;
  height: 600px;
  gap: 30px;
`;
const Box2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 600px;
  gap: 50px;
`;
const Box1Intro = styled.span`
  color: #141414;
  font-weight: 700;
  height: 50px;
  font-size: 30px;
`;
const VideoData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  div:nth-child(1) {
    span {
      color: var(--team-1-grey, #4b4b4b);
      font-size: 16px;
      font-weight: 400;
    }
    p {
      font-weight: 500;
      font-size: 25px;
    }
  }

  div:nth-child(2) {
    display: flex;
    width: 85%;
    background-color: #e7e7ed;
    height: 40px;
    border-radius: 15px;
    justify-content: space-between;
    padding: 10px;

    input {
      background-color: transparent;
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      &::placeholder {
        font-family: "Sora", sans-serif;
      }
    }
    button {
      background-color: #605c84;
      padding: 5px;
      width: 60px;
      border: none;
      outline: none;
      border-radius: 5px;
    }
  }

  div:nth-child(3) {
    background-color: white;
    span {
      font-weight: 600;
    }
    div {
      background-color: #fafafa;
      border: 1px solid #88a6c3;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background-color: transparent;
        text-transform: capitalize;
        font-size: 16px;
        border: 1px solid #88a6c3;
        width: 70px;
        padding: 6px;
      }
    }
  }
`;

const ShareVideo = styled.div`
  width: 100%;
  color: #000000;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  gap: 18px;

  div {
    display: flex;
    gap: 10px;
  }
`;
const Medias = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid #0a0628;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 2px;
  &:hover {
    transform: scale(1.1);
  }
  span {
    font-size: 20px;
  }
`;
const DisplayVideo = styled.div`
  width: 100%;
  height: 400px;
`;
const Transcription = styled.div`
  width: 100%;
  height: 400px;
  border-left: 1px solid;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  div {
    display: flex;

    width: 100%;
    flex-direction: column;
    /* padding: 20px; */
    span {
      font-weight: 600;
      color: #000000;
      width: 100%;
    }
    select {
      width: 150px;
      padding: 5px;
    }
  }
  div:nth-child(2) {
    width: 100%;
    word-wrap: wrap;
  }
`;
const SaveVideo = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  height: 100px;
  font-weight: 600;
  font-size: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 60%;
`;
const SaveVideoButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #120b48;
  color: white;
  border-radius: 8px;
`;
const CreateAccount = styled.p`
  color: gray;
  font-weight: 600;

  span {
    color: #120b48;
    text-decoration: underline 2px;
  }
`;

const Footer = styled.div`
  background-color: #120b48;
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 30px;
`;
const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    font-family: "Sora", sans-serif;
  }
`;
const FooterContents = styled.div`
  display: flex;
  color: #fff;
  gap: 40%;
  justify-content: center;
  align-items: flex-start;
`;
const Content = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  gap: 10px;
  span {
    font-weight: 600;
  }
`;

export default VideoPage;
