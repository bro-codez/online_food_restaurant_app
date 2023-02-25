import React from "react";

import { Img, Text, Line, Button, SelectBox } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ReservationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins gap-[120px] sm:gap-[40px] md:gap-[40px] items-center justify-end mx-[auto] pt-[51px] w-[100%]">
        <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start max-w-[1112px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
            <Img
              src="images/img_logo.svg"
              className="h-[51px] w-[12%]"
              alt="Logo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-[20px] items-start justify-center md:ml-[0] ml-[107px] md:mt-[0] mt-[10px] pt-[2px] md:w-[100%] w-[52%]">
              <div className="flex items-center justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="not-italic text-gray_900_a2 text-left w-[auto]"
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
              <div className="flex flex-col gap-[6px] items-start justify-start sm:ml-[0] ml-[27px] sm:w-[100%] w-[16%]">
                <Text
                  className="not-italic text-left text-red_400 w-[auto]"
                  variant="body6"
                >
                  Reservation
                </Text>
                <Line className="bg-red_400 h-[1px] w-[53%]" />
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
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <Img
              src="images/img_rectangle150.png"
              className="md:flex-1 h-[657px] sm:h-[auto] object-cover rounded-[20px] md:w-[100%] w-[auto]"
              alt="Rectangle150"
            />
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
              <Text
                className="font-opensans text-gray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Book a table
              </Text>
              <div className="flex flex-col font-poppins gap-[40px] items-center justify-start mt-[60px] w-[100%]">
                <SelectBox
                  className="font-normal not-italic text-[20px] text-gray_500 text-left w-[100%]"
                  placeholderClassName="text-gray_500"
                  name="date"
                  placeholder="Date"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[21px] mr-[35px] w-[21px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder20"
                  size="md"
                  variant="OutlineGray400"
                ></SelectBox>
                <SelectBox
                  className="font-normal not-italic text-[20px] text-gray_500 text-left w-[100%]"
                  placeholderClassName="text-gray_500"
                  name="time"
                  placeholder="Time"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[21px] mr-[35px] w-[21px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder20"
                  size="md"
                  variant="OutlineGray400"
                ></SelectBox>
                <SelectBox
                  className="font-normal not-italic text-[20px] text-gray_500 text-left w-[100%]"
                  placeholderClassName="text-gray_500"
                  name="partysize"
                  placeholder="Party size"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[21px] mr-[35px] w-[21px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder20"
                  size="md"
                  variant="OutlineGray400"
                ></SelectBox>
              </div>
              <Button
                className="common-pointer cursor-pointer font-poppins font-semibold sm:min-w-[100%] min-w-[475px] mt-[40px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-[auto]"
                onClick={() => navigate("/enterdetailsreservation")}
                shape="RoundedBorder20"
                size="2xl"
                variant="FillRed400"
              >
                Book now
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default ReservationPage;
