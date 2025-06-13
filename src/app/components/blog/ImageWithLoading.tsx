"use client";

import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

type Props = ImageProps;

export default function ImageWithLoading(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [props.src]);

  return (
    <>
      {isLoading && (
        <div
          className={`w-full h-72 bg-gray-200 animate-pulse rounded-xl shadow-lg mb-6`}
        />
      )}
      <Image
        {...props}
        onLoad={() => setIsLoading(false)}
        className={`${props.className || ""} transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </>
  );
}
