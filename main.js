document.addEventListener('DOMContentLoaded', function() {
  var firstSection = document.getElementById('first');
  var firstoffsetTop = firstSection.offsetTop;

  var secondSection = document.getElementById('second');
  var secondoffsetTop = secondSection.offsetTop-50;

  var thirdtSection = document.getElementById('third');
  var thirdoffsetTop = thirdtSection.offsetTop;

  var fourthSection = document.getElementById('fourth');
  var fourthoffsetTop = fourthSection.offsetTop;

  const homeBtn = document.querySelector('.homebtn');
  const projectsBtn = document.querySelector('.projectsbtn');
  const contactBtn = document.querySelector('.contactbtn');
  const gameBtn = document.querySelector('.gamebtn');
  homeBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  });

  projectsBtn.addEventListener('click', function() {
    window.scrollTo({
      top: secondoffsetTop,
      behavior: 'smooth' 
    });
  });

  contactBtn.addEventListener('click', function() {
    window.scrollTo({
      top: thirdoffsetTop,
      behavior: 'smooth' 
  });
    gameBtn.addEventListener('click', function() {
      window.scrollTo({
        top: fourthoffsetTop,
        behavior: 'smooth' 
      });
    });  
  });


  
    setInterval(() => {
      if (document.documentElement.scrollTop>=0 && document.documentElement.scrollTop<386) {
        homeBtn.style.fontSize='20px';
        homeBtn.style.color='#0089D1';
        projectsBtn.style.removeProperty('color');
        projectsBtn.style.removeProperty('font-size');
        contactBtn.style.removeProperty('color');
        contactBtn.style.removeProperty('font-size');
        gameBtn.style.removeProperty('color');
        gameBtn.style.removeProperty('font-size');
      }
      if (document.documentElement.scrollTop>=387 && document.documentElement.scrollTop<2116) {
        projectsBtn.style.fontSize='20px';
        projectsBtn.style.color='#0089D1';
        homeBtn.style.removeProperty('color');
        homeBtn.style.removeProperty('font-size');
        contactBtn.style.removeProperty('color');
        contactBtn.style.removeProperty('font-size');
        gameBtn.style.removeProperty('color');
        gameBtn.style.removeProperty('font-size');
      }
      if (document.documentElement.scrollTop>=2117 && document.documentElement.scrollTop<3280) {
        contactBtn.style.fontSize='20px';
        contactBtn.style.color='#0089D1';
        projectsBtn.style.removeProperty('color');
        projectsBtn.style.removeProperty('font-size');
        homeBtn.style.removeProperty('color');
        homeBtn.style.removeProperty('font-size');
        gameBtn.style.removeProperty('color');
        gameBtn.style.removeProperty('font-size');
      }
      if (document.documentElement.scrollTop>=2960 ) {
        gameBtn.style.fontSize='20px';
        gameBtn.style.color='#0089D1';
        projectsBtn.style.removeProperty('color');
        projectsBtn.style.removeProperty('font-size');
        homeBtn.style.removeProperty('color');
        homeBtn.style.removeProperty('font-size');
        contactBtn.style.removeProperty('color');
        contactBtn.style.removeProperty('font-size');
      }

      //console.log(document.documentElement.scrollTop)
      //console.log(fourthoffsetTop)
    }, 100);
  
});

  



  //document.addEventListener('DOMContentLoaded', function() {
    //const sec = document.querySelector('.bgim');

    //const homebutton = document.querySelector(".home");
    //if (sec==null) {
      //  console.log('hello there');
    //}


    //sec.addEventListener('mouseover', () => {
    //if (sec.classList.contains('home')) {
        
    //console.log('hello');
    //homebutton.style.fontSize = '24px';
    //}
  //});
  //});