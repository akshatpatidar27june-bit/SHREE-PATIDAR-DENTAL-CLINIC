import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services=[
  ["01","General Dentistry","Routine check-ups, cleaning and restorative care for healthy teeth and gums."],
  ["02","Root Canal Treatment","Planned treatment focused on relieving discomfort and preserving your natural tooth."],
  ["03","Dental Implants","Tooth-replacement solutions designed around comfort, function and long-term care."],
  ["04","Smile & Cosmetic Care","Aesthetic dental care for a natural-looking, confident smile."]
];

function BookingForm(){
  const [sent,setSent]=useState(false);
  const [form,setForm]=useState({name:"",phone:"",service:"",date:"",time:"",message:""});
  const update=e=>setForm({...form,[e.target.name]:e.target.value});
  const submit=e=>{e.preventDefault();setSent(true)};
  if(sent) return <div className="booking-success"><div className="success-icon">✓</div><h3>Appointment request received</h3><p>Thank you, {form.name || "for your request"}. The clinic can confirm your preferred date and time with you by phone.</p><button type="button" onClick={()=>setSent(false)}>Make another request</button></div>;
  return <form className="booking-card" onSubmit={submit}>
    <div className="form-title"><span>APPOINTMENT REQUEST</span><strong>Tell us when you would like to visit.</strong></div>
    <div className="form-grid">
      <label><span>Patient name *</span><input required name="name" value={form.name} onChange={update} placeholder="Enter full name"/></label>
      <label><span>Phone number *</span><input required name="phone" value={form.phone} onChange={update} inputMode="tel" placeholder="Enter mobile number"/></label>
      <label><span>Treatment</span><select name="service" value={form.service} onChange={update}><option value="">Select treatment</option>{services.map(([,t])=><option key={t}>{t}</option>)}</select></label>
      <label><span>Preferred date *</span><input required type="date" name="date" value={form.date} onChange={update}/></label>
      <label><span>Preferred time</span><select name="time" value={form.time} onChange={update}><option value="">Select time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
      <label><span>Message</span><input name="message" value={form.message} onChange={update} placeholder="Any concern or request"/></label>
    </div>
    <button className="submit-booking" type="submit">Request Appointment <span>→</span></button>
    <small>Free request • No online payment • Clinic confirmation by phone</small>
  </form>
}

function App(){
  const [menu,setMenu]=useState(false);
  return <div className="site">
    <div className="topbar">SHREE PATIDAR DENTAL CLINIC <span>• Mandsaur, Madhya Pradesh</span></div>
    <header className="nav">
      <a className="brand" href="#home" onClick={()=>setMenu(false)}><span className="mark">✦</span><span><b>SHREE PATIDAR</b><small>DENTAL CLINIC</small></span></a>
      <nav className={menu?"open":""}><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#doctor" onClick={()=>setMenu(false)}>Doctor</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></nav>
      <div className="nav-actions"><a className="book" href="#booking">Book Appointment <span>↗</span></a><button className="mobile-menu" aria-label="Open menu" onClick={()=>setMenu(!menu)}><i></i><i></i><i></i></button></div>
    </header>

    <main id="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">ESTABLISHED DENTAL CARE • MANDSAUR</p>
          <h1>Healthy teeth.<br/><em>Confident smiles.</em></h1>
          <p className="lead">Personalised dental care with a calm, professional approach — built around your comfort and long-term oral health.</p>
          <div className="actions"><a className="primary" href="#booking">Book an Appointment <span>→</span></a><a className="secondary" href="#services">Explore Services</a></div>
          <div className="trust"><span><b>22+</b><small>Years of experience</small></span><i></i><span><b>BDS</b><small>Qualified dentist</small></span><i></i><span><b>Care</b><small>Patient-first approach</small></span></div>
        </div>
        <div className="hero-art"><div className="orb orb1"></div><div className="orb orb2"></div><div className="tooth"><div className="shine"></div></div><div className="floating-card"><span className="dot"></span><div><b>Gentle care</b><small>Designed around you</small></div></div></div>
      </section>

      <section className="booking booking-priority" id="booking">
        <div className="booking-intro"><p className="eyebrow">FIRST PRIORITY • APPOINTMENTS</p><h2>Booking made<br/><em>simple for everyone.</em></h2><p>No complicated account or technology is needed. Fill in the form and the clinic can confirm your appointment by phone.</p><div className="booking-points"><span>✓ Simple patient details</span><span>✓ Choose preferred date</span><span>✓ No online payment</span></div></div>
        <BookingForm/>
      </section>

      <section className="intro" id="about"><div><p className="eyebrow">A BETTER DENTAL EXPERIENCE</p><h2>Professional care,<br/><span>without the clinical coldness.</span></h2></div><p>At Shree Patidar Dental Clinic, every visit is designed to feel clear, comfortable and personal. From routine check-ups to specialised treatments, we focus on explaining your options and caring for your smile at every step.</p></section>

      <section className="services" id="services"><div className="section-head"><div><p className="eyebrow">OUR SERVICES</p><h2>Complete care for<br/><span>every stage of your smile.</span></h2></div><p>Modern dental solutions delivered with precision, patience and attention to detail.</p></div><div className="service-grid">{services.map(([n,t,d])=><article className="service" key={n}><span className="num">{n}</span><div><h3>{t}</h3><p>{d}</p><a href="#booking">Book this treatment →</a></div></article>)}</div></section>

      <section className="doctor" id="doctor"><div className="portrait"><div className="portrait-inner"><span>DR</span></div></div><div className="doctor-copy"><p className="eyebrow">YOUR DENTIST</p><h2>Dr. Sunil Patidar</h2><p className="credential">BDS <span>•</span> 22 years of experience</p><p>Experienced dental care with a focus on clear communication, dependable treatment and a comfortable patient experience.</p><a className="text-link" href="#booking">Request an appointment →</a></div></section>

      <section className="contact" id="contact"><div><p className="eyebrow">VISIT US</p><h2>Shree Patidar<br/>Dental Clinic</h2></div><div className="contact-info"><p>Mandsaur, Madhya Pradesh</p><p>Professional dental care for you and your family.</p><a href="#booking">Book your visit →</a></div></section>
    </main>
    <footer><b>SHREE PATIDAR DENTAL CLINIC</b><span>© 2026 • Mandsaur</span><span>Dental care with a personal touch.</span></footer>
    <a className="mobile-booking-bar" href="#booking">BOOK APPOINTMENT <span>→</span></a>
  </div>
}
createRoot(document.getElementById("root")).render(<App />);