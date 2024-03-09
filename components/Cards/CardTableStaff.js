import { DropdownStaff } from "components/Dropdowns/DropdownStaff";
import NotificationDropdown from "components/Dropdowns/TableDropdown";
import { Input } from "components/general/form/input";
import { InputDate } from "components/general/form/input-date";
import { InputMultiselect } from "components/general/form/input-multiselect";
import { InputSelect } from "components/general/form/input-select";
import { useModal } from "hooks/modal";
import React from "react";

export const CardTableStaff = ({ color = "light" }) => {
  const { Modal, hide, isShow, show } = useModal();
  const {
    Modal: ModalEdit,
    hide: hideEdit,
    isShow: isShowEdit,
    show: showEdit,
  } = useModal();
  const staffMembers = [
    {
      name: "John Doe",
      role: "Developer",
      project: "Project A",
      initDate: "2022-03-01",
      email: "johndoe@mail.com",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      project: "Project B",
      initDate: "2022-02-15",
      email: "janesmith@mail.com",
    },
    {
      name: "Bob Johnson",
      role: "Project Manager",
      project: "Project C",
      initDate: "2022-03-10",
			email:"bobjohnson@mail.com"
    },
    // Puedes agregar más miembros del personal según sea necesario
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
        <Input label="Email" placeHolder={"Email"} defaultValue={""}></Input>
        <InputDate label="Init Date" placeHolder={"Init Date"}></InputDate>
        <InputSelect
          label="Job Position"
          options={["FrontEnd Dev", "Backend Dev", "FullStack"]}
        ></InputSelect>
        <InputMultiselect
          label={"Project"}
          options={[
            { value: "Project A", label: "Project A" },
            { value: "Project B", label: "Project B" },
            { value: "Project C", label: "Project C" },
          ]}
          defaultValue={{ value: "Project A", label: "Project A" }}
        >
          {" "}
        </InputMultiselect>
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
                Staff
              </h3>
            </div>
            <div>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  show();
                }}
              >
                Crear
              </button>
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
                  Role
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
                >
                  Project
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Init Date
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
              {staffMembers.map((item, key) => {
                return (
                  <tr key={key}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.role}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.email}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.project}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.initDate}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <DropdownStaff
                        showEdit={showEdit}
                        /*  id={key + 1}
                      isCreate={false} */
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <Modal isShow={isShow}>
            <div className="px-12 flex flex-col " style={{ rowGap: "16px" }}>
              <Input
                label="Name"
                placeHolder={"Name"}
                defaultValue={""}
              ></Input>
              <div className="">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-bold">
                  Role
                </label>
                <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Frontend Developer</option>
                  <option value="2">Project Manager</option>
                  <option value="3">QA</option>
                  <option value="4">Bussines Analyst</option>
                  <option value="5">Backend Developer</option>
                </select>
              </div>
              <div className="">
                {/* <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-bold">
                  Project
                </label>
                <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Project A</option>
                  <option value="2">Project B</option>
                  <option value="3">Project C</option>
                  <option value="4">Project D</option>
                  <option value="5">Project E</option>
                </select> */}
                <InputMultiselect
                  label={"Project"}
                  options={[
                    { value: "Project A", label: "Project A" },
                    { value: "Project B", label: "Project B" },
                    { value: "Project C", label: "Project C" },
                  ]}
                  isMulti
                >
                  {" "}
                </InputMultiselect>
              </div>
              <InputDate
                label="Init Date"
                placeHolder={"Init Date"}
              ></InputDate>
              <div className="flex justify-end w-full">
                <button
                  className="bg-red-500 active:bg-red-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    hide();
                  }}
                >
                  Cancelar
                </button>
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    hide();
                  }}
                >
                  Crear
                </button>
              </div>
            </div>
          </Modal>
        </div>

        <div>
          <ModalEdit isShow={isShowEdit}>
            <div className="px-12 flex flex-col " style={{ rowGap: "16px" }}>
              <Input
                label="Name"
                placeHolder={"Name"}
                defaultValue={""}
              ></Input>
              <div className="">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 font-bold">
                  Role
                </label>
                <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                  <option value="1">Frontend Developer</option>
                  <option value="2">Project Manager</option>
                  <option value="3">QA</option>
                  <option value="4">Bussines Analyst</option>
                  <option value="5">Backend Developer</option>
                </select>
              </div>
              <div className="">
                <InputMultiselect
                  label={"Project"}
                  options={[
                    { value: "Project A", label: "Project A" },
                    { value: "Project B", label: "Project B" },
                    { value: "Project C", label: "Project C" },
                  ]}
                  defaultValue={{ value: "Project A", label: "Project A" }}
                >
                  {" "}
                </InputMultiselect>
              </div>
              <InputDate
                label="Init Date"
                placeHolder={"Init Date"}
              ></InputDate>
              <div className="flex justify-end w-full">
                <button
                  className="bg-red-500 active:bg-red-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    hideEdit();
                  }}
                >
                  Cancelar
                </button>
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    hideEdit();
                  }}
                >
                  Crear
                </button>
              </div>
            </div>
          </ModalEdit>
        </div>
      </div>
    </>
  );
};
