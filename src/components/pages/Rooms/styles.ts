import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    topMenu: {
        display: "flex",
    },
    roomWraper: {
        margin: "20px 10vw",
        width: "35%",
        backgroundColor: "White",
        borderRadius: "10px",
        overflowY: "scroll",
        height: "500px"  
    },
  }));

  export default useStyles;
