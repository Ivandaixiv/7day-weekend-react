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
      flexDirection: "column",
      justifyContent: "space-between",
    },
    image: {
      maxHeight: 200,
      maxWidth: 350,
    },
    text: {
      maxWidth: 350,
      textAlign: "left",
      margin: "0 auto",
    },
    title: {
      fontSize: "1.5rem",
    },
    description: {
      color: "#999999",
    },
  });

export default styles;
