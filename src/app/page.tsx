"use client";

import React, { useState } from "react";

// Components
const Navbar = () => (
  <nav className="container navbar">
    <div className="logo">
      LP<span className="accent-text">GEN</span>.AI
    </div>
    <div className="nav-links">
      <a href="#features">Features</a>
      <a href="#agents">Agents</a>
      <a href="#demo" className="btn btn-primary compact">Get Started</a>
    </div>
    <style jsx>{`
      .navbar {
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 100;
        background: rgba(10, 10, 10, 0.7);
        backdrop-filter: blur(10px);
        margin-top: 0.5rem;
        border-radius: 1rem;
        border: 1px solid rgba(255,255,255,0.05);
      }
      .logo {
        font-size: 1.5rem;
        font-weight: 800;
        letter-spacing: -1px;
      }
      .accent-text {
        color: #a855f7;
      }
      .nav-links {
        display: flex;
        gap: 2rem;
        align-items: center;
      }
      .nav-links a {
        font-weight: 500;
        opacity: 0.8;
        font-size: 0.95rem;
        transition: opacity 0.2s;
      }
      .nav-links a:hover {
        opacity: 1;
      }
      .compact {
        padding: 0.6rem 1.2rem;
      }
      @media (max-width: 640px) {
        .nav-links {
          display: none; /* Simplify for mobile for now */
        }
      }
    `}</style>
  </nav>
);

const Hero = () => (
  <section className="section container hero">
    <div className="badge">
      <span className="sparkle">✨</span> Next-Gen Landing Page Automation
    </div>
    <h1 className="hero-title gradient-text">
      Stop Building. <br /> Start Converting.
    </h1>
    <p className="hero-subtitle">
      Deploy a team of 5 specialized AI agents to research, write, and design your high-conversion landing page in under 60 seconds.
    </p>
    <div className="hero-ctas">
      <a href="#demo" className="btn btn-primary">Start Generating Now</a>
      <a href="#features" className="btn btn-secondary">Watch How It Works</a>
    </div>
    <div className="powered-by">
      Powered by <span style={{ color: "#D97706" }}>Anthropic Claude</span> & <span style={{ color: "#2563EB" }}>Google Gemini</span>
    </div>
    <div style={{ marginTop: "1rem", fontSize: "0.8rem", opacity: 0.3, fontWeight: "500" }}>
      5 SPECIALIZED AGENTS INSTALLED @ /agents
    </div>
    <style jsx>{`
      .hero {
        text-align: center;
        padding-top: 6rem;
        padding-bottom: 6rem;
      }
      .badge {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 99px;
        background: rgba(139, 92, 246, 0.1);
        border: 1px solid rgba(139, 92, 246, 0.2);
        color: #c084fc;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
      }
      .hero-title {
        font-size: clamp(2.5rem, 8vw, 4.5rem);
        font-weight: 800;
        line-height: 1.1;
        marginBottom: 1.5rem;
      }
      .hero-subtitle {
        font-size: 1.25rem;
        color: rgba(255,255,255,0.6);
        max-width: 700px;
        margin: 1.5rem auto 2.5rem auto;
        line-height: 1.6;
      }
      .hero-ctas {
        display: flex;
        gap: 1rem;
        justify-content: center;
      }
      .powered-by {
        margin-top: 3rem;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        opacity: 0.4;
      }
    `}</style>
  </section>
);

const AgentCard = ({ name, role, icon, description }: { name: string; role: string; icon: string; description: string }) => (
  <div className="glass-card agent-card">
    <div className="icon">{icon}</div>
    <div className="content">
      <h3 className="name">{name}</h3>
      <p className="role">{role}</p>
    </div>
    <p className="desc">{description}</p>
    <style jsx>{`
      .agent-card {
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        position: relative;
        overflow: hidden;
      }
      .agent-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(to right, #8b5cf6, transparent);
      }
      .icon {
        font-size: 2.5rem;
      }
      .name {
        font-size: 1.25rem;
        font-weight: 700;
      }
      .role {
        font-size: 0.8rem;
        color: #a855f7;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .desc {
        font-size: 0.95rem;
        color: rgba(255,255,255,0.6);
        line-height: 1.6;
      }
    `}</style>
  </div>
);

