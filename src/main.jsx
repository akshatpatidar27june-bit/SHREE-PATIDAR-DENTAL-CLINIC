import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services=[
  ["01","General Dentistry","Complete preventive and restorative dental care for healthy, confident smiles."],
  ["02","Root Canal Treatment","Carefully planned treatment focused on preserving your natural tooth."],
  ["03","Dental Implants","Modern tooth-replacement solutions designed around comfort and function."],
  ["04","Smile & Cosmetic Care","Thoughtful aesthetic treatments for a natural-looking smile."],
];

function App(){
  return <div className="site">
    <div className="topbar">SHREE PATIDAR DENTAL CLINIC <span>• Mandsaur, Madhya Pradesh</span></div>
    <header className="nav">
      <a className="brand" href="#"><span className="mark">✦</span><span><b>SHREE PATIDAR</b><small>DENTAL CLINIC</small></span></a>
      <nav><a href="#about">About</a><a href="#services">Services</a><a href="#doctor">Doctor</a><a href="#contact">Contact</a></nav>
      <a className="book" href="#booking">Book Appointment <span>↗</span></a>
    </header>

    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">ESTABLISHED DENTAL CARE • MANDSAUR</p>
          <h1>Healthy teeth.<br/><em>Confident smiles.</em></h1>
          <p className="lead">Personalised dental care with a calm, professional approach — built around your comfort and long-term oral health.</p>
          <div className="actions"><a className="primary" href="#booking">Book an Appointment <span>→</span></a><a className="secondary" href="#services">Explore Services</a></div>
          <div className="trust"><span><b>22+</b><small>Years of experience</small></span><i></i><span><b>BDS</b><small>Qualified dentist</small></span><i></i><span><b>Care</b><small>Patient-first approach</small></span></div>
        </div>
        <div className="hero-art">
          <div className="orb orb1"></div><div className="orb orb2"></div>
          <div className="tooth"><div className="shine"></div></div>
          <div className="floating-card"><span className="dot"></span><div><b>Gentle care</b><small>Designed around you</small></div></div>
        </div>
      </section>

      <section className="intro" id="about">
        <div><p className="eyebrow">A BETTER DENTAL EXPERIENCE</p><h2>Professional care,<br/><span>without the clinical coldness.</span></h2></div>
        <p>At Shree Patidar Dental Clinic, every visit is designed to feel clear, comfortable and personal. From routine check-ups to specialised treatments, we focus on explaining your options and caring for your smile at every step.</p>
      </section>

      <section className="services" id="services">
        <div className="section-head"><div><p className="eyebrow">OUR SERVICES</p><h2>Complete care for<br/><span>every stage of your smile.</span></h2></div><p>Modern dental solutions delivered with precision, patience and attention to detail.</p></div>
        <div className="service-grid">{services.map(([n,t,d])=><article className="service" key={n}><span className="num">{n}</span><div><h3>{t}</h3><p>{d}</p><a href="#booking">Learn more →</a></div></article>)}</div>
      </section>

      <section className="doctor" id="doctor">
        <div className="portrait"><div className="portrait-inner"><span>DR</span></div></div>
        <div className="doctor-copy"><p className="eyebrow">YOUR DENTIST</p><h2>Dr. Sunil Patidar</h2><p className="credential">BDS <span>•</span> 22 years of experience</p><p>Experienced dental care with a focus on clear communication, dependable treatment and a comfortable patient experience.</p><a className="text-link" href="#contact">Meet the clinic →</a></div>
      </section>

      <section className="booking" id="booking">
        <div><p className="eyebrow">APPOINTMENTS</p><h2>Let’s take care<br/><em>of your smile.</em></h2><p>Ready to visit? Our booking experience will make it simple to choose a convenient appointment.</p></div>
        <div className="booking-card"><div className="field"><span>Your name</span><b>Enter your name</b></div><div className="field"><span>Phone number</span><b>Enter phone number</b></div><button>Continue to booking <span>→</span></button><small>No payment required to request an appointment.</small></div>
      </section>

      <section className="contact" id="contact"><div><p className="eyebrow">VISIT US</p><h2>Shree Patidar<br/>Dental Clinic</h2></div><div className="contact-info"><p>Mandsaur, Madhya Pradesh</p><p>Professional dental care for you and your family.</p><a href="tel:+919999999999">Call the clinic →</a></div></section>
    </main>
    <footer><b>SHREE PATIDAR DENTAL CLINIC</b><span>© 2026 • Mandsaur</span><span>Dental care with a personal touch.</span></footer>
  </div>
}
createRoot(document.getElementById("root")).render(<App />);
