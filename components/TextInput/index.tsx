"use client";

interface TextInputProps {
  label: string;
  placeholder: string;
  error?: boolean;
}

const TextInput = ({
  error,
  label,
  placeholder,
  ...props
}: React.ComponentProps<"input"> & TextInputProps) => {
  return (
    <div className="flex flex-col gap-y-(--sp-100)">
      <div className="flex justify-between">
        <label
          htmlFor={props.name}
          className="text-(length:--fs-14) leading-(--lh-120) text-(--clr-blue-950)"
        >
          {label}
        </label>
        {error && (
          <span className="text-(length:--fs-14) leading-(--lh-120) font-bold tracking-[0.0625rem] text-(--clr-red-500)">
            This field is required
          </span>
        )}
      </div>

      <input
        id={props.name}
        placeholder={placeholder}
        className={`rounded-(--sp-100) border ${error ? "border-(--clr-red-500)" : "border-(--clr-purple-200)"} foucs:outline-(--clr-purple-600) h-[2.5rem] px-(--sp-200) py-(--sp-100) text-(length:--fs-16) leading-(--lh-120) font-medium text-(--clr-blue-950) placeholder:text-(--clr-grey-500) focus:outline-1 active:bg-white md:h-[3rem]`}
        {...props}
      />
    </div>
  );
};

export default TextInput;
