import React from "react";
import PropTypes from "prop-types";

// components

import NotificationDropdownEvaluations from "components/Dropdowns/TableDropdownEvaluations.js";
import { Input } from "components/general/form/input";
import { InputSelect } from "components/general/form/input-select";

export default function CardTableEvaluations({ color }) {
  const arrayEmployees = [
    {
      img: "/img/team-1-800x800.jpg",
      name: "Juan",
      jobPosition: "Developer",
      status: "pending",
      email: "example@shokworks.io",
    },
    {
      img: "/img/team-2-800x800.jpg",
      name: "Pedro",
      jobPosition: "Developer",
      status: "pending",
      email: "example@shokworks.io",
    },
    {
      img: "/img/team-3-800x800.jpg",
      name: "Maria",
      jobPosition: "Developer",
      status: "pending",
      email: "example@shokworks.io",
    },
    {
      img: "/img/team-4-470x470.png",
      name: "Ana",
      jobPosition: "Developer",
      status: "pending",
      email: "example@shokworks.io",
    },
  ];
  return (
    <>
      <div
        className="relative flex flex-row gap-x-3 items-center break-words w-full mb-6 shadow-lg rounded bg-blueGray-100  p-8"
        style={{ columnGap: "32px" }}
      >
        <Input label="Name" placeHolder={"Name"} defaultValue={""}></Input>
        <Input label="Email" placeHolder={"Email"} defaultValue={""}></Input>
        <InputSelect
          label="Job Position"
          options={["FrontEnd Dev", "Backend Dev", "FullStack"]}
        ></InputSelect>

        <div>
          <button
            className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Evaluations 360°
              </h3>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Job position
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {arrayEmployees.map((item, key) => {
                return (
                  <tr key={key}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src={item.img}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>{" "}
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {item.name}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.jobPosition}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.email}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <NotificationDropdownEvaluations id={key+1} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTableEvaluations.defaultProps = {
  color: "light",
};

CardTableEvaluations.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
