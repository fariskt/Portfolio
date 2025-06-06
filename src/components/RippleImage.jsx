import React, { useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  pointer-events: none; /* disables pointer inside this layer */
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  /* Allow pointer events for hover/move only */
  pointer-events: auto;
  background: transparent;
`;

const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(61, 94, 106, 0.3);
  pointer-events: none; /* ripple itself never blocks pointer */
  transition: transform 0.7s ease-out, opacity 0.7s ease-out;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
  transform: ${(props) =>
    props.hovered
      ? "translate(-50%, -50%) scale(3)"
      : "translate(-50%, -50%) scale(0)"};
  opacity: ${(props) => (props.hovered ? 1 : 0)};
`;


export default function RippleImage() {
  const [ripplePos, setRipplePos] = useState({ x: "50%", y: "50%" });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);

  const rippleSize = 20;

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x = Math.min(Math.max(rippleSize / 2, x), rect.width - rippleSize / 2);
    y = Math.min(Math.max(rippleSize / 2, y), rect.height - rippleSize / 2);

    setRipplePos({ x: `${x}px`, y: `${y}px` });
  };

  return (
   <Container ref={containerRef}>
  <Overlay
    onMouseMove={handleMouseMove}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  />
  <Ripple
    size={rippleSize}
    x={ripplePos.x}
    y={ripplePos.y}
    hovered={hovered}
  />
</Container>

  );
}
