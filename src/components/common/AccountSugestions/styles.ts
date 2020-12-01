import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: "20px",
        overflowY: "scroll",
        flexGrow: 3,
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },
    card: {
        borderRadius: "8px",
        margin: "0 auto",
    },
}));

export default useStyles;