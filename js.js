// ---------------------- for Mopile Phone ---------------------- //

let x = document.querySelector(".x");
let isOpen = false ;
function ph(tr){
    x.src = tr;
}
let nav = document.getElementById('nav') ;
let opc = document.getElementById('trans') ;

function sid() {
    opc.style.opacity = "1" 
    nav.style.left = "0";
    opc.style.left = '0'
    isOpen = true ;
}
function closesid() {
    nav.style.left = "-100%";
    opc.style.left = '-200%'
    opc.style.opacity = "0";
    isOpen = false ;
}

// ------------------------------ header --------------------------- //

let allLinksHeader = document.querySelectorAll('.header .nav li a') ;

allLinksHeader.forEach( link => {
    link.onclick = (from) => {
        from.preventDefault();
        window.scrollTo({
            top : document.querySelector(`.${link.dataset.url}`).offsetTop - 100 ,
            behavior : 'smooth' ,
        })
        if( isOpen ) {
            closesid() ;
            isOpen = false ;
        }
    }
})

let allLinksFooter = document.querySelectorAll('footer .nav li a') ;

allLinksFooter.forEach( link => {
    link.onclick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top : document.querySelector(`.${link.dataset.url}`).offsetTop ,
            behavior : 'smooth' ,
        })
    }
}) ;

// ------------------------------ landing ----------------------------- // 
let foodMenu = document.querySelector('.landing .container .infos') ,
    welcomPage = document.querySelector('.landing .container .welcom-page') ,
    getButton = document.querySelector('.landing .container .welcom-page .botton a') ,
    closeButton = document.querySelector('.landing .container .infos .close-button');

// set the close button when resize the screen 
let widthScreen = document.body.clientWidth;

setButtonClose(widthScreen);

function setButtonClose( wid ) {
    if( wid <= 767 ) {
        closeButton.style.cssText = "left: 40%;"
    }else {
        closeButton.style.cssText = "left: 46%;"
    }
}


getButton.onclick = () => {
    setTimeout(()=>{
        welcomPage.style.cssText = `transform: translateX(100%)`;
    },250) ;
    setTimeout(() => {
        let testSize = document.body.clientWidth;
        if( testSize <= 767 ) {
            foodMenu.style.cssText = `transform: translateY(114%)`;
        }else {
            foodMenu.style.cssText = `transform: translateY(98%)`;
        }
    },1200);
}
closeButton.onclick = () => {
    setTimeout(() => {
        foodMenu.style.cssText = `transform: translateY(250%)`;
    },250);
    setTimeout(()=>{
        welcomPage.style.cssText = `transform: translateX(0)`;
    },1000) ;
}

// ------------------------------- history --------------------- //

let textParagraph = document.querySelector('.history p') ,
    copyText = textParagraph.innerHTML ;
    readMoreBtn = document.querySelector('.history .botton') ,
    open = false;

