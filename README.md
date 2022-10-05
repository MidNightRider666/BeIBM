# IBM internship

## install

1. Create Boiler Plate 

2. Execute NPM i to install all dependencies

3. Adding utilities


## Creating BE

4. Creating working functions for Users (Model, Controller and Routes)

5. Creating working functions for Gifs (Model, Controller and Routes)


8. Adding middleware

## About functions of BE

9. User functions has registration, that stores person's input into the server, in other words creating a account for them to use. Before the storing proccess, their whole input goes trough middleware function of registration checking, to whether users input are good

10. User functions also has login, that basically does the same, but checks whether the account already exist and let's them login to see needed content

11. SearchHistory is a table that stores user search history into BE in order to return it value

12. Account table function is to link both searchhistory and User table together, to return searchhistory only of the person who is currently logged in


## Dependecies 

    "@hapi/joi": "^17.1.1",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "joi": "^17.6.0",
    "jsonwebtoken": "^8.5.1",
    "morgan": "^1.10.0",
    "mysql2": "^2.3.0"



##





