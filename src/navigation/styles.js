import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    list: {
      minHeight: 75,
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
    menu: {
      position: "absolute",
      right: 50,
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
