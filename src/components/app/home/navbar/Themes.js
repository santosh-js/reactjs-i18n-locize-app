import { createMuiTheme } from "@material-ui/core/styles";
export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

export const darkTheme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "dark",
      },
    },
  },
  palette: {
    type: "dark",
  },
});
