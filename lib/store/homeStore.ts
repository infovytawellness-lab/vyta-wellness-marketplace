import { proxy } from "valtio";

import reactImg from "../../images/react.png";
import reactThumbImg from "../../images/react_thumb.png";
import threeImg from "../../images/three2.png";
import threeThumbImg from "../../images/three2_thumb.png";
import pmndrsImg from "../../images/pmndrs.png";
import pmndrsThumbImg from "../../images/pmndrs_thumb.png";

const state = proxy({
    intro: true,
    colors: ["#ccc", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934"],
    decals: [
      { full: reactImg, thumb: reactThumbImg },
      { full: threeImg, thumb: threeThumbImg },
      { full: pmndrsImg, thumb: pmndrsThumbImg },
    ],
    color: "#EFBD4E",
    decal: threeImg,
  });

  export { state };