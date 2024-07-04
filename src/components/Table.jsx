import React from "react";
import { useState } from "react";
import search from "../assets/search.svg";

const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Inactive",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Active",
  },
];

function Table() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col xl:mx-12 bg-white w-max lg:w-[900px] mb-12">
      <div className="flex items-center justify-between my-4">
        <div>
          <h1 className="font-[600] text-[14px] xl:text-[22px] leading-[33px]">
            All Customers
          </h1>
          <div className="font-[400] text-[12px] xl:text-[14px] text-[#16C098] xl:leading-[21px]">
            Active Members
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <img src={search} alt="" className="absolute ml-2" />
            <input
              className="rounded-xl xl:w-[216px] xl:h-[38px] py-2 px-3 text-[#B5B7C0] bg-white font-[400] text-[14px] leading-[21px] focus:outline-none focus:shadow-outline placeholder:pl-5"
              placeholder="Search"
            />
          </div>
          <select className="border border-gray-300 text-[12px] xl:text-[16px] xl:h-[38px] xl:w-[150px] rounded-[10px]">
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200 mx-2">
        <thead>
          <tr className="border-b border-b-[#EEEEEE]">
            <th className="font-[500] xl:text-[14px] xl:leading-[33px] text-[#B5B7C0]">
              Customer Name
            </th>
            <th className="font-[500] xl:text-[14px] xl:leading-[33px] text-[#B5B7C0]">
              Company
            </th>
            <th className="font-[500] xl:text-[14px] xl:leading-[33px] text-[#B5B7C0]">
              Phone Number
            </th>
            <th className="font-[500] xl:text-[14px] xl:leading-[33px] text-[#B5B7C0]">
              Email
            </th>
            <th className="font-[500] xl:text-[14px] xl:leading-[33px] text-[#B5B7C0]">
              Country
            </th>
            <th className="font-[500] xl:text-[14px] xl:leading-[33px] text-[#B5B7C0]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr className="border-b border-b-[#EEEEEE]" key={index}>
              <td className="font-[500] text-[12px] xl:text-[14px] text-[#292D32] xl:leading-[33px] xl:px-2 py-2">
                {customer.name}
              </td>
              <td className="font-[500] text-[12px] xl:text-[14px] text-[#292D32] xl:leading-[33px]">
                {customer.company}
              </td>
              <td className="font-[500] text-[12px] xl:text-[14px] text-[#292D32] xl:leading-[33px]">
                {customer.phone}
              </td>
              <td className="font-[500] text-[12px] xl:text-[14px] text-[#292D32] xl:leading-[33px]">
                {customer.email}
              </td>
              <td className="font-[500] text-[12px] xl:text-[14px] text-[#292D32] xl:leading-[33px]">
                {customer.country}
              </td>
              <td className="font-[500] text-[12px] xl:text-[14px] text-[#292D32] xl:leading-[33px]">
                <button
                  className={`font-[500] xl:text-[14px] rounded-md border py-1 px-1 xl:px-3 leading-[21px] xl:w-[80px] ${
                    customer.status === "Active"
                      ? "bg-[#16C09861] border-[#00B087] text-[#00B087]"
                      : "bg-[#FFC5C5] border-[#DF0404] text-[#DF0404]"
                  }`}
                >
                  {customer.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div className="text-[12px] xl:text-[16px] text-gray-600">
          Showing data 1 to 8 of 256K entries
        </div>
        <div className="flex gap-x-2">
          <button className="bg-[#F5F5F5] text-[#404B52] text-[12px] xl:text-[16px] xl:px-2.5 xl:py-1.5 border rounded-sm">
            {"<"}
          </button>
          {[1, 2, 3, 4, "...", 40].map((num, index) => (
            <button
              key={index}
              className={`px-3 py-1 border ${
                num == 1
                  ? "bg-[#5932EA] text-white"
                  : "bg-[#F5F5F5] text-[#404B52]"
              }`}
            >
              {num}
            </button>
          ))}
          <button className="bg-[#F5F5F5] text-[#404B52] px-3 py-1 border">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
