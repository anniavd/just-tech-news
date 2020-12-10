#  JUST TECH NEWS 

![License](https://img.shields.io/badge/License-NONE-grenn.svg)
  

Just tech news is a  application for publications. The user will be authenticated and will be able to publish, vote for other publications and comment on publications.

In order to view the information, access each of the following links.

 ![home page](/public/images/home-page.jpg)


[Just Tech News](https://just-tech.herokuapp.com/)

# Table of Contents

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Technologies](#Technologies)

[Questions](#Questions)

# Installation
 - Clone the app in to your pc.
- Open a console terminal for the app.
- Run the line command `npm install` for dependencies to be installed.
- Create the file env.  with the data of your mysql database `user: '', password:'' `and then type in the terminal the line command `mysql -u root -p` and connect to your database by typing the password.
- Run the line command `npm start` from the file `server.js`.
- Open  the browers and write on the adress bar `http://localhost:3001/` for see the site.


# Usage
- The home page of the application shows all the publications created by users.

The user has the option to login, as well as signup by clicking on the `login` button. As shown in the following image.

 ![login and sipnup form](/public/images/login.jpg)

- Once logged in, the user can create publications by clicking on the `Dashboard` menu, where they will write the name of the publication as well as the link where the information is found.

 ![create a post](/public/images/create-post.jpg)


- Once the user creates a post, he can `Edit` it by clicking on the link `Edit Post` and once the post is edited, click on the `Save` button to save the changes.
> - Delete it by clicking the `Delete` button.

 ![edit a post](/public/images/edit-post.jpg)

> - The user can add comments and to her own publication and to others in addition to voting for other publications. To comment, he must click on the commets link at the end of each post.

 ![add comments form and button upvote](/public/images/add-comment.jpg)


- The user can return to the home page by clicking on the Just Tech News menu.

- The user can log out of his account by clicking on the `logout` menu

# License
The license for which the application is covered:NONE 


# Technologies 

- NODE.JS
- MYSQL2
- Sequelize
- Express
- Bcrypt
- Dotenv
- Express-handlebars
- Express-session
- Connect-session-sequelize
- HEROKU


# Questions

  If you have questions about the project, below you can find ways to answer them, either by visiting my highub or contacting me by email
  
  Link to my Github: [anniavd](https://github.com/anniavd)

  
  Email acount: [annia.valdesd@gmail.com](mailto:annia.valdesd@gmail.com)

