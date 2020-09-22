import React from "react";
import "./App.css";

class Container extends React.Component {
  render() {
    const headerStyle = {
      backgroundColor: "orange",
      color: "white",
      textAlign: "center",
    };
    const containerStyle = {
      backgroundColor: "white",
      height: "800px",
      marginleft: "auto",
      marginRight: "auto",
    };
    const contentStyle = {
      padding: "10px",
    };

    const navStyle = {
      width: "180px",
      float: "left",
    };
    const mainStyle = {
      width: "600px",
      float: "right",
    };
    const footerStyle = {
      clear: "both",
    };
    const homeClicked = {
      fontWeight: "bold",
    };

    return (
      <div id="container" style={containerStyle}>
        <div id="header" style={headerStyle}>
          <h1>My Website using React</h1>
        </div>
        <div id="content" style={contentStyle}>
          <div id="nav" style={navStyle}>
            <h3>Navigation</h3>
            <ul>
              <li a class="selected" style={homeClicked}>
                <a href="home.html">Home</a>
              </li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div id="main"></div>
          <h2>Home Page</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dapibus, nisi ornare fermentum aliquet, nisl erat molestie quam, in
            ultrices nibh est sit amet ligula. Donec augue neque, gravida sit
          </p>
          <p>
            amet pharetra vel, imperdiet vel libero. Integer ullamcorper
            ultricies lectus ut rhoncus. Integer leo sapien, vestibulum nec
            tempor a, dictum ac dui. Mauris feugiat scelerisque odio, consequat
            mattis tellus convallis non. Nunc ex purus
          </p>
          <p>
            amet pharetra vel, imperdiet vel libero. Integer ullamcorper
            ultricies lectus ut rhoncus. Integer leo sapien, vestibulum nec
            tempor a, dictum ac dui. Mauris feugiat scelerisque odio, consequat
            mattis tellus convallis non. Nunc ex purus
          </p>
        </div>
        <div id="footer" style={footerStyle}>
          Copyright &copy; 2020 Rifqi;
        </div>
      </div>
    );
  }
}

export default Container;
