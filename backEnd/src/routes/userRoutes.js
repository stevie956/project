const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
const { response } = require("express");

const router = express.Router();
//Adding a health check
router.get("/save-heath-check", (request, response) => {
    request.session.testProperty = "tesing this string got saved";
    response.send("OK");
});
router.get("/retrieve-session-value", (request, response) => {
    response.send(request.session.testProperty);
});
//adding a login
router.post("/login", (request, response) => {
    UserModel.findOne({ username: request.body.username }).then((userData) => {
        if (userData) {
          const checkHashPassword = bcrypt.compareSync(
            request.body.password,
            userData.password
          );
          if (checkHashPassword) {
              console.log("request.session", request.session);
              request.session.user = {
                  id: userData._id
              };
              console.log("request.session", request.session);
              response.send("logged in");
          } else {
              response.status(401).send("invalid login");
          }
        } else { 
            response.status(401).send("Wrong login User");
        }
     });
    });
    //log out message
    router.get("/logout", (request, response) => {
        request.session.loggedIn = false;
        response.send("User has logged out");
    });
//register new user
    router.post("/register", (request, response) => {
        const body =request.body;
        console.log("user registered body:", body);
        const passwordHash =bcypy.hashsynch(body.password, 10);
        console.log("passwordHash:", passwordHash);

        const user = {username: body.username, password: passwordHash };
        console.log("user:", user);

        UserModel.create(user).then((data) => {
            response.send(userData);
        });
    });

    module.exports = router

