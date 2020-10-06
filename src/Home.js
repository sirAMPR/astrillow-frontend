import React from "react";
import { Menu } from "./compnents";
import image from "./images/133303main_image_feature_406_ys_full.jpg";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <Menu />
    </div>
  );
}
