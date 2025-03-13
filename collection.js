var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var entredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1){
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(entredValue)<0){
            productlist[count].style.display="block"

        }
    }
})

var sidenav=document.querySelector(".side-navbar");
// sidenav.style.display="block"

function showNavbar() {
   // sidenav.style.display="block"
sidenav.style.left="0"

}

function closeNavbar() {
   // sidenav.style.display="none"
    sidenav.style.left="-60%"
    
}