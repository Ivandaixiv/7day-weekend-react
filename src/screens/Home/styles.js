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
    },
  });

export default styles;
