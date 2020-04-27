import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    list: {
      minHeight: 100,
      minWidth: "50vw",
      display: "flex",
    },
    fullList: {
      display: "flex",
      alignSelf: "center",
    },
    listItem: {
      display: "flex",
      justifyContent: "center",
    },
    menuButton: {
      position: "absolute",
      top: 25,
      right: 50,
    },
    navigation: {
      display: "flex",
      justifyContent: "flex-start",
    },
    link: {
      textDecoration: "none",
    },
    button: {
      minWidth: 50,
      minHeight: 50,
    },
  });

export default styles;
