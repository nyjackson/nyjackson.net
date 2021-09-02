import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
         <h1>About Me</h1>
              <p>{bio}</p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i> Download Resume
                    </a>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
