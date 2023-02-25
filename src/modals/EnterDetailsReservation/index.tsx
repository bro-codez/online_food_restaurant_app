import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, SelectBox, TextArea, Button } from "components";
import { useNavigate } from "react-router-dom";

const EnterDetailsReservationModal = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[78%]"
        overlayClassName="bg-gray_900_a3 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col gap-[32px] items-end justify-start max-w-[1112px] mx-[auto] my-[76px] p-[40px] md:px-[20px] rounded-[16px] w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-start justify-between ml-[auto] md:w-[100%] w-[59%]">
              <Text
                className="mt-[20px] text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Reservation
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer h-[20px] w-[20px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </div>
            <div className="flex flex-col font-poppins gap-[48px] items-center justify-start mb-[20px] mr-[20px] md:w-[100%] w-[97%]">
              <Text
                className="bg-light_blue_A100_7e font-normal h-[64px] justify-center md:max-w-[100%] max-w-[992px] not-italic sm:px-[20px] px-[35px] py-[20px] rounded-[20px] text-black_900 text-left w-[100%]"
                variant="body2"
              >
                <span className="text-gray_801 text-[20px] font-poppins">
                  Due to limited availability, we can hold this table for you
                  for
                </span>
                <span className="text-black_900 text-[20px] font-poppins">
                  {" "}
                </span>
                <span className="text-gray_900 text-[20px] font-poppins font-semibold">
                  5:00 minutes
                </span>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[6px] md:w-[100%] w-[48%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Data order
                  </Text>
                  <div className="flex flex-col gap-[24px] items-center justify-start mt-[23px] w-[100%]">
                    <Input
                      className="font-normal not-italic p-[0] text-[20px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      type="text"
                      name="Firstname"
                      placeholder="First name"
                    ></Input>
                    <Input
                      className="font-normal not-italic p-[0] text-[20px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      type="text"
                      name="Lastname"
                      placeholder="Last name"
                    ></Input>
                    <div className="bg-white_A700 border-[1px] border-gray_400 border-solid flex flex-row gap-[16px] items-center justify-start p-[12px] rounded-[8px] w-[100%]">
                      <SelectBox
                        className="sm:flex-1 mb-[2px] ml-[4px] sm:w-[100%] w-[11%]"
                        placeholderClassName=""
                        name="groupNinetyFour"
                        placeholder=""
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-[11px] mr-[0] w-[11px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        variant="body2"
                      >
                        Phone number
                      </Text>
                    </div>
                    <Input
                      className="font-normal not-italic p-[0] text-[20px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      type="email"
                      name="Emailaddress"
                      placeholder="Email address"
                    ></Input>
                    <SelectBox
                      className="font-normal not-italic text-[20px] text-gray_500 text-left w-[100%]"
                      placeholderClassName="text-gray_500"
                      name="Selectanaccas"
                      placeholder="Select an occasion"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_21X21.svg"
                          className="h-[21px] mr-[20px] w-[21px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder8"
                      size="sm"
                      variant="OutlineGray400"
                    ></SelectBox>
                    <TextArea
                      className="font-normal not-italic text-[20px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                      name="Addaspecialr"
                      placeholder="Add a special request"
                      size="sm"
                    ></TextArea>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-normal sm:min-w-[100%] min-w-[475px] mt-[24px] not-italic sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-[auto]"
                    onClick={() => navigate("/reservationhasbeenconfirmed")}
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillRed400"
                  >
                    Confirm reservation
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col gap-[55px] items-center justify-start md:w-[100%] w-[44%]">
                  <div className="bg-bluegray_100_63 flex flex-col items-start justify-end p-[35px] sm:px-[20px] rounded-[20px] w-[100%]">
                    <Text
                      className="font-semibold md:ml-[0] ml-[5px] mt-[5px] text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Reservation detail
                    </Text>
                    <div className="flex flex-row gap-[36px] items-center justify-start mr-[auto] mt-[47px] md:w-[100%] w-[95%]">
                      <Img
                        src="images/img_calendar.svg"
                        className="h-[34px] w-[34px]"
                        alt="calendar"
                      />
                      <Text
                        className="font-normal not-italic text-gray_801 text-left w-[auto]"
                        variant="body2"
                      >
                        Saturday, 28 february 2022
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[36px] items-center justify-start mr-[auto] mt-[25px] md:w-[100%] w-[46%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-[34px] w-[34px]"
                        alt="clock"
                      />
                      <Text
                        className="font-normal not-italic text-gray_801 text-left w-[auto]"
                        variant="body2"
                      >
                        04:30 pm
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[36px] items-center justify-start mr-[auto] mt-[25px] md:w-[100%] w-[95%]">
                      <Img
                        src="images/img_user_34X34.svg"
                        className="h-[34px] w-[34px]"
                        alt="user"
                      />
                      <Text
                        className="font-normal not-italic text-gray_801 text-left w-[auto]"
                        variant="body2"
                      >
                        2 people (Standar seating)
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[48px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Restaurant informations
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_801 text-left w-[100%]"
                      variant="body2"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default EnterDetailsReservationModal;
