import Button from "@/components/Button";
import Card from "@/components/Card";
import PersonalInfo from "@/components/Forms/PersonalInfo";
import ProgressSidebar from "@/components/Progress-Sidebar";
import TextInput from "@/components/TextInput";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col justify-between md:justify-items-center">
      <div className="relative flex w-full flex-col md:w-[42.875rem]">
        <ProgressSidebar />
        <div className="absolute top-[6.03rem] px-(--sp-200)">
          <PersonalInfo />
        </div>
      </div>
      {/* Go Back/Next Footer */}
      <div className="flex justify-between bg-(--clr-white) p-(--sp-200)">
        <Button
          variant="tertiary"
          name="Go Back"
          className="hidden text-(length:--fs-14)"
        />
        <div></div>
        <Button
          variant="primary"
          name="Next Step"
          className="px-(--sp-200) py-[0.59375rem] text-(length:--fs-14)"
        />
      </div>
    </div>
  );
}
