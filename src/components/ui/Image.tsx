import React, { FC } from "react";

interface ImageProps {
  divClassName?: string;
  src: string;
  alt: string;
}

const Image: FC<ImageProps> = ({ divClassName, src, alt }) => {
  return (
    <div className={divClassName}>
      <img className="object-cover" src={src} alt={alt} />
    </div>
  );
};

export default Image;
