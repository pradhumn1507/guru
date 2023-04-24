import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Videocrousal1 from '../Asssets/Videocrousal1.png'
import Videocrousal2 from '../Asssets/Vidercrousal2.png'
import Videocrousal3 from '../Asssets/Videocrousal3.png'
export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 3,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <img src={Videocrousal1} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img src={Videocrousal2} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img src={Videocrousal2} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <img src={Videocrousal3}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <img src={Videocrousal3} />
      )
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
