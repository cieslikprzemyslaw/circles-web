import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "10px 0",
    },
    image: {
        width: "50px",
        height: "50px",
        borderRadius: "50px",
        marginRight: "10px",
        boxShadow: "0px 3px 9px rgba(0, 0, 0, .25)"
    }
}));

export default useStyles;