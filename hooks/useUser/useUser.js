import { useSession } from "next-auth/react";
import React from "react";

export const useUser = () => {
  /* const [Rol, setRol] = React.useState(null) */
  const { data } = useSession();

  const rol = () => {
    if (data) {
      if (data.user.email === "admin@shokworks.io") {
        return 1;
      } else if (data.user.email === "lead@shokworks.io") {
        return 2;
      } else {
        return 3;
      }
    }
  };
  return { rol };
};
