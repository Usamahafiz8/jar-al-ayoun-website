import React, { useState } from "react";
import Webcam from "react-webcam";
import {
  PersonalPhotoImage,
  PersonalPhotoImageContainer,
} from "./personal-photo.styles";

const PhotoCapture = ({ initiateFaceAnalysis, resetForNewPhoto, loading }) => {
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const webcamRef = React.useRef(null);

  const captureWebcamPhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedPhoto(imageSrc);
    initiateFaceAnalysis(imageSrc); // This function should handle face analysis
  };

  const resetAndCaptureNew = () => {
    setCapturedPhoto(null);
    resetForNewPhoto();
  };

  return (
    <PersonalPhotoImageContainer>
      {capturedPhoto ? (
        <PersonalPhotoImage
          src={capturedPhoto}
          className="target-image"
          crossOrigin="anonymous"
        />
      ) : (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          mirrored={true}
          style={{
            width: "100%",
            height: "100%",
            border: "2px solid red",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      )}
      <button
        block
        style={{ maxWidth: "50%", margin: "1em auto 0" }}
        onClick={capturedPhoto ? resetAndCaptureNew : captureWebcamPhoto}
        disabled={loading}
      >
        {capturedPhoto ? "Try Another Photo" : "Capture Photo"}
      </button>
    </PersonalPhotoImageContainer>
  );
};

export default PhotoCapture;
