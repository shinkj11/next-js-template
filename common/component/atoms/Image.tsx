import React, { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import DefaultImage from "@/public/img/ic-default-product.svg";

export interface CustomImageProps extends ImageProps {
  src: string;
  width: number;
  height: number;
  fallback?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  width,
  height,
  fallback = DefaultImage,
  ...rest
}) => {
  const [ imgSrc, setImgSrc ] = useState<string>('');

  const onError = () => {
    setImgSrc(fallback);
  }

  useEffect(() => {
    setImgSrc(src);
  }, [src])

  return (
    <Image 
      src={imgSrc ? imgSrc : fallback} 
      width={width} 
      height={height}
      onError={onError}
      {...rest}
    />
  );
};

export default CustomImage;
