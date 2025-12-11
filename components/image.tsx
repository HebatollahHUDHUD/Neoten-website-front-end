"use client";

import { XIcon } from "lucide-react";
import NextImage, { ImageProps } from "next/image";
import { useState } from "react";

type CustomImageProps = Omit<ImageProps, "src" | "alt"> & {
  src?: string;
  alt?: string;
  hasPreview?: boolean;
};

const Image = ({ src, hasPreview, alt, ...props }: CustomImageProps) => {
  const [isView, setIsView] = useState(false);
  const validSrc = src && /^https?:\/\//.test(src) ? src : null;
  return (
    <>
      <NextImage
        {...props}
        src={validSrc ?? "/images/placeholder.png"}
        alt={alt ?? "image"}
        onClick={() => {
          if (hasPreview) {
            setIsView(true);
          }
        }}
        onError={(e) => {
          e.preventDefault();
          (e.currentTarget as HTMLImageElement).src = "/images/placeholder.png";
        }}
      />

      {isView && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
          onClick={() => setIsView(false)}
        >
          <div
            className="bg-white py-8 px-4 flex-1 max-w-xl flex flex-col justify-center items-center gap-5 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsView(false)}
              className="absolute top-3 right-3 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <XIcon size={20} />
            </button>
            <NextImage
              src={src ?? "/images/placeholder.png"}
              alt={alt ?? "image"}
              width={1000}
              height={1000}
              unoptimized
              className="w-full h-auto object-contain my-5"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
