import React, { useCallback, useState } from "react";
import Navbar from "./navbar/Navbar";
import AuthModalPortal from "../authentication-portal/AuthModalPortal";
import Modal from "../authentication-portal/Modal";
import Footer from "./footer/Footer";
import Blogs from "./blogs/Blogs";
import CustomBanner from "./banner/Banner";

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
      <Navbar url={url} handleOpen={handleOpen} />
      <AuthModalPortal url={url} modal={open} closeModal={handleClose} />
      <Modal />
      <CustomBanner />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Home;
