import React from "react";

import { Img, Text, Line, Button, Input, TextArea } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ContactPage: React.FC = () => {
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
              <div className="flex items-center justify-start sm:ml-[0] ml-[32px] sm:w-[100%] w-[auto]">
                <Text
                  className="common-pointer not-italic text-gray_900_cc text-left w-[auto]"
                  variant="body6"
                  onClick={() => navigate("/aboutus")}
                >
                  About us
                </Text>
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
              <div className="flex flex-col gap-[6px] items-start justify-start sm:ml-[0] ml-[31px] sm:w-[100%] w-[14%]">
                <Text
                  className="not-italic text-gray_900_cc text-left w-[auto]"
                  variant="body6"
                >
                  Contact us
                </Text>
                <Line className="bg-red_400 h-[1px] w-[58%]" />
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
          <div className="flex flex-col gap-[19px] items-center justify-start mt-[117px] md:w-[100%] w-[auto]">
            <Text
              className="font-opensans text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Contact us
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-center text-gray_801 w-[100%]"
              variant="body1"
            >
              We love hearing from our customers. Feel free to share your
              experience or ask any questions you may have.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[50px] w-[100%]">
            <div
              className="bg-cover bg-no-repeat h-[550px] md:h-[60px] p-[215px] sm:px-[20px] md:px-[40px] relative rounded-[24px] md:w-[100%] w-[48%]"
              style={{ backgroundImage: "url('images/img_map.png')" }}
            >
              <Img
                src="images/img_location.svg"
                className="absolute bottom-[39%] h-[60px] inset-x-[0] mx-[auto] w-[9%]"
                alt="location"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[36px] items-center justify-start md:w-[100%] w-[49%]">
              <div className="flex flex-col gap-[24px] items-center justify-start rounded-[8px] w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="Firstname"
                  placeholder="First name"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="Lastname"
                  placeholder="Last name"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="email"
                  name="Emailaddress"
                  placeholder="Email address"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  name="Subject"
                  placeholder="Subject"
                ></Input>
                <TextArea
                  className="font-normal leading-[normal] not-italic text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  name="Massage"
                  placeholder="Message"
                ></TextArea>
              </div>
              <Button
                className="cursor-pointer font-normal sm:min-w-[100%] min-w-[540px] not-italic sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder12"
                size="xl"
                variant="FillRed400"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default ContactPage;
