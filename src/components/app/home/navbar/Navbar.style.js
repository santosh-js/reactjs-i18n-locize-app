import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    // justifyContent: "space-around",
  },
}));
