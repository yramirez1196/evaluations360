import React from "react";

// components

import CardTableEvaluationsResultsMySelf from "components/Cards/CardTableEvaluationsResultsMySelf.js";

// layout for page

import Admin from "layouts/Admin.js";
import { CardTableStaff } from "components/Cards/CardTableStaff";
import { getSession } from "next-auth/react";

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