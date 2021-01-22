import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexBasis: "70%",
    width: "70%",
    minWidth: "70%",
    maxWidth: "max-content",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 72px)",
    justifyContent: "space-between",
    backdropFilter: "blur(10px)",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      minWidth: "100%",
      width: "100%",
      
    },
    [theme.breakpoints.down("md")]: {
      flexBasis: "50%",
      minWidth: "50%",
      width: "50%",
    }
  },
  inputContainer: {
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  roomTitle: {
    marginLeft: "12px",
    marginTop: "12px"
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
    borderRadius: "15px",
  },
  ownedMessage: {
    margin: "3px ",
    alignSelf: "flex-end",
    color: "#000",
    backgroundColor: "#eee",
    borderRadius: "15px",
    '& > *': {
      margin: 0,
      maxWidth: "240px",
      whiteSpace: "normal",
      wordBreak: "break-word",
    },
    '& > * > *':{
      maxWidth: "240px",
    },
  },
  notOwnedMessage: {
    alignSelf: "flex-start",
    margin: "15px 0",
    color: "#FFF",
    background: theme.palette.primary.main,
    '& > *': {
      margin: 0,
      maxWidth: "240px",
      whiteSpace: "normal",
      wordBreak: "break-word",
    },
    '& > * > *':{
      maxWidth: "240px",
    },
  },
  messageWithManyLines:{
    margin: "8px 0",
  },
  message: {
    maxWidth: "450px",
    position: "relative",
    padding: "16px 18px",
    borderRadius: "25px",
    textAlign: "left",
  },
  nextMessageOwned:{
    borderBottomRightRadius: "4px",
  },
  nextMessageNotOwned:{
    borderBottomLeftRadius: "4px",
    marginBottom: "3px",
  },
  prevMessageOwned: {
    borderTopRightRadius: "4px",
  },
  prevMessageNotOwned: {
    borderTopLeftRadius: "4px",
    marginTop: "3px",
  },
  equalToLine: {
    paddingLeft: "34px",
  },
  sendMessageArea:{
    position: "fixed",
  },
  avatar: { borderRadius: "28px", width: "28px", height: "28px", backgroundColor: "white", right: "-19px", bottom: "0px", position: "relative", padding: "3px", zIndex: 5 }
}));

export default useStyles;