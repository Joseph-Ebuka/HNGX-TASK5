import React, { useState, useRef } from 'react';

const VideoRecordingComponent = () => {
  // State to track whether recording is in progress
  const [recording, setRecording] = useState(false);
  const  [videoUrl, setVideoUrl] = useState(null)
  // Ref to store the MediaRecorder instance and recorded video chunks
  const mediaRecorder = useRef(null);
  const videoChunks = useRef([]);

  // Function to start video recording
  const startRecording = async () => {
    try {
      // Request access to the user's camera for video capture
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      // Create a new MediaRecorder instance with the camera stream
      mediaRecorder.current = new MediaRecorder(stream);

      // Event handler when data becomes available (chunks of video)
      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          // Store video data chunks
          videoChunks.current.push(event.data);
        }
      };

      // Event handler when recording stops
      mediaRecorder.current.onstop = () => {
        // Create a Blob from the recorded video chunks
        const videoBlob = new Blob(videoChunks.current, { type: 'video/webm' });
        
        // Create a URL for the recorded video Blob
        const Url = URL.createObjectURL(videoBlob);


       setVideoUrl(Url)
        // You can use videoUrl to play or share the recording
      };
      
      // Start the recording
      mediaRecorder.current.start();
      
      // Update the state to indicate recording is in progress
      setRecording(true);
    } catch (error) {
      console.error('Error starting video recording:', error);
    }
  };

  // Function to stop video recording
  const stopRecording = () => {
    if (mediaRecorder.current && recording) {
      // Stop the MediaRecorder
      mediaRecorder.current.stop();
      
      // Update the state to indicate recording has stopped
      setRecording(false);
      
    }
  };

  return (
    <div>
      {/* Button to start recording */}
      <button onClick={startRecording} disabled={recording}>Start Recording</button>
      
      {/* Button to stop recording */}
      <button onClick={stopRecording} disabled={!recording}>Stop Recording</button>

      {videoUrl && (
        <>
        play the video
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">play the video</a>
        </>
      )}
    </div>
  );
};

export default VideoRecordingComponent;