readMoreBtn.onclick = (eve) => {
    eve.preventDefault();
    if( !open ) {
        textParagraph.style.cssText = `transform: translateX(-100%)`;
        readMoreBtn.style.cssText = `transform: translateX(-100%)`;
        setTimeout(() => {
            textParagraph.appendChild(document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ut facere tenetur blanditiis doloribus suscipit optio ratione quasi possimus autem, sit corporis adipisci, magni quod ')) ;
            textParagraph.style.cssText = `font-size: 11px;`
            textParagraph.style.cssText = `transform: translateX(0)`;
            readMoreBtn.innerHTML = '<a href="#">Close</a>';
            readMoreBtn.style.cssText = `transform: translateX(0)`;
        },500)
        open = true ;
    }else {
        open = false ;
        textParagraph.style.cssText = `transform: translateX(-100%)`;
        readMoreBtn.style.cssText = `transform: translateX(-100%)`;
        setTimeout(() => {
            textParagraph.innerHTML = copyText ;
            textParagraph.style.cssText = `font-size: 13px;`
            textParagraph.style.cssText = `transform: translateX(0)`;
            readMoreBtn.innerHTML = '<a href="#">Read more about us</a>';
            readMoreBtn.style.cssText = `transform: translateX(0)`;
        },500)
    }
}

// ----------------------------- Our Food Section ----------------- //

let allTypOfFood = document.querySelectorAll('.food-manu .container li a') ,
    mainInfosContainer = document.querySelector('.food-manu .container .infos'),
    theFirstBox= document.querySelector('.food-manu .container .infos .box:first-child') ,
    allBoxFood = [...document.querySelectorAll('.food-manu .container .infos .box .inf')] ,
    firstBox = [...document.querySelectorAll('.food-manu .container .infos .box:first-child .inf')],
    secondBox = [...document.querySelectorAll('.food-manu .container .infos .box:nth-child(2) .inf')];

allTypOfFood.forEach( type => {
    type.onclick = (eve) => {
        eve.preventDefault();
        removeAndAddClass(type);
        fillterFood(type);
        if( widthScreen > 767 ) {
            swapIf();
            theFirstBox.style.borderBottom = "none"
        }
        else {
            theFirstBox.style.borderBottom = "none"
        }
    }
})

let allTypeofFoodFooter = document.querySelectorAll('footer .info2 ul li a') ;

allTypeofFoodFooter.forEach( type => {
    type.onclick = (eve) => {
        eve.preventDefault();
        window.scrollTo({
            top : document.querySelector('.food-manu ').offsetTop + 100, 
            behavior : 'smooth' ,
        })
        removeAndAddClassAc(type);
        fillterFood(type);
        if( widthScreen > 767 ) {
            swapIf();
            theFirstBox.style.borderBottom = "none"
        }
        else {
            theFirstBox.style.borderBottom = "none"
        }
    }
});
function removeAndAddClass(type) {
    allTypOfFood.forEach( link => {
        link.classList.remove('active');
    })
    type.classList.add('active');
}

function removeAndAddClassAc(type) {
    allTypOfFood.forEach( link => {
        link.classList.remove('active');
    })
    allTypOfFood.forEach(el => {
        if( el.dataset.type == type.dataset.type) {
            el.classList.add('active') ;
        }
    })
}
function fillterFood(type) {
    let type_Of = type.dataset.type;
    allBoxFood.forEach( box => {
        box.style.display = 'none';
        box.classList.remove('on');
    })
    let newArray = allBoxFood.filter((el) => {
        return el.classList.contains(`${type_Of}`);
    })
    newArray.forEach(nBox => {
        nBox.style.display = 'flex';
        nBox.style.borderBottom = '1px solid #f7370c80'
        nBox.classList.add('on');
    })
}
function swapIf() {
    let count1 = 0 , count2 = 0 ;
    firstBox.forEach( el => {
        if(el.classList.contains('on')) count1++;
    })
    secondBox.forEach( el => {
        if(el.classList.contains('on')) count2++;
    })
    if( count2 > count1 ) {
        mainInfosContainer.style.cssText = `flex-direction: row-reverse`;
    }else {
        mainInfosContainer.style.cssText = `flex-direction: row`;
    }
}

// ----------------------- our chifs ------------------------ //

let allBoxChifs = document.querySelectorAll('.about .info .boxs') ,
    bullets = document.querySelectorAll('.about ul span') ;

bullets.forEach( bule => {
    bule.onclick =() => {
        removeAndAddClassActicve(bule);
        showBox(bule);
        scrollTo({
            top :  document.querySelector('.about .info').offsetTop - 200 ,
            behavior: 'smooth'
        })
    }
})
function removeAndAddClassActicve(bule) {
    bullets.forEach(el => {
        el.classList.remove('active');
    })
    bule.classList.add('active');
}
function showBox(bule) {
    allBoxChifs.forEach(box => {
        box.style.display = 'none';
    })
    allBoxChifs[parseInt(bule.dataset.index)].style.display = 'flex';
}