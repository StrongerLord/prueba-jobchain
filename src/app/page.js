"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [valueInput, setValueInput] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [isHighLighted, setIsHighLighted] = useState(false);

  return (
    <div
      className={`bg-[#141534] flex w-[360px] h-[60px] rounded-xl items-center font-medium ${
        isHighLighted ? "border-2 border-[#7D77FF]" : "border-none"
      }`}
    >
      <div className="px-[20px]">
        {isSelected && (
          <div className="text-[0.6rem] text-[#7D77FF] font-extralight">
            Correo electrónico
          </div>
        )}
        <input
          value={valueInput}
          placeholder="Escribe tu correo electrónico"
          onChange={(e) => setValueInput(e.target.value)}
          className={`w-[280px] border-0 outline-0`}
          onFocus={() => {
            setIsSelected(true);
            setIsHighLighted(true);
          }}
          onBlur={() =>
            valueInput === "" ? setIsSelected(false) : setIsHighLighted(false)
          }
        />
      </div>
      {isHighLighted && (
        <button
          onClick={() => {
            setValueInput("");
            setIsSelected(false);
          }}
        >
          <Image src="cancel.svg" width="25" height="25" alt="cancel icon" />
        </button>
      )}
    </div>
  );
}
