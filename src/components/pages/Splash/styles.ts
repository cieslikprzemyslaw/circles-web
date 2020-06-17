import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.primary.main,
    },

    logo: {
        width: "300px",
        height: "300px"
    }
  }));

  export default useStyles;
