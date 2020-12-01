import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    topMenu: {
        display: "flex",
    },
    listWrapper: {
        position: "relative",
        overflowY: "scroll",
        width: "100%",
        height: "calc(100% - 100px)",
    },
    roomWrapper: {
        position: "relative",
        margin: "auto 10px auto 0",
        width: "385px",
        backgroundColor: "#fff",
        boxShadow: "7px 11px 15px rgba(0, 0, 0, .25)",
        borderRadius: "20px",
        height: "80vh",
        overflow: "hidden",

    },
    roomsButton: {
        display: "block",
        width: "100%",
        height: "100px",
        backgroundColor: "#fff",
        borderRadiusBottom: "1px solid #eee",
        borderRadius: "0px",
    },
    roomItemWrapper: {
        padding: "30px 24px",
        textAlign: "left",
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "backgroundColor 255ms ease",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        "&:hover": {
            backgroundColor: "#f5f5f5",
        }
    },
    avatarPlaceholder: {
        height: "42px",
        width: "42px",
        borderRadius: "42px",
        backgroundColor: "#9C6",
        marginRight: "20px"
    }
  }));

  export default useStyles;
