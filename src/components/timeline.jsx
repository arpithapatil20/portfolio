import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div style={{backgroundImage: 'url(images/work.jpeg)'}}>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
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
                        <h2>Graduate Teaching Assistant  <span>2020- Present</span></h2>
                        <p> Recently, I have been appointed as a Graduate Teaching Assistant for Finite Automata under a distinctive Professor where I had the fortunate experience of mentoring students. </p>
                        <p>Some of my other roles include delivering lectures, tutor and mentor students , creating academic materials such as visual aids, answer keys and supplementary notes.
                           Apart from that I also maintained the course website, Canvas and proctored exams, grades tests and homework for the subject.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Assistant System Engineer - Trainee  <span>2018-2019</span></h2>
                        <p>Immediately after undergraduate studies, I began working in Tata Consultancy Services. A wonderful industry experience even if it was for a short duration.Thanks to amazing collegues and good work, I would credit it being my school of IT world.</p>
                        <p>My responsibilities primarily involved in converting codes written in Perl to Python
and C++ from the client database and code documentation. I had the pleasure of working in a scrum environment, which is highly efficient.</p>
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
