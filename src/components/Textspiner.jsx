// "use client";
// import { useEffect, useRef } from "react";

// const degreeToRadian = (angle) => angle * (Math.PI / 180);

// export default function Textspinner({ text }) {
//   const wrapperRef = useRef(null);
//   const radius = 80;
//   const diameter = radius * 2;

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     wrapper.innerHTML = ""; // Clear previous content

//     const container = document.createElement("div");
//     container.className = "relative";
//     container.style.width = `${diameter}px`;
//     container.style.height = `${diameter}px`;

//     const characters = text.split("");
//     const deltaAngle = 360 / characters.length;
//     const characterOffsetAngle = 8;
//     let currentAngle = -90;

//     characters.forEach((character, index) => {
//       const span = document.createElement("span");
//       span.innerText = character;
//       span.className = "absolute origin-top-left";
//       const xPos = radius + radius * Math.cos(degreeToRadian(currentAngle));
//       const yPos = radius + radius * Math.sin(degreeToRadian(currentAngle));
//       const rotate = (index * deltaAngle) + characterOffsetAngle;

//       span.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${rotate}deg)`;

//       currentAngle += deltaAngle;
//       container.appendChild(span);
//     });

//     wrapper.appendChild(container);
//   }, [text]);

//   return (
//     <div
//       ref={wrapperRef}
//       className="p-4 rounded-full animate-spin-slow spin"
//       style={{
//         width: `${radius * 2 + 32}px`,
//         height: `${radius * 2 + 32}px`,
//       }}
//     ></div>
//   );
// }

import { useEffect, useRef } from "react";

const degreeToRadian = (angle) => angle * (Math.PI / 180);

const SpinningText = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const radius = 80; // radius of the circle
    const diameter = radius * 2;
    const circle = circleRef.current;
    if (!circle) return;

    const text = "SEE MORE SEE MORE "; // text with non-breaking space
    const characters = text.split("");
    const deltaAngle = 360 / characters.length;
    let currentAngle = -90;

    // Set size
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.innerHTML = ""; // Clear previous content

    // Create each letter span
    characters.forEach((char, index) => {
      const span = document.createElement("span");
      span.innerText = char;

      const x = radius + radius * Math.cos(degreeToRadian(currentAngle));
      const y = radius + radius * Math.sin(degreeToRadian(currentAngle));

      span.style.position = "absolute";
      span.style.left = `${x}px`;
      span.style.top = `${y}px`;
      span.style.transform = `rotate(${currentAngle + 90}deg)`;
      span.style.transformOrigin = "center";
      span.style.whiteSpace = "pre";

      circle.appendChild(span);
      currentAngle += deltaAngle;
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div
        ref={circleRef}
        className="relative animate-spin-slow text-white font-bold"
      ></div>
    </div>
  );
};

export default SpinningText;


