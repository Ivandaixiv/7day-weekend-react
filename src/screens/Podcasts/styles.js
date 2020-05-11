import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    container: {
      width: "80%",
      margin: "0 auto",
    },
    list: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
    },
    image: {
      width: 200,
    },
    text: {
      margin: 20,
    },
    title: {
      fontSize: "1.5rem",
    },
    description: {
      color: "#999999",
    },
    date: {
      fontSize: ".75rem",
    },
  });

export default styles;
