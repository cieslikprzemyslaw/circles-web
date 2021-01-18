import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        display: "flex",
        height: "100vh",
        width: "100vw",
        maxWidth: "100%",
        overflow: "hidden"
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        flexGrow: 2,
        width: "auto",
        height: "100%"
    },
    sidebar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "114px",
        marginRight: "20px",
        height: "100vh",
        padding: "15px 0",
        background: "linear-gradient(to right, rgba(0, 0, 0, 0.35), transparent)"
    },
    backgroundImage: {
        // TODO: Replace source with api.
        backgroundImage: "url(https://source.unsplash.com/1r5gu_0mcUM/1600x900)", //"url(https://source.unsplash.com/collection/935527/1600x900)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "100vh",
        width: "auto",
        minWidth: "100%",
        zIndex: -2
    },
    backgroundImageBacklit: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, .2)"
    },
    topMenu: {
        position: "relative",
        display: "flex",
        height: "72px",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
    },
    mainSection: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "calc(100vh - 72px)" // depends on appbar height.
    },
    avatar: {
        marginRight: "50px",
        cursor: "pointer",
    },
    drawer: {
        width: "60%"
    }
}));

export default useStyles;
