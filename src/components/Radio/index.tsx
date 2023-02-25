import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineGray900: "border-[1px] border-gray_900 border-solid",
} as const;

const sizes = {
  sm: "pl-[8px] pr-[16px] py-[16px]",
  md: "pb-[12px] pl-[8px] pr-[12px] pt-[19px]",
} as const;

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    checked: boolean;
    errors: string[];

    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Radio = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      checked = false,
      errors = [],
      variant = "OutlineGray900",
      size = "sm",
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${className} ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

export { Radio };
