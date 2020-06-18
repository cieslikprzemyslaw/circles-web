import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      maxWidth: theme.breakpoints.values.md,
      margin: "0 auto",
      padding: `0 ${theme.spacing(4)}`      

    },
    inputWrapper: {

    },
    wave: {
      position: "absolute",
      zIndex: 5,
      bottom: "-10%",
      left: "-1%",
      width: "102%",
      height: "auto"
    },

    personalImage : {
      width: "auto",
      height: "240px",
      position: "absolute",
      right: "2%",
      bottom: "0px",

      [theme.breakpoints.up("sm")]: {
        height: "310px",
        bottom: "5px"
      },
    },

    imgContainer: {
      height: "300px",
      position: "relative",
      overflow: "hidden",
      background: `linear-gradient(to top left, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,

      [theme.breakpoints.up("sm")]: {
        height: "350px"
      },
    },
    welcomeTitle: {
      color: theme.palette.primary.main
    }

  }));

  export default useStyles;
