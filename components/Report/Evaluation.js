import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";

import * as XLSX from "xlsx-js-style";

export const EvaluationExcel = () => {
  const exportExcel = () => {
    const wb = XLSX.utils.book_new();

    // STEP 2: Create data rows and styles
    let row = [
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {},
        },
        {
          v: "Periodo de evaluación",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "OCT 2024",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "Nombre del evaluador",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Candella Uccello",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {},
        },
        {
          v: "Nombre del Dpto",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Recursos Humanos",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "15%",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "15%",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "15%",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "15%",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "20%",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "20%",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],

      [
        {
          v: "Nombre del evaluado",
          t: "s",
          s: {
            alignment: {
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "¿Cómo calificarías la capacidad del empleado para comunicarse de manera clara y efectiva con colegas y clientes?",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "0606FC" },
            },
            fill: { fgColor: { rgb: "E7E0DA" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "¿En qué medida el empleado contribuye al trabajo en equipo y fomenta un ambiente colaborativo?",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "0606FC" },
            },
            fill: { fgColor: { rgb: "E7E0DA" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "¿Cómo evaluarías la capacidad del empleado para adaptarse a cambios en proyectos o entornos laborales?",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "0606FC" },
            },
            fill: { fgColor: { rgb: "E7E0DA" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "¿En qué medida el empleado demuestra habilidades de programación en lenguajes relevantes para su rol?",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "0606FC" },
            },
            fill: { fgColor: { rgb: "E7E0DA" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "¿Qué tan bien el empleado utiliza y se adapta a las herramientas y tecnologías necesarias para su área de trabajo?",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "0606FC" },
            },
            fill: { fgColor: { rgb: "E7E0DA" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "¿Cómo evaluarías la capacidad del empleado para abordar y resolver problemas técnicos de manera efectiva?",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "0606FC" },
            },
            fill: { fgColor: { rgb: "E7E0DA" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Valoración Final",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "0606FC" },
            },
            fill: { fgColor: { rgb: "E7E0DA" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "Yeltsin Ramirez",
          t: "s",
          s: {
            font: {
              name: "Arial",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "Franklyn Barrera",
          t: "s",
          s: {
            font: {
              name: "Arial",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "Valor - Término Verbal",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "E7E0DA" },
            },
            fill: { fgColor: { rgb: "5C76F1" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Descripción",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "E7E0DA" },
            },
            fill: { fgColor: { rgb: "5C76F1" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "1 - Muy deficiente",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Desempeño muy deficiente, no cumple con los resultados esperados",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "2 - Deficiente",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Desempeño deficiente,  no cumple con los resultados esperados o lo hace ocasionalmente con mucha dificultad",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "3 - Medio",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Desempeño medio,  cumple a medias con los resultados esperados ",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "4 - Bueno",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Desempeño satisfactorio, demuestra lo esperado para su nivel con base en los términos establecidos",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "5 - Excelente",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Supera los resultados esperados demostrando una conducta sobresaliente",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
    ];
  
    let row2 = [
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {},
        },
        {
          v: "Periodo de evaluación",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "OCT 2024",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "Nombre del evaluador",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Candella Uccello",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {},
        },
        {
          v: "Nombre del Dpto",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Recursos Humanos",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],

      [
        {
          v: "Nombre del evaluado",
          t: "s",
          s: {
            alignment: {
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Habilidades Blandas",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Habilidades Tecnicas",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Valoración Final",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Observaciones",
          t: "s",
          s: {
            /*  alignment: { wrapText: true }, */
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "ffffff" },
            },
            fill: { fgColor: { rgb: "0606FC" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "Yeltsin Ramirez",
          t: "s",
          s: {
            font: {
              name: "Arial",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "Franklyn Barrera",
          t: "s",
          s: {
            font: {
              name: "Arial",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "4",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
        {
          v: "",
          t: "s",
          s: {
            fill: { fgColor: { rgb: "ffffff" }, bgColor: { rgb: "ffffff" } },
          },
        },
      ],
      [
        {
          v: "Valor - Término Verbal",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "E7E0DA" },
            },
            fill: { fgColor: { rgb: "5C76F1" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Descripción",
          t: "s",
          s: {
            alignment: {
              wrapText: true,
              horizontal: "center",
              vertical: "center",
            },
            font: {
              name: "Montserrat",
              sz: 10,
              bold: true,
              color: { rgb: "E7E0DA" },
            },
            fill: { fgColor: { rgb: "5C76F1" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "1 - Muy deficiente",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Desempeño muy deficiente, no cumple con los resultados esperados",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "2 - Deficiente",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Desempeño deficiente,  no cumple con los resultados esperados o lo hace ocasionalmente con mucha dificultad",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "3 - Medio",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Desempeño medio,  cumple a medias con los resultados esperados ",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "4 - Bueno",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Desempeño satisfactorio, demuestra lo esperado para su nivel con base en los términos establecidos",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
      [
        {
          v: "5 - Excelente",
          t: "s",
          s: {
            font: {
              name: "Montserrat",
              sz: 10,
              italic: true,
              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
        {
          v: "Supera los resultados esperados demostrando una conducta sobresaliente",
          t: "s",
          s: {
            alignment: { wrapText: true },
            font: {
              name: "Montserrat",
              sz: 10,

              color: { rgb: "000000" },
            },
            fill: { fgColor: { rgb: "ffffff" } },
            border: {
              right: {
                style: "thin",
                color: "000000",
              },
              left: {
                style: "thin",
                color: "000000",
              },
              top: {
                style: "thin",
                color: "000000",
              },
              bottom: {
                style: "thin",
                color: "000000",
              },
            },
          },
        },
      ],
    ];

    // STEP 3: Create worksheet with rows; Add worksheet to workbook
    const ws = XLSX.utils.aoa_to_sheet([
      row[0],
      row[1],
      row[2],
      row[3],
      row[4],
      row[5],
      row[6],
      row[7],
      row[8],
      row[9],
      row[10],
      row[11],
      row[12],
      row[13],
      row[14],
      row[15],
      row[16],
      row[17],
    ]);

    const ws2 = XLSX.utils.aoa_to_sheet([
      row2[0],
      row2[1],
      row2[2],
      row2[3],
      row2[4],
      row2[5],
      row2[6],
      row2[7],
      row2[8],
      row2[9],
      row2[10],
      row2[11],
      row2[12],
      row2[13],
      row2[14],
      row2[15],
      row2[16],
      row2[17],
    ]);

    ws["!cols"] = [
      { wch: 35 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 20 },
    ];
    ws2["!cols"] = [
      { wch: 35 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 20 },
    ];

    XLSX.utils.book_append_sheet(wb, ws, "Evaluaciones");
    XLSX.utils.book_append_sheet(wb, ws2, "Resultado final");
    // STEP 4: Write Excel file to browser
    XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");

    // STEP 4: Write Excel file to browser
  };
  return (
    <button
      className="bg-emerald-500 text-white px-4 py-1 rounded-lg flex items-center"
			style={{gap:"12px"}}
      onClick={() => exportExcel()}
    >
			<div>Importar</div>
       <ArrowDownTrayIcon width={18} color="white"></ArrowDownTrayIcon>
    </button>
  );
};
