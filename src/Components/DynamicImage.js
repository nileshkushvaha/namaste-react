import React from 'react';

const DynamicImage = ({ src, alt, width, height, className }) => {
  const imageProps = {
    className,
    alt,
    src,
    ...(width && { width }),
    ...(height && { height }),
  };

  return <img {...imageProps} />;
};

export default DynamicImage;
