"use client";

interface Steps {
  id: number;
  name: string;
}

interface ProgressSidebarProps {
  steps: Steps[];
  currentStep: number;
}

const ProgressSidebar = ({ steps, currentStep }: ProgressSidebarProps) => {
  const bgActive = "bg-(--clr-blue-200) text-(--clr-blue-950)";

  return (
    <section className="sidebar flex w-full flex-row items-start justify-center gap-x-(--sp-200) pt-(--sp-400) md:h-full md:flex-col md:justify-normal md:gap-y-(--sp-400) md:rounded-[0.625rem] md:px-[1.69rem] md:py-(--sp-500) lg:w-[17.125rem] lg:flex-col lg:px-(--sp-400)">
      {steps.map((step) => (
        <div key={step.id} className="flex items-center gap-x-(--sp-200)">
          <button
            type="button"
            className={`${
              currentStep + 1 === step.id
                ? bgActive
                : "border border-(--clr-white) text-(--clr-white)"
            } h-[2.0625rem] w-[2.0625rem] rounded-full text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem]`}
          >
            {step.id}
          </button>
          <div className="hidden flex-col uppercase md:flex">
            <span className="text-(length:--fs-12) leading-(--lh-120) text-(--clr-blue-300)">
              Step {step.id}
            </span>
            <span className="text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem] text-(--clr-white)">
              {step.name}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProgressSidebar;
