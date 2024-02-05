import React from "react";

export const ContainerEvaluations = ({ isCreate }) => {
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
  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Employee Survey</h1>

      {/* Habilidades Blandas */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Habilidades Blandas</h2>

        {/* Pregunta 1 */}
        {softSkillsQuestions.map((item, key) => {
          return (
            <div className="mb-4" key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {item}
              </label>
              <select className="mt-1 p-2 border rounded-md w-full">
                <option value="1">Muy deficiente</option>
                <option value="2">Necesita mejorar</option>
                <option value="3">Satisfactorio</option>
                <option value="4">Bueno</option>
                <option value="5">Excelente</option>
              </select>
            </div>
          );
        })}
      </div>

      {/* Habilidades Técnicas */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Habilidades Técnicas</h2>

        {/* Pregunta 4 */}
        {techSkillsQuestions.map((item, key) => {
          return (
            <div className="mb-4" key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {item}
              </label>
              <select className="mt-1 p-2 border rounded-md w-full">
                <option value="1">Principiante</option>
                <option value="2">Nivel Intermedio</option>
                <option value="3">Competente</option>
                <option value="4">Nivel Avanzado</option>
                <option value="5">Experto</option>
              </select>
            </div>
          );
        })}
      </div>

      {/* Botón de Enviar */}
      {isCreate && (
        <button className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
          Enviar
        </button>
      )}
    </div>
  );
};
