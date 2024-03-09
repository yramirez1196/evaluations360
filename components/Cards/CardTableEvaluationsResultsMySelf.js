import React from "react";
import PropTypes from "prop-types";

// components

import NotificationDropdownEvaluations from "components/Dropdowns/TableDropdownEvaluations.js";
import { Input } from "components/general/form/input";
import { InputSelect } from "components/general/form/input-select";
import { InputDate } from "components/general/form/input-date";

export default function CardTableEvaluationsResultsMySelf({ color, isMyself }) {
  const arrayEmployees = [
    {
      resultSoft: "4",
      resultTech: "4",
      date: "02/02/2022",
    },
    {
      resultSoft: "4",
      resultTech: "4",
      date: "02/02/2023",
    },
    {
      resultSoft: "4",
      resultTech: "4",
      date: "02/02/2024",
    },
    
  ];
  return (
    <>
      <div
        className="relative grid gap-x-3 items-center break-words w-full mb-6 shadow-lg rounded bg-blueGray-100  p-8"
        style={{
          columnGap: "32px",
          rowGap: "22px",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        }}
      >
        {!isMyself && (
          <>
            <Input label="Name" placeHolder={"Name"} defaultValue={""}></Input>
            <Input
              label="Email"
              placeHolder={"Email"}
              defaultValue={""}
            ></Input>
            <InputSelect
              label="Job Position"
              options={["FrontEnd Dev", "Backend Dev", "FullStack"]}
            ></InputSelect>
          </>
        )}
        <InputDate label="From" placeHolder={"From"}></InputDate>
        <InputDate label="To" placeHolder={"To"}></InputDate>
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
                  Result Soft skills
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Result Technical skills
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Date
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
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.resultSoft}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.resultTech}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.date}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <NotificationDropdownEvaluations
                        id={key + 1}
                        isCreate={false}
                      />
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

CardTableEvaluationsResultsMySelf.defaultProps = {
  color: "light",
};

CardTableEvaluationsResultsMySelf.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
