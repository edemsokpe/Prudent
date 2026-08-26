
const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
if(menuBtn) menuBtn.addEventListener("click",()=>navLinks.classList.toggle("show"));

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>navLinks.classList.remove("show"));
});

document.querySelectorAll(".faq-question").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const item=btn.parentElement;
    document.querySelectorAll(".faq-item").forEach(x=>{if(x!==item)x.classList.remove("open")});
    item.classList.toggle("open");
    btn.querySelector("span").textContent=item.classList.contains("open")?"−":"+";
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")});
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const page=document.body.dataset.page;
document.querySelectorAll(".nav-links a").forEach(a=>{
  if(a.dataset.page===page)a.classList.add("active");
});

const year=document.querySelectorAll(".year");
year.forEach(el=>el.textContent=new Date().getFullYear());

const form=document.querySelector("#contactForm");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent("New Prudent Tech Academy Project Enquiry");
    const body=encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
    );
    window.location.href=`mailto:prudentcontcacademy@gmail.com?subject=${subject}&body=${body}`;
  });
}
