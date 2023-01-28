import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta
          name="description"
          content="London, San Francisco and Barcelona Events"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
