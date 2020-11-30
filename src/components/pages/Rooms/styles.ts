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
        width: "400px",
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
        overflowY: "scroll",
        height: "80vh"  
    },
    roomsButton: {
        display: "block",
        width: "100%",
        height: "100px",
        backgroundColor: "#f5f5f5",
        borderRadiusBottom: "1px solid #eee",
        borderRadius: "0px",
    },
    room:{
        width: "100%",
        height: "100px",
        textAlign: "center",
        lineHeight: "100px",
    },
  }));

  export default useStyles;
