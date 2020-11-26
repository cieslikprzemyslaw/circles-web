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
      paddingLeft:"10vw",
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
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "64px",
      width: "64px",
      borderRadius: "50%", 
      cursor: "pointer",
    },
    welcomeWraper: {
      width: "100%",
      height: "25vh",
      position: "relative",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
    }
  }));

  export default useStyles;
