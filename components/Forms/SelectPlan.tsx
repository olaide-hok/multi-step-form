"use client";

import Card from "../Card";

interface SelectPlanProps {
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  handleSelectPlan: (plan: string, rate: string) => void;
  error: string;
}

const SelectPlan = ({
  isYearly,
  setIsYearly,
  selectedPlan,
  setSelectedPlan,
  handleSelectPlan,
  error,
}: SelectPlanProps) => {
  const plans = [
    {
      plan: "arcade",
      rate: isYearly ? "$90/yr" : "$9/mo",
      bonus: isYearly ? "2 months free" : "",
    },
    {
      plan: "advanced",
      rate: isYearly ? "$120/yr" : "$12/mo",
      bonus: isYearly ? "2 months free" : "",
    },
    {
      plan: "pro",
      rate: isYearly ? "$150/yr" : "$15/mo",
      bonus: isYearly ? "2 months free" : "",
    },
  ];

  return (
    <div className="mx-(--sp-200) mb-[1.56rem] flex w-[21.4375rem] flex-col gap-y-(--sp-300) rounded-[0.625rem] bg-(--clr-white) px-(--sp-300) py-(--sp-400) shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)] md:m-0 md:w-full md:gap-y-(--sp-300) md:px-0 md:py-0 md:pt-[1.69rem] md:shadow-none lg:gap-y-(--sp-500)">
      <div className="flex flex-col gap-y-(--sp-100) md:mb-(--sp-100)">
        <h2 className="text-(length:--fs-24) leading-(--lh-120) font-bold text-(--clr-blue-950) md:text-(length:--fs-32)">
          Select your plan
        </h2>
        <p className="text-(length:--fs-16) leading-(--lh-120) text-(--clr-grey-500)">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col gap-y-(--sp-100) lg:flex-row lg:gap-x-(--sp-200) lg:gap-y-(--sp-300)">
        {plans.map((plan) => (
          <Card
            key={plan.plan}
            selected={selectedPlan === plan.plan}
            plan={plan.plan}
            rate={plan.rate}
            bonus={plan.bonus}
            onClick={() => handleSelectPlan(plan.plan, plan.rate)}
          />
        ))}
      </div>
      {error && (
        <p className="text-center text-sm text-(--clr-red-500)">{error}</p>
      )}

      <div className="flex w-full items-center justify-center rounded-[0.5rem] bg-(--clr-blue-50) py-[0.84375rem]">
        <div className="flex h-[1.3125rem] items-center gap-(--sp-300)">
          {/* Monthly label */}
          <span
            className={`cursor-pointer text-(length:--fs-14) font-medium ${
              !isYearly ? "text-(--clr-blue-950)" : "text-(--clr-grey-500)"
            }`}
            onClick={() => {
              setIsYearly(false);
              setSelectedPlan("");
            }}
          >
            Monthly
          </span>

          {/* Toggle container */}
          <div
            className="relative h-full w-[2.375rem] cursor-pointer rounded-full bg-(--clr-blue-950) transition"
            onClick={() => {
              setIsYearly(!isYearly);
              setSelectedPlan("");
            }}
          >
            {/* Knob */}
            <div
              className={`absolute top-1 left-1 h-[0.75rem] w-[0.75rem] transform rounded-full bg-(--clr-white) shadow-md transition-transform duration-300 ${
                isYearly ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </div>

          {/* Yearly label */}
          <span
            className={`cursor-pointer text-(length:--fs-14) font-medium ${
              isYearly ? "text-(--clr-blue-950)" : "text-(--clr-grey-500)"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
