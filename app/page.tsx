"use client";

import { useState } from "react";
import Button from "@/components/Button";
import AddOns from "@/components/Forms/AddOns";
import FinishUp from "@/components/Forms/FinishUp";
import PersonalInfo from "@/components/Forms/PersonalInfo";
import SelectPlan from "@/components/Forms/SelectPlan";
import ProgressSidebar from "@/components/Progress-Sidebar";

const steps = [
  {
    id: 1,
    name: "Your Info",
    component: <PersonalInfo />,
  },
  {
    id: 2,
    name: "Select Plan",
    component: <SelectPlan />,
  },
  {
    id: 3,
    name: "Add-ons",
    component: <AddOns />,
  },
  {
    id: 4,
    name: "Summary",
    component: <FinishUp />,
  },
];

export default function Home() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep === steps.length - 1) return;
    setPreviousStep(currentStep);
    setCurrentStep((step) => step + 1);
  };

  const prevStep = () => {
    if (currentStep === 0) return;
    setPreviousStep(currentStep);
    setCurrentStep((step) => step - 1);
  };

  return (
    <div className="flex w-full flex-col justify-between md:h-[37.5rem] md:w-[42.875rem] md:justify-items-center md:rounded-[0.9375rem] md:bg-(--clr-white) md:p-(--sp-200) md:shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)] lg:w-[58.75rem]">
      <div className="relative flex w-full flex-col md:flex-row md:items-start md:pb-(--sp-200)">
        <ProgressSidebar steps={steps} currentStep={currentStep} />
        <div className="absolute top-[6.03rem] flex h-full flex-col justify-between md:relative md:top-0 md:ml-[3.63rem] md:w-[21.75rem] md:p-0 lg:ml-[6.25rem] lg:w-[28.125rem] lg:pb-(--sp-400)">
          {steps[currentStep].component}

          {/* Go Back/Next Footer */}
          <div className="flex justify-between bg-(--clr-white) p-(--sp-200) md:p-0">
            <div>
              {currentStep > 0 && (
                <Button
                  variant="tertiary"
                  name="Go Back"
                  className="text-(length:--fs-14)"
                  onClick={prevStep}
                />
              )}
            </div>

            <Button
              variant="primary"
              name="Next Step"
              className="px-(--sp-200) py-[0.59375rem] text-(length:--fs-14)"
              onClick={nextStep}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
