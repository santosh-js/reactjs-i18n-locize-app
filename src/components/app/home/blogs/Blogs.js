import React, { useEffect } from "react";
import styles from "./Blogs.module.css";
import Typography from "@material-ui/core/Typography";
// import { connect } from "react-redux";
// import { TextField } from "@material-ui/core";
import planet1 from "../../../../assets/planets/planet1.jpg";
import planet2 from "../../../../assets/planets/planet2.png";
import planet3 from "../../../../assets/planets/planet3.jpg";
import planet4 from "../../../../assets/planets/planet4.jpg";
import planet5 from "../../../../assets/planets/planet5.jpg";
import planet6 from "../../../../assets/planets/planet6.jpg";

function Blogs(props) {
  // const [location, setLocation] = useState(props.location);

  useEffect(() => {
    console.log("get the ip here !!");
  }, []);

  return (
    <>
      {/*  <div className={styles.section}>
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
      </div> */}

      <div className={styles.section}>
        <Typography
          style={{ fontFamily: "Courier New", color: "#3be8b0" }}
          variant="h2"
        >
          {"Blog Posts"}
        </Typography>
      </div>
      <div className={styles.container}>
        <div className={styles.zone}>
          <img src={planet1} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet2} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet3} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet4} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet5} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet6} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet1} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet2} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet3} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet4} alt="" className={styles.image} />
        </div>
        <div className={styles.zone}>
          <img src={planet5} alt="" className={styles.image} />
        </div>
      </div>
    </>
  );
}

export default Blogs;
