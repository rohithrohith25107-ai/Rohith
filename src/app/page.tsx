"use client";

import React from "react";

export default function Home() {
  return (
    <>
      {/* Decorative Orbs */}
      <div className="glow-orb orb-cyan"></div>
      <div className="glow-orb orb-purple"></div>

      {/* Header & Navigation */}
      <header>
        <div className="nav-container">
          <div className="logo-text">ROHITH.</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-subtitle">Welcome to my space</div>
          <h1 className="hero-title">
            Hi, I am <span>Rohith</span>
          </h1>
          <div className="college-tag">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
            </svg>
          EXCEL Hi tech Engineering college
          </div>
          <p className="hero-description">
            A passionate Computer Science & Engineering Diploma student, dedicated to building clean, functional, and visually striking digital experiences.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about-grid">
            <div className="about-content">
              <p>
                I am currently pursuing a Diploma in Computer Science & Engineering (CSE) at <strong>Sree Narayana Guru Polytechnic College</strong>. My academic journey has allowed me to build a solid foundation in programming, software logic, and database architectures.
              </p>
              <p>
                I enjoy exploring new technologies and building web projects that solve real-world problems. Whether it's crafting user-centric frontends or engineering backend logics, I love the process of translating complex ideas into code.
              </p>
              <div className="highlight-box">
                Pursuing a CSE diploma has fueled my curiosity for system design, software development, and computing fundamentals. I am always eager to learn, collaborate, and adapt to modern tech stacks.
              </div>
            </div>
            <div className="about-info-grid">
              <div className="info-item">
                <h4>Name</h4>
                <p>Rohith</p>
              </div>
              <div className="info-item">
                <h4>Role</h4>
                <p>CSE Student</p>
              </div>
              <div className="info-item">
                <h4>College</h4>
                <p>SNGPC</p>
              </div>
              <div className="info-item">
                <h4>Location</h4>
                <p>Kerala, India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="skills-container">
            {/* Frontend Development */}
            <div className="skills-category">
              <div className="skills-category-title">Frontend Engineering</div>
              <div className="skills-grid">
                <div className="skill-card"><span>HTML5</span></div>
                <div className="skill-card"><span>CSS3</span></div>
                <div className="skill-card"><span>JavaScript (ES6+)</span></div>
                <div className="skill-card"><span>React.js</span></div>
                <div className="skill-card"><span>Next.js</span></div>
              </div>
            </div>

            {/* Backend & Databases */}
            <div className="skills-category">
              <div className="skills-category-title">Backend & Systems</div>
              <div className="skills-grid">
                <div className="skill-card"><span>Python</span></div>
                <div className="skill-card"><span>C / C++</span></div>
                <div className="skill-card"><span>Node.js</span></div>
                <div className="skill-card"><span>SQL / Databases</span></div>
                <div className="skill-card"><span>Git & Github</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="section-title">My <span>Education</span></h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">2024 - Present</span>
                <h3>Diploma in Computer Science & Engineering</h3>
                <div className="timeline-institution">EXCEL Hi tech Engineering college</div>
                <p>
                  Acquiring rigorous technical training in fundamental computer engineering topics including Data Structures, Algorithms, Object-Oriented Programming, Database Management, and Operating Systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-content">
                <div className="project-tags">
                  <span className="project-tag">Next.js</span>
                  <span className="project-tag">CSS Grid</span>
                  <span className="project-tag">Responsive</span>
                </div>
                <h3>Personal Portfolio</h3>
                <p>
                  A premium, high-performance portfolio website built with Next.js and custom Vanilla CSS. Showcases my background, skills, and academic projects with smooth transitions and elegant aesthetics.
                </p>
                <a href="#home" className="project-link">
                  View Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-content">
                <div className="project-tags">
                  <span className="project-tag">HTML & CSS</span>
                  <span className="project-tag">JS ES6</span>
                  <span className="project-tag">Academic Project</span>
                </div>
                <h3>SNGPC Student Helper</h3>
                <p>
                  A student utility application designed to help EXCEL Hi tech Engineering college students easily view circulars, check timetables, and keep track of academic updates.
                </p>
                <a href="#" onClick={(e) => e.preventDefault()} className="project-link">
                  Prototype coming soon
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-content">
                <div className="project-tags">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">SQL</span>
                  <span className="project-tag">Automation</span>
                </div>
                <h3>Smart Task Manager</h3>
                <p>
                  A script-based command line manager with database integration that automates student task scheduling, reminders for lab practicals, and assignment deadlines.
                </p>
                <a href="#" onClick={(e) => e.preventDefault()} className="project-link">
                  Prototype coming soon
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="contact-container">
            <div className="contact-card">
              <p className="contact-lead">
                I am always open to discussing web development projects, internships, collaborations, or just talking about computer science topics. Feel free to reach out!
              </p>
              <div className="contact-links">
                <a href="mailto:rohith@example.com" className="contact-item">
                  <span className="icon">✉</span>
                  rohith@example.com
                </a>
                <a href="tel:+919876543210" className="contact-item">
                  <span className="icon">📞</span>
                  +91 98765 43210
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span className="icon">🌐</span>
                  github.com/rohith
                </a>
              </div>
              <a href="mailto:rohith@example.com" className="btn btn-primary">
                Send an Email
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Rohith. All rights reserved. CSE Student at Sree Narayana Guru Polytechnic College.</p>
      </footer>
    </>
  );
}
