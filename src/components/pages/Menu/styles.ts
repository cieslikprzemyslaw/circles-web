import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    fontSize: "40px",
    cursor: "pointer",
    color: "white",
    "& svg": {
      boxShadow: "1px 3px 3px rgba(0, 0, 0, .25)",
    },
  },
  menu: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    color: "#fff",
  },
}));

export default useStyles;
