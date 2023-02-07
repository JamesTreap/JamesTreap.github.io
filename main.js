// declare constants for image sliders/tabs
const images = document.querySelectorAll('.img')
const init = document.querySelectorAll('.init')
const allIndicator = document.querySelectorAll('.indicator li');
const allContent = document.querySelectorAll('.content li');
const allIndicator2 = document.querySelectorAll('.indicator2 li');
const allContent2 = document.querySelectorAll('.content2 li');

// declare constants for observers
const langSec = document.querySelector('.container');
const theTab1 = document.querySelectorAll('.contain')[0];
const theTab2 = document.querySelectorAll('.contain')[1];
const web1 = document.querySelectorAll('.website')[0];
const web2 = document.querySelectorAll('.website')[1];

// for the navbar to immediately transition in when rescaling ---------------------
function startNav() {
    setTimeout(function(){
        let r = document.querySelector(':root');
        r.style.setProperty('--offset', '0s');
    }, 10000);
}


//---- for program experience --------------------------------------------------------
// play staggered animation whenever section is loaded
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (const child of langSec.children) {
                child.style.animation =  "enterin 1s calc(var(--index) * 0.5s) forwards";
            }
            return; 
        }
        for (const child of langSec.children) {
            child.style.animation =  "none";
        }
    });
});
observer.observe(langSec);

// add/remove the show_img tag for slider
init.forEach(img => {
    init.forEach(img => {
        remove_class(images)
        img.classList.add('show_img')
    })
})

images.forEach(img => {
    img.addEventListener('click', () => {
        remove_class(images)
        img.classList.add('show_img')
    })
})

function remove_class (images) {
    images.forEach(img => {
        img.classList.remove('show_img')
    })
}

// ------------------------------------------------------------------------------
// animating the remaining parts of the page
// play animation whenever section is loaded
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeAnim");
            return; 
        }
        entry.target.classList.remove("fadeAnim");
    });
});
observer2.observe(theTab1);
observer2.observe(theTab2);
observer2.observe(web1);
observer2.observe(web2);


// ------------------------------------------------------------------------------
// add/remove the active tag for the tabs
allIndicator.forEach(item=> {
    item.addEventListener('click', function () {
      const content = document.querySelector(this.dataset.target);
  
      allIndicator.forEach(i=> {
        i.classList.remove('active');
      })
  
      allContent.forEach(i=> {
        i.classList.remove('active');
      })
  
      content.classList.add('active');
      this.classList.add('active');
    })
})

allIndicator2.forEach(item=> {
    item.addEventListener('click', function () {
      const content2 = document.querySelector(this.dataset.target);
  
      allIndicator2.forEach(i=> {
        i.classList.remove('active2');
      })
  
      allContent2.forEach(i=> {
        i.classList.remove('active2');
      })
  
      content2.classList.add('active2');
      this.classList.add('active2');
    })
})

