
$(document).ready(()=> {
    function openNav() {
        document.getElementById("mySidebar").style.width = "300px";
        // document.getElementById("").style.marginLeft = "250px";
    }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        // document.getElementById("").style.marginLeft = "0";
    }
    console.log("working");
    let btnMenuSwitch = document.getElementById("MenuSwitch");
    btnMenuSwitch.addEventListener('click', function(){
        console.log(btnMenuSwitch.checked);
        if (btnMenuSwitch.checked){
            openNav();

        } else {
            closeNav();
        }
    })
})


