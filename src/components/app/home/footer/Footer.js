import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { useStyles } from "./Footer.style";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  const classes = useStyles();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.zone}>
          <Typography
            style={{
              fontFamily: "Courier New",
              // fontFamily: "source-code-pro",
              color: "#3be8b0",
              textAlign: "center",
            }}
            variant="h6"
            gutterBottom
          >
            <span style={{ color: "#ffc845" }}>"</span>
            There are 10 types of people in the world
            <span style={{ color: "#ffc845" }}>:</span>
            <br /> those who understand binary
            <span style={{ color: "#ffc845" }}>,</span>
            <br /> and those who don't
            <span style={{ color: "#ffc845" }}>.</span>
          </Typography>
          <div className={styles.links}>
            <Link
              className={styles.space}
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FacebookIcon color="action" />
            </Link>
            <Link
              className={styles.space}
              href="https://twitter.com/"
              target="_blank"
            >
              <TwitterIcon color="action" />
            </Link>
            <Link
              className={styles.space}
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <LinkedInIcon color="action" />
            </Link>
            <Link
              className={styles.space}
              href="https://www.instagram.com/"
              target="_blank"
            >
              <InstagramIcon color="action" />
            </Link>
          </div>
        </div>
        <div className={styles.zone}>
          <Link style={{ color: "rgba(0, 0, 0, 0)" }} href="#">
            <Typography className={classes.paper}>Privacy Policy</Typography>
          </Link>
          <Link style={{ color: "rgba(0, 0, 0, 0)" }} href="#">
            <Typography className={classes.paper}>
              Terms & Conditions
            </Typography>
          </Link>
          <Link style={{ color: "rgba(0, 0, 0, 0)" }} href="#">
            <Typography className={classes.paper}>Help</Typography>
          </Link>
          <Link style={{ color: "rgba(0, 0, 0, 0)" }} href="#">
            <Typography className={classes.paper}>About Us</Typography>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
