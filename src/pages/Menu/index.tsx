import React from "react";

import { Img, Text, Line, Button, RatingBar } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins gap-[140px] sm:gap-[40px] md:gap-[40px] items-center justify-end mx-[auto] pt-[51px] w-[100%]">
        <div className="flex flex-col gap-[102px] md:gap-[40px] items-center justify-start max-w-[1112px] mx-[auto] md:px-[20px] w-[100%]">
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
              <div className="flex flex-col gap-[6px] items-start justify-start sm:ml-[0] ml-[32px] sm:w-[100%] w-[9%]">
                <Text
                  className="not-italic text-left text-red_400 w-[auto]"
                  variant="body6"
                >
                  Menu
                </Text>
                <Line className="bg-red_400 h-[1px] w-[100%]" />
              </div>
              <div className="flex items-center justify-start sm:ml-[0] ml-[29px] sm:w-[100%] w-[auto]">
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
          <div className="flex flex-col font-opensans md:gap-[40px] gap-[79px] items-center justify-start w-[100%]">
            <Text
              className="text-gray_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Our Popular Menu
            </Text>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[28px] items-center justify-between rounded-[16px] w-[100%]">
                <Button
                  className="cursor-pointer font-semibold min-w-[232px] text-[20px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillRed400"
                >
                  All catagory
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[192px] not-italic text-[20px] text-center text-gray_900 w-[auto]"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillGray40063"
                >
                  Dinner
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[192px] not-italic text-[20px] text-center text-gray_900 w-[auto]"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillGray40063"
                >
                  Lunch
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[192px] not-italic text-[20px] text-center text-gray_900 w-[auto]"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillGray40063"
                >
                  Dessert
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[192px] not-italic text-[20px] text-center text-gray_900 w-[auto]"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillGray40063"
                >
                  Drink
                </Button>
              </div>
              <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
                <div className="flex items-center justify-start rounded-[40px] w-[100%]">
                  <div className="md:gap-[20px] gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[24px] items-center justify-center p-[30px] sm:px-[20px] rounded-[40px] w-[100%]">
                      <Img
                        src="images/img_pngitem41084.png"
                        className="h-[270px] md:h-[auto] mt-[6px] object-cover w-[270px]"
                        alt="PngItem41084"
                      />
                      <div className="flex flex-col items-center justify-end mb-[6px] pt-[17px] w-[100%]">
                        <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Spaghetti
                          </Text>
                          <Text
                            className="leading-[200.00%] not-italic text-center text-gray_800 w-[100%]"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex items-center justify-center mt-[14px] rounded-[1.76px] md:w-[100%] w-[49%]">
                          <RatingBar
                            className=""
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-[8px] md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] text-[16px] text-center text-white_A700 w-[auto]"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[24px] items-center justify-center p-[30px] sm:px-[20px] rounded-[40px] w-[100%]">
                      <Img
                        src="images/img_pngitem1447549.png"
                        className="h-[270px] md:h-[auto] mt-[6px] object-cover w-[270px]"
                        alt="PngItem1447549"
                      />
                      <div className="flex flex-col items-center justify-end mb-[6px] pt-[14px] w-[100%]">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Gnocchi
                          </Text>
                          <Text
                            className="leading-[200.00%] not-italic text-center text-gray_800 w-[100%]"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex items-center justify-center mt-[14px] rounded-[1.76px] md:w-[100%] w-[49%]">
                          <RatingBar
                            className=""
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-[8px] md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] text-[16px] text-center text-white_A700 w-[auto]"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[24px] items-center justify-center p-[30px] sm:px-[20px] rounded-[40px] w-[100%]">
                      <Img
                        src="images/img_pngegg.png"
                        className="h-[270px] md:h-[auto] mt-[6px] object-cover w-[270px]"
                        alt="pngegg"
                      />
                      <div className="flex flex-col items-center justify-end mb-[6px] pt-[14px] w-[100%]">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Rovioli
                          </Text>
                          <Text
                            className="leading-[200.00%] not-italic text-center text-gray_800 w-[100%]"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex items-center justify-center mt-[14px] rounded-[1.76px] md:w-[100%] w-[49%]">
                          <RatingBar
                            className=""
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-[8px] md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] text-[16px] text-center text-white_A700 w-[auto]"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[24px] items-center justify-center p-[30px] sm:px-[20px] rounded-[40px] w-[100%]">
                      <Img
                        src="images/img_pngwing.png"
                        className="h-[270px] md:h-[auto] mt-[6px] object-cover w-[95%]"
                        alt="pngwing"
                      />
                      <div className="flex flex-col items-center justify-end mb-[6px] pt-[15px] w-[100%]">
                        <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Penne Alla Vodak
                          </Text>
                          <Text
                            className="leading-[200.00%] not-italic text-center text-gray_800 w-[100%]"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex items-center justify-center mt-[14px] rounded-[1.76px] md:w-[100%] w-[49%]">
                          <RatingBar
                            className=""
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-[8px] md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] text-[16px] text-center text-white_A700 w-[auto]"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[24px] items-center justify-center p-[30px] sm:px-[20px] rounded-[40px] w-[100%]">
                      <Img
                        src="images/img_pngitem5290903.png"
                        className="h-[270px] md:h-[auto] mt-[6px] object-cover w-[270px]"
                        alt="PngItem5290903"
                      />
                      <div className="flex flex-col items-center justify-end mb-[6px] pt-[14px] w-[100%]">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Risoto
                          </Text>
                          <Text
                            className="leading-[200.00%] not-italic text-center text-gray_800 w-[100%]"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex items-center justify-center mt-[14px] rounded-[1.76px] md:w-[100%] w-[49%]">
                          <RatingBar
                            className=""
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-[8px] md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] text-[16px] text-center text-white_A700 w-[auto]"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[24px] items-center justify-center p-[30px] sm:px-[20px] rounded-[40px] w-[100%]">
                      <Img
                        src="images/img_pngwing_270X270.png"
                        className="h-[270px] md:h-[auto] mt-[6px] object-cover w-[270px]"
                        alt="pngwing One"
                      />
                      <div className="flex flex-col items-center justify-end mb-[6px] w-[100%]">
                        <div className="flex flex-col gap-[18px] items-center justify-start mt-[16px] w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Splitza Signature
                          </Text>
                          <Text
                            className="leading-[200.00%] not-italic text-center text-gray_800 w-[100%]"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex items-center justify-center mt-[14px] rounded-[1.76px] md:w-[100%] w-[49%]">
                          <RatingBar
                            className=""
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-[8px] md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-gray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold min-w-[158px] text-[16px] text-center text-white_A700 w-[auto]"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
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
                <div className="flex flex-row font-inter gap-[10px] items-center justify-center md:w-[100%] w-[20%]">
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-[15px] w-[15px]"
                    alt="arrowleft"
                  />
                  <div className="flex flex-row gap-[10px] items-center justify-start w-[78%]">
                    <Button
                      className="cursor-pointer font-semibold h-[35px] leading-[normal] text-[14px] text-center text-white_A700 tracking-[-0.50px] w-[35px]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray900"
                    >
                      1
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold h-[35px] leading-[normal] text-[14px] text-black_900 text-center tracking-[-0.50px] w-[35px]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray200"
                    >
                      2
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold h-[35px] leading-[normal] text-[14px] text-black_900 text-center tracking-[-0.50px] w-[35px]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray200"
                    >
                      3
                    </Button>
                    <Button
                      className="flex h-[35px] items-center justify-center w-[35px]"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbFillGray200"
                    >
                      <Img
                        src="images/img_user.svg"
                        className="h-[20px]"
                        alt="user"
                      />
                    </Button>
                  </div>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[15px] w-[15px]"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default MenuPage;
