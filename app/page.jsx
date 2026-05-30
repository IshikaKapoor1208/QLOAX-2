import Image from "next/image";
import FirstLoadVideo from "./FirstLoadVideo";

const services = [
  {
    icon: "building",
    title: "Enterprise Solutions",
    body: "End-to-end digital solutions that streamline operations and drive measurable business outcomes."
  },
  {
    icon: "brain",
    title: "AI & Automation",
    body: "Intelligent automation and AI systems that accelerate decisions and unlock efficiency."
  },
  {
    icon: "cloud",
    title: "Product Innovation",
    body: "Scalable, secure, and resilient cloud platforms designed for performance and growth."
  },
  {
    icon: "integration",
    title: "Technology Services",
    body: "Seamless integration of people, processes, and platforms to unify your digital ecosystem."
  },
  {
    icon: "chart",
    title: "Strategic Consulting",
    body: "Turn data into a strategic asset with advanced analytics, engineering, and insights."
  }
];

const products = [
  {
    mark: "cube",
    name: "FORGE 4.0",
    body: "An intelligent manufacturing operating system that connects machines, people, and data for real-time performance."
  },
  {
    mark: "eye",
    name: "IntervuAI",
    body: "AI-powered computer vision platform for quality, inspection, and operational intelligence at the edge."
  },
  {
    mark: "bars",
    name: "RevGen",
    body: "Revenue intelligence platform that turns leads, data, and interactions into predictable growth outcomes."
  }
];

const articles = [
  {
    tag: "TECHNOLOGY",
    date: "May 15, 2025",
    title: "From Data Silos to Smart Decisions - The Rise of Connected Manufacturing Intelligence",
    image: "/assets/manufacturing.jpg"
  },
  {
    tag: "AUTOMATION",
    date: "May 02, 2025",
    title: "AI That Works Where It Matters - Practical Automation for the Real World",
    image: "/assets/automation.jpg"
  }
];

function Logo() {
  return (
    <Image src="/Logo1.png" alt="QLOAX" width={170} height={58} className="h-12 w-auto object-contain" priority />
  );
}

function FooterLogo() {
  return (
    <Image src="/logo2.png" alt="QLOAX" width={74} height={74} className="h-12 w-12 object-contain" />
  );
}

function Icon({ type }) {
  return (
    <span className={`icon icon-${type}`} aria-hidden="true">
      <span />
    </span>
  );
}

