import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "calc(100vh - (300px + 42px))",
      alignItems: "center",
      //paddingTop: "60px"
      [theme.breakpoints.up("sm")]: {
        minHeight: "calc(100vh - (350px + 42px))",
        alignItems: "flex-start"
      },
    },
    container: {
      maxWidth: theme.breakpoints.values.md,
      width: "100%",
      padding: `0 ${theme.spacing(4)}px`,
    },
    inputWrapper: {

    },
    signImage : {
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
    imgContainer : {
      height: "300px",
      position: "relative",
      overflow: "hidden",
      background: `linear-gradient(to top left, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,

      [theme.breakpoints.up("sm")]: {
        height: "350px"
      },
    },
    wave: {
      position: "absolute",
      zIndex: 5,
      bottom: "-10%",
      left: "-1%",
      width: "102%",
      height: "auto"
    },
    footerWrapper: {
      maxWidth: theme.breakpoints.values.md,
      margin: "0 auto",
      padding: `0 ${theme.spacing(4)}px`,
    }
    
  }));

  export default useStyles;
