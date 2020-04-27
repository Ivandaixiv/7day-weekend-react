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
    navigation: {
      display: "flex",
      justifyContent: "space-around",
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
