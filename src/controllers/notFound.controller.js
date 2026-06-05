import { navigateTo } from "@router/router";

// Function for the go back button to work and send the user to the login page
export default function notFoundController(){
    const goBackBtn = document.getElementById("goHome");
    goBackBtn.addEventListener("click", () =>{
        navigateTo("/");
    })

}