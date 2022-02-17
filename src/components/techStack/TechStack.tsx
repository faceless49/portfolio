// @ts-ignore
import tagCanvas from 'tag-canvas'
import React from 'react';
import s from './TechStack.module.scss'

class TagCloud extends React.Component {

  renderTagCloud() {
    try {
      tagCanvas.Start("myCanvas", "tags", {
        textColour: "#08fdd8",
        reverse: true,
        depth: 1,
        maxSpeed: 0.09,
        outlineMethod: "none",
        textHeight: 23,
        wheelZoom: true,
        noSelect: false
      });
    } catch (e) {
      // @ts-ignore
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  }

  componentDidMount() {
    this.renderTagCloud();
  }

  componentWillUnmount() {}

  render() {
    return (
        <>
          <div id="myCanvasContainer">
            <canvas width="800" height="500" id="myCanvas">
            </canvas>
          </div>
          <div id="tags" style={{display: 'none'}}>
            <ul>
              <li>
                <a href="/">GitHub</a>
              </li>
              <li>
                <a href="/">JavaScript</a>
              </li>
              <li>
                <a href="/">TypeScript</a>
              </li>
              <li>
                <a href="/">SCSS</a>
              </li>
              <li>
                <a href="/">React</a>
              </li>
              <li>
                <a href="/">Redux</a>
              </li>
              <li>
                <a href="/">HTML</a>
              </li>
              <li>
                <a href="/">Storybook</a>
              </li>
              <li>
                <a href="/">REST</a>
              </li>
              <li>
                <a href="/">Redux-thunk</a>
              </li>
              <li>
                <a href="/">Unit Tests</a>
              </li>
              <li>
                <a href="/">Material Design</a>
              </li>
              <li>
                <a href="/">Ant Design</a>
              </li>
              <li>
                <a href="/">NodeJS</a>
              </li>
              <li>
                <a href="/">Redux Toolkit</a>
              </li>
            </ul>
          </div>
        </>
    );
  }
}

export default TagCloud