function Arrow() {
  return <span className="button-arrow" aria-hidden="true" />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <FirstLoadVideo />
      <section className="hero-band relative overflow-hidden bg-ink text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/HEROSECTION.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/58" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_26%,rgba(255,37,45,0.22),transparent_25%),radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.08),transparent_35%)]" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Logo />
          <div className="hidden items-center gap-12 text-sm font-semibold md:flex">
            <a href="#services">Services</a>
            <a href="#vision">Vision</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="hidden items-center gap-3 rounded bg-ember px-6 py-3 text-sm font-bold text-white shadow-glow sm:flex" href="#contact">
            Book a Strategy Call <span className="button-arrow" aria-hidden="true" />
          </a>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-16">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-wide text-ember">We empower founders to scale faster</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">
              Forging the Future of <span className="text-ember">Intelligent Enterprise</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/78">
              We engineer intelligent systems that merge AI, automation, and data, turning complexity into clarity and ambition into measurable impact.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-4 rounded bg-ember px-7 py-4 text-sm font-extrabold text-white shadow-glow" href="#contact">
                Book a Free Strategy Call <Arrow />
              </a>
              <a className="inline-flex items-center justify-center gap-4 rounded border border-white/55 px-7 py-4 text-sm font-extrabold text-white" href="#services">
                Explore Solutions <Arrow />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-7 text-white">
              <div className="flex items-center">
                {["#d4a78f", "#f0c0bf", "#c8d9e2", "#c09a7b"].map((color, index) => (
                  <span
                    className="-ml-2 first:ml-0 grid h-10 w-10 place-items-center rounded-full border-2 border-ink text-xs font-black"
                    style={{ backgroundColor: color }}
                    key={color}
                  >
                    {index + 1}
                  </span>
                ))}
                <p className="ml-3 max-w-[150px] text-xs leading-4 text-white/75">Trusted by innovators across industries</p>
              </div>
              <div className="h-12 w-px bg-white/25" />
              <p className="text-3xl font-light">10+ <span className="block text-xs font-medium text-white/65">Enterprise Clients</span></p>
              <p className="text-3xl font-light">50+ <span className="block text-xs font-medium text-white/65">Projects Delivered</span></p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-neutral-200 bg-[#f7f7f7] py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 grid gap-5 md:grid-cols-[1fr_0.86fr] md:items-end">
            <div>
              <p className="section-kicker">What we do</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Solutions That Power Intelligent Enterprise</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-neutral-600 md:justify-self-end">
              We help enterprises modernize, automate, and scale with intelligent systems built for today-and ready for what's next.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <article className="service-card group" key={service.title}>
                <Icon type={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <span className="mt-auto self-end text-neutral-500 transition group-hover:text-ember"><Arrow /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="overflow-hidden bg-ink py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.98fr_1fr] lg:items-center lg:px-10">
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="absolute -left-6 top-8 h-36 w-28 border border-ember/70" />
            <div className="relative aspect-[1.58] overflow-hidden">
              <Image className="object-cover" src="/about.jpg" alt="QLOAX strategy team" fill sizes="(min-width: 1024px) 560px, 90vw" priority />
            </div>
          </div>
          <div className="relative max-w-2xl">
            <p className="section-kicker">Who we are</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              Engineering Intelligence, Empowering <span className="text-ember">Industry.</span>
            </h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-white/72">
              <p>At QLOAX, we fuse deep domain expertise with next-gen technology to build intelligent systems that redefine how businesses operate.</p>
              <p>Our mission is simple - to turn complexity into clarity through AI, automation, and data-driven engineering.</p>
              <p>We don't just build software - we architect ecosystems that help enterprises innovate faster, operate smarter, and grow sustainably.</p>
            </div>
            <p className="mt-8 border-l-4 border-ember pl-5 text-xl font-extrabold leading-8">
              Transforming operations into intelligence - one system at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-8 text-white sm:py-12">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(ellipse_at_center,rgba(255,37,45,0.22),transparent_65%)] opacity-75" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <p className="section-kicker">Our innovations</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Products Built for What's Next</h2>
            </div>
            <a className="hidden items-center gap-3 text-sm font-bold sm:flex" href="#products">Explore All Products <span className="button-arrow" aria-hidden="true" /></a>
          </div>
          <div id="products" className="grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <article className="product-card group" key={product.name}>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.body}</p>
                </div>
                <span className="ml-auto self-end text-white/65 transition group-hover:text-ember"><Arrow /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="bg-[#f7f7f7] py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <p className="section-kicker">Insights that inspire</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Latest Perspectives</h2>
            </div>
            <a className="hidden items-center gap-3 text-sm font-bold sm:flex" href="#blog">View All Articles <span className="button-arrow" aria-hidden="true" /></a>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {articles.map((article) => (
              <article className="article-card" key={article.title}>
                <Image src={article.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/68 to-black/25" />
                <div className="relative z-10 flex h-full max-w-xl flex-col justify-between p-7">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wide text-ember">{article.tag} <span className="ml-4 text-white/58">{article.date}</span></p>
                    <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white">{article.title}</h3>
                  </div>
                  <a className="mt-8 inline-flex w-fit items-center gap-4 rounded-full border border-white/45 px-5 py-3 text-sm font-bold text-white" href="#blog">
                    Read More <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer-shell bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <div className="footer-cta">
            <p className="footer-cta__title">Forging the Future of Intelligent Enterprise</p>
            <a className="footer-cta__button" href="#contact" aria-label="Book a strategy call">
              <span className="button-arrow" aria-hidden="true" />
            </a>
            <span className="footer-cta__watermark">QLOAX</span>
          </div>

          <div className="footer-grid">
            <div className="footer-brand">
              <FooterLogo />
              <p>The unseen intelligence that powers the future of enterprise.</p>
              <a className="footer-start" href="#contact">
                <span>
                  <Image src="/logo2.png" alt="" width={28} height={28} className="h-6 w-6 object-contain" />
                </span>
                Book a Strategy Call
              </a>
              <div className="footer-socials">
                {["in", "x", "yt"].map((item) => (
                  <a href="#contact" key={item}>{item}</a>
                ))}
              </div>
            </div>
            <FooterColumn title="Services" items={["Enterprise Solutions", "AI & Automation", "Product Innovation", "Technology Services", "Strategic Consulting"]} />
            <FooterColumn title="Company" items={["About QLOAX", "Vision & Philosophy", "Blog", "Contact"]} />
            <div>
              <h3 className="footer-title">Global Presence</h3>
              <p className="mt-4 text-sm leading-6 text-white/70">
                <strong className="text-white">India (HQ):</strong> QLOAX, Office No. 329, Gera Imperium Gateway, 3rd Floor, A-Building, near Nashik Phata Metro Station, Pune, Maharashtra - 411034.
              </p>
              <p className="mt-3 text-sm font-bold">Phone: +91 90677 34333</p>
            </div>
            <FooterColumn title="Legal" items={["Privacy Policy", "Terms of Service"]} />
          </div>

          <div className="footer-bottom">
            <p>(c) 2025 QLOAX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <div className="mt-4 grid gap-2 text-sm text-white/65">
        {items.map((item) => <a href={footerHref(item)} key={item}>{item}</a>)}
      </div>
    </div>
  );
}

function footerHref(item) {
  if (item === "Blog") {
    return "#blog";
  }

  if (item === "Contact" || item.includes("Policy") || item.includes("Terms")) {
    return "#contact";
  }

  if (item.includes("QLOAX") || item.includes("Vision")) {
    return "#vision";
  }

  return "#services";
}
