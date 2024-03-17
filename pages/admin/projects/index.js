import React from "react";

// components


// layout for page

import Admin from "layouts/Admin.js";
import { CardTableProjects } from "components/Cards/CardTableProjects";
import { getSession } from "next-auth/react";

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