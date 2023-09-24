// Drawer.js

import React from "react";

const Drawer = ({ isOpen, onClose, children }) => {
  const drawerStyles = {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    width: "300px", // Set the desired width of your drawer
    height: "100%",
    position: "fixed",
    top: 0,
    left: isOpen ? "0" : "-300px", // If isOpen is true, the drawer is visible; otherwise, it's off-screen
    backgroundColor: "#fff", // Set the background color of the drawer
    boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.2)",
    transition: "left 0.3s ease-in-out", // Add a transition for smooth opening/closing
    zIndex: 1000,
  };

  const overlayStyles = {
    display: isOpen ? "block" : "none", // Show the overlay when the drawer is open
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent background overlay
    zIndex: 999, // Ensure the overlay is above the content
  };

  return (
    <>
      <div style={overlayStyles} onClick={onClose}></div>
      <div style={drawerStyles}>
        {/* <button onClick={onClose}>Close</button> */}
        {children}
      </div>
    </>
  );
};

export default Drawer;
