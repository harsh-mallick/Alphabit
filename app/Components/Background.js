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

          {/* Grid pattern */}
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#0b6b91"
              strokeWidth="1"
              opacity="0.08"
            />
          </pattern>
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

        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >

          {/* Top-left */}
          <path
            className="circuit circuit-dim"
            d="M0 155 H150 V85 H330"
          />

          {/* Top-center */}
          <path
            className="circuit"
            d="M520 0 V75 H700 V120 H910"
          />

          {/* Top-right */}
          <path
            className="circuit circuit-purple"
            d="M1600 130 H1450 V210 H1270 V280 H1160"
          />

          {/* Left-center */}
          <path
            className="circuit circuit-dim"
            d="M0 380 H120 V300 H300 V245 H390"
          />

          {/* Left-middle */}
          <path
            className="circuit"
            d="M0 530 H190 V610 H390 V670 H520"
          />

          {/* Right-center */}
          <path
            className="circuit circuit-dim"
            d="M1600 390 H1480 V320 H1370 V270"
          />

          {/* Right-middle */}
          <path
            className="circuit circuit-purple"
            d="M1600 560 H1450 V620 H1270 V700 H1100"
          />

          {/* Bottom-left */}
          <path
            className="circuit"
            d="M0 790 H160 V720 H330 V650 H470"
          />

          {/* Bottom-center */}
          <path
            className="circuit circuit-dim"
            d="M650 900 V790 H760 V720 H920 V650"
          />

          {/* Bottom-right */}
          <path
            className="circuit"
            d="M1600 810 H1480 V740 H1370 V680 H1230"
          />

          {/* Central-left branch */}
          <path
            className="circuit circuit-dim"
            d="M280 900 V820 H400 V760 H580"
          />

          {/* Central-right branch */}
          <path
            className="circuit"
            d="M1000 900 V820 H1100 V760 H1280"
          />

          {/* Small top-left branch */}
          <path
            className="circuit circuit-dim"
            d="M270 0 V60 H420"
          />

          {/* Small top-right branch */}
          <path
            className="circuit"
            d="M1330 0 V90 H1430"
          />

        </g>

        {/* =====================================================
            SMALL SECONDARY CIRCUITS
        ====================================================== */}

        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            className="circuit circuit-small"
            d="M80 230 H180 V190 H260"
          />

          <path
            className="circuit circuit-small"
            d="M1510 450 H1420 V490 H1330"
          />

          <path
            className="circuit circuit-small"
            d="M560 820 H630 V780 H700"
          />

          <path
            className="circuit circuit-small"
            d="M900 100 H980 V150 H1060"
          />

          <path
            className="circuit circuit-small"
            d="M350 350 H430 V310 H500"
          />
        </g>

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