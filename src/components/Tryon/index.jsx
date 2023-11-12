import React, { useState } from "react";

function Tryon() {
  const [showTryon, setShowTryon] = useState(false);

  const handleButtonClick = () => {
    setShowTryon(true);
  };

  return (
    <div>
      {!showTryon && <button onClick={handleButtonClick}>Open Tryon 3D</button>}
      {showTryon && (
        // <Tryon3D />
        <>this will show the try on</>
      )}
    </div>
  );
}

export default Tryon;
