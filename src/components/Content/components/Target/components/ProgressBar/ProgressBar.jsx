import React, { useEffect, useRef } from 'react';

const ArcProgressBar = ({ progress, strokeWidth, children }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const progressBar = svg.querySelector('.progress-bar');
    const radius = 90;
    const circumference = Math.PI * radius;
    const offset = circumference * (1 - progress / 100);
    progressBar.style.strokeDashoffset = offset;
    progressBar.style.strokeDasharray = circumference;
  }, [progress]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 200 110"
      style={{ display: 'block' }}
      className="progress-circle"
    >
      {/* Define the gradient */}
      <defs>
        <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22CAAD" />
          <stop offset="100%" stopColor="#2BB2FE" />
        </linearGradient>
      </defs>

      {/* Background semi-circle */}
      <path
        d="M 10 100 A 90 90 0 0 1 190 100"
        stroke="#F0F1F3"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      {/* Progress bar semi-circle */}
      <path
        className="progress-bar"
        d="M 10 100 A 90 90 0 0 1 190 100"
        stroke="url(#progress-gradient)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      {/* Children for custom text or content inside the arc */}
      <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle">
        {children}
      </text>
    </svg>
  );
};

export default ArcProgressBar;
