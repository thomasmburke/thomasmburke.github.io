import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Who Am I?</span>
                    <h2 className="colorlib-heading">About Me</h2>
                    <p>I graduated with a Computer Engineering degree at Boston University in 2017. Currently I'm working at Google full-time and developing personal projects for fun. I am an ambitious societal engineer who seeks to apply computer engineering based problem solving skills to advance humanity with a particular focus on machine learning and cloud computing.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Areas of Expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-cloud4" />
                </span>
                <div className="desc">
                    <h3>Cloud</h3>
                    <p>I have built a plethora of project on top of both AWS and GCP. In addition I also boast multiple cloud certifications</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-home" />
                </span>
                <div className="desc">
                    <h3>IoT</h3>
                    <p>The longer I live in my aprtment the smarter it gets anywhere from voice controlled curtains to personalized ML greeters</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Engineering</h3>
                    <p>Developed a digital marketing data lake on AWS, pulling data from 10+ data provider APIs, and stitching it together with Spark & Hive</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
