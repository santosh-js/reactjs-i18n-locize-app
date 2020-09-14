import React, { useState, Suspense } from "react";
import { lightTheme, darkTheme } from "./Themes";
import logo from "../../../../assets/logo.png";
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

function Navbar({ props }) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const [themeColor, setThemeColor] = useState(
    props.themeObject.theme.palette.type
  );
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
      i18n.changeLanguage(event.target.value);
    }
  };
  // console.log(props.themeObject.theme.palette.type);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={classes.root}
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "100",
        overflow: "hidden",
      }}
    >
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
          <Typography variant="h6" className={classes.title} />
          <Tooltip title="Visit our blog page">
            <Button size="small" component={Link} to="/blogs">
              {t("navbar.blogs")}
            </Button>
          </Tooltip>
          <Tooltip title="About us">
            <Button size="small" component={Link} to="/about">
              {t("navbar.about")}
            </Button>
          </Tooltip>
          <Tooltip title="Contact us">
            <Button size="small" component={Link} to="/contacts">
              {t("navbar.contact")}
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
              <MenuItem value={"en"}>{t("navbar.english")}</MenuItem>
              <MenuItem value={"it"}>{t("navbar.italian")}</MenuItem>
            </Select>
            <FormHelperText>{t("navbar.language")}</FormHelperText>
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
              <MenuItem value={"light"}>{t("navbar.light")}</MenuItem>
              <MenuItem value={"dark"}>{t("navbar.dark")}</MenuItem>
            </Select>
            <FormHelperText>{t("navbar.theme")}</FormHelperText>
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
              <MenuItem onClick={props.handleOpen}>
                {t("navbar.login")}
              </MenuItem>
              <MenuItem component={Link} to="/profile" onClick={handleClose}>
                {t("navbar.profile")}
              </MenuItem>
              <MenuItem
                component={Link}
                to="/logout"
                onClick={() => {
                  serviceObj.logout();
                }}
              >
                {t("logout")}
              </MenuItem>
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
Loading.propTypes = {
  themeObject: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

// getting the theme object from store as props
const mapStateToProps = (state) => ({
  themeObject: state.theme,
});

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
function Loading(props) {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar props={props} />
      {/*  <Navbar username={props.match.params}/>  */}
    </Suspense>
  );
}

export default connect(mapStateToProps, { changeTheme })(Loading);
