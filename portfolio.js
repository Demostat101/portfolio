
let first1= document.querySelector(".first1");
let first2 = document.querySelector(".first2");
let first3 = document.querySelector(".first3");
let second1 = document.querySelector(".second1");
let second2 = document.querySelector(".second2");
let second3 = document.querySelector(".second3");
let menu = document.querySelector(".openMenu");
let close = document.querySelector(".closeMenu");
let left = document.querySelector(".leftSide");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let Skills = document.querySelector("#Skills");
let portfolio = document.querySelector(".portfolio");
let contact = document.querySelector(".contact");
let worklink1 = document.getElementById("worklink1");
let worklink2 = document.getElementById("worklink2");
let worklink3 = document.getElementById("worklink3");
let repo1 = document.getElementById("repo1");
let repo2 = document.getElementById("repo2");
let repo3 = document.getElementById("repo3");
let deliver = document.querySelector(".deliver");
let submit = document.querySelector("#submit");
let input = document.querySelector("input");
let email = document.querySelector("#email");

let first4 = document.querySelector("#first4");
let second4 = document.querySelector("#second4");
let worklink4 = document.querySelector("#worklink4");
let repo4 = document.querySelector("#repo4");

let first5 = document.querySelector("#first5");
let second5 = document.querySelector("#second5");
let worklink5 = document.querySelector("#worklink5");
let repo5 = document.querySelector("#repo5");



let showMenu = ()=>{
    let a = 0;
    left.style.transform = `translateX(${a}%)`;
    menu.style.display = "none";
    close.style.display = "flex";
}

let hide = ()=>{
    let b = 120;
    left.style.transform = `translateX(${-b}%)`;
    menu.style.display = "flex";
    close.style.display = "none";

}

menu.addEventListener("click", ()=>{
    showMenu()
})

close.addEventListener("click", ()=>{
    hide()
})


let isNavbarOpen = false;

const closeNavbar = ()=>{

    if (window.innerWidth > 990) {
        return;

    } else {

        if (isNavbarOpen) {

            menu.style.display ="none";

        } else {

            let b = 120;
            left.style.transform = `translateX(${-b}%)`;
            menu.style.display = "flex"; 
   

        }
    }
};


let counter = 5;
let sent = ()=>{
    counter--
    setInterval(() => {
        if ((input.type="text")&& (email.type ="email")) {
            
            
        }
        
        if (counter<=0) {
            
            deliver.textContent = `Message sent successfully`
            deliver.textContent =""
            
        } 

    }, 1000);
    
}

document.querySelector(".form").addEventListener("submit", ()=>{
    sent()
})



home.addEventListener("click", ()=>{
    closeNavbar();
});

about.addEventListener("click", ()=>{
    closeNavbar();
});

Skills.addEventListener("click", ()=>{
    closeNavbar();
});

portfolio.addEventListener("click", ()=>{
    closeNavbar();
});

contact.addEventListener("click", ()=>{
    closeNavbar();
})

worklink1.onmouseenter = ()=>{
    first1.style.display ="none";
    second1.style.display ="flex";
}

worklink2.onmouseenter = ()=>{
    first2.style.display ="none";
    second2.style.display ="flex";
}

worklink3.onmouseenter = ()=>{
    first3.style.display ="none";
    second3.style.display ="flex";
}

repo1.onmouseenter = ()=>{
    first1.style.display ="none";
    second1.style.display ="flex";
}

repo2.onmouseenter = ()=>{
    first2.style.display ="none";
    second2.style.display ="flex";
}

repo3.onmouseenter = ()=>{
    first3.style.display ="none";
    second3.style.display ="flex";
}

first1.onmouseover = ()=>{
    first1.style.display ="none";
    second1.style.display ="flex";
}

first2.onmouseover = ()=>{
    first2.style.display ="none";
    second2.style.display ="flex";
}

first3.onmouseover = ()=>{
    first3.style.display ="none";
    second3.style.display ="flex";
};

second1.onmouseout = ()=>{
    first1.style.display = "flex";
    second1.style.display = "none";
};

second2.onmouseout = ()=>{
    first2.style.display = "flex";
    second2.style.display = "none";
};

second3.onmouseout = ()=>{
    first3.style.display = "flex";
    second3.style.display = "none";
};


worklink4.onmouseenter = ()=>{
    first4.style.display ="none";
    second4.style.display ="flex";
}

repo4.onmouseenter = ()=>{
    first4.style.display ="none";
    second4.style.display ="flex";
}

first4.onmouseover = ()=>{
    first4.style.display ="none";
    second4.style.display ="flex";
};

second4.onmouseout = ()=>{
    first4.style.display = "flex";
    second4.style.display = "none";
};

worklink5.onmouseenter = ()=>{
    first5.style.display ="none";
    second5.style.display ="flex";
}

repo5.onmouseenter = ()=>{
    first5.style.display ="none";
    second5.style.display ="flex";
}

first5.onmouseover = ()=>{
    first5.style.display ="none";
    second5.style.display ="flex";
};

second5.onmouseout = ()=>{
    first5.style.display = "flex";
    second5.style.display = "none";
};


let lightMode = document.querySelector(".lightMode");
let darkMode = document.querySelector("#darkMode");



function changeStyle(sheet) {
    let style = document.getElementById("style");
    style.setAttribute("href",sheet);
};

darkMode.addEventListener("click", ()=>{
    darkMode.style.display = "none";
    lightMode.style.display = "grid";
    changeStyle("dark.css");
});

lightMode.addEventListener("click", ()=>{
    darkMode.style.display = "grid";
    lightMode.style.display = "none";
    changeStyle("portfolio.css");
});






    

