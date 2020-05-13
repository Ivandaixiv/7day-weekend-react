import React, { Component } from "react";
import Webinar from "./Webinar";
class WebinarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Webinar Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          thumbnail: "https://via.placeholder.com/500x",
          length: "140",
          date: "Mar 15, 2020",
        },
        {
          title: "Webinar Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          thumbnail: "https://via.placeholder.com/500x",
          length: "140",
          date: "Mar 15, 2020",
        },
        {
          title: "Webinar Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          thumbnail: "https://via.placeholder.com/500x",
          length: "140",
          date: "Mar 15, 2020",
        },
        {
          title: "Webinar Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          thumbnail: "https://via.placeholder.com/500x",
          length: "140",
          date: "Mar 15, 2020",
        },
        {
          title: "Webinar Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          thumbnail: "https://via.placeholder.com/500x",
          length: "140",
          date: "Mar 15, 2020",
        },
        {
          title: "Webinar Title",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          thumbnail: "https://via.placeholder.com/500x",
          length: "140",
          date: "Mar 15, 2020",
        },
      ],
    };
  }
  render() {
    return <Webinar data={this.state.data} />;
  }
}

export default WebinarContainer;
