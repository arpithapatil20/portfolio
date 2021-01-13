import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div style={{backgroundImage: 'url(images/about.jpeg)'}} >
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a pursuing a Masters in Computer Science from The University of Texas at Arlington with DataBases and Machine Learning as my major. I am immensely passionate about my specializations. I believe in discovering the creative and stimulating side of the problem-solving techniques in my field. </p>
                    <p>A staunch believer of the thought that "The capacity to learn is a gift; the ability to learn is a skill, and the willingness to learn is a choice ", I believe that I am capable of giving myself the opportunity to learn, stay curious, and work hard in any task I undertake</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content" >
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertises</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Front End Development</h3>
                    <p>I have experience building an interactive app using React Native,HTML,CSS.</p>
                    <p>The Apolita educational app has a variety of features such as course
upload and viewing, announcements, personality tests</p>
                    <p>I am also working on honing my skills in JavaScript, CSS, HTML. Front end development is a very creative and captivating side of coding. It lets us developers bring a concept to life!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Science, Data Mining, Big Data and Cloud Computing</h3>
                    <p>I find this most interesting. I have worked extensively in  Numpy, Pandas and developed projects to learn data manipulation, Supervised and Unsupervised Learning</p>
                    <p>I have also developed projects based on Map-Reduce(along with optimization) using Apache Pig and Hive .</p>
                        <p>I have implemented graph analysis projects using Pregel on Spark GraphX.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>DataBases</h3>
                    <p>One of the crucial majors in my graduate studies, I have learned many concepts of importance in Databases.</p>
                    <p>I am well versed in MySQL, NOSQL, MongoDB, RDBMS having worked on projects implementing all these concepts </p>
                    <p>One of my most prominent projects in databases include Two-Phase Locking Protocol for concurrency and Interactive Library System</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
