
$(document).ready(()=> {
    let btnMenuSwitch = document.getElementById("MenuSwitch");
    function myFunction(x) {
        if (x.matches) { // If media query matches
          console.log("width min 2500");
          openNav("25%");
        } else {
            console.log("width min not 2500");
            openNav("300px")
        }
    }
    function openNav(sz) {
        document.getElementById("mySidebar").style.width = sz;
        // document.getElementById("").style.marginLeft = "250px";
    }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        // document.getElementById("").style.marginLeft = "0";
    }
    var x = window.matchMedia("(min-width: 2500px)");
    console.log("working");
    
    btnMenuSwitch.addEventListener('click', function(){
        console.log(btnMenuSwitch.checked);
        if (btnMenuSwitch.checked){
            myFunction(x);

        } else {
            closeNav();
        }
    })
})


  
//   var x = window.matchMedia("(max-width: 700px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes
  

