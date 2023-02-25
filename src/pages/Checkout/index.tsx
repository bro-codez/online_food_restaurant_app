import React from "react";

import {
  Img,
  Text,
  Line,
  Button,
  Input,
  SelectBox,
  TextArea,
  RadioGroup,
  Radio,
} from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex font-poppins items-center justify-end mx-[auto] pt-[51px] w-[100%]">
        <div className="flex flex-col gap-[120px] md:gap-[40px] items-center justify-start w-[100%]">
          <div className="flex flex-col gap-[100px] md:gap-[40px] items-start justify-start max-w-[1112px] mx-[auto] md:px-[20px] w-[100%]">
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
                <div
                  className="common-pointer flex flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[31px] sm:w-[100%] w-[17%]"
                  onClick={() => navigate("/orderonline")}
                >
                  <Text
                    className="not-italic text-left text-red_400 w-[auto]"
                    variant="body6"
                  >
                    Order online
                  </Text>
                  <Line className="bg-red_400 h-[1px] w-[49%]" />
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
            <div className="flex md:flex-col flex-row font-opensans md:gap-[40px] gap-[99px] items-start justify-start md:w-[100%] w-[87%]">
              <Button
                className="flex h-[50px] items-center justify-center mb-[843px] rounded-[50%] w-[50px]"
                size="mdIcn"
                variant="icbFillGray900"
              >
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-[16px]"
                  alt="arrowleft"
                />
              </Button>
              <div className="bg-white_A700 flex items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[16px] shadow-bs6 md:w-[100%] w-[85%]">
                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Checkout
                  </Text>
                  <div className="flex flex-col font-poppins gap-[32px] items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[14px] items-start justify-start rounded-[8px] w-[100%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body3"
                      >
                        Shipping address
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between rounded-[8px] w-[100%]">
                        <Input
                          className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-gray_900 text-gray_900 text-left w-[100%]"
                          wrapClassName="sm:w-[100%] w-[auto]"
                          name="Subject"
                          placeholder="1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat"
                        ></Input>
                        <Button
                          className="common-pointer cursor-pointer font-normal min-w-[166px] not-italic text-[18px] text-center text-white_A700 w-[auto]"
                          onClick={() => navigate("/shippingaddress")}
                          shape="RoundedBorder8"
                          size="md"
                          variant="FillIndigo300"
                        >
                          Change
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body3"
                      >
                        Order data
                      </Text>
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                          <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                            <Input
                              className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                              wrapClassName="sm:w-[100%] w-[auto]"
                              type="text"
                              name="Emailaddress"
                              placeholder="First name"
                            ></Input>
                            <Input
                              className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                              wrapClassName="sm:w-[100%] w-[auto]"
                              type="text"
                              name="Emailaddress One"
                              placeholder="Last name"
                            ></Input>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                            <div className="bg-white_A700 border-[1px] border-gray_400 border-solid flex md:flex-1 flex-row gap-[16px] items-center justify-start p-[12px] rounded-[8px] md:w-[100%] w-[auto]">
                              <SelectBox
                                className="mb-[2px] ml-[4px] sm:w-[100%] w-[15%]"
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
                                className="not-italic text-gray_500 text-left w-[auto]"
                                variant="body6"
                              >
                                Phone number
                              </Text>
                            </div>
                            <Input
                              className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                              wrapClassName="md:w-[100%] sm:w-[100%] w-[auto]"
                              type="email"
                              name="Emailaddress Two"
                              placeholder="Email address"
                            ></Input>
                          </div>
                          <TextArea
                            className="font-normal leading-[normal] not-italic text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                            name="Massage"
                            placeholder="Message"
                            size="md"
                          ></TextArea>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body3"
                        >
                          Payment method
                        </Text>
                      </div>
                      <RadioGroup className="w-[100%]" name="paymentmethod">
                        <RadioGroup
                          className="flex flex-1 w-[100%]"
                          name="paymentmethod"
                        >
                          <Radio
                            value="CashOnDelivery"
                            className="font-normal leading-[normal] not-italic text-[18px] text-gray_900 text-left"
                            inputClassName="h-[24px] mr-[5px] w-[24px]"
                            checked={false}
                            name="paymentmethod"
                            label="Cash On Delivery"
                            size="md"
                          ></Radio>
                          <Radio
                            value="BCAVirtualAccount"
                            className="font-normal leading-[normal] ml-[16px] not-italic text-[18px] text-gray_900 text-left"
                            inputClassName="h-[24px] mr-[5px] w-[24px]"
                            checked={false}
                            name="paymentmethod"
                            label="BCA Virtual Account"
                          ></Radio>
                        </RadioGroup>
                        <RadioGroup
                          className="flex flex-1 mt-[24px] w-[100%]"
                          name="paymentmethod"
                        >
                          <Radio
                            value="CreditCard"
                            className="font-normal leading-[normal] not-italic text-[18px] text-gray_900 text-left"
                            inputClassName="h-[24px] mr-[5px] w-[24px]"
                            checked={false}
                            name="paymentmethod"
                            label="Credit Card"
                          ></Radio>
                          <Radio
                            value="TransferBank"
                            className="font-normal leading-[normal] ml-[16px] not-italic text-[18px] text-gray_900 text-left"
                            inputClassName="h-[24px] mr-[5px] w-[24px]"
                            checked={false}
                            name="paymentmethod"
                            label="Transfer Bank"
                          ></Radio>
                        </RadioGroup>
                      </RadioGroup>
                    </div>
                    <Button
                      className="cursor-pointer font-medium md:min-w-[100%] min-w-[722px] text-[20px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder12"
                      size="lg"
                      variant="FillRed400"
                    >
                      Order now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
