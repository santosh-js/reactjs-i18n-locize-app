import React from "react";
import styles from "./Blogs.module.css";
import Typography from "@material-ui/core/Typography";

function Blogs() {
  return (
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
  );
}

export default Blogs;
