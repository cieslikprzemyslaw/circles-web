import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      flexBasis: "70%",
      width: "70%",
    },
    messagesRoot: {
      minWidth: "70vw",
      width: "100%",
      position: "relative",
      height: "calc(100vh - 36px)",
      overflow: "auto",
      display: "flex"
    },

    messageRoot: {
      margin: "15px 0"
    },
    ownedMessage: {
      alignSelf: "flex-end",
      color: "#000",
      backgroundColor: "#eee"
    },
    notOwnedMessage: {
      alignSelf: "flex-start",
      color: "#FFF",
      background: theme.palette.primary.main,
    },
    message: {
      maxWidth: "280px",
      position: "relative",
      padding: "16px 22px",
      borderRadius: "250px",
    },
    avatar: { borderRadius: "28px", width: "28px", height: "28px", backgroundColor: "white", right: "-20px", bottom: "-10px", position: "relative", padding: "3px", zIndex: 5 }
  }));

  export default useStyles;