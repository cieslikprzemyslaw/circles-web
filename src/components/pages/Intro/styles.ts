import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    introViewRoot:{
        maxWidth: theme.breakpoints.values.md,
        margin: "0 auto",
    },
    introViewContentWrapper:{
      maxWidth: "60%",
      marginTop: "5%",
    },
  }));

  export default useStyles;
