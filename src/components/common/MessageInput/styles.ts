import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        [`& fieldset`]: {
            borderRadius: 200,
        },
    },  
}));

export default useStyles;