import React from "react";
import "./home.scss";

import Demo from "./heart_icon";

const LapItem = (props: any) => {
  const { item } = props;
  return (
    <>
      <div className="flex_list">
        <div className="product_list1">
          <div className="flex_box">
            <div>
              <img className="asset_pic" src="./assets/asset1.png" alt="" />
              <p className="text_in_asset">{item.text_in_asset}</p>
            </div>
            <div className="install_box">
              <p className="text_in_install">Trả góp 0%</p>
            </div>
          </div>
          <a href={item.href}>
            <img className="product_img_1" src={item.img} alt=""></img>
          </a>
          <p className="product_deltail">{item.name}</p>
          <div className="product_price">
            <p className="product_old_price">{item.old}</p>
            <p className="product_price_sale">{item.price}</p>
          </div>
          <div className="heart_icon">
            <Demo />
          </div>
        </div>
      </div>
    </>
  );
};

export default LapItem;
