
const p_btns = document.querySelector(".p-btns");
//creacting a portfolio tabbed
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  // console.log(p_btn_clicked);

  if(!p_btn_clicked.classList.contains("p-btn"))return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");


  // to find the num in data attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);


  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));


});






//Scrol to top
const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scroolElement = document.createElement("div");
scroolElement.classList.add("scrollTop-style");

scroolElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroolElement);


scroolElement.addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});




//animet number
const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver((entries,observer)=>{
  const[entry] = entries;

  if(!entry.isIntersecting) return;


  const counterNum = document.querySelectorAll(".counter-numbers");
  const speed = 200;
  counterNum.forEach((curElem) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.number);
      const initialNum = parseInt(curElem.innerText);
      const incrementNumber = Math.trunc(targetNumber / speed);
      if (initialNum < targetNumber) {
        curElem.innerText = initialNum + incrementNumber;
        setTimeout(updateNumber, 10);
      }
    };
    updateNumber();
  });
  observer.unobserver(workSection);
},
  {
    root: null,
    threshold: 0,
  });
workObserver.observe(workSection);


//navbar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");
mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle("active");
});












