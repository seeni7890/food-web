
 
 /*--------------Show Menu----------------*/ 
  const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click' , () =>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

 /*--------------Remove Menu Mobile----------------*/

 const navLink = document.querySelectorAll('.nav_link')

 function linkAction(){
     const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))

 /*--------------Scroll section Active link----------------*/

 const sections = document.querySelectorAll('section[id')

 

 function scrollActive(){
     const scrollY = window.pageYOffset

     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
         }
         else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
         }
     })
 } window.addEventListener('scroll', scrollActive)


  /*--------------change background header----------------*/

  function scrollHeader(){
      const nav = document.getElementById('header')

      if (this.scrollY >= 200) nav.classList.add('scroll-header');
      else nav.classList.remove('scroll-header')
  }window.addEventListener('scroll', scrollHeader)
  

   /*--------------Show Scroll Top----------------*/

   function scrollTop(){
      const scrollTop = document.getElementById('scroll-top')

      if (this.scrollY >= 560) scrollTop.classList.add('scroll-top');
      else scrollTop.classList.remove('scroll-top')
  }window.addEventListener('scroll', scrollTop);

   /*--------------Scroll animation---------------*/
   var sr = ScrollReveal({
        origin: "bottom",
        distance: "30px",
        duration : 2000,
        reset: true
   })
   sr.reveal(`.home_data ,.home_img ,
   .about_data, .about_image, .services_content , .menu_content, .app_data , .contact_data , .contact_button
   `,{
       interval: 100
   })

   var sv = ScrollReveal({
         origin: "left",
        distance: "30px",
        duration : 2000,
        reset: true
   })
   sv.reveal(`.footer_title , .footer_link ,.footer_address`,{
    interval: 100
   })
   var st = ScrollReveal({
         origin: "top",
        distance: "30px",
        duration : 2000,
        reset: true
   })
   st.reveal(`.footer_logo,.footer_discription,.footer_social`,{
    interval: 100
   })