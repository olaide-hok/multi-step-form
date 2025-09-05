"use client";

import Image from "next/image";

interface CardProps {
  selected?: boolean;
  plan: string;
  rate: string;
}

const Card = ({ selected, plan, rate }: CardProps) => {
  return (
    <div
      className={`flex items-center gap-x-(--sp-200) rounded-[0.5rem] border border-(--clr-purple-200) lg:flex-col lg:items-start lg:justify-between ${
        selected
          ? "border-(--clr-purple-600) bg-(--clr-blue-50)"
          : "border-(--clr-purple-200) bg-(--clr-white)"
      } h-[5rem] w-full cursor-pointer p-(--sp-200) hover:border-(--clr-purple-600) hover:bg-(--clr-white) lg:h-[10rem] lg:w-[8.625rem]`}
    >
      {/* Icon */}
      <Image
        src={`/images/icon-${plan}.svg`}
        alt="Arcade"
        width={40}
        height={40}
      />
      {/* Content */}
      <div>
        <p className="text-(length:--fs-16) leading-(--lh-120) font-medium text-(--clr-blue-950) capitalize">
          {plan}
        </p>
        <span className="text-(length:--fs-14) leading-(--lh-120) text-(--clr-grey-500)">
          {rate}
        </span>
      </div>
    </div>
  );
};

export default Card;
