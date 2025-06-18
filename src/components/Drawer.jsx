"use client";

import { useRef } from "react";

export default function Drawer() {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const startDragging = (event) => {
    isDragging.current = true;
    startX.current = event.pageX || event.touches[0].pageX;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const onDrag = (event) => {
    if (!isDragging.current) return;
    event.preventDefault();
    const x = event.pageX || event.touches[0].pageX;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className=" border border-gray-200">
      {/* Draggable Scrollable Text Ring */}
      <div
        ref={sliderRef}
        className="mt-10 overflow-x-auto whitespace-nowrap w-[85%] mx-auto cursor-grab active:cursor-grabbing scroll-smooth scrollbar-hide px-2"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDrag}
        onTouchStart={startDragging}
        onTouchEnd={stopDragging}
        onTouchMove={onDrag}
      >
        <div className="inline-flex gap-10  text-sm font-medium">
          <img src="./logo1.png" className="w-[150px] h-[150px] object-contain" alt="" />
          <img src="./logo2.png" className="w-[150px] h-[150px] object-contain" alt="" />
          <img src="./logo3.png" className="w-[150px] h-[150px] object-contain" alt="" />
          <img src="./logo4.png" className="w-[150px] h-[150px] object-contain" alt="" />
          <img src="./logo1.png" className="w-[150px] h-[150px] object-contain" alt="" />
          <img src="./logo2.png" className="w-[150px] h-[150px] object-contain" alt="" />
          <img src="./logo3.png" className="w-[150px] h-[150px] object-contain" alt="" />
          <img src="./logo4.png" className="w-[150px] h-[150px] object-contain" alt="" />
          </div>
       
      </div>
         
            
         
    </div>
  );
}
