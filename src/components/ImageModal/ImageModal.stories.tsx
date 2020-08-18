import React from "react";
import ImageModal from "./ImageModal";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../index.css";

export default { title: "Image Modal" };

export const normal = () => (
  <ImageModal
    label="Example..."
    imageLink="https://wiki.guildwars2.com/images/d/d1/Mini_Gorseval_the_Multifarious.png"
    alt="gorseval"
  />
);
