import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import { isAuthenticated } from "@/utils";
import NotFoundView from "@views/notFound";

const routes = {
  "/": loginView,
  "/home": homeView,
};

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

export const router = () => {
  const app = document.querySelector("#app");
  const user = JSON.parse(localStorage.getItem("user"))
  let path = window.location.pathname;

  const view = routes[path] || "";
  if (!view){
    app.innerHTML = NotFoundView();
    return
  }

  if (user && path === "/"){
    window.location.pathname = "/home";
    return
  }

  if (!user && path !=="/"){
    window.location.pathname = "/";
    return
  }

  app.innerHTML = view();
  
  
  
};

window.addEventListener("popstate", router);
