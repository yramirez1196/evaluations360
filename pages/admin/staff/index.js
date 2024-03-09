import React from "react";

// components

import CardTableEvaluationsResultsMySelf from "components/Cards/CardTableEvaluationsResultsMySelf.js";

// layout for page

import Admin from "layouts/Admin.js";
import { CardTableStaff } from "components/Cards/CardTableStaff";

export default function Staff() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
					<CardTableStaff></CardTableStaff>
          {/* <CardTableEvaluationsResultsMySelf isMyself={true} /> */}
        </div>
      </div>
    </>
  );
}

Staff.layout = Admin;
