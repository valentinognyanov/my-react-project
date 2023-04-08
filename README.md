# Movie-Library
## Descripton

This is single page application that provides user and guest with variety of movies,
in which registered users can upload, comment on their own or other user's movie.
The owners of a movie can view Edit page via button which only they can see, and they
can delete the movie also.

Guests can browse through the catalog and can access Details page, but they can not 
comment on any movie.

The user stayes logged in by storing token in Local Storage.

Protected routes are used to ensure that only users/owners can access to Profile, Create, 
Edit, Delete and Add comment.

## View Pages
- Home - Here all viewers can see the last five uploaded movies if there is any.
- Catalog - In catalog page both users and guest can browse through all uploaded movies, and access to Details page.
- Details - In details page everyone can see the detailed information about the movie, the owners of the movie can see the Edit and Delete buttons and interact, they can see all comments and also to comment. The guests can only read all the comments, but can not comment.
- Edit - Here owners of a movie can edit any information and by submiting they change it in the state and on the server.
- Search - In this page everyone can search a movie by name.
- Create - Here access have only authenticated users and by submiting the new movie the save it on the server and in the state.
- Profile - Here also access have only users that are authenticated and can see all the movies that they uploaded.
- Register - In register page by submiting an email, password and repass an user can be registered in the server while being provided with unique id and authentication token.
- Login - Here by submiting correct email and password, the user will be granted with all the access for authenticated users.
- Logout - By pressing logout the local storage is being cleared.
- About - Here is a little information about the project.

## Service

For the purpose of the profect for service side is used SoftUni Practice Server 
by Viktor Kostadinov more information [here](https://github.com/softuni-practice-server/softuni-practice-server)

## Used Libraries
- React Router Dom
- React Bootstrap
- Bootstrap
- testing-library/react
- testing-library/user-event
- testing-library/jest-dom

## Setup
1. Clone Repository
2. In terminal run npm install
3. In terminal run npm start

## For Deploy
-In terminal npm run deploy (This will build a 'build' folder and deploy it.) 