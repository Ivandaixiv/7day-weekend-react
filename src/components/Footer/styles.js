import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    footer: {
      display: "flex",
      justifyContent: "space-between",
    },
    list: {
      display: "flex",
      width: "50vw",
      justifyContent: "space-around",
    },
  });

export default styles;
