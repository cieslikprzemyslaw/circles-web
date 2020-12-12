import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        overflowY: "scroll",
    },
    card: {
        borderRadius: "8px",
        margin: "10px auto", width: "100%"
    },
}));

export default useStyles;