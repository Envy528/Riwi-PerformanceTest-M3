# Workspace Reservation System SPA

This project is about a Single Page Application (SPA) that uses JavaScript, Vite, TailwindCSS and JSON-Server.

The application simulates a reservation system of workspaces where users can log in, browse on secured routes and manage information consumed by a simulated API.

---

## Technologies used 

- JavaScript ES6+
- Vite
- TailwindCSS
- JSON Server
- Concurrently
- HTML5
- CSS3

---

## Installation

1. Install NodeJs
2. Download the project's zip from the github
3. Open a terminal within the project's folder
4. install dependencies: 

```bash
npm install
```
---

## Running the Project and JSON-Server

1. On the same terminal in which we installated the dependencies, type:

```bash
npm run dev
```
This command runs VIte and JSON-Server at the same time thanks to the use of Concurrently
<br/>
<br/>
2. Press Ctrl and click on the terminal line that says something like this:

```console
[0]   ➜  Local:   http://localhost:5173/
```
This will open a browser page with the Application so you can start using it

---

## Test Users

Administrator:

```txt
admin@test.com
A123456
```

Users:

```txt
user@test.com
A123456
```
```txt
user2@test.com
A123456
```
---

## Project Stucture
```txt
├── db.json
├── index.html
├── package.json
├── public
│   ├── favicon.svg
│   └── icons.svg
├── README.md
├── src
│   ├── api
│   │   └── http.js
│   ├── assets
│   │   ├── hero.png
│   │   ├── javascript.svg
│   │   └── vite.svg
│   ├── components
│   │   ├── ReservationCard.js
│   │   └── Sidebar.js
│   ├── controllers
│   │   ├── home.controller.js
│   │   ├── login.controller.js
│   │   └── notFound.controller.js
│   ├── main.js
│   ├── router
│   │   └── router.js
│   ├── services
│   │   └── reservation.service.js
│   ├── style.css
│   ├── utils.js
│   └── views
│       ├── homeView.js
│       ├── loginView.js
│       └── notFound.js
└── vite.config.js
```

---

## Role Permissions
### Administrator:
- See all reservations
- Create Reservations
- Edit Reservations
- Delete Reservations 
- Approve or reject reservations
- Manage Workspaces 
- Access Administrative Modules

### User:
- Check availability
- Create reversations
- Only see their reservations
- Modify pending reservations
- Cancel their own reservations

---

## Technical decisions
The project was made with vite for easy creation, use of tailwindCSS for easy application of styles and to run JSON-Server and Vite at the same time. The project is modularized for easy understanding and maintenance. There are route guards for prevent access without loggin in, for pages that do not exist and to not show the login page for users that are already logged in.