import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    footer: {
      display: "flex",
      justifyContent: "space-between",
      padding: 20,
    },
    list: {
      display: "flex",
      width: "50vw",
      justifyContent: "space-around",
      textAlign: "left",
    },
    logo: {
      display: "flex",
      justifyContent: "space-between",
    },
    copyrightContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 50px",
    },
    copyright: {
      fontSize: 10,
    },
  });

export default styles;
