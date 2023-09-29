// ScreenRecordingComponent.js
import React, { useState, useRef } from "react";

const ScreenRecordingComponent = () => {
  const [recording, setRecording] = useState(false);
  const mediaRecorder = useRef(null);
  const screenStream = useRef(null);
  const screenChunks = useRef([]);
  const [screenUrl, setScreenUrl] = useState(null);

  const startRecording = async () => {
    try {
      // Request access to screen capture
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio:true
      });
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
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && recording) {
      mediaRecorder.current.stop();
      screenStream.current.getTracks().forEach((track) => track.stop());
      setRecording(false);
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={recording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!recording}>
        Stop Recording
      </button>
      {screenUrl && <>{<a href={screenUrl} target="_blank" rel="noopener noreferrer">{screenUrl}</a>}</>}
    </div>
  );
};

export default ScreenRecordingComponent;
