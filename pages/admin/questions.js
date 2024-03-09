import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import { useModal } from "hooks/modal";
// layout for page

import Admin from "layouts/Admin.js";
import { Input } from "components/general/form/input";
import { InputSelect } from "components/general/form/input-select";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputNumber } from "components/general/form/input-number";
export default function Questions() {
  const softSkillsQuestions = [
    "¿Cómo calificarías la capacidad del empleado para comunicarse de manera clara y efectiva con colegas y clientes?",
    "¿En qué medida el empleado contribuye al trabajo en equipo y fomenta un ambiente colaborativo?",
    "¿Cómo evaluarías la capacidad del empleado para adaptarse a cambios en proyectos o entornos laborales?",
  ];

  const techSkillsQuestions = [
    "¿En qué medida el empleado demuestra habilidades de programación en lenguajes relevantes para su rol?",
    "¿Qué tan bien el empleado utiliza y se adapta a las herramientas y tecnologías necesarias para su área de trabajo?",
    "¿Cómo evaluarías la capacidad del empleado para abordar y resolver problemas técnicos de manera efectiva?",
  ];
  const { Modal, hide, isShow, show } = useModal();
  const {
    Modal: ModalEdit,
    hide: hideEdit,
    isShow: isShowEdit,
    show: showEdit,
  } = useModal();

  const schemaEdit = Yup.object().shape({
    question: Yup.string().required("Required"),
  });
  const {
    register: registerEdit,
    handleSubmit,
    setValue: setValueEdit,
    control,
    formState: {
      // isValid,
      errors,
    },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaEdit),
  });
  React.useEffect(() => {
    if (isShowEdit) {
      setValueEdit(
        "question",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
      );
    }
  }, [isShowEdit]);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="bg-white relative rounded mb-8 flex justify-between items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 px-4 py-3">
              <h2 className="text-lg font-semibold mb-4">Questions</h2>
            </div>
            <div>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => show()}
              >
                Agregar
              </button>
            </div>
          </div>

          <div className="bg-white relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">Pregunta</th>
                  <th className="py-2 px-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {softSkillsQuestions.map((question, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{question}</td>
                    <td className="py-2 px-4">
                      <button
                        /*      onClick={() => onEdit(index)} */
                        onClick={() => showEdit()}
                        className="text-blue-500 underline"
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
                {techSkillsQuestions.map((question, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{question}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => showEdit()}
                        className="text-blue-500 underline"
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Modal isShow={isShow}>
            <div>
              <form
                /* onSubmit={handleSubmit} */ className="mb-8 bg-blueGray-100"
                style={{ padding: "40px" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Question:
                </label>
                <div className="flex flex-col mt-8">
                  <Input label={"Question"} textArea />
                </div>

                <div className="mt-4">
                  <InputSelect
                    label="Type Question"
                    options={["Tech Question", "Soft Question"]}
                  ></InputSelect>
                </div>
                <div className="">
                  <button
                    className="mt-12 bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>

        <div>
          <ModalEdit isShow={isShowEdit}>
            <div>
              <form
                /* onSubmit={handleSubmit} */ className="mb-8 bg-blueGray-100"
                style={{ padding: "40px" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Question:
                </label>
                <div className="flex flex-col mt-8">
                  <Input
                    register={registerEdit}
                    name="question"
                    label={"Question"}
                    textArea
                    defaultValue={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  "
                    }
                  />
                </div>
                <InputNumber label={"Percentage"} />

                <div className="mt-4">
                  <InputSelect
                    label="Type Question"
                    options={["Tech Question", "Soft Question"]}
                  ></InputSelect>
                </div>
                <div className="">
                  <button
                    className="mt-12 bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </ModalEdit>
        </div>
      </div>
    </>
  );
}

Questions.layout = Admin;