const AgentsGrid = () => (
  <section id="agents" className="section container">
    <div className="section-header">
      <h2 className="section-title">The Expert Team</h2>
      <p className="section-desc">Five specialized agents collaborating to build your perfection.</p>
    </div>
    <div className="agents-wrap">
      <AgentCard
        name="The Intake Agent"
        role="Product Strategist"
        icon="🧠"
        description="Gathers essential product information and USP to set the foundation for the entire project."
      />
      <AgentCard
        name="The Researcher"
        role="Market Analyst"
        icon="🔍"
        description="Deep dives into target markets, identifying pain points and competitor weaknesses."
      />
      <AgentCard
        name="The Copywriter"
        role="Conversion Expert"
        icon="✍️"
        description="Crafts persuasive, high-conversion copy across 13 distinct marketing sections."
      />
      <AgentCard
        name="The Design Director"
        role="Visual Stylist"
        icon="🎨"
        description="Determines the perfect color palette and visual direction aligned with your brand."
      />
      <AgentCard
        name="The Image Engine"
        role="Creative Artist"
        icon="🖼️"
        description="Generates custom visuals for every section using state-of-the-art AI imagery."
      />
    </div>
    <style jsx>{`
      .section-header {
        text-align: center;
        margin-bottom: 4rem;
      }
      .section-title {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 1rem;
      }
      .section-desc {
        color: rgba(255,255,255,0.6);
        font-size: 1.1rem;
      }
      .agents-wrap {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
      }
    `}</style>
  </section>
);

