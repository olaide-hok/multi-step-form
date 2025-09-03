"use client";
import { useState } from "react";

const ProgressSidebar = () => {
  const [active, setActive] = useState(1);
  const bgActive = "bg-(--clr-blue-200) text-(--clr-blue-950)";

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <section className="sidebar flex h-full py-(--sp-500) lg:w-[17.125rem] lg:flex-col lg:gap-y-(--sp-400) lg:px-(--sp-400)">
      <div className="flex items-center gap-x-(--sp-200)">
        <button
          type="button"
          className={`${
            active === 1
              ? bgActive
              : "border border-(--clr-white) text-(--clr-white)"
          } h-[2.0625rem] w-[2.0625rem] cursor-pointer rounded-full text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem]`}
          onClick={() => handleClick(1)}
        >
          1
        </button>
        <div className="flex flex-col uppercase">
          <span className="text-(length:--fs-12) leading-(--lh-120) text-(--clr-blue-300)">
            Step 1
          </span>
          <span className="text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem] text-(--clr-white)">
            Your info
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-(--sp-200)">
        <button
          type="button"
          className={`${
            active === 2
              ? bgActive
              : "border border-(--clr-white) text-(--clr-white)"
          } h-[2.0625rem] w-[2.0625rem] cursor-pointer rounded-full text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem]`}
          onClick={() => handleClick(2)}
        >
          2
        </button>
        <div className="flex flex-col uppercase">
          <span className="text-(length:--fs-12) leading-(--lh-120) text-(--clr-blue-300)">
            Step 2
          </span>
          <span className="text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem] text-(--clr-white)">
            select plan
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-(--sp-200)">
        <button
          type="button"
          className={`${
            active === 3
              ? bgActive
              : "border border-(--clr-white) text-(--clr-white)"
          } h-[2.0625rem] w-[2.0625rem] cursor-pointer rounded-full text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem]`}
          onClick={() => handleClick(3)}
        >
          3
        </button>
        <div className="flex flex-col uppercase">
          <span className="text-(length:--fs-12) leading-(--lh-120) text-(--clr-blue-300)">
            Step 3
          </span>
          <span className="text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem] text-(--clr-white)">
            Add-ons
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-(--sp-200)">
        <button
          type="button"
          className={`${
            active === 4
              ? bgActive
              : "border border-(--clr-white) text-(--clr-white)"
          } h-[2.0625rem] w-[2.0625rem] cursor-pointer rounded-full text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem]`}
          onClick={() => handleClick(4)}
        >
          4
        </button>
        <div className="flex flex-col">
          <div className="flex flex-col uppercase">
            <span className="text-(length:--fs-12) leading-(--lh-120) text-(--clr-blue-300)">
              Step 4
            </span>
            <span className="text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem] text-(--clr-white)">
              Summary
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSidebar;
