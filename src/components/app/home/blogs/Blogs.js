import React, { useState, useEffect } from "react";
import styles from "./Blogs.module.css";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";

function Blogs(props) {
  const [location, setLocation] = useState(props.location);

  useEffect(() => {
    console.log("get the ip here !!");
  }, []);

  return (
    <>
      <div className={styles.section}>
        <TextField
          type="text"
          name="location"
          value={location}
          label="Filter by name"
          variant="outlined"
        />
        <TextField
          type="text"
          name="location"
          value={location}
          label="Enter your city name"
          variant="outlined"
          style={{ marginLeft: "20px" }}
        />
      </div>
      <div className={styles.section}>
        <Typography
          style={{ fontFamily: "Courier New", color: "#3be8b0" }}
          variant="h2"
        >
          {"..Blog Posts.."}
        </Typography>
      </div>
      <div className={styles.container}>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 1</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 2</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 3</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 4</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 5</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 6</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 7</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 8</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 9</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 10</Typography>
        </div>
        <div className={styles.zone}>
          <Typography variant="overline">Blog Post 11</Typography>
        </div>
      </div>
    </>
  );
}

export default Blogs;
