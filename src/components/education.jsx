import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div style={{backgroundImage: 'url(images/education.jpg)'}}>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>The University of Texas at Arlington  <span>August 2019 - May 2021</span></h2>
                        <p> Not completely satisfied with the knowledge gained by undergraduate studies and with a thirst to know more, I decided to pursue my Graduate Studies in the United States.</p>
                        <p>Relevant Coursework :
                            • Advanced Database Systems and Management • Advanced
                            Software Engineering • Data Mining • Data Structures • Software
                            Design Patterns
                            • Big Data • Cloud Computing • Artificial Intelligence • Machine
                            Learning • Data Science • Computer Architecture • Distributed
                            Systems • Mobile Development using React Native

                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Visvesvaraya Technological University  <span>2014-2018</span></h2>
                        <p> I pursued my undergraduate studies in Bengaluru, India for a span of four years.</p>
                        <p>My quest to learn the vast concepts began here and I was introduced to majority of concepts like Database Systems, Computer Network, Data Warehousing , Data Structures, Coding concepts and so on.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
