"use client";

import { useEffect, useState } from "react";

export default function CircuitBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pt-[10vh] circuit-background">
      <svg
        className="circuit-svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* =====================================================
            DEFINITIONS
        ====================================================== */}

        <defs>
          {/* Cyan glow */}
          <filter
            id="cyanGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Strong cyan glow for moving particles */}
          <filter
            id="strongCyanGlow"
            x="-300%"
            y="-300%"
            width="600%"
            height="600%"
          >
            <feGaussianBlur
              stdDeviation="7"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Purple glow */}
          <filter
            id="purpleGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Very subtle background glow */}
          <radialGradient id="backgroundGlow">
            <stop
              offset="0%"
              stopColor="#0066ff"
              stopOpacity="0.10"
            />

            <stop
              offset="45%"
              stopColor="#4710a0"
              stopOpacity="0.05"
            />

            <stop
              offset="100%"
              stopColor="#000000"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <rect
          width="1600"
          height="900"
          fill="#010614"
        />

        <rect
          width="1600"
          height="900"
          fill="url(#grid)"
        />

        <ellipse
          cx="800"
          cy="430"
          rx="700"
          ry="500"
          fill="url(#backgroundGlow)"
        />

        {/* =====================================================
            BACKGROUND CIRCUITS
        ====================================================== */}

        {/* =====================================================
            NODES
        ====================================================== */}

        <g>
          {/* Cyan nodes */}

          <circle
            className="node node-cyan"
            cx="330"
            cy="85"
            r="3"
          />

          <circle
            className="node node-cyan"
            cx="700"
            cy="120"
            r="3"
          />

          <circle
            className="node node-cyan"
            cx="390"
            cy="245"
            r="3"
          />

          <circle
            className="node node-cyan"
            cx="390"
            cy="670"
            r="3"
          />

          <circle
            className="node node-cyan"
            cx="470"
            cy="650"
            r="3"
          />

          <circle
            className="node node-cyan"
            cx="1230"
            cy="680"
            r="3"
          />

          <circle
            className="node node-cyan"
            cx="1100"
            cy="760"
            r="3"
          />

          {/* Purple nodes */}

          <circle
            className="node node-purple"
            cx="1160"
            cy="280"
            r="3"
          />

          <circle
            className="node node-purple"
            cx="1100"
            cy="700"
            r="3"
          />

          <circle
            className="node node-purple"
            cx="1270"
            cy="700"
            r="3"
          />
        </g>

        {/* =====================================================
            ANIMATED DATA PACKETS
        ====================================================== */}

        {/* Packet 1 */}
        <circle
          r="4"
          className="data-packet"
          filter="url(#strongCyanGlow)"
        >
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M0 155 H150 V85 H330"
          />
        </circle>

        {/* Packet 2 */}
        <circle
          r="4"
          className="data-packet"
          filter="url(#strongCyanGlow)"
        >
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M520 0 V75 H700 V120 H910"
          />
        </circle>

        {/* Packet 3 */}
        <circle
          r="4"
          className="data-packet purple-packet"
          filter="url(#purpleGlow)"
        >
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M1600 130 H1450 V210 H1270 V280 H1160"
          />
        </circle>

        {/* Packet 4 */}
        <circle
          r="4"
          className="data-packet"
          filter="url(#strongCyanGlow)"
        >
          <animateMotion
            dur="5.5s"
            repeatCount="indefinite"
            path="M0 530 H190 V610 H390 V670 H520"
          />
        </circle>

        {/* Packet 5 */}
        <circle
          r="4"
          className="data-packet"
          filter="url(#strongCyanGlow)"
        >
          <animateMotion
            dur="6.5s"
            repeatCount="indefinite"
            path="M1600 810 H1480 V740 H1370 V680 H1230"
          />
        </circle>

        {/* Packet 6 */}
        <circle
          r="4"
          className="data-packet purple-packet"
          filter="url(#purpleGlow)"
        >
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M1600 560 H1450 V620 H1270 V700 H1100"
          />
        </circle>
      </svg>
    </div>
  );
}