"use client";

interface AddOnsProps {
  isYearly: boolean;
}

const AddOns = ({ isYearly }: AddOnsProps) => {
  const addOnsRates = [
    {
      plan: "Online service",
      description: "Access to multiplayer games",
      rate: isYearly ? "$10/yr" : "$1/mo",
    },
    {
      plan: "Larger storage",
      description: "Extra 1TB of cloud save",
      rate: isYearly ? "$20/yr" : "$2/mo",
    },
    {
      plan: "Customizable profile",
      description: "Custom theme on your profile",
      rate: isYearly ? "$20/yr" : "$2/mo",
    },
  ];

  return (
    <div className="mx-(--sp-200) mb-[8.5rem] flex w-[21.4375rem] flex-col gap-y-(--sp-300) rounded-[0.625rem] bg-(--clr-white) px-(--sp-300) py-(--sp-400) shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)] md:m-0 md:w-full md:gap-y-(--sp-400) md:px-0 md:py-0 md:pt-[1.69rem] md:shadow-none lg:gap-y-(--sp-500)">
      <div className="flex flex-col gap-y-(--sp-100)">
        <h2 className="text-(length:--fs-24) leading-(--lh-120) font-bold text-(--clr-blue-950) md:text-(length:--fs-32)">
          Pick add-ons
        </h2>
        <p className="text-(length:--fs-16) leading-(--lh-120) text-(--clr-grey-500)">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="flex flex-col gap-y-(--sp-100) lg:gap-y-(--sp-200)">
        {addOnsRates.map((addOn) => (
          <CheckboxTile
            key={addOn.plan}
            label={addOn.plan}
            description={addOn.description}
            rate={addOn.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default AddOns;

interface CheckboxTileProps {
  label: string;
  description: string;
  rate: string;
  selected?: boolean;
}

const CheckboxTile = ({
  label,
  description,
  rate,
  selected,
}: CheckboxTileProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-x-(--sp-200) rounded-[0.5rem] border border-(--clr-purple-200) lg:items-center xl:justify-between ${
        selected
          ? "border-(--clr-purple-600) bg-(--clr-blue-50)"
          : "border-(--clr-purple-200) bg-(--clr-white)"
      } h-[3.875rem] w-full cursor-pointer p-(--sp-200) hover:border-(--clr-purple-600) hover:bg-(--clr-white) md:h-[5.0625rem] md:px-(--sp-300) md:py-(--sp-200) lg:w-full`}
    >
      <div className="flex items-center gap-x-(--sp-200) md:gap-x-(--sp-300)">
        <input
          type="checkbox"
          name={label}
          id={label}
          className="h-[1.25rem] w-[1.25rem] cursor-pointer rounded-[0.25rem] border border-(--clr-purple-200) bg-(--clr-white) checked:border-(--clr-purple-600) checked:bg-(--clr-purple-600)"
          checked={selected}
          onChange={() => {}}
        />
        <label htmlFor={label} className="flex flex-col md:gap-y-(--sp-100)">
          <span className="text-(length:--fs-14) leading-(--lh-150) font-medium text-(--clr-blue-950) md:text-(length:--fs-16) md:leading-(--lh-120)">
            {label}
          </span>
          <span className="text-(length:--fs-12) leading-(--lh-120) text-(--clr-grey-500) md:text-(length:--fs-14)">
            {description}
          </span>
        </label>
      </div>

      <span className="text-(length:--fs-12) leading-(--lh-120) text-(--clr-purple-600) md:text-(length:--fs-14)">
        {rate}
      </span>
    </div>
  );
};
