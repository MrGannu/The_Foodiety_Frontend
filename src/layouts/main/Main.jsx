import React, { useState } from "react";
import Topbar from "../topbar/Topbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import ContactBar from "../../components/contactBar/ContactBar";

const Main = () => {
  const [openTopbar, setOpenTopBar] = useState(false);
  return (
    <div>
      <header>
        <ContactBar setState={setOpenTopBar} />
        <Topbar state={openTopbar} setState={setOpenTopBar} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
