import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input, Button } from "components";

const ShippingaddressModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[59%]"
        overlayClassName="bg-gray_900_a3 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col gap-[40px] items-end justify-start mb-[511px] p-[50px] md:px-[20px] rounded-[16px] w-[100%]">
            <div className="flex flex-row items-center justify-between ml-[auto] md:w-[100%] w-[67%]">
              <Text
                className="font-medium text-black_900 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Shipping address
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer h-[20px] w-[20px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </div>
            <div className="flex flex-col gap-[54px] items-center justify-start mb-[10px] mr-[10px] md:w-[100%] w-[98%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  variant="body3"
                >
                  Shipping address
                </Text>
                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between mt-[13px] rounded-[8px] w-[100%]">
                  <Input
                    className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-gray_900 text-gray_900 text-left w-[100%]"
                    wrapClassName="sm:w-[100%] w-[auto]"
                    name="Subject"
                    placeholder="1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat"
                  ></Input>
                  <Button
                    className="cursor-pointer font-normal min-w-[166px] not-italic text-[18px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder8"
                    size="lg"
                    variant="FillIndigo300"
                  >
                    Search
                  </Button>
                </div>
                <div className="flex flex-row gap-[16px] items-end justify-start mt-[17px] md:w-[100%] w-[37%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="h-[24px] mb-[2px] w-[24px]"
                    alt="checkmark"
                  />
                  <Text
                    className="font-normal mt-[5px] not-italic text-indigo_300 text-left w-[auto]"
                    variant="body3"
                  >
                    Use your current location
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex h-[481px] items-center justify-end p-[93px] sm:px-[20px] md:px-[40px] rounded-[16px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group7771.png')" }}
              >
                <div className="flex flex-col gap-[13px] items-center justify-start mt-[20px] md:w-[100%] w-[71%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[221px] items-center justify-start p-[12px] rounded-[30px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_direction.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-[14px] items-end justify-between mb-[25px] mt-[5px] md:w-[100%] w-[99%]">
                      <Img
                        src="images/img_1.png"
                        className="h-[165px] md:h-[auto] object-cover w-[auto]"
                        alt="One"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-[7px] w-[auto]">
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="text-gray_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Highbridge House
                          </Text>
                          <Text
                            className="leading-[153.00%] mt-[8px] not-italic text-gray_900 text-left w-[100%]"
                            variant="body8"
                          >
                            1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat
                          </Text>
                          <Text
                            className="mt-[11px] not-italic text-gray_900 text-left w-[auto]"
                            variant="body8"
                          >
                            40.885147,-73.9220459
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-semibold min-w-[185px] text-[12.99px] text-center text-white_A700 w-[auto]"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillRed500"
                        >
                          Confirmation
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_location.svg"
                    className="h-[38px] w-[8%]"
                    alt="location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default ShippingaddressModal;
