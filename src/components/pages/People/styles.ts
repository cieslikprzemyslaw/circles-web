import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: "5vh 0",
        width: "100%",
        textAlign: "center",
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
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
