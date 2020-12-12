import React from "react";
import Profile from "../assets/images/rsz_profile.jpg";
import "../styles/Image.css";

// Component for content
function Image() {
    return (
        <img src={Profile} alt="Profile" />
    );
}

export default Image;