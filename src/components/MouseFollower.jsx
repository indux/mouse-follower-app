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
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          className="ml-2 w-6"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </>
  );
};

export { MouseFollower };
