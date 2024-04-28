# Netflix Clone

This is a Netflix clone project that allows users to browse and watch movies. It includes features like user authentication, browsing popular, now playing, top-rated, and upcoming movies, searching for movies, and playing trailers.

## Project Image

### Signup Page

![Signup Page ](netflix/src/assets/Signup.png)

### Login Page

![Login Page](netflix/src/assets/Login.png)

### BrowsePage

![BrowsePage](netflix/src/assets/BrowsePage.png)

### MovieList

![MovieList](netflix/src/assets/MoviesList.png)

### MovieList2

![MovieList2](netflix/src/assets/MovieList2.png)

### AfterPlay

![AfterPlay](netflix/src/assets/AfterPlay.png)

### SearchPage

![SearchPage](netflix/src/assets/SearchPage.png)




## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Backend](#backend)
5. [Frontend](#frontend)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)


## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the backend directory:

```bash
cd backend
```
3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:
- Create a '.env' file in the backend directory.
- Add the following variables:

```bash
PORT=
ATLAS_URL=
```

5. Start the backend server:

```bash
node index.js
```

6. Navigate to the frontend directory:

```bash
cd ../frontend
```

7. Install dependencies:

```bash
npm install
```

8. Start the frontend application:

```bash
npm run dev
```

## Usage

Once the backend and frontend servers are running, you can access the Netflix clone application by navigating to http://localhost:5173/ in your web browser.

## Features

- User Authentication: Users can register, login, and logout.
- Browse Movies: Users can browse popular, now playing, top-rated, and upcoming movies.
- Search Movies: Users can search for movies.
- Watch Trailers: Users can watch trailers of movies.

## Backend

The backend of this project is built using Node.js and Express.js. It includes routes for user authentication (register, login, logout) and fetching movie data from The Movie Database (TMDb) API. It uses MongoDB Atlas for data storage.

## Frontend

The frontend of this project is built using React.js. It includes components for the user interface, such as login, registration, browsing movies, searching movies, and playing trailers. It utilizes Redux for state management and React Router for navigation.

## Technologies Used

- Backend: Node.js, Express.js, MongoDB Atlas
- Frontend: React.js, Redux, React Router
- API: The Movie Database (TMDb) API
- Other: Axios, React Icons, Material-UI

## Contributing

Contributions to this project are welcome. Feel free to open issues and pull requests to suggest features, report bugs, or make improvements.

## Thank You

Thank you for checking out this Netflix clone project! If you have any questions, suggestions, or feedback, feel free to [open an issue](https://github.com/your-username/your-repository/issues) or [contact me](saurabh7411sharma@gmail.com). Happy coding!



