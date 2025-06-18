"use client";
import { useEffect, useRef } from "react";

const degreeToRadian = (angle) => angle * (Math.PI / 180);

export default function CircleText({ text = "-25YEARS-EXPERIENCE" }) {
  const circleRef = useRef(null);
  const radius = 60;
  const diameter = radius * 2;

  useEffect(() => {
    const circle = circleRef.current;
    circle.innerHTML = ""; // Clear if rerendered
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;

    const characters = text.split("");
    const deltaAngle = 360 / characters.length;
    const characterOffsetAngle = 8;
    let currentAngle = -90;

    characters.forEach((char, index) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.position = "absolute";
      span.style.transformOrigin = "top left";
      const x = radius + radius * Math.cos(degreeToRadian(currentAngle));
      const y = radius + radius * Math.sin(degreeToRadian(currentAngle));
      const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
      span.style.transform = `translate(${x}px, ${y}px) ${rotate}`;
      currentAngle += deltaAngle;
      circle.appendChild(span);
    });
  }, [text]);

  return (
    <div className="">
      <div
        ref={circleRef}
        className="relative rounded-full animate-rotate-circle text-white text-[15px] font-bold "
      ></div>
    </div>
  );
}
