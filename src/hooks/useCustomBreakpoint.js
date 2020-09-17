import useMediaQuery from "@material-ui/core/useMediaQuery";

let layouts = [
  {
    lg: {
      name: "DESKTOP",
      width: 1280,
      value: "lg",
    },
  },
  {
    md: {
      name: "TAB",
      width: 960,
      value: "md",
    },
  },
  {
    sm: {
      name: "MOBILE",
      width: 600,
      value: "sm",
    },
  },
];
// #72e9af
function getCurrentLayout(theme, layouts) {
  const { values } = theme.breakpoints;

  layouts.filter((currentLayout) => console.log("s"));

  if (values) {
    return "san";
  }
}

function useCustomBreakpoint(theme) {
  const { values } = theme.breakpoints;
  // console.log("CURRENT LAYOUT: ", values);
  return useMediaQuery(theme.breakpoints.down("sm"));
}

export default useCustomBreakpoint;
