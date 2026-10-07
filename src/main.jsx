import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const services=[
 {title:"General Dentistry",text:"Routine examinations, cleaning and restorative dental care.",icon:"01"},
 {title:"Root Canal Treatment",text:"Carefully planned treatment to preserve your natural tooth.",icon:"02"},
 {title:"Dental Implants",text:"Comfort-focused tooth replacement for function and confidence.",icon:"03"},
 {title:"Smile & Cosmetic Care",text:"Aesthetic dental care for a natural-looking smile.",icon:"04"},
 {title:"Children's Dental Care",text:"Gentle, easy-to-understand dental visits for younger patients.",icon:"05"},
 {title:"Dental Check-up",text:"A simple starting point for understanding your oral health.",icon:"06"}
];
const navItems=[["home","Home"],["about","About"],["gallery","Gallery"],["services","Services"],["contact","Contact"]];

function Booking({onBack}){
 const [sent,setSent]=useState(false);
 const [form,setForm]=useState({name:"",phone:"",service:"",date:"",time:"",message:""});
 const update=e=>setForm({...form,[e.target.name]:e.target.value});
 if(sent)return <PageShell cls="booking-page" title="Appointment requested." eyebrow="THANK YOU"><div className="confirm"><div className="confirm-icon">✓</div><h2>We received your request.</h2><p>Thank you, {form.name}. The clinic can confirm your preferred date and time with you by phone.</p><button onClick={()=>setSent(false)}>Make another request</button><button className="outline" onClick={onBack}>Back to website</button></div></PageShell>;
 return <PageShell cls="booking-page" title="Book your visit." eyebrow="APPOINTMENT"><p className="page-lead">A simple appointment form made for every patient. No account, no online payment and no complicated steps.</p><form className="large-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><div className="form-grid">
 <label><span>Patient name *</span><input required name="name" value={form.name} onChange={update} placeholder="Enter full name"/></label>
 <label><span>Phone number *</span><input required name="phone" value={form.phone} onChange={update} inputMode="tel" placeholder="Enter mobile number"/></label>
 <label><span>Preferred date *</span><input required type="date" name="date" value={form.date} onChange={update}/></label>
 <label><span>Treatment</span><select name="service" value={form.service} onChange={update}><option value="">Select treatment</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label>
 <label><span>Preferred time</span><select name="time" value={form.time} onChange={update}><option value="">Select time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
 <label><span>Message / concern</span><input name="message" value={form.message} onChange={update} placeholder="Tell us briefly about your concern"/></label>
 </div><button className="big-submit" type="submit">REQUEST APPOINTMENT <span>→</span></button><small>Free request • Clinic confirmation by phone</small></form></PageShell>
}
function PageShell({cls="",eyebrow,title,children}){return <section className={"page "+cls}><div className="page-inner"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children}</div></section>}

