import React from "react";

import { Text, Button, Img } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-[40px] gap-[67px] items-center justify-center mb-[76px] mt-[70px] mx-[auto] w-[78%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
            <ul className="flex md:flex-1 flex-col items-start justify-start mb-[8px] md:w-[100%] w-[38%] common-column-list">
              <li className="w-[30%]">
                <div className="cursor-pointer flex flex-row gap-[8px] items-center justify-start">
                  <Text
                    className="bg-red_400 flex font-poppins font-semibold h-[51px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[51px]"
                    variant="body1"
                  >
                    F
                  </Text>
                  <Text
                    className="font-poppins font-semibold text-left text-white_A700 w-[auto]"
                    variant="body3"
                  >
                    <span className="text-white_A700 text-[18px]">Foodio</span>
                    <span className="text-red_400 text-[18px]">.</span>
                  </Text>
                </div>
              </li>
              <li className="mt-[56px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins leading-[200.00%] not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  Viverra gravida morbi egestas facilisis tortor netus non duis
                  tempor.
                </a>
              </li>
              <li className="mt-[47px] ml-[3px] w-[58%]">
                <div className="cursor-pointer flex flex-row gap-[30px] items-center justify-start">
                  <Button
                    className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                    size="mdIcn"
                    variant="icbFillGray301"
                  >
                    <Img
                      src="images/img_twitter.png"
                      className="h-[30px]"
                      alt="twitter"
                    />
                  </Button>
                  <Button
                    className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                    size="mdIcn"
                    variant="icbFillBluegray100"
                  >
                    <Img
                      src="images/img_instagram.png"
                      className="h-[30px]"
                      alt="Instagram"
                    />
                  </Button>
                  <Button
                    className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                    size="mdIcn"
                    variant="icbFillBluegray100"
                  >
                    <Img
                      src="images/img_facebook.png"
                      className="h-[30px]"
                      alt="Facebook"
                    />
                  </Button>
                </div>
              </li>
            </ul>
            <ul className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[16px] md:w-[100%] w-[auto] common-column-list">
              <li className="w-[auto]">
                <Text
                  className="cursor-pointer font-poppins font-semibold text-left text-red_400"
                  variant="body1"
                >
                  Page
                </Text>
              </li>
              <li className="mt-[43px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  Home
                </a>
              </li>
              <li className="mt-[35px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  Menu
                </a>
              </li>
              <li className="mt-[34px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  Order online
                </a>
              </li>
              <li className="mt-[37px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  Catering
                </a>
              </li>
              <li className="mt-[32px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  Reservation
                </a>
              </li>
            </ul>
            <ul className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[11px] md:w-[100%] w-[auto] common-column-list">
              <li className="w-[auto]">
                <Text
                  className="cursor-pointer font-poppins font-semibold text-left text-red_400"
                  variant="body1"
                >
                  Information
                </Text>
              </li>
              <li className="mt-[47px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  About us
                </a>
              </li>
              <li className="mt-[34px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  Testimonial
                </a>
              </li>
              <li className="mt-[35px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  Event
                </a>
              </li>
            </ul>
            <ul className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[11px] md:w-[100%] w-[auto] common-column-list">
              <li className="w-[auto]">
                <Text
                  className="cursor-pointer font-poppins font-semibold text-left text-red_400"
                  variant="body1"
                >
                  Get in touch
                </Text>
              </li>
              <li className="mt-[46px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins leading-[153.00%] not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
                </a>
              </li>
              <li className="mt-[31px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  delizioso@gmail.com
                </a>
              </li>
              <li className="mt-[32px] w-[auto]">
                <a
                  className="cursor-pointer font-normal font-poppins not-italic text-[20px] text-gray_300 text-left"
                  href="javascript:"
                >
                  +123 4567 8901
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-start justify-center md:w-[100%] w-[23%]">
            <Text
              className="font-normal font-poppins mt-[4px] not-italic text-gray_301 text-left w-[auto]"
              variant="body2"
            >
              Copyright
            </Text>
            <Text
              className="border-[1.5px] border-gray_301 border-solid flex font-poppins h-[19px] items-center justify-center ml-[5px] mt-[4px] not-italic rounded-[50%] text-center text-gray_301 w-[19px]"
              variant="body7"
            >
              c
            </Text>
            <Text
              className="font-normal font-poppins ml-[5px] not-italic text-gray_301 text-left w-[auto]"
              variant="body2"
            >
              2022 Foodio
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
