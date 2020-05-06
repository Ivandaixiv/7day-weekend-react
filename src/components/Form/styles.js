import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    formContainer: {
      display: "flex",
      justifyContent: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: 500,
      maxWidth: "25vw",
    },
    button: {
      width: 200,
      alignSelf: "center",
    },
  });

export default styles;
