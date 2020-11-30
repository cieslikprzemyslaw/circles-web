import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "1440px",
      // display: "flex",
      // flexWrap: "wrap",
      width: "40%",
      // justifyContent: "flex-start",
      // alignItems: "flex-start",
    },
    welcome: {
      display: "flex",
      flexWrap: "wrap",
    },
    avatarContainer: {
      position: "relative",
    },
    welcomeWraper: {
      width: "100%",
      height: "25vh",
      position: "relative",
      display: "flex",
    },
    greetings: {
      width: "100%",
      lineHeight: "100%",
      color: "white",
      textShadow: "2px 2px 0 #111"
    },
    suggestionsInfo: {
      width: "100%",
      lineHeight: "100%",
      margin: "5px 0",
      color: "white",
      textShadow: "2px 2px 0 #111"
    },
  }));

  export default useStyles;
