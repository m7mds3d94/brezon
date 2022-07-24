
function soso() {

        let menu = document.getElementById("show-nav");


        if (menu.getAttribute("btn0") === "1") {
                menu.style.display = "block";
                menu.setAttribute("btn0", "2");
        } else {
                menu.getAttribute("btn0");
                menu.setAttribute("btn0", "1")
                menu.style.display = "none";
        }
}

window.onscroll = function () {lolo(), dodo()};
let nav = document.querySelector("#navi")
let spanUp = document.querySelector(".up-to-home");





function lolo() {
                if (this.scrollY >= 350) {
                        spanUp.classList.add("up-show");
                } else {
                        spanUp.classList.remove("up-show");
                }
                 if (this.scrollY >= 600) {
                        spanUp.classList.add("opa");
                } else {
                        spanUp.classList.remove("opa");
                }
         }
         function dodo() {
                 if (this.scrollY >= 100) {
                        nav.classList.add("test");
                 } else {
                        nav.classList.remove("test");
                 }
         }




                var activeBar = document.querySelectorAll(".nav-link")
                var arr = Array.from(activeBar);
                arr.forEach(eleme => { 
        
                        eleme.addEventListener("click", function(c) {
                                arr.forEach(els => {
                                els.classList.remove("active");
                                });
                        c.currentTarget.classList.add("active");;
                              
                        })
                        arr[0].click();
                        
                })

                spanUp.addEventListener("click",function() {
                        arr[0].click();
                })
        
            

                

              
               