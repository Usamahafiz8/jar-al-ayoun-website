import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppleStore from "../../../Helpers/icons/AppleStore";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
import GooglePlay from "../../../Helpers/icons/GooglePlay";
import LockIcom from "../../../Helpers/icons/LockIcon";
import MailIcon from "../../../Helpers/icons/Mail";
import PhoneIcon from "../../../Helpers/icons/Phone";
import Location from "../../../Helpers/icons/location";

export default function Footer({ settings }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [firstCol, setFirstCol] = useState(null);
  const [secondCol, setSecondCol] = useState(null);
  const [thirdCol, setThirdCol] = useState(null);
  const [footerContent, setFooterContent] = useState(null);
  const [socialLink, setSocialLink] = useState(null);

  useEffect(() => {
    if (!footerContent) {
      setFooterContent(
        websiteSetup && websiteSetup.payload && websiteSetup.payload.footer
      );
    }
  });

  useEffect(() => {
    if (!socialLink) {
      setSocialLink(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.social_links
      );
    }
  });

  useEffect(() => {
    if (!firstCol) {
      setFirstCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_first_col
      );
    }
  });
  useEffect(() => {
    if (!secondCol) {
      setSecondCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_second_col
      );
    }
  });
  useEffect(() => {
    if (!thirdCol) {
      setThirdCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_third_col
      );
    }
  });

  return (
    <footer className="footer-section-wrapper bg-white print:hidden">
      <div className="w-full flex flex-col items-center ">
        <div className="w-full bg-trasparent p-2  flex flex-row flex-wrap gap-2 justify-between items-center ">
          <span className="text-sm flex flex-row  items-center  gap-1 text-qblack font-600 cursor-pointer">
            <LockIcom className={"w-5 h-5"} /> We guarantee every transaction is
            100% secure.
          </span>
          {footerContent && footerContent.payment_image ? (
            <div className="mt-2 lg:mt-0">
              <Link href="#" passHref>
                <a>
                  <Image
                    width="318"
                    height="28"
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_URL +
                      footerContent.payment_image
                    }`}
                    alt="payment-getways"
                  />
                </a>
              </Link>
            </div>
          ) : (
            ""
          )}
          <span className="text-sm text-qblack font-600 cursor-pointer flex flex-row justify-center items-center gap-4">
            Also Available On:
            <GooglePlay className={"w-24"} />
            <AppleStore className={"w-24"} />
          </span>
        </div>
      </div>
      <div className=" container-x block mx-auto pt-[30px]">
        <div className="md:flex xl:flex sm:flex xs:flex pb-[30px]">
          <div className="md:w-2/6 xl:w-2/6 sm:w-1/2  mb-10 md:mb-0">
            <div className="lg:w-[424px]  ml-0  mb-10 lg:mb-0">
              <div className="flex flex-row items-center gap-8">
                <Link href="/" passHref>
                  <a rel="noopener noreferrer">
                    <Image
                      src="/assets/images/logo.png" // Use the correct path to your PNG image
                      alt="Jar al ayoun"
                      width={60}
                      height={90}
                    />
                  </a>
                </Link>
                <div className="flex flex-col items-center ">
                  <span className="text-xl text-qblack font-700 cursor-pointer">
                    JAR Al Ayoun
                  </span>
                  <span className="text-sm text-qblack font-400">
                    OPTICAL STORE
                  </span>
                </div>
              </div>
              <p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]">
                some sample text write here about jar store
              </p>
              <br />
              <p className="text-qblack flex flex-row  items-center  gap-1 text-[15px] w-[247px] leading-[28px]">
                <Location className={"w-5 h-5"} /> jar al ayoun head office
              </p>
              <p className="text-qblack flex flex-row items-center  gap-1 text-[15px] w-[247px] leading-[28px]">
                <PhoneIcon className={"w-5 h-5"} /> +966 51 00000
              </p>
              <p className="text-qblack text-[15px] flex items-center  gap-1 flex-row w-[247px] leading-[28px]">
                <MailIcon className={'"w-5 h-5'} /> info@jaralayoun
              </p>
            </div>
          </div>
          <div className="md:w-1/6 xl:w-1/6 sm:w-2/4	xs:w-2/4		mb-10 md:mb-0">
            {firstCol && (
              <>
                <div className="mb-5">
                  <h6 className="text-lg text-qblack font-700 ">
                    {firstCol.columnTitle}
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    {firstCol.col_links.length > 0 &&
                      firstCol.col_links.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link} passHref>
                            <a rel="noopener noreferrer">
                              <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                {item.title}
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="md:w-1/6 xl:w-1/6 sm:w-2/4	xs:w-2/4		mb-10 md:mb-0">
            {secondCol && (
              <>
                <div className="mb-5">
                  <h6 className="text-lg text-qblack font-700 ">
                    {secondCol.columnTitle}
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    {secondCol.col_links.length > 0 &&
                      secondCol.col_links.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link} passHref>
                            <a rel="noopener noreferrer">
                              <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                {item.title}
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="md:w-1/6 xl:w-1/6 sm:w-2/4	xs:w-2/4		mb-10 md:mb-0">
            {thirdCol && (
              <>
                <div className="mb-5">
                  <h6 className="text-lg text-qblack font-700 ">
                    {thirdCol.columnTitle}
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    {thirdCol.col_links.length > 0 &&
                      thirdCol.col_links.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link} passHref>
                            <a rel="noopener noreferrer">
                              <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                {item.title}
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="md:w-1/6 xl:w-1/6 sm:w-2/4	xs:w-2/4		mb-10 md:mb-0">
            {thirdCol && (
              <>
                <div className="mb-5">
                  <h6 className="text-lg text-qblack font-700 ">
                    {thirdCol.columnTitle}
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    {thirdCol.col_links.length > 0 &&
                      thirdCol.col_links.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link} passHref>
                            <a rel="noopener noreferrer">
                              <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                {item.title}
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="md:w-2/6 xl:w-2/6 sm:w-1/3	mb-10 md:mb-0">
            <div className="flex flex-col items-center ">
              <span className="text-xl text-qblack font-700 ">Instagram</span>
              <span className="text-sm text-qblack font-400">
                Instagram API
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-primary"></div>

        <div
          className="bottom-bar  pt-4 lg:h-[82px] flex lg:flex-row flex-col-reverse
         justify-between items-center"
        >
          <div className="flex rtl:space-x-reverse lg:space-x-5 space-x-2.5 justify-between items-center mb-3">
            <span className="sm:text-base text-[10px] text-qblack font-500">
              {footerContent && footerContent.copyright
                ? footerContent.copyright
                : ""}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="sm:text-base text-[10px] text-qblack font-700 ">
              <div className="flex rtl:space-x-reverse space-x-5 items-center  ">
                <span className="text-md text-qblack font-700">Follow Us:</span>
                {socialLink &&
                  socialLink.length > 0 &&
                  socialLink.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeCom
                        className="w-4 h-4 text-primary"
                        icon={item.icon}
                      />
                    </a>
                  ))}
              </div>
            </span>

            <span className="text-sm text-qblack font-400">
              Up to 5 % discount on your first subscription
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
