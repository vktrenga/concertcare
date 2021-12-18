###  Crud Operation for User 

#### Installtion Guidelines
#### Clone
git clone https://github.com/vktrenga/concertcare.git
#### Edit and Rename 

.sample.env file and rename as .env
#### install all packages
npm install

#### run Project
npm run serve

### run Unit test
npm run test


#### Technologies
  1. Node Js
  2. Express
  3. Type Script
  4. MongoDB
  5. Jest 
  
### End Points  (https://www.getpostman.com/collections/925d121ffe9a9275abdc)
Base Url : localhost:3000/api

### Initial User
  We can create a new Inital user, without login credetials using this endpoint, By this we can create only the first user
   #### Url: /user/initial-user
   #### Method: Post

   #### Body
    {
    "name": "Rengaraj",
    "emailId":"vktraj2020@gmail.com",
    "password":"ArjRaj@1234!",
    "phoneNo":"+918015838576",
    "profileImage":"https://www.google.com/images"
    }
  
  #### Response 
  ```{
    "status": true,
    "statusCode": 200,
    "message": "Your data added successfully",
    "data": {
        "_id": "61be2eb34af4d2fa9bb61ea6",
        "name": "Rengaraj",
        "phoneNo": "+918015838576",
        "emailId": "vktraj2020@gmail.com",
        "profileImage": "https://www.google.com/images",
        "isAdmin": false
    }
}```
#### Login  -> {{url}}/login
#### Method -> Post
#### Body 

{
    "emailId":"vktrenga@gmail.com",
    "password": "rArjun@26"
}
#### Response 

{
    "status": true,
    "statusCode": 200,
    "message": "Logged In successfully",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJhZGMyMzVjMjgwN2FjY2Y4N2I3ZWYiLCJlbWFpbElkIjoidmt0cmVuZ2FAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYzOTg1MjY4NSwiZXhwIjoxNjM5ODY3MDg1fQ.J_UUETIF5ztgL8yDt41uqGtrSA5f6hHbRgfUF77hr3w"
    }
}
#### Create User -> {{url}}/user/
 We can create a new user, with login credetials using this endpoint, By this we can create multiple user
#### Method -> Post
#### Body 
{
    "name": "Arjun",
    "emailId":"arj13@gmail.com",
    "password":"ArjRaj@1234!",
    "phoneNo":"+918015838576",
    "profileImage":"https://test/test.png"
}
#### Response 

{
    "status": true,
    "statusCode": 200,
    "message": "Your data added successfully",
    "data": {
        "name": "Arjun",
        "phoneNo": "+918015838576",
        "emailId": "arj1@gmail.com",
        "profileImage": https://test/test.png",
        "isAdmin": false,
        "_id": "61be2a9ae8b8052f10b15097"
    }
}


#### Update User -> {{url}}/user/:id
 We can update a old user, with login credetials.

#### Method -> Put

#### Body 
{
    "name": "Arjun Edited",
    "phoneNo": "+918015838576",
    "emailId": "arj@gmail.com",
    "phoneNo":"+918015838576",
    "profileImage":"https://test/test.png"
}
#### Response 

{
    "status": true,
    "statusCode": 200,
    "message": "Your data added successfully",
    "data": {
        "name": "Arjun Edited",
        "phoneNo": "+918015838576",
        "emailId": "arj@gmail.com",
        "profileImage": https://test/test.png",
        "isAdmin": false,
        "_id": "61be2a9ae8b8052f10b15097"
    }
}


#### Get User -> {{url}}/user/:id
We can get a  user, with login credetials.
#### Method -> Get
#### Response 

{
    "status": true,
    "statusCode": 200,
    "message": "Your data added successfully",
    "data": {
        "name": "Arjun Edited",
        "phoneNo": "+918015838576",
        "emailId": "arj@gmail.com",
        "profileImage": https://test/test.png",
        "isAdmin": false,
        "_id": "61be2a9ae8b8052f10b15097"
    }
}

#### Delete User -> {{url}}/user/:id
We can delete a  user, with login credetials.

#### Method -> Delete
#### Response 

{
    "status": true,
    "statusCode": 200,
    "message": "Your data deleted successfully",
    "data": []
}


#### Get User -> {{url}}/user/:id
We can get a user, with login credetials .

#### Method -> Get
#### Response 

{
    "status": true,
    "statusCode": 200,
    "message": "Your data added successfully",
    "data": {
        "name": "Arjun Edited",
        "phoneNo": "+918015838576",
        "emailId": "arj@gmail.com",
        "profileImage": https://test/test.png",
        "isAdmin": false,
        "_id": "61be2a9ae8b8052f10b15097"
    }
}

#### List User -> {{url}}/user/
We can get all user, with login credetials and user params like limit,page,search, sort and sort by

#### Method -> GET
#### Query Params  
?page=1&limit=10&search=&sort=asc&sort_by=name
#### Response 

{
    "status": true,
    "statusCode": 200,
    "message": "List",
    "data": [
        {
            "_id": "61be2eb34af4d2fa9bb61ea6",
            "name": "Rengaraj",
            "phoneNo": "+918015838576",
            "emailId": "vktraj2020@gmail.com",
            "profileImage": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Fdefault-avatar-profile-icon-social-260nw-1906669723.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fprofileimage&tbnid=zq6iaMrF-INfgM&vet=12ahUKEwi0vJHc4u30AhU_i9gFHYYICPoQMygBegUIARDEAQ..i&docid=tItiCYYrhEfV7M&w=260&h=280&itg=1&q=profileImage&ved=2ahUKEwi0vJHc4u30AhU_i9gFHYYICPoQMygBegUIARDEAQ",
            "isAdmin": false
        },
        {
            "_id": "61be2eff4af4d2fa9bb61eab",
            "name": "Rengaraj",
            "phoneNo": "+918015838576",
            "emailId": "vktraj2022@gmail.com",
            "profileImage": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Fdefault-avatar-profile-icon-social-260nw-1906669723.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fprofileimage&tbnid=zq6iaMrF-INfgM&vet=12ahUKEwi0vJHc4u30AhU_i9gFHYYICPoQMygBegUIARDEAQ..i&docid=tItiCYYrhEfV7M&w=260&h=280&itg=1&q=profileImage&ved=2ahUKEwi0vJHc4u30AhU_i9gFHYYICPoQMygBegUIARDEAQ",
            "isAdmin": false
        }
    ],
    "pagination": {
        "totalRecords": 2,
        "currentPage": 1,
        "recordPerPage": 10,
        "totalPages": 1
    }
}

