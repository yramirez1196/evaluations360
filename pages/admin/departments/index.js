import React from "react";

// components

import CardTableEvaluationsResultsMySelf from "components/Cards/CardTableEvaluationsResultsMySelf.js";

// layout for page

import Admin from "layouts/Admin.js";
import { getSession } from "next-auth/react";

export default function Departments() {
  const departments = [
    {
      id: 1,
      name: "Desarrollo Backend",
      lead: "Alejandro Gómez",
    },
    {
      id: 2,
      name: "Desarrollo Frontend",
      lead: "María Rodríguez",
    },
    {
      id: 3,
      name: "Equipo de Blockchain",
      lead: "Javier Pérez",
    },
    {
      id: 4,
      name: "Recursos Humanos en IT",
      lead: "Laura Torres",
    },
    {
      id: 5,
      name: "Infraestructura y Operaciones IT",
      lead: "Carlos Sánchez",
    },
    {
      id: 6,
      name: "Seguridad Informática",
      lead: "Isabel García",
    },
    {
      id: 7,
      name: "Analítica de Datos",
      lead: "Miguel López",
    },
    {
      id: 8,
      name: "Soporte Técnico",
      lead: "Ana Martínez",
    },
  ];

  return (
    <>
      <div className="relative flex justify-between break-words w-full mb-6 shadow-lg rounded bg-blueGray-100  p-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Departments</h2>
        </div>
        <div>
          <button
            className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            Agregar
          </button>
        </div>
      </div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          "bg-white"
        }
      >
        <div className="block w-full overflow-x-auto rounded">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  }
                >
                  ID
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  }
                >
                  Department
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  }
                >
                  Lead
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {departments.map((item, key) => {
                return (
                  <tr key={key}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.id}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.lead}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      {/* <NotificationDropdownEvaluations
                        id={key + 1}
                        isCreate={false}
                      /> */}
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

Departments.layout = Admin;
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session && session.accessToken) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
};