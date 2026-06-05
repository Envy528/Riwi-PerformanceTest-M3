import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import { isAuthenticated } from "@/utils";
import NotFoundView from "@views/notFound";

// Contains all pages pathname and their render function
const routes = {
  "/": loginView,
  "/home": homeView,
};

// Function to navigate to the desired page
export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

// Function that checks the path and renders the pages
export const router = () => {
  const app = document.querySelector("#app"); // Variable where it's going to render the page
  const user = JSON.parse(localStorage.getItem("user")) // get the user from localstorage
  let path = window.location.pathname; // Get the current path

  const view = routes[path] || ""; // Get the function that renders the current path 

  // If there isn't a view sends the user to the Not found page
  if (!view){
    app.innerHTML = NotFoundView();
    return
  }

  // If there's a user in localstorage and the path is the login, it stops from going to the login page and redirects it to the user's home page
  if (user && path === "/"){
    window.location.pathname = "/home";
    return
  }

  // If there isn't a user in localstorage and the path isn't the login page, it redirects to the login page
  if (!user && path !=="/"){
    window.location.pathname = "/";
    return
  }

  // Renders the page
  app.innerHTML = view();
};

window.addEventListener("popstate", router);
