import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: "3vh",
    width: "100%",
    textAlign: "center",
    borderBottom: "2px #999 solid",
  },
  root: {
    position: "relative",
    margin: "auto 10px auto 0",
    width: "385px",
    backgroundColor: "#fff",
    boxShadow: "7px 11px 15px rgba(0, 0, 0, .25)",
    borderRadius: "20px",
    height: "80vh",
    overflow: "hidden",
    minWidth: "296px",
    transition: "all 255ms ease",
  },
  personData: {
    display: "flex",
    width: "50%",
    margin: "15px auto",
    justifyContent: "center",
    alignItems: "center",
  },
  contacts: {
    width: "100%",
  },
  avatar: {
    margin: "0 20px",
  },
  text: {
    width: "100%",
    textAlign: "center",
  },
}));

  export default useStyles;
