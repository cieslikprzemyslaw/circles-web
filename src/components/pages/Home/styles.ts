import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        backgroundImage: "url(https://source.unsplash.com/random/1600x900)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

    },
    topMenu: {
        position: "relative",
        margin: "10px 0 10px 40px",
        display: "flex",
        height: "100px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        color:"white",
    },
    mainSection: {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    circles:{
        textAlign: "center",
        width: "300px",
        lineHeight: "100px",
        margin: "0 0",
        textShadow: "2px 2px 0 #111"
    },
  }));

  export default useStyles;
