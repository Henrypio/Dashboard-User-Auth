import React, { useState } from "react";
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
    <div className="flex flex-col xl:mx-12 bg-white w-full lg:w-[900px] mb-12 p-4 shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between my-4">
        <div className="mb-4 md:mb-0">
          <h1 className="font-semibold text-lg xl:text-2xl">All Customers</h1>
          <div className="text-sm xl:text-base text-[#16C098]">
            Active Members
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex items-center">
            <img src={search} alt="Search" className="absolute ml-3" />
            <input
              type="text"
              className="rounded-lg pl-10 pr-4 py-2 text-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="border border-gray-300 text-sm xl:text-base rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b border-gray-300">
              {[
                "Customer Name",
                "Company",
                "Phone Number",
                "Email",
                "Country",
                "Status",
              ].map((heading, index) => (
                <th
                  key={index}
                  className="font-medium text-sm xl:text-base text-gray-500 px-4 py-2 text-left"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr className="border-b border-gray-200" key={index}>
                <td className="text-sm xl:text-base text-gray-900 px-4 py-2">
                  {customer.name}
                </td>
                <td className="text-sm xl:text-base text-gray-900 px-4 py-2">
                  {customer.company}
                </td>
                <td className="text-sm xl:text-base text-gray-900 px-4 py-2">
                  {customer.phone}
                </td>
                <td className="text-sm xl:text-base text-gray-900 px-4 py-2">
                  {customer.email}
                </td>
                <td className="text-sm xl:text-base text-gray-900 px-4 py-2">
                  {customer.country}
                </td>
                <td className="text-sm xl:text-base text-gray-900 px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-lg ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm xl:text-base text-gray-600">
        <div>Showing data 1 to 8 of 256K entries</div>
        <div className="flex gap-x-2 mt-2 md:mt-0">
          <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-sm">
            {"<"}
          </button>
          {[1, 2, 3, 4, "...", 40].map((num, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-sm ${
                num === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {num}
            </button>
          ))}
          <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-sm">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
