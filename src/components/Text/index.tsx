import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[48px] md:text-[48px] text-[80px]",
  h2: "font-bold sm:text-[48px] md:text-[48px] text-[70px]",
  h3: "font-bold sm:text-[38px] md:text-[44px] text-[52px]",
  h4: "sm:text-[36px] md:text-[38px] text-[40px]",
  h5: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  h6: "sm:text-[26px] md:text-[28px] text-[30px]",
  body1: "sm:text-[21px] md:text-[23px] text-[25px]",
  body2: "text-[20px]",
  body3: "text-[18px]",
  body4: "font-normal text-[16.62px]",
  body5: "font-semibold text-[16.23px]",
  body6: "font-normal text-[16px]",
  body7: "font-normal text-[14px]",
  body8: "font-normal text-[12.99px]",
  body9: "font-normal text-[12px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
