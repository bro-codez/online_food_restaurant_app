import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineGray400: "bg-white_A700 border-[1px] border-gray_400 border-solid",
};
const shapes = { RoundedBorder8: "rounded-[8px]" };
const sizes = {
  sm: "pb-[35px] pt-[16px] px-[16px]",
  md: "pb-[35px] pl-[16px] sm:pr-[20px] pr-[22px] pt-[22px]",
  lg: "pb-[35px] pl-[24px] pr-[30px] pt-[30px] sm:px-[20px]",
};

export type TextAreaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    errors: string[];
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      children,
      shape = "RoundedBorder8",
      variant = "OutlineGray400",
      size = "lg",
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${(shape && shapes[shape]) || ""} ${
            (size && sizes[size]) || ""
          } ${(variant && variants[variant]) || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);

export { TextArea };
