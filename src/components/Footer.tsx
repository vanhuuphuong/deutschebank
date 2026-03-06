import React, { useState } from "react";

interface FooterProps {
  changeState: (state: boolean) => void;
  handleZoomChange?: (scale: number) => void;
}

const Footer: React.FC<FooterProps> = ({ changeState, handleZoomChange }) => {
  const [zoomScale, setZoomScale] = useState(1);
  const [showZoomPanel, setShowZoomPanel] = useState(false);

  const localHandleZoomChange = (scale: number) => {
    setZoomScale(scale);
    // document.body.style.transform = `scale(${scale})`;
    // document.body.style.transformOrigin = "center center";
    // document.body.style.transition = "transform 0.3s ease";
    if (handleZoomChange) {
      handleZoomChange(scale);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#f5f7fa",
        borderTop: "1px solid #ccc",
        fontSize: 14,
        color: "#254046",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => changeState(true)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 16,
            color: "#254046",
          }}
          aria-label="Table of contents"
        >
          ☰
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 16,
            color: "#254046",
          }}
          aria-label="Share"
        >
          🔗
        </button>
        <button
          onClick={() => setShowZoomPanel((prev) => !prev)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 16,
            color: "#254046",
          }}
          aria-label="Zoom"
        >
          🔍
        </button>
        <button
          onClick={handleFullscreen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 16,
            color: "#254046",
          }}
          aria-label="Fullscreen"
        >
          ⛶
        </button>
        <button
          onClick={handlePrint}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 16,
            color: "#254046",
          }}
          aria-label="Print"
        >
          🖨️
        </button>
      </div>
      {showZoomPanel && (
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#d1d5db",
            padding: "10px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() => localHandleZoomChange(Math.max(zoomScale - 0.1, 0.5))}
            style={{
              background: "none",
              border: "1px solid #254046",
              borderRadius: "4px",
              padding: "5px",
              cursor: "pointer",
              fontSize: 16,
              color: "#254046",
            }}
          >
            -
          </button>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={zoomScale}
            onChange={(e) => localHandleZoomChange(Number(e.target.value))}
            style={{ flex: 1 }}
          />
          <button
            onClick={() => localHandleZoomChange(Math.min(zoomScale + 0.1, 2))}
            style={{
              background: "none",
              border: "1px solid #254046",
              borderRadius: "4px",
              padding: "5px",
              cursor: "pointer",
              fontSize: 16,
              color: "#254046",
            }}
          >
            +
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
