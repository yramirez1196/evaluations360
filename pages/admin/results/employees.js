import React from "react";

// components

import CardTableEvaluationsResults from "components/Cards/CardTableEvaluationsResults.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Employees() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableEvaluationsResults isCreate={false} />
        </div>
      </div>
    </>
  );
}

Employees.layout = Admin;
