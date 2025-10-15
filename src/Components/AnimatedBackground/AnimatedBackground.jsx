import React from "react";
import "./AnimatedBackground.css";

function AnimatedBackground() {
  const balls = Array.from({ length: 40 }); // 🔥 40 petites boules

  return (
    <div className="animated-bg">
      {balls.map((_, i) => (
        <div
          key={i}
          className="ball"
          style={{
            width: `${Math.random() * 15 + 5}px`, // entre 5 et 20px
            height: `${Math.random() * 15 + 5}px`,
            backgroundColor: getRandomColor(),
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

// 🎨 Génère des couleurs aléatoires pastel
function getRandomColor() {
  const colors = [
    "#ff6ec7",
    "#7efff5",
    "#ffb8b8",
    "#c77dff",
    "#7b2cbf",
    "#a5f3fc",
    "#f9a8d4",
    "#fcd34d",
    "#93c5fd",
    "#bbf7d0",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default AnimatedBackground;
