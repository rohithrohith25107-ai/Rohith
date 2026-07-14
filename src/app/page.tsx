"use client";

import React from "react";

export default function Home() {
  return (
    <>
      <div className="nav">
        <div className="nav-inner">
          <div className="nav-name">Rohith R</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
          <a className="nav-cta" href="mailto:rajesha8925@gmail.com">Contact</a>
        </div>
      </div>

      <div className="wrap">
        <section className="hero" id="hero">
          <div className="eyebrow">Front-end developer</div>
          <h1>Building clean, responsive web experiences — with cloud and AI fundamentals to back it up.</h1>
          <p className="hero-sub">
            Front-end developer with hands-on experience in HTML, CSS, and responsive design, complemented by AWS cloud training and generative AI coursework. I focus on usable interfaces, fast page loads, and shipping projects that hold up under real use.
          </p>
          <div className="hero-contact">
            <span>Coimbatore, Tamil Nadu, India</span>
            <a href="tel:+919047918276">+91 9047918276</a>
            <a href="mailto:rajesha8925@gmail.com">rajesha8925@gmail.com</a>
          </div>
          <div className="hero-actions">
            <a className="btn-secondary glass" href="https://github.com/rohithrohith25107-ai" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>

          <div className="stat-row">
            <div className="stat glass">
              <div className="stat-num">20%</div>
              <div className="stat-label">Billing efficiency gain at Dennis Hypermarket</div>
            </div>
            <div className="stat glass">
              <div className="stat-num">30%</div>
              <div className="stat-label">Page load speed improvement, Initz internship</div>
            </div>
            <div className="stat glass">
              <div className="stat-num">50+</div>
              <div className="stat-label">Active users on Gym Management System</div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-title">About</div>
          <p style={{ fontSize: "15px", color: "var(--gray-300)", lineHeight: "1.75", maxWidth: "700px" }}>
            I started in retail operations, handling billing and goods-receipt processing on the floor of a hypermarket — work that taught me speed, accuracy, and how to keep a system running under pressure. That discipline carried directly into development. Today I build with HTML, CSS, and React/Next.js, and I'm layering in AWS cloud fundamentals and generative AI skills to keep pace with where front-end work is heading. I'm recognized by peers and managers for clear communication, adaptability, and stepping up in team-based projects.
          </p>
        </section>

        <section className="section" id="skills">
          <div className="section-title">Skills</div>

          <div className="skill-group">
            <div className="skill-group-label">Technical</div>
            <div className="chip-row">
              <div className="chip">HTML</div>
              <div className="chip">CSS</div>
              <div className="chip">Responsive Web Design</div>
              <div className="chip">JavaScript basics</div>
              <div className="chip">AWS Cloud Fundamentals</div>
              <div className="chip">Generative AI</div>
              <div className="chip">AI Fundamentals</div>
              <div className="chip">NLP</div>
              <div className="chip">Computer Vision</div>
              <div className="chip">Agentic AI</div>
              <div className="chip">Cybersecurity Fundamentals</div>
            </div>
          </div>

          <div className="skill-group">
            <div className="skill-group-label">Soft skills</div>
            <div className="chip-row">
              <div className="chip gray">Communication</div>
              <div className="chip gray">Problem solving</div>
              <div className="chip gray">Adaptability</div>
              <div className="chip gray">Time management</div>
              <div className="chip gray">Leadership</div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-title">Experience</div>

          <div className="exp-item glass">
            <div className="exp-date">04/2024 — 06/2026</div>
            <div>
              <div className="exp-role">Billing &amp; GRN Associate</div>
              <div className="exp-org">Dennis Hypermarket · Kuniyamuthur, Coimbatore</div>
              <ul>
                <li>Managed daily billing operations and goods receipt note (GRN) processing in a fast-paced retail environment, increasing billing efficiency by 20% through streamlined operations.</li>
                <li>Handled customer transactions accurately while maintaining organized inventory records.</li>
                <li>Supported store operations by ensuring timely and efficient billing procedures.</li>
              </ul>
            </div>
          </div>

          <div className="exp-item glass">
            <div className="exp-date">2026</div>
            <div>
              <div className="exp-role">Web Development Intern</div>
              <div className="exp-org">Initz Institution · Coimbatore</div>
              <ul>
                <li>Assisted in developing and maintaining web applications using HTML, CSS, and Java.</li>
                <li>Gained hands-on experience in front-end development and responsive website design, improving page load speed by 30%.</li>
                <li>Collaborated with the development team to implement user-friendly interface features.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title">Projects</div>
          <div className="proj-grid">

            <div className="proj-card glass">
              <div className="proj-title">Personal Portfolio Website</div>
              <div className="proj-desc">Designed and built a personal portfolio using Next.js, TypeScript, and CSS. Deployed on Vercel with optimized fonts and a fully responsive layout.</div>
              <div className="proj-tags">
                <div className="proj-tag">Next.js</div>
                <div className="proj-tag">TypeScript</div>
                <div className="proj-tag">CSS</div>
              </div>
              <div className="proj-links">
                <a href="https://rohith-pied.vercel.app" target="_blank" rel="noopener noreferrer">Live demo</a>
                <a href="https://github.com/rohithrohith25107-ai/Rohith" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="proj-card glass">
              <div className="proj-title">Vehicle Parking Management System</div>
              <div className="proj-desc">A React + Vite web app to manage vehicle entry/exit, parking duration, and fee calculation, with full record tracking for vehicle, owner, and payment details.</div>
              <div className="proj-tags">
                <div className="proj-tag">React</div>
                <div className="proj-tag">Vite</div>
              </div>
              <div className="proj-links">
                <a href="https://vechile-managnment.vercel.app" target="_blank" rel="noopener noreferrer">Live demo</a>
                <a href="https://github.com/rohithrohith25107-ai/Vechile-managnment" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="proj-card glass">
              <div className="proj-title">Online Gym Management System</div>
              <div className="proj-desc">A gym management website built with HTML, CSS, Java, and Python with a database backend. Adopted by 50+ users and recognized as top performer among 15 peers.</div>
              <div className="proj-tags">
                <div className="proj-tag">HTML</div>
                <div className="proj-tag">CSS</div>
                <div className="proj-tag">Java</div>
                <div className="proj-tag">Python</div>
              </div>
            </div>

          </div>
        </section>

        <section className="section" id="certifications">
          <div className="section-title">Certifications</div>
          <div className="cert-list">
            <div className="cert-item glass"><span className="cert-dot"></span>AWS Cloud Fundamentals — AWS Training and Certification</div>
            <div className="cert-item glass"><span className="cert-dot"></span>Amazon Q Developer &amp; Amazon Q Business — AWS</div>
            <div className="cert-item glass"><span className="cert-dot"></span>Generative AI &amp; Responsible AI Principles — Google Cloud / Microsoft Learn</div>
            <div className="cert-item glass"><span className="cert-dot"></span>Microsoft 365 Copilot — Microsoft Learn</div>
            <div className="cert-item glass"><span className="cert-dot"></span>NLP, Computer Vision &amp; AI Speech Concepts — Microsoft Learn</div>
            <div className="cert-item glass"><span className="cert-dot"></span>Agentic AI &amp; Cybersecurity Fundamentals — Microsoft Learn</div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-title">Education</div>
          <div className="exp-item glass" style={{ marginBottom: 0 }}>
            <div className="exp-date">Diploma</div>
            <div>
              <div className="exp-role">Diploma in Computer Science</div>
              <div className="exp-org">Excel Hi-Tech Engineering College</div>
            </div>
          </div>
        </section>
      </div>

      <section className="contact glass">
        <div className="contact-inner">
          <h2>Let's work together</h2>
          <p>Open to front-end developer roles and freelance projects — Coimbatore-based, remote-friendly.</p>
          <div className="contact-links">
            <a className="contact-btn" href="mailto:rajesha8925@gmail.com">Email me</a>
            <a className="contact-btn ghost" href="tel:+919047918276">+91 9047918276</a>
            <a className="contact-btn ghost" href="https://github.com/rohithrohith25107-ai" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <footer>&copy; 2026 Rohith R. Built with Next.js &amp; CSS.</footer>
    </>
  );
}
