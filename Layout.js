import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
/*video to stop to the  time : 50:46
link to video= https://youtu.be/kXQS0UjsWnI?si=i11NqAhGgadRQUOB */