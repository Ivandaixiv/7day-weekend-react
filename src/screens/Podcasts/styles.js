import { createStyles } from "@material-ui/styles";

const styles = () =>
  createStyles({
    container: {
      width: "80%",
      margin: "0 auto",
    },
    featured: {
      display: "flex",
      textAlign: "left",
      justifyContent: "space-around",
    },
    featuredText: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    featuredDescription: {
      width: 350,
    },
    listHeader: {
      display: "flex",
      justifyContent: "space-between",
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
