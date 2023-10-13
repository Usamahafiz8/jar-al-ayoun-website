// components/Popup.js
import { useState } from "react";
import PhotoCapture from "./CamptureImage";
import CameraCapture from "./Webcam";

export default function Tryon({}) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>3D TRY ON</button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span onClick={closePopup} className="close-button">
              &times;
            </span>
            <CameraCapture />
            <PhotoCapture />
          </div>
        </div>
      )}

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup-content {
          background: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
