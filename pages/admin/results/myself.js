import React from "react";

// components

import CardTableEvaluationsResultsMySelf from "components/Cards/CardTableEvaluationsResultsMySelf.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Myself() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableEvaluationsResultsMySelf isMyself={true} />
        </div>
      </div>
    </>
  );
}

Myself.layout = Admin;