const PreviewSection = () => {
  const sections = [
    "Main Hero Section", "The Problem Awareness", "Solution Hint", "The Main Solution",
    "Core Features", "Benefit Showcase", "Full Demonstration", "User Reviews",
    "Comparison Chart", "FAQ Section", "Objection Handling", "Primary CTA", "Footer"
  ];

  return (
    <section id="features" className="section container">
      <div className="preview-card glass-card">
        <div className="preview-text">
          <h2 className="preview-title">Built on a Framework <br /><span className="highlight">Proven to Sell.</span></h2>
          <p className="preview-desc">
            Our agents don't just write and design; they follow a 13-part marketing structure scientifically designed to guide visitors from curiosity to conversion.
          </p>
          <ul className="features-list">
            {sections.slice(0, 7).map((s, i) => (
              <li key={i} className="feature-item">
                <span className="check">✓</span> {s}
              </li>
            ))}
            <li className="feature-more">+ 6 more specialized sections</li>
          </ul>
        </div>
        <div className="preview-visual">
          <div className="scroll-container animate-scroll">
            {[...sections, ...sections].map((s, i) => (
              <div key={i} className="scroll-item glass-card">
                <span className="item-num">SECTION {(i % sections.length) + 1}</span>
                <span className="item-name">{s}</span>
              </div>
            ))}
          </div>
          <div className="fade-overlay"></div>
        </div>
      </div>
      <style jsx>{`
        .preview-card {
           padding: 4rem;
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 4rem;
           align-items: center;
        }
        .preview-title {
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .highlight {
          color: #d946ef;
        }
        .preview-desc {
          color: rgba(255,255,255,0.6);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1rem;
          font-weight: 500;
        }
        .check {
          color: #8b5cf6;
          font-weight: bold;
        }
        .feature-more {
          opacity: 0.5;
          font-style: italic;
          margin-top: 0.5rem;
        }
        .preview-visual {
          position: relative;
          height: 500px;
          overflow: hidden;
          border-radius: 1.5rem;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .scroll-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
        }
        .scroll-item {
          height: 140px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          gap: 0.5rem;
        }
        .item-num {
          font-size: 0.7rem;
          font-weight: 800;
          color: #8b5cf6;
          text-transform: uppercase;
        }
        .item-name {
          font-weight: 700;
          opacity: 0.8;
          font-size: 1rem;
        }
        .fade-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(to bottom, #050811 0%, transparent 20%, transparent 80%, #050811 100%);
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @media (max-width: 1024px) {
          .preview-card {
            grid-template-columns: 1fr;
            padding: 3rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);

    const steps = [
      "Gathering Intake...",
      "Researching Market Trends...",
      "Analyzing Competitors...",
      "Drafting Persuasive Copy...",
      "Defining Visual Aesthetic...",
      "Generating AI Visuals...",
      "Stitching Sections...",
      "Done!"
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < steps.length) {
        setStatus(steps[current]);
        setProgress((prev) => Math.min(prev + 12.5, 100));
        current++;
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <section id="demo" className="section container">
      <div className="demo-inner">
        <h2 className="demo-title">Try the Engine</h2>
        <form onSubmit={handleGenerate} className="glass-card demo-form">
          <div className="input-wrap">
            <label className="input-label">What are you building?</label>
            <input
              type="text"
              placeholder="e.g. A premium coffee subscription for remote workers"
              required
              className="demo-input"
            />
          </div>
          <button type="submit" className="btn btn-primary demo-btn" disabled={loading}>
            {loading ? "Generating..." : "Generate Landing Page"}
          </button>

          {loading && (
            <div className="progress-wrap">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <p className="progress-status">{status}</p>
            </div>
          )}

          {!loading && progress === 100 && (
            <div className="success-msg">
              ✨ Your Landing Page is ready! <a href="#" className="download-link">Download Preview</a>
            </div>
          )}
        </form>
      </div>
      <style jsx>{`
        .demo-inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .demo-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 3rem;
        }
        .demo-form {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .input-wrap {
          text-align: left;
        }
        .input-label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
          opacity: 0.8;
          font-size: 0.95rem;
        }
        .demo-input {
          width: 100%;
          padding: 1.25rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          fontSize: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .demo-input:focus {
          border-color: #8b5cf6;
        }
        .demo-btn {
          padding: 1.25rem;
          justify-content: center;
          font-size: 1.1rem;
        }
        .progress-wrap {
          margin-top: 1rem;
        }
        .progress-bar {
          height: 6px;
          width: 100%;
          background: rgba(255,255,255,0.05);
          border-radius: 99px;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(to right, #8b5cf6, #d946ef);
          transition: width 0.3s ease;
        }
        .progress-status {
          font-size: 0.9rem;
          color: #a855f7;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .success-msg {
          padding: 1.5rem;
          border-radius: 1rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          color: #4ade80;
          font-weight: 600;
        }
        .download-link {
          color: white;
          text-decoration: underline;
          margin-left: 1rem;
        }
        @media (max-width: 640px) {
          .demo-form {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="footer-brand">
        <div className="footer-logo">LP<span className="accent">GEN</span>.AI</div>
        <p className="footer-tagline">Automated High-Conversion Landing Pages. <br />Inspired by uxjoseph.</p>
      </div>
      <div className="footer-links">
        <div className="link-col">
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">API Docs</a>
        </div>
        <div className="link-col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </div>
    <div className="container copyright">
      © 2026 LP GEN AI. All rights reserved.
    </div>
    <style jsx>{`
      .footer {
        padding: 6rem 0 2rem 0;
        border-top: 1px solid rgba(255,255,255,0.05);
        margin-top: 4rem;
        background: rgba(0,0,0,0.2);
      }
      .footer-content {
        display: flex;
        justify-content: space-between;
        gap: 4rem;
        margin-bottom: 4rem;
      }
      .footer-logo {
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
      }
      .accent { color: #8b5cf6; }
      .footer-tagline {
        opacity: 0.5;
        font-size: 0.95rem;
        line-height: 1.6;
      }
      .footer-links {
        display: flex;
        gap: 4rem;
      }
      .link-col h4 {
        font-size: 0.9rem;
        margin-bottom: 1.25rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        opacity: 0.9;
      }
      .link-col a {
        display: block;
        opacity: 0.5;
        font-size: 0.9rem;
        margin-bottom: 0.75rem;
        transition: opacity 0.2s;
      }
      .link-col a:hover { opacity: 1; }
      .copyright {
        opacity: 0.3;
        font-size: 0.8rem;
        text-align: center;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.05);
      }
      @media (max-width: 768px) {
        .footer-content {
          flex-direction: column;
          gap: 3rem;
        }
      }
    `}</style>
  </footer>
);

export default function Home() {
  return (
    <main className="main-wrap">
      <Navbar />
      <Hero />
      <AgentsGrid />
      <PreviewSection />
      <Demo />
      <Footer />
      <style jsx global>{`
        .main-wrap {
          min-height: 100vh;
          overflow-x: hidden;
        }
      `}</style>
    </main>
  );
}
