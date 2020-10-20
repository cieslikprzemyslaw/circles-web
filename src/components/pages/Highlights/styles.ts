import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "1440px",
      margin: "0 auto",
      display: "flex",
      minHeight: "100vh",
      flexWrap: "wrap",
    },
    welcome: {
      position:"relative",
      margin: "30px 0px 30px 20px",
      flex: "0 1 69%",
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
    },
    avatarContainer: {
      flex: "0 1 29%",
      position: "relative",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
    },
    avatar: {
      position: "absolute",
      top: "20%",
      right: "20%",
      height: "200px",
      width: "200px",
      borderRadius: "50%", 
    },
  }));

  export default useStyles;
