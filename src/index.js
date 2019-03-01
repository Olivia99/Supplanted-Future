import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    content: (
      <div class="text">
        <p>"I knew there was something wrong with me."</p>
        <p>
          Your gaze swivels around this room. All you can see is white and
          white. A pungent bleach smell wafts from the bedding, and the bed rail
          moans while you slightly move.
        </p>
        <p>
          This is a room of lifelessness. The only decoration is the mirror on
          the wall.
        </p>
      </div>
    ),
    label1: "Look at the mirror",
    label2: "Go to canteen for lunch",
    label3: "Take a nap",
    page1: "mirror",
    page2: "canteen",
    page3: "nap"
  },
  mirror: {
    content: [
      <p>
        You look in the mirror; a woman with several bold spots on her head.
      </p>,
      <p>
        You look at yourself in the mirror and poke your face. The spot you
        poked turns into a bruise gradually.
      </p>,
      <p>
        You are a DNA pathologist but you are diagnosed as a carrier of the
        disease Token. Your fiance suggested you to come here, the City
        Hospital, for better treatment.
      </p>,
      <p> You feel a little bit hungry so you go to canteen for lunch</p>
    ],
    label1: "Token",
    label2: "Lunch",
    page1: "token",
    page2: "lunch"
  },
  canteen: {
    content:
      "You go to the canteen.All the patients in this hospital come together in the canteen.You line up infront of a window and get your meal with two pills. You... ",
    label1: "don't want to take the pills",
    label2: "take the pills",
    page1: "ntake",
    page2: "take"
  }
};

class Page extends Component {
  render() {
    var pageData = pages[this.props.pageName];
    var goToPage = this.props.goToPage;

    function goToPage1() {
      goToPage(pageData.page1);
    }
    function goToPage2() {
      goToPage(pageData.page2);
    }

    function goToPage3() {
      goToPage(pageData.page3);
    }

    var image = "";
    if (pageData.image) {
      image = (
        <div>
          <img className="main-page-image" src={pageData.image} />
        </div>
      );
    }
    var button1 = "";
    if (pageData.page1) {
      button1 = <button onClick={goToPage1}>{pageData.label1}</button>;
    }
    var button2 = "";
    if (pageData.page2) {
      button2 = <button onClick={goToPage2}>{pageData.label2}</button>;
    }

    var button3 = "";
    if (pageData.page3) {
      button3 = <button onClick={goToPage3}> {pageData.label3}</button>;
    }

    return (
      <div>
        <p>{pageData.content}</p>
        {image}
        {button1}
        {button2}
        {button3}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };

    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    return (
      <div className="App">
        <Page pageName={this.state.page} goToPage={this.goToPage} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
