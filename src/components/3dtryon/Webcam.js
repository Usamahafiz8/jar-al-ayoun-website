import React, { Fragment, useRef } from "react";
import Webcam from "react-webcam";

const CameraCapture = ({ setPersonalPhoto, presetPhotos }) => {
  const webcamRef = useRef(null);

  const captureWebcamPhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPersonalPhoto(imageSrc);
  };

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          position: "relative",
          // backgroundColor: "black",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          mirrored={true}
          style={{
            width: "300px",
            height: "400px",
            border: "2px solid red",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <button onClick={captureWebcamPhoto}>Capture Photo</button>
      </div>
    </Fragment>
  );
};

export default CameraCapture;