function App(){
 const [page,setPage]=useState("home"); const [menu,setMenu]=useState(false);
 const go=p=>{setPage(p);setMenu(false);window.scrollTo({top:0,behavior:"smooth"})};
 return <div className="site">
  <div className="topbar">SHREE PATIDAR DENTAL CLINIC <span>MANDSAUR • MADHYA PRADESH</span></div>
  <header className="nav"><button className="brand" onClick={()=>go("home")}><span className="mark">✦</span><span><b>SHREE PATIDAR</b><small>DENTAL CLINIC</small></span></button><nav className={menu?"open":""}>{navItems.map(([p,l])=><button className={page===p?"active":""} key={p} onClick={()=>go(p)}>{l}</button>)}</nav><div className="nav-actions"><button className="book" onClick={()=>go("booking")}>BOOK APPOINTMENT <span>↗</span></button><button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Menu"><i></i><i></i><i></i></button></div></header>
  {page==="home"&&<main><section className="home-hero"><div><p className="eyebrow">SHREE PATIDAR DENTAL CLINIC • MANDSAUR</p><h1>Dental care that feels <em>simple.</em></h1><p className="lead">Clear guidance, comfortable treatment and personal attention for you and your family.</p><div className="actions"><button className="primary" onClick={()=>go("booking")}>BOOK APPOINTMENT <span>→</span></button><button className="secondary" onClick={()=>go("services")}>VIEW SERVICES</button></div><div className="home-trust"><b>22+</b><span>Years of experience</span><b>BDS</b><span>Qualified dentist</span></div></div><div className="home-visual"><div className="tooth"></div><div className="visual-card"><b>PERSONAL CARE</b><span>Comfort first</span></div></div></section>
   <section className="home-links"><button onClick={()=>go("about")}><small>01</small><strong>ABOUT THE CLINIC</strong><span>Meet your dentist →</span></button><button onClick={()=>go("gallery")}><small>02</small><strong>CLINIC GALLERY</strong><span>See the clinic →</span></button><button onClick={()=>go("services")}><small>03</small><strong>DENTAL SERVICES</strong><span>Explore treatments →</span></button></section>
   <section className="home-book"><div><p className="eyebrow">NEED A VISIT?</p><h2>Start with a simple<br/><em>appointment.</em></h2></div><button onClick={()=>go("booking")}>BOOK YOUR APPOINTMENT →</button></section></main>}
  {page==="about"&&<PageShell cls="about-page" eyebrow="ABOUT THE CLINIC" title="Meet the people behind your care."><div className="about-grid"><div className="doctor-photo"><div className="photo-placeholder">DR</div><span>Doctor photograph can be added here</span></div><div className="about-copy"><p className="label">YOUR DENTIST</p><h2>Dr. Sunil Patidar</h2><p className="credential">BDS • 22 YEARS OF EXPERIENCE</p><p>Our approach is straightforward: listen first, explain clearly and provide dental care with patience and attention.</p><p>Every patient should understand their treatment and feel comfortable asking questions. This clinic is built around that simple principle.</p><button className="dark-button" onClick={()=>go("booking")}>MEET US FOR AN APPOINTMENT →</button></div></div><div className="about-bottom"><div><strong>CARE</strong><span>Patient-first approach</span></div><div><strong>CLARITY</strong><span>Easy-to-understand guidance</span></div><div><strong>TRUST</strong><span>Personal dental care</span></div></div></PageShell>}
  {page==="gallery"&&<PageShell cls="gallery-page" eyebrow="GALLERY" title="A look inside the clinic."><p className="page-lead">Clinic photographs can be added here. The layout is ready for reception, treatment room, equipment and team photos.</p><div className="gallery-grid">{["Reception","Treatment Room","Dental Equipment","Waiting Area","Doctor's Room","Clinic Exterior"].map((x,i)=><div className={"gallery-photo p"+(i+1)} key={x}><div className="photo-symbol">+</div><strong>{x}</strong><span>PHOTO TO BE ADDED</span></div>)}</div></PageShell>}
  {page==="services"&&<PageShell cls="services-page" eyebrow="SERVICES" title="Dental care, clearly explained."><p className="page-lead">Choose a service to learn more or go directly to an appointment request.</p><div className="service-list">{services.map(s=><article key={s.title}><span>{s.icon}</span><div><h2>{s.title}</h2><p>{s.text}</p></div><button onClick={()=>go("booking")}>BOOK →</button></article>)}</div></PageShell>}
  {page==="contact"&&<PageShell cls="contact-page" eyebrow="CONTACT" title="Come and see us."><div className="contact-grid"><div><div className="contact-card"><span>ADDRESS</span><h2>Shree Patidar Dental Clinic</h2><p>Mandsaur, Madhya Pradesh</p></div><div className="contact-card"><span>PHONE</span><h2>Clinic phone number</h2><p>Add the clinic's verified number here.</p></div><div className="contact-card"><span>HOURS</span><h2>Clinic timings</h2><p>Add opening and closing hours here.</p></div></div><div className="map-placeholder"><span>MAP</span><strong>Clinic location</strong><p>Mandsaur, Madhya Pradesh</p></div></div><button className="contact-book" onClick={()=>go("booking")}>BOOK AN APPOINTMENT →</button></PageShell>}
  {page==="booking"&&<Booking onBack={()=>go("home")}/>}
  <footer><b>SHREE PATIDAR DENTAL CLINIC</b><span>© 2026 • MANDSAUR</span><button onClick={()=>go("booking")}>BOOK APPOINTMENT →</button></footer>
  <button className="mobile-booking-bar" onClick={()=>go("booking")}>BOOK APPOINTMENT <span>→</span></button>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);