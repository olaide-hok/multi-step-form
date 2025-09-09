"use client";

import { useState } from "react";
import Button from "@/components/Button";
import AddOns from "@/components/Forms/AddOns";
import FinishUp from "@/components/Forms/FinishUp";
import PersonalInfo from "@/components/Forms/PersonalInfo";
import SelectPlan from "@/components/Forms/SelectPlan";
import ProgressSidebar from "@/components/Progress-Sidebar";
import FinalStep from "@/components/Forms/FinalStep";
import z from "zod";

export type PersonalInfoFormDataType = {
  name: string;
  email: string;
  phone: string;
};

export type AddOnsRateDataType = {
  id: string;
  plan: string;
  description: string;
  rate: number;
};

export type PlanType = {
  plan: string;
  rate: number;
  bonus: string;
};

const personalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email({ message: "Must be a valid email address" })
    .min(1, "Email is required"),
  phone: z.string().min(1, "Phone is required"),
});

export default function Home() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showFinalStep, setShowFinalStep] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const [personalInfoForm, setPersonalInfoForm] =
    useState<PersonalInfoFormDataType>({
      name: "",
      email: "",
      phone: "",
    });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof PersonalInfoFormDataType, string>>
  >({});

  const validateForm = (): boolean => {
    const result = personalInfoSchema.safeParse(personalInfoForm);

    if (!result.success) {
      const errors: Partial<Record<keyof PersonalInfoFormDataType, string>> =
        {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof PersonalInfoFormDataType;
        errors[field] = issue.message;
      });
      setFormErrors(errors);
      return false;
    }

    setFormErrors({});
    return true;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfoForm({
      ...personalInfoForm,
      [e.target.name]: e.target.value,
    });
  };

  // Selected Plan
  const [selectedPlan, setSelectedPlan] = useState<PlanType>({
    plan: "",
    rate: 0,
    bonus: "",
  });
  const [selectedPlanError, setSelectedPlanError] = useState<string>("");
  const handleSelectedPlan = (plan: PlanType) => {
    setSelectedPlan(plan);
    setSelectedPlanError(""); // clear error once a plan is picked
  };

  // Add-on
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnsRateDataType[]>(
    [],
  );
  const [selectedAddOnsError, setSelectedAddOnsError] = useState<string>("");

  const handleAddOns = (addOn: AddOnsRateDataType) => {
    setSelectedAddOns((prev) =>
      prev.some((a) => a.plan === addOn.plan)
        ? prev.filter((a) => a.plan !== addOn.plan)
        : [...prev, addOn],
    );
    setSelectedAddOnsError("");
  };

  const handleYearlyToggle = () => {
    setIsYearly(!isYearly);
    setSelectedPlan({ plan: "", rate: 0, bonus: "" });
    setSelectedAddOns([]);
  };

  const steps = [
    {
      id: 1,
      name: "Your Info",
      component: (
        <PersonalInfo
          errors={formErrors}
          handleFormChange={handleFormChange}
          inputValues={personalInfoForm}
        />
      ),
    },
    {
      id: 2,
      name: "Select Plan",
      component: (
        <SelectPlan
          isYearly={isYearly}
          selectedPlan={selectedPlan}
          handleSelectPlan={handleSelectedPlan}
          error={selectedPlanError}
          handleYearlyToggle={handleYearlyToggle}
        />
      ),
    },
    {
      id: 3,
      name: "Add-ons",
      component: (
        <AddOns
          isYearly={isYearly}
          selectedAddOns={selectedAddOns}
          handleAddOns={handleAddOns}
          error={selectedAddOnsError}
        />
      ),
    },
    {
      id: 4,
      name: "Summary",
      component: (
        <FinishUp
          addOns={selectedAddOns}
          isYearly={isYearly}
          plan={selectedPlan}
        />
      ),
    },
  ];

  const nextStep = () => {
    if (currentStep === steps.length - 1) return;
    if (currentStep === 0 && !validateForm()) return;
    if (currentStep === 1 && !selectedPlan?.plan) {
      setSelectedPlanError("Please select a plan before proceeding");
      return;
    }
    if (currentStep === 2 && selectedAddOns.length === 0) {
      setSelectedAddOnsError("Please select an add-on before proceeding");
      return;
    }
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
        <div
          className={`absolute top-[6.03rem] flex h-full flex-col justify-normal ${showFinalStep ? "md:justify-center" : "md:justify-between"} md:relative md:top-0 md:ml-[3.63rem] md:w-[21.75rem] md:p-0 lg:ml-[6.25rem] lg:w-[28.125rem] lg:pb-(--sp-400)`}
        >
          {currentStep < steps.length &&
            !showFinalStep &&
            steps[currentStep].component}
          {showFinalStep && <FinalStep />}

          {/* Go Back/Next/Confirm Footer */}
          <div
            className={`${showFinalStep && "hidden"} flex justify-between bg-(--clr-white) p-(--sp-200) md:p-0`}
          >
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
            {currentStep < steps.length - 1 && (
              <Button
                variant="primary"
                name="Next Step"
                className="px-(--sp-200) py-[0.59375rem] text-(length:--fs-14)"
                onClick={nextStep}
              />
            )}
            {currentStep === steps.length - 1 && (
              <Button
                variant="primary"
                name="Confirm"
                className="px-(--sp-200) py-[0.59375rem] text-(length:--fs-14)"
                onClick={() => setShowFinalStep(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
