import React from "react";

import Head from "next/head";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";

import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps, session }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <SessionProvider session={session}>
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Notus NextJS by Creative Tim</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    </SessionProvider>
  );
}