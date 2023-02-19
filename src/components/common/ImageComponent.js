import React from "react";
import { addDefaultSrc } from "../../Utils/commonValue";

const ImageComponent = (props) => {
  const { onClick: onClick, src } = props;
  return <image onError={addDefaultSrc} {...props} />;
};

export default ImageComponent;
