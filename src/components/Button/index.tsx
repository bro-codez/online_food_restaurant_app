import React from "react";

const shapes = {
  RoundedBorder16: "rounded-[16px]",
  CircleBorder25: "rounded-[25px]",
  RoundedBorder8: "rounded-[8px]",
  RoundedBorder4: "rounded-[4px]",
  RoundedBorder20: "rounded-[20px]",
  RoundedBorder12: "rounded-[12px]",
  icbRoundedBorder4: "rounded-[4px]",
  icbCircleBorder25: "rounded-[25px]",
  icbCircleBorder30: "rounded-[30px]",
} as const;
const variants = {
  FillGray40063: "bg-gray_400_63 text-gray_900",
  FillWhiteA700: "bg-white_A700",
  FillRed400: "bg-red_400 text-white_A700",
  FillGray900: "bg-gray_900 text-white_A700",
  FillGray200: "bg-gray_200 text-black_900",
  FillLightblueA7006c: "bg-light_blue_A700_6c text-indigo_900",
  FillRedA70063: "bg-red_A700_63 text-red_A700",
  FillGray40064: "bg-gray_400_64 text-gray_900",
  OutlineRedA20011: "bg-white_A700 shadow-bs1",
  OutlineGreen50011: "bg-white_A700 shadow-bs2",
  FillBlue400: "bg-blue_400",
  FillIndigo300: "bg-indigo_300 text-white_A700",
  FillRed500: "bg-red_500 text-white_A700",
  FillRed40019: "bg-red_400_19 text-red_400",
  FillWhiteA7007f: "bg-white_A700_7f text-red_400",
  icbFillGray200: "bg-gray_200",
  icbFillGray900: "bg-gray_900",
  icbOutlineRed5000f: "bg-white_A700 shadow-bs",
  icbOutlineBlack9000f: "bg-white_A700 shadow-bs3",
  icbFillGray301: "bg-gray_301",
  icbFillBluegray100: "bg-bluegray_100",
} as const;
const sizes = {
  sm: "p-[9px]",
  md: "p-[14px]",
  lg: "p-[19px]",
  xl: "p-[27px] sm:px-[20px]",
  "2xl": "p-[35px] sm:px-[20px]",
  smIcn: "p-[7px]",
  mdIcn: "p-[15px]",
  lgIcn: "p-[18px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
