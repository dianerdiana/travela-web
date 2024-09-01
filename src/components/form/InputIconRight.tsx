// ** Types
type InputType = "text" | "email" | "password";

type InputIconLeftProps = {
  name: string;
  type: InputType;
  placeholder: string;
  isInvalid: boolean;
  describedBy: string;
  iconSrc: string;
  props: any;
};

export default function InputIconLeft({
  name,
  type,
  placeholder,
  isInvalid,
  describedBy,
  iconSrc,
  props,
}: InputIconLeftProps) {
  return (
    <div
      className={`flex items-center gap-3 p-[16px_12px] border rounded-xl transition-all duration-300 ${
        isInvalid
          ? "border-red-500 focus-within:border-red-400"
          : "border-secondary-200 focus-within:border-primary-400 "
      }`}
    >
      <input
        {...props}
        type={type}
        className="appearance-none outline-none w-full text-sm placeholder:text-secondary-200 tracking-[0.35px]"
        placeholder={placeholder}
        aria-invalid={isInvalid && true}
        aria-describedby={describedBy}
      />
      <div className="w-4 h-4 flex shrink-0">
        <img src={iconSrc} alt={`${name}-icon`} />
      </div>
    </div>
  );
}
