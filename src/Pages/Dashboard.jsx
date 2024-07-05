import React, { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import settingsIcon from "../assets/settings.svg";
import dashboardHome from "../assets/dashboardHome.svg";
import productIcon from "../assets/productIcon.svg";
import customerIcon from "../assets/customerIcon.svg";
import incomeIcon from "../assets/incomeIcon.svg";
import promoteIcon from "../assets/promoteIcon.svg";
import help from "../assets/help.svg";
import search from "../assets/search.svg";
import Table from "../components/Table";
import headshot from "../assets/headshot.svg";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row w-full">
      <div
        className={`flex flex-col justify-between ${
          isMenuOpen ? "w-16 md:w-64" : "absolute md:relative w-full"
        } bg-white z-50`}
      >
        <div className="flex flex-col gap-y-2 w-max md:w-64">
          <div className="flex gap-x-4 p-4" onClick={toggleMenu}>
            <img src={settingsIcon} alt="Settings Icon" className="md:w-10" />
            <div>
              <h1
                className={`font-semibold text-xl md:text-3xl ${
                  isMenuOpen ? "hidden" : "block md:hidden"
                }`}
              >
                Dashboard
              </h1>
            </div>
          </div>

          <div
            className={`flex flex-col gap-y-3 p-4 ${
              isMenuOpen ? "hidden md:flex" : "flex"
            }`}
          >
            <div className="flex gap-x-4 items-center p-2 hover:bg-purple-700 hover:text-white hover:cursor-pointer rounded-lg md:w-60 md:h-12">
              <img src={dashboardHome} alt="Dashboard Home Icon" />
              <p className="text-sm text-gray-500 hover:text-white">
                Dashboard
              </p>
            </div>
            <div className="flex gap-x-4 items-center p-2 hover:bg-purple-700 hover:text-white hover:cursor-pointer rounded-lg md:w-60 md:h-12">
              <img src={productIcon} alt="Product Icon" />
              <p className="text-sm text-gray-500 hover:text-white">Product</p>
            </div>
            <div className="flex gap-x-4 items-center p-2 hover:bg-purple-700 hover:text-white hover:cursor-pointer rounded-lg md:w-60 md:h-12">
              <img src={customerIcon} alt="Customer Icon" />
              <p className="text-sm text-gray-500 hover:text-white">Customer</p>
            </div>
            <div className="flex gap-x-4 items-center p-2 hover:bg-purple-700 hover:text-white hover:cursor-pointer rounded-lg md:w-60 md:h-12">
              <img src={incomeIcon} alt="Income Icon" />
              <p className="text-sm text-gray-500 hover:text-white">Income</p>
            </div>
            <div className="flex gap-x-4 items-center p-2 hover:bg-purple-700 hover:text-white hover:cursor-pointer rounded-lg md:w-60 md:h-12">
              <img src={promoteIcon} alt="Promote Icon" />
              <p className="text-sm text-gray-500 hover:text-white">Promote</p>
            </div>
            <div className="flex gap-x-4 items-center p-2 hover:bg-purple-700 hover:text-white hover:cursor-pointer rounded-lg md:w-60 md:h-12">
              <img src={help} alt="Help Icon" />
              <p className="text-sm text-gray-500 hover:text-white">Help</p>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-center gap-y-2 pl-2 md:pl-0 md:w-64 ${
            isMenuOpen ? "hidden" : ""
          }`}
        >
          <div className="flex flex-col justify-around bg-gradient-to-r from-pink-300 to-purple-900 rounded-2xl w-60 h-36 p-3 mt-4">
            <p className="text-sm text-white text-center">
              Upgrade to PRO to get access all Features!
            </p>
            <button className="h-10 w-52 bg-white rounded-xl text-sm text-purple-900">
              Get PRO now
            </button>
          </div>

          <div className="flex items-center mt-4">
            <img
              src={headshot}
              alt="Profile"
              width="42"
              height="42"
              className="rounded-full mr-2"
            />
            <div>
              <p className="text-sm">Evano</p>
              <span className="text-xs text-gray-500">Program Manager</span>
            </div>
            <div>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#757575"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <LogoutButton />
        </div>
      </div>

      <div className="bg-[#FAFBFF] px-4">
        <div className="flex flex-col md:flex-row justify-between p-4">
          <h1 className="font-[400] text-[20px] md:text-[24px] xl:leading-[36px]">
            Hello, Evano👋🏼,
          </h1>
          <div className="relative mt-4 md:mt-0 flex flex-col justify-center">
            <img
              src={search}
              alt=""
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              className="rounded-xl w-full md:w-[200px] xl:w-[216px] xl:h-[38px] py-2 pl-10 pr-3 text-[#B5B7C0] bg-white font-[400] text-[14px] leading-[21px] focus:outline-none focus:shadow-outline"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start md:gap-x-2 xl:justify-around xl:mx-12 items-center bg-white rounded-2xl mb-4 p-2 w-max lg:w-[900px]">
          <div className="flex md:gap-x-2 tracking-wide">
            <div>
              <svg
                className="w-[55px] xl:w-[84px]"
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="42"
                  cy="42"
                  r="42"
                  fill="url(#paint0_linear_2702_521)"
                />
                <path
                  d="M38.0302 41.0229C37.8552 41.0054 37.6452 41.0054 37.4527 41.0229C33.2877 40.8829 29.9802 37.4704 29.9802 33.2704C29.9802 28.9829 33.4452 25.5004 37.7502 25.5004C42.0377 25.5004 45.5202 28.9829 45.5202 33.2704C45.5027 37.4704 42.1952 40.8829 38.0302 41.0229Z"
                  stroke="#00AC4F"
                  strokeWidth="2.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50.7171 28.9996C54.1121 28.9996 56.8421 31.7471 56.8421 35.1246C56.8421 38.4321 54.2171 41.1271 50.9446 41.2496C50.8046 41.2321 50.6471 41.2321 50.4896 41.2496"
                  stroke="#00AC4F"
                  strokeWidth="2.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.2805 47.4796C25.0455 50.3146 25.0455 54.9346 29.2805 57.7521C34.093 60.9721 41.9855 60.9721 46.798 57.7521C51.033 54.9171 51.033 50.2971 46.798 47.4796C42.003 44.2771 34.1105 44.2771 29.2805 47.4796Z"
                  stroke="#00AC4F"
                  strokeWidth="2.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M54.0947 57.0004C55.3547 56.7379 56.5447 56.2304 57.5247 55.4779C60.2547 53.4304 60.2547 50.0529 57.5247 48.0054C56.5622 47.2704 55.3897 46.7804 54.1472 46.5004"
                  stroke="#00AC4F"
                  strokeWidth="2.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2702_521"
                    x1="74.55"
                    y1="2.14197e-06"
                    x2="42"
                    y2="84"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D3FFE7" />
                    <stop offset="1" stopColor="#EFFFF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[#ACACAC] font-[400] text-[14px] leading-[21px]">
                Total Customers
              </p>
              <p className="text-[#333333] font-[600] text-[32px] leading-[32px]">
                5,423
              </p>
              <div className="flex items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 17L10 5"
                      stroke="#00AC4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16663 9.99996L9.99996 4.16663L15.8333 9.99996"
                      stroke="#00AC4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-[700] text-[#00AC4F] text-[12px] leading-[18px]">
                    16%
                  </span>
                </div>
                <div className="font-[400] text-[12px] leading-[18px]">
                  {" "}
                  this month
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:gap-x-2 tracking-wide">
            <div>
              <svg
                className="w-[55px] xl:w-[84px]"
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="42"
                  cy="42"
                  r="42"
                  fill="url(#paint0_linear_2702_539)"
                />
                <path
                  d="M46.0667 53.75L48.6 56.2833L53.6667 51.2167"
                  stroke="#00AC4F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.2669 40.117C42.1003 40.1003 41.9003 40.1003 41.7169 40.117C37.7503 39.9836 34.6003 36.7336 34.6003 32.7336C34.5836 28.6503 37.9003 25.3336 41.9836 25.3336C46.0669 25.3336 49.3836 28.6503 49.3836 32.7336C49.3836 36.7336 46.2169 39.9836 42.2669 40.117Z"
                  stroke="#00AC4F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.9832 58.3498C38.9498 58.3498 35.9332 57.5831 33.6332 56.0498C29.5998 53.3498 29.5998 48.9498 33.6332 46.2664C38.2165 43.1998 45.7332 43.1998 50.3165 46.2664"
                  stroke="#00AC4F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2702_539"
                    x1="74.55"
                    y1="2.14197e-06"
                    x2="42"
                    y2="84"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D3FFE7" />
                    <stop offset="1" stop-color="#EFFFF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[#ACACAC] font-[400] text-[14px] leading-[21px]">
                Members
              </p>
              <p className="text-[#333333] font-[600] text-[32px] leading-[32px]">
                1,893
              </p>
              <div className="flex items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L10 15"
                      stroke="#D0004B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.8334 10L10 15.8334L4.16671 10"
                      stroke="#D0004B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-[700] text-[#D0004B] text-[12px] leading-[18px]">
                    1%
                  </span>
                </div>
                <div className="font-[400] text-[12px] leading-[18px]">
                  {" "}
                  this month
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:gap-x-2 tracking-wide">
            <div>
              <svg
                className="w-[55px] xl:w-[84px]"
                width="84"
                height="84"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="42"
                  cy="42"
                  r="42"
                  fill="url(#paint0_linear_2702_556)"
                />
                <path
                  d="M32.27 24.5H51.7125C57.9425 24.5 59.5 26.0575 59.5 32.27V43.3475C59.5 49.5775 57.9425 51.1175 51.73 51.1175H32.27C26.0575 51.135 24.5 49.5775 24.5 43.365V32.27C24.5 26.0575 26.0575 24.5 32.27 24.5Z"
                  stroke="#00AC4F"
                  strokeWidth="2.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 51.1345V59.4995"
                  stroke="#00AC4F"
                  strokeWidth="2.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.5 43.75H59.5"
                  stroke="#00AC4F"
                  strokeWidth="2.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.125 59.5H49.875"
                  stroke="#00AC4F"
                  strokeWidth="2.625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2702_556"
                    x1="74.55"
                    y1="2.14197e-06"
                    x2="42"
                    y2="84"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D3FFE7" />
                    <stop offset="1" stop-color="#EFFFF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[#ACACAC] font-[400] text-[14px] leading-[21px]">
                Active Now
              </p>
              <p className="text-[#333333] font-[600] text-[32px] leading-[32px]">
                189
              </p>
              <div className="flex items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 17L10 5"
                      stroke="#00AC4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16663 9.99996L9.99996 4.16663L15.8333 9.99996"
                      stroke="#00AC4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-[700] text-[#00AC4F] text-[12px] leading-[18px]">
                    16%
                  </span>
                </div>
                <div className="font-[400] text-[12px] leading-[18px]">
                  {" "}
                  this month
                </div>
              </div>
            </div>
          </div>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
