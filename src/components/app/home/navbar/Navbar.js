import React, { useState } from "react";
import { lightTheme, darkTheme } from "./Themes";
import logo from "./assets/logos.png";
import {
  Toolbar,
  IconButton,
  AppBar,
  Menu,
  MenuItem,
  Typography,
  Button,
  Tooltip,
  FormControl,
  FormHelperText,
  Select,
} from "@material-ui/core";
import { useStyles } from "./Navbar.style";
import { AccountCircle } from "@material-ui/icons";
import { changeTheme } from "../../../../actions/themeActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// ==================================================
import serviceObj from "../../../auth/services/AuthService";
import { useTranslation } from "react-i18next";
import styles from "../../dashboard/Dashboard.module.css";

function Navbar(props) {
  // const { t, i18n } = useTranslation();

  // const change = (lng) => {
  //   console.log(props.username.user);
  //   i18n.changeLanguage(lng);
  // };

  const classes = useStyles();

  const [themeColor, setThemeColor] = useState("");
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "theme") {
      if (event.target.value !== "light") {
        props.changeTheme(darkTheme);
      } else {
        props.changeTheme(lightTheme);
      }
      setThemeColor(event.target.value);
    }
    if (event.target.name === "lang") {
      console.log("lang");
      setLanguage(event.target.value);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} alt="Spineor Logo" />
          </IconButton>
          <Tooltip title="Visit out blog page">
            <Typography variant="h6" className={classes.title} />
          </Tooltip>
          <Tooltip title="Visit out blog page">
            <Button size="small" component={Link} to="/blogs">
              Blogs
            </Button>
          </Tooltip>
          <Tooltip title="About us">
            <Button size="small" component={Link} to="/about">
              About us
            </Button>
          </Tooltip>
          <Tooltip title="Contact us">
            <Button size="small" component={Link} to="/contacts">
              Contact us
            </Button>
          </Tooltip>
          <FormControl size="small" className={classes.formControl}>
            <Select
              value={language}
              onChange={handleChange}
              displayEmpty
              autoWidth
              name="lang"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                None
              </MenuItem>
              <MenuItem value={"EN"}>English</MenuItem>
              <MenuItem value={"IT"}>Italian</MenuItem>
            </Select>
            <FormHelperText>Language</FormHelperText>
          </FormControl>
          <FormControl size="small" className={classes.formControl}>
            <Select
              value={themeColor}
              onChange={handleChange}
              displayEmpty
              autoWidth
              name="theme"
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"light"}>Light</MenuItem>
              <MenuItem value={"dark"}>Dark</MenuItem>
            </Select>
            <FormHelperText>Theme</FormHelperText>
          </FormControl>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Tooltip title="User actions">
                <AccountCircle />
              </Tooltip>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={props.handleOpen}>Login</MenuItem>
              <MenuItem component={Link} to="/profile" onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem
                component={Link}
                to="/logout"
                onClick={() => {
                  serviceObj.logout();
                }}
              >
                {/* {t("logout")} */}
                Logout
              </MenuItem>
              <Link className={styles.logout}></Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// default theme if no props passed
// Navbar.defaultProps = {
//   themeObject: {},
// };

// specifying the types of props passed to this component
Navbar.propTypes = {
  themeObject: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

// getting the theme object from store as props
const mapStateToProps = (state) => ({
  themeObject: state.theme,
});

export default connect(mapStateToProps, { changeTheme })(Navbar);

// function Dashboard(props) {
//   return (
//     <div className={styles.all}>
//       <div className={styles.lang}>
//         <button onClick={() => change("it")}>Italian</button>
//         <button onClick={() => change("en")}>English</button>
//       </div>
//       <div className={styles.display}>
//         <h1>{t("greet") + " " + props.username.user}</h1>
//         <h2>{t("title")}</h2>
//       </div>
//       <p>{t("description")}</p>
//     </div>
//   );
// }

// // loading component for suspense fallback
// const Loader = () => (
//   <div className="App">
//     <div>loading...</div>
//   </div>
// );

// // here app catches the suspense from page in case translations are not yet loaded
// function Loading(props) {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Dashboard username={props.match.params} />
//     </Suspense>
//   );
// }

// const mapStateToProps = (state) => ({ langauge: state.langauge });
// export default connect(mapStateToProps, null)(Loading);
