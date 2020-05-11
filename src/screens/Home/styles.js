import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    heroContainer: {
      "& img": {
        width: "100%",
        maxHeight: 600,
        position: "relative",
      },
      "& button": {
        transform: "translate(0, -75px)",
      },
      paragraph: {
        width: "25vw",
      },
    },
    paragraphContainer: {
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    header: {
      alignSelf: "center",
    },
    paragraph: {
      alignSelf: "center",
      width: "30vw",
    },
    imagePContainer: {
      display: "flex",
      justifyContent: "space-around",
      "& div": {
        width: "50%",
        justifyContent: "center",
      },
    },
  });

export default styles;
