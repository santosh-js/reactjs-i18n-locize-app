import React, { useCallback, useState } from "react";
import Navbar from "./navbar/Navbar";
import AuthModalPortal from "../authentication_portal/AuthModalPortal";

import Banner from "./navbar/Banner";
import Footer from "./footer/Footer";

function Home(props) {
  const [open, setOpen] = useState(false);

  const url = props.history;

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Navbar handleOpen={handleOpen} />
      <AuthModalPortal url={url} modal={open} closeModal={handleClose} />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
