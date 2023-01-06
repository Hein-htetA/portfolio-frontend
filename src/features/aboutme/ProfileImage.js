import React from "react";
import photo from "../../assets/profile.jpg";

const ProfileImage = () => {
  return (
    <div className="relative max-w-xs mx-auto rounded-lg -right-4 -bottom-4 border-2 border-bright-blue">
      <img
        src={photo}
        alt="profile"
        className="relative right-4 bottom-4 rounded-lg"
      />
    </div>
  );
};

export default ProfileImage;
