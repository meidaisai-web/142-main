"use client"

import Image from "next/image";

type PhotoframeProps = {
  leftName?: string;
  leftImagePath?: string;
  rightName?: string;
  rightImagePath?: string;
  leftSelected?: boolean;
  rightSelected?: boolean;
  onLeftClick?: () => void;
  onRightClick?: () => void;
};

const Photoframe = ({
  leftName = "",
  leftImagePath,
  rightName = "",
  rightImagePath,
  leftSelected = false,
  rightSelected = false,
  onLeftClick,
  onRightClick
}: PhotoframeProps) => {
  return (
    <div className="flex w-full mx-auto">
      {/* Leftボタン */}
      <button
        type="button"
        className={`w-full aspect-3/2 relative overflow-hidden bg-secondary translate-x-[6%] transition-transform duration-200 ${leftSelected ? 'scale-115 border-8 border-secondary shadow-2xl shadow-black' : 'scale-100'}`}
        style={{
          clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0 100%)',
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Left button clicked');
          onLeftClick?.();
        }}
      >
        {leftImagePath && (
          <div
            className="absolute inset-0 -z-10"
            style={{
              clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0 100%)'
            }}
          >
            <Image
              src={leftImagePath}
              alt={leftName}
              fill
              className="object-cover object-right-top"
            />
          </div>
        )}
      </button>

      {/* Rightボタン */}
      <button
        type="button"
        className={`w-full aspect3/2 relative overflow-hidden -translate-x-[6%] bg-secondary transition-transform duration-200 ${rightSelected ? 'scale-115 border-8 border-secondary shadow-2xl shadow-black' : 'scale-100'}`}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)',
          pointerEvents: 'auto'
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Right button clicked');
          onRightClick?.();
        }}
      >
        {rightImagePath && (
          <div
            className="absolute inset-0 -z-10"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)'
            }}
          >
            <Image
              src={rightImagePath}
              alt={rightName}
              fill
              className="object-cover object-right-top"
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default Photoframe;
