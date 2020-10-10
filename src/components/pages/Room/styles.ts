import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexBasis: "70%",
    width: "70%",

    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      width: "100%",

    }
  },
  messagesRoot: {
    minWidth: "70vw",
    width: "100%",
    position: "relative",
    maxHeight: "calc(100vh - 36px)",
    height: "90%",
    flexGrow: 1,
    overflow: "auto",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      minWidth: "70vw" // TODO: Change to more static value.

    }
  },

  messageRoot: {
    borderRadius: "10%",
  },
  ownedMessage: {
    margin: "3px ",
    alignSelf: "flex-end",
    color: "#000",
    backgroundColor: "#eee",
    borderRadius: "25px",
    '& > p': {
      margin: 0,
      maxWidth: "240px",
      whiteSpace: "normal",
      wordBreak: "break-word",
    },
    '& > pre': {
      margin: 0,
      maxWidth: "240px",
      whiteSpace: "normal",
      wordBreak: "break-word",
    },
  },
  notOwnedMessage: {
    alignSelf: "flex-start",
    margin: "15px 0",
    color: "#FFF",
    background: theme.palette.primary.main,
    '& > p': {
      margin: 0,
      maxWidth: "240px",
      whiteSpace: "normal",
      wordBreak: "break-word",
    },
    '& > pre': {
      margin: 0,
      maxWidth: "240px",
      whiteSpace: "normal",
      wordBreak: "break-word",
    },
  },
  messageWithManyLines:{
    margin: "8px 0",
  },
  message: {
    maxWidth: "450px",
    position: "relative",
    padding: "16px 22px",
    borderRadius: "25px",
  },
  avatar: { borderRadius: "28px", width: "28px", height: "28px", backgroundColor: "white", right: "-20px", bottom: "-10px", position: "relative", padding: "3px", zIndex: 5 }
}));

export default useStyles;