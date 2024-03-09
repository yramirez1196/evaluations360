import React from "react";

// components


// layout for page

import Admin from "layouts/Admin.js";
import { CardTableProjects } from "components/Cards/CardTableProjects";

export default function Project() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableProjects />
        </div>
      </div>
    </>
  );
}

Project.layout = Admin;
