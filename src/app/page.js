"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [valueInput, setValueInput] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isHighLighted, setIsHighLighted] = useState(false);

  const handleClearInput = () => {
    setValueInput("");
    setIsSelected(false);
    setIsHighLighted(false);
  };

  return (
    <div
      className={`bg-[#141534] flex w-[360px] h-[60px] rounded-xl items-center font-medium ${
        isHighLighted ? "border-2 border-[#7D77FF]" : "border-none"
      }`}
    >
      <div className="px-[20px] flex-1">
        {isSelected && (
          <div className="text-[0.6rem] text-[#7D77FF] font-extralight">
            Correo electrónico
          </div>
        )}
        <input
          type="email"
          value={valueInput}
          placeholder={!isSelected ? "Escribe tu correo electrónico" : ""}
          onChange={(e) => setValueInput(e.target.value)}
          className="w-full bg-transparent border-0 outline-0 placeholder:opacity-50"
          onFocus={() => {
            setIsSelected(true);
            setIsHighLighted(true);
          }}
          onBlur={() => {
            if (valueInput === "") setIsSelected(false);
            setIsHighLighted(false);
          }}
        />
      </div>
      {isHighLighted && (
        <button
          className="mr-4"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleClearInput}
        >
          <Image src="cancel.svg" width="25" height="25" alt="cancel icon" />
        </button>
      )}
    </div>
  );
}
