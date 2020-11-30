import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    topMenu: {
        position: "relative",
        margin: "10px 0 10px 20px",
        display: "flex",
        height: "100px",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    mainSection: {
        display: "flex",
        height: "85%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    circles:{
        textAlign: "center",
        width: "300px",
        lineHeight: "100px",
        margin: "0 0",
    },
  }));

  export default useStyles;
