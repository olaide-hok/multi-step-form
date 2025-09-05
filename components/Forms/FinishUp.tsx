"use client";

const FinishUp = () => {
  return (
    <div className="mx-(--sp-200) mb-[8.5rem] flex w-[21.4375rem] flex-col items-center gap-y-(--sp-300) rounded-[0.625rem] bg-(--clr-white) px-(--sp-300) py-(--sp-400) shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)] md:m-0 md:w-full md:gap-y-(--sp-400) md:px-0 md:py-0 md:pt-[1.69rem] md:shadow-none lg:gap-y-(--sp-500)">
      <div className="flex flex-col gap-y-(--sp-100)">
        <h2 className="text-(length:--fs-24) leading-(--lh-120) font-bold text-(--clr-blue-950) md:text-(length:--fs-32)">
          Finishing up
        </h2>
        <p className="text-(length:--fs-16) leading-(--lh-120) text-(--clr-grey-500)">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="flex w-full flex-col gap-y-(--sp-200) bg-(--clr-blue-50) p-(--sp-200)">
        {/* plan */}
        <div className="flex items-center justify-between border-b border-(--clr-grey-500)/20 pb-(--sp-200)">
          <div className="flex flex-col items-start">
            <span className="text-(length:--fs-14) leading-(--lh-150) font-medium text-(--clr-blue-950)">
              {`Arcade (Monthly)`}
            </span>
            <button
              type="button"
              className="text-(length:--fs-14) leading-(--lh-120) text-(--clr-grey-500)"
            >
              Change
            </button>
          </div>
          <span className="text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem] text-(--clr-blue-950)">
            $9/mo
          </span>
        </div>
        {/* line item */}
        <div className="flex items-center justify-between">
          <span className="text-(length:--fs-14) leading-(--lh-120) text-(--clr-grey-500)">
            {`Online service`}
          </span>
          <span className="text-(length:--fs-14) leading-(--lh-120) text-(--clr-blue-950)">
            +$1/mo
          </span>
        </div>
        {/* line item */}
        <div className="flex items-center justify-between">
          <span className="text-(length:--fs-14) leading-(--lh-120) text-(--clr-grey-500)">
            {`Larger storage`}
          </span>
          <span className="text-(length:--fs-14) leading-(--lh-120) text-(--clr-blue-950)">
            +$2/mo
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="flex w-full items-center justify-between px-(--sp-200)">
        <span className="text-(length:--fs-14) leading-(--lh-120) text-(--clr-grey-500)">
          {`Total (per month)`}
        </span>
        <span className="text-(length:--fs-16) leading-(--lh-120) font-bold text-(--clr-purple-600)">
          +$12/mo
        </span>
      </div>
    </div>
  );
};

export default FinishUp;
