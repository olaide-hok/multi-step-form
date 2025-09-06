import Image from "next/image";

const FinalStep = () => {
  return (
    <div className="mx-(--sp-200) mb-[8.5rem] flex w-[21.4375rem] flex-col items-center justify-center gap-y-(--sp-300) rounded-[0.625rem] bg-(--clr-white) px-(--sp-300) py-(--sp-1000) shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)] md:m-0 md:w-full md:gap-y-(--sp-400) md:px-0 md:py-0 md:pt-[1.69rem] md:shadow-none lg:gap-y-(--sp-500)">
      {/* Thank You */}
      <Image
        src="/images/icon-thank-you.svg"
        alt="Thank You"
        width={56}
        height={56}
      />
      <div className="flex flex-col gap-y-(--sp-100) text-center">
        <h2 className="text-(length:--fs-24) leading-(--lh-120) font-bold text-(--clr-blue-950) md:text-(length:--fs-32)">
          Thank you!
        </h2>
        <p className="text-(length:--fs-16) leading-(--lh-150) text-(--clr-grey-500)">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default FinalStep;
