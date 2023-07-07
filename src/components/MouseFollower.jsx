import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
      document.body.classList.toggle("no-cursor", enabled);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  const ToggleBottom = () => {
    setEnabled(!enabled);
  };

  return (
    <>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="absolute bg-transparent border rounded-full pointer-events-none left-[-20px] top-[-20px] w-[50px] h-[50px]"
      ></div>
      <button
        onClick={ToggleBottom}
        className="flex w-full px-4 items-center justify-center rounded-2xl border-b-4 border-b-[#cdcdcd] bg-[#ffffff] py-4 text-sm font-bold tracking-wider text-[#00160f] transition duration-150 ease-in-out active:translate-y-1 active:border-b-transparent"
      >
        {enabled ? "DESACTIVAR" : "ACTIVAR"} SEGUIR PUNTERO
        <svg
          className="ml-1 w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
          />
        </svg>
      </button>
    </>
  );
};

export { MouseFollower };
