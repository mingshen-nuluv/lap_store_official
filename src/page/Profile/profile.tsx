import React from "react";
import "../Profile/profile.scss";
import Tab from "./tabs";
function Profile() {
  return (
    <>
      <section className="banner">
        <div className="banner_list">
          <img className="banner1" src="./assets/banner.jpg" alt=""></img>
          <img className="banner1" src="./assets/banner2.jpg" alt=""></img>
          <img className="banner1" src="./assets/banner3.jpg" alt=""></img>
        </div>
      </section>

      <section className="frofile_box">
        <Tab />
      </section>
    </>
  );
}

export default Profile;
