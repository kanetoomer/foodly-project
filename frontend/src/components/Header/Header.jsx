import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="header">
        <div className="header-contents">
          <h2>Order your favorite dishes from Foodly</h2>
          {/* <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted by our world renowned chefs using only the finest
            ingredients! Our mission is to provide an elevated takeout dining
            experience, one exquisite dish at a time!
          </p> */}
          <button>View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
