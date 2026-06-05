import { navigateTo } from "@router/router";

export default function notFoundController(){
    const goBackBtn = document.getElementById("goHome");
    goBackBtn.addEventListener("click", () =>{
        navigateTo("/");
    })

}