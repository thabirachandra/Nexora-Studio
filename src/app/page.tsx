import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers3,
  Zap,
  ShieldCheck,
  Play,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/data/services";

const projects = [
  {
    n: "01",
    type: "VIDEO & MOTION",
    title: "Motion that tells a story.",
    desc: "Cinematic edits and short-form content designed to capture attention.",
    tone: "project-violet",
  },
  {
    n: "02",
    type: "WEB EXPERIENCES",
    title: "Digital, reimagined.",
    desc: "Modern, responsive website concepts built around your brand.",
    tone: "project-blue",
  },
  {
    n: "03",
    type: "BRAND DESIGN",
    title: "Make your mark.",
    desc: "Distinctive visual identities for ambitious creators and businesses.",
    tone: "project-pink",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Thoughtful creativity",
    desc: "Every detail has a purpose. Every project starts with your goals.",
  },
  {
    icon: Layers3,
    title: "One creative partner",
    desc: "Editing, design and digital execution working together.",
  },
  {
    icon: Zap,
    title: "Made to move forward",
    desc: "A clear process, practical timelines and focused delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Clarity at every step",
    desc: "Deliverables, pricing and expectations agreed before we begin.",
  },
];

export default function Home() {
  return (
    <main className="nexora-home">
      <section className="hero-premium">
        <video
          className="hero-video-background"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/Nexora-Studio/videos/galaxy.mp4" type="video/mp4" />
        </video>
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-orb hero-orb-three" />

        <div className="container relative z-10">
          <div className="hero-content">
            <div className="eyebrow hero-badge">
              <span className="live-dot" />
              Independent Digital Creative Studio
            </div>

            <h1 className="hero-title">
              We turn bold ideas into
              <span className="hero-title-gradient"> digital experiences.</span>
            </h1>

            <p className="hero-description">
              From scroll-stopping videos to beautiful websites, NEXORA
              CREATIVE helps creators and businesses bring their next big idea
              to life.
            </p>

            <div className="hero-actions">
              <Link href="/contact/" className="btn btn-primary">
                Start a Project <ArrowUpRight size={17} />
              </Link>
              <Link href="/portfolio/" className="btn btn-secondary">
                Explore Our Work <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hero-proof">
              <span><CheckCircle2 size={15} /> Clear pricing</span>
              <span><CheckCircle2 size={15} /> Personal approach</span>
              <span><CheckCircle2 size={15} /> Creative solutions</span>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="showcase-top">
              <div>
                <span className="showcase-kicker">THE NEXORA APPROACH</span>
                <h2>Design. Build. <span>Elevate.</span></h2>
              </div>
              <div className="showcase-symbol">
                <Sparkles size={25} />
              </div>
            </div>

            <div className="showcase-visual">
              <div className="visual-grid" />
              <div className="visual-ring visual-ring-one" />
              <div className="visual-ring visual-ring-two" />
              <div className="visual-ring visual-ring-three" />
              <div className="visual-center">
                <span>N</span>
                <div className="visual-center-glow" />
              </div>
              <div className="visual-label visual-label-left">
                <span>01 / CREATE</span>
                <b>Ideas into identity.</b>
              </div>
              <div className="visual-label visual-label-right">
                <span>02 / DELIVER</span>
                <b>Purpose into impact.</b>
              </div>
              <div className="visual-caption">CREATIVE MINDS · DIGITAL EXCELLENCE</div>
            </div>

            <div className="showcase-bottom">
              <span>YOUR VISION, OUR CREATIVE DIRECTION.</span>
              <span className="showcase-status"><i /> READY FOR NEW PROJECTS</span>
            </div>
          </div>

          <div className="hero-categories">
            <span>VIDEO & MOTION</span>
            <i />
            <span>WEB DEVELOPMENT</span>
            <i />
            <span>BRAND DESIGN</span>
            <i />
            <span>DIGITAL GROWTH</span>
          </div>
        </div>
      </section>

      <section id="services" className="section premium-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">WHAT WE DO</p>
              <h2 className="section-title">
                Creative services.
                <br />
                <span className="hero-title-gradient">Meaningful results.</span>
              </h2>
              <p className="section-intro">
                Everything you need to give your ideas a stronger digital
                presence, all in one creative studio.
              </p>
            </div>
            <Link href="/services/" className="text-link">
              Explore all services <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="services-premium-grid">
            {services.slice(0, 6).map((service, index) => (
              <Link
                href={`/services/${service.slug}/`}
                key={service.slug}
                className="service-premium-card"
              >
                <div className="service-card-top">
                  <span className="service-index">
                    0{index + 1} / {service.category.toUpperCase()}
                  </span>
                  <span className="service-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="service-icon-wrap">
                  {index === 0 ? <Play size={23} /> :
                   index === 1 ? <Layers3 size={23} /> :
                   index === 2 ? <Sparkles size={23} /> :
                   index === 3 ? <Zap size={23} /> :
                   index === 4 ? <ShieldCheck size={23} /> :
                   <ArrowUpRight size={23} />}
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-price">
                  <span>Starting at</span>
                  <strong>{service.price}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section portfolio-premium">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">SELECTED CONCEPTS</p>
              <h2 className="section-title">
                Ideas with
                <span className="hero-title-gradient"> a point of view.</span>
              </h2>
              <p className="section-intro">
                A glimpse into the creative direction behind NEXORA. These are
                demonstration concepts, not completed client projects.
              </p>
            </div>
            <Link href="/portfolio/" className="text-link">
              View portfolio <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="projects-premium-grid">
            {projects.map((project) => (
              <article className="project-premium-card" key={project.n}>
                <div className={`project-art ${project.tone}`}>
                  <div className="project-art-frame" />
                  <div className="project-art-orb" />
                  <div className="project-art-lines" />
                  <span className="project-number">{project.n}</span>
                  <span className="project-demo">CREATIVE CONCEPT</span>
                  <span className="project-art-caption">NEXORA®</span>
                </div>
                <div className="project-info">
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section premium-section">
        <div className="container about-premium-grid">
          <div className="about-premium-copy">
            <p className="eyebrow section-eyebrow">THE STUDIO</p>
            <h2 className="section-title">
              Small studio.
              <br />
              <span className="hero-title-gradient">Big-picture thinking.</span>
            </h2>
            <p className="section-intro">
              NEXORA CREATIVE brings design, content and digital execution
              together with one goal: helping your brand show up with clarity
              and confidence.
            </p>
            <Link href="/contact/" className="btn btn-primary about-cta">
              Let’s Talk About Your Project <ArrowRight size={16} />
            </Link>
          </div>

          <div className="benefits-premium-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-premium-card" key={benefit.title}>
                <div className="benefit-topline">
                  <benefit.icon size={22} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-premium">
        <div className="container">
          <p className="eyebrow section-eyebrow">A CLEAR PROCESS</p>
          <h2 className="section-title">
            From first idea to
            <span className="hero-title-gradient"> final delivery.</span>
          </h2>

          <div className="process-premium-grid">
            {[
              { n: "01", title: "Discover", desc: "Tell us about your idea, goals, audience and timeline." },
              { n: "02", title: "Define", desc: "Agree on the deliverables, budget, schedule and revisions." },
              { n: "03", title: "Create", desc: "We bring the plan to life with focused creative execution." },
              { n: "04", title: "Deliver", desc: "Review the result and receive the agreed final files." },
            ].map((step) => (
              <div className="process-premium-item" key={step.n}>
                <span className="process-number">{step.n}</span>
                <div className="process-line" />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <div className="final-cta-glow" />
            <div className="final-cta-content">
              <p className="eyebrow">YOUR NEXT MOVE STARTS HERE</p>
              <h2>
                Have an idea?
                <br />
                <span className="hero-title-gradient">Let’s make it real.</span>
              </h2>
              <p>
                Tell us what you’re building. We’ll help you find the right
                creative direction.
              </p>
              <Link href="/contact/" className="btn btn-primary">
                Start Your Project <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="cta-decoration">
              <span>N</span>
              <div />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
