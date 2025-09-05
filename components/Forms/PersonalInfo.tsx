import TextInput from "../TextInput";

const PersonalInfo = () => {
  return (
    <div className="mx-(--sp-200) mb-[8.5rem] flex w-[21.4375rem] flex-col gap-y-(--sp-300) rounded-[0.625rem] bg-(--clr-white) px-(--sp-300) py-(--sp-400) shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)] md:m-0 md:w-full md:gap-y-(--sp-400) md:px-0 md:py-0 md:pt-[1.69rem] md:shadow-none lg:gap-y-(--sp-500)">
      <div className="flex flex-col gap-y-(--sp-100)">
        <h2 className="text-(length:--fs-24) leading-(--lh-120) font-bold text-(--clr-blue-950) md:text-(length:--fs-32)">
          Personal info
        </h2>
        <p className="text-(length:--fs-16) leading-(--lh-120) text-(--clr-grey-500)">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div className="flex flex-col md:gap-y-(--sp-300) lg:gap-y-(--sp-200)">
        <TextInput
          name="name"
          label="Name"
          placeholder="e.g. Stephen King"
          type="text"
        />
        <TextInput
          name="email"
          type="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <TextInput
          name="phoneNumber"
          label="Phone Number"
          placeholder="e.g. +1234567890"
          type="text"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
