import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const CancelReservationModal = (props) => {
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
          <div className="bg-white_A700 flex items-center justify-start max-w-[1112px] mx-[auto] my-[76px] md:px-[20px] py-[38px] rounded-[16px] w-[100%]">
            <div className="mb-[26px] overflow-x-auto w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-center justify-between ml-[auto] md:w-[100%] w-[55%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Reservation
                  </Text>
                  <Img
                    src="images/img_close.svg"
                    className="common-pointer h-[24px] w-[24px]"
                    onClick={props.onRequestClose}
                    alt="close"
                  />
                </div>
                <div
                  className="bg-cover bg-no-repeat flex font-poppins h-[286px] items-start justify-end p-[44px] sm:px-[20px] md:px-[40px] w-[100%]"
                  style={{
                    backgroundImage:
                      "url('images/img_reservationhas_orange_600.png')",
                  }}
                >
                  <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] ml-[19px] mt-[54px] md:w-[100%] w-[61%]">
                    <Text
                      className="font-semibold leading-[110.00%] text-left text-white_A700 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Are you sure you want to cancel the reservation?
                    </Text>
                    <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[39%]">
                      <Img
                        src="images/img_calendar_30X30.svg"
                        className="h-[30px] w-[30px]"
                        alt="calendar"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        Booking ID : #123456
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-poppins md:gap-[20px] items-center justify-start md:ml-[0] ml-[34px] mt-[48px] md:w-[100%] w-[95%]">
                  <div className="h-[330px] relative w-[330px]">
                    <div className="bg-deep_orange_200_63 flex h-[100%] items-center justify-start m-[auto] p-[32px] sm:px-[20px] rounded-[50%] w-[330px]">
                      <div className="bg-deep_orange_200_6c h-[265px] rounded-[50%] w-[265px]"></div>
                    </div>
                    <Img
                      src="images/img_unsplash.png"
                      className="absolute h-[210px] inset-[0] justify-center m-[auto] rounded-[50%] w-[210px]"
                      alt="unsplash"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[34px] md:w-[100%] w-[31%]">
                    <Text
                      className="font-semibold text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Reservation detail
                    </Text>
                    <div className="flex flex-row gap-[20px] items-center justify-start mt-[37px] w-[100%]">
                      <Img
                        src="images/img_calendar.svg"
                        className="h-[34px] w-[34px]"
                        alt="calendar One"
                      />
                      <Text
                        className="font-normal not-italic text-gray_801 text-left w-[auto]"
                        variant="body2"
                      >
                        Saturday, 28 february 2022
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-start mt-[20px] md:w-[100%] w-[46%]">
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
                    <div className="flex flex-row gap-[20px] items-center justify-start mt-[20px] w-[100%]">
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
                  <div className="flex flex-col gap-[30px] items-center justify-start md:ml-[0] ml-[112px] md:w-[100%] w-[24%]">
                    <Button
                      className="cursor-pointer font-normal min-w-[246px] not-italic text-[20px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder20"
                      size="xl"
                      variant="FillRed400"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-normal min-w-[246px] not-italic text-[20px] text-center text-gray_900 w-[auto]"
                      onClick={() => navigate("/reservationhasbeenconfirmed")}
                      shape="RoundedBorder20"
                      size="xl"
                      variant="FillGray40064"
                    >
                      Go Back
                    </Button>
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

export default CancelReservationModal;
