import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        overflowY: "auto",
    },
    card: {
        borderRadius: "8px",
        margin: "10px auto", width: "100%"
    },
    suggestionAvatar: {
        marginRight: theme.spacing(4),
        width: "48px",
        height: "48px"
    }
}));

export default useStyles;