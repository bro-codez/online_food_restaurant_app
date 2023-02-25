import React from "react";

import { Img, Text, Line, Button } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const AboutusPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins gap-[120px] sm:gap-[40px] md:gap-[40px] items-center justify-end mx-[auto] pt-[51px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1112px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
            <Img
              src="images/img_logo.svg"
              className="h-[51px] w-[12%]"
              alt="Logo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-[20px] items-start justify-center md:ml-[0] ml-[107px] md:mt-[0] mt-[10px] pt-[2px] md:w-[100%] w-[52%]">
              <div className="flex items-center justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="not-italic text-gray_900_cc text-left w-[auto]"
                  variant="body6"
                >
                  Home
                </Text>
              </div>
              <div className="flex items-center justify-start sm:ml-[0] ml-[32px] sm:w-[100%] w-[auto]">
                <Text
                  className="common-pointer not-italic text-gray_900_cc text-left w-[auto]"
                  variant="body6"
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[32px] sm:w-[100%] w-[12%]">
                <Text
                  className="not-italic text-left text-red_400 w-[auto]"
                  variant="body6"
                >
                  About us
                </Text>
                <Line className="bg-red_400 h-[1px] w-[69%]" />
              </div>
              <div className="flex items-center justify-start sm:ml-[0] ml-[31px] sm:w-[100%] w-[auto]">
                <Text
                  className="common-pointer not-italic text-gray_900_cc text-left w-[auto]"
                  variant="body6"
                  onClick={() => navigate("/orderonline")}
                >
                  Order online
                </Text>
              </div>
              <div className="flex items-center justify-start sm:ml-[0] ml-[27px] sm:w-[100%] w-[auto]">
                <Text
                  className="common-pointer not-italic text-gray_900_cc text-left w-[auto]"
                  variant="body6"
                  onClick={() => navigate("/reservation")}
                >
                  Reservation
                </Text>
              </div>
              <div className="flex items-center justify-start sm:ml-[0] ml-[31px] sm:w-[100%] w-[auto]">
                <Text
                  className="common-pointer not-italic text-gray_900_cc text-left w-[auto]"
                  variant="body6"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </Text>
              </div>
            </div>
            <Button
              className="flex items-center justify-center md:ml-[0] ml-[122px] pl-[13px] pr-[0] py-[13px] rounded-[25px] sm:ml-[0] text-center"
              leftIcon={
                <Img
                  src="images/img_cart.svg"
                  className="mr-[13px] text-center"
                  alt="cart"
                />
              }
              variant="FillWhiteA700"
            >
              <div className="bg-transparent cursor-pointer h-[50px] w-[50px]"></div>
            </Button>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-[14px] text-center text-white_A700 w-[auto]"
              shape="RoundedBorder16"
              size="md"
              variant="FillRed400"
            >
              Log in
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[78px] w-[100%]">
            <div className="h-[543px] relative sm:w-[100%] w-[543px]">
              <div className="bg-bluegray_100_63 flex h-[100%] sm:h-[auto] items-center justify-start m-[auto] p-[52px] sm:px-[20px] md:px-[40px] rounded-[50%] w-[543px]">
                <div className="bg-bluegray_100_6c h-[437px] rounded-[50%] w-[437px]"></div>
              </div>
              <Img
                src="images/img_unsplashebmyh7.png"
                className="absolute h-[346px] inset-[0] justify-center m-[auto] rounded-[50%] w-[346px]"
                alt="unsplasheBmyHSeven"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[36px] items-start justify-start rounded-[16px] md:w-[100%] w-[39%]">
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="font-tinos leading-[110.00%] text-left text-red_400"
                  as="h3"
                  variant="h3"
                >
                  <span className="md:text-[44px] sm:text-[38px] text-gray_902 text-[52px] font-opensans font-bold leading-[normal]">
                    About Our <br />
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-red_400 text-[52px] font-opensans font-bold leading-[normal]">
                    Restaurant
                  </span>
                </Text>
                <Text
                  className="font-normal font-poppins leading-[200.00%] not-italic text-gray_801 text-left w-[100%]"
                  variant="body2"
                >
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[232px] text-[20px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder16"
                size="xl"
                variant="FillRed400"
              >
                Order now
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[120px] w-[100%]">
            <Text
              className="font-normal leading-[200.00%] not-italic text-gray_801 text-left w-[auto]"
              variant="body2"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </Text>
            <div className="h-[560px] relative sm:w-[100%] w-[560px]">
              <div className="bg-bluegray_100_63 flex h-[100%] sm:h-[auto] items-center justify-start m-[auto] p-[57px] sm:px-[20px] md:px-[40px] rounded-[50%] w-[560px]">
                <div className="bg-bluegray_100_63 h-[445px] rounded-[50%] w-[445px]"></div>
              </div>
              <Img
                src="images/img_unsplash5dsznc.png"
                className="absolute h-[354px] inset-[0] justify-center m-[auto] rounded-[50%] w-[354px]"
                alt="unsplash5dsZnC"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[120px] w-[100%]">
            <Img
              src="images/img_unsplashlrawct.png"
              className="md:flex-1 h-[629px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
              alt="unsplashlRAWcT"
            />
            <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[60px] items-start justify-start md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="font-tinos leading-[140.00%] text-gray_900 text-left w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  <span className="md:text-[44px] sm:text-[38px] text-red_400 text-[52px] font-opensans font-bold">
                    Owner
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-orange_600 text-[52px] font-opensans font-bold">
                    {" "}
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-gray_900 text-[52px] font-opensans font-bold">
                    & Executive Chef
                  </span>
                </Text>
                <Text
                  className="font-normal font-poppins not-italic text-gray_801 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Ismail Marzuki
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-tinos text-amber_800_6c text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  “
                </Text>
                <Text
                  className="font-light font-poppins italic leading-[200.00%] text-gray_801 text-left w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text
                  className="font-tinos md:ml-[0] ml-[455px] rotate-[180deg] text-amber_800_6c text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  “
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default AboutusPage;
