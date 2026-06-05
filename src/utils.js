// Saves the user's session on localstorage
export const saveSession = (user) => {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
};

// Get the user's current session from localstorage
export const getSession = () => {
  return JSON.parse(
    localStorage.getItem("user")
  );
};

// Removes the user's session from the localstorage
export const removeSession = () => {
  localStorage.removeItem("user");
};

// Checks if the user is logged
export const isAuthenticated = () => {
  return !!getSession();
};

// Checks if the user's role is admin
export const isAdmin = () => {
  return getSession()?.role === "admin";
};