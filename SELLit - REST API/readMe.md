# RЕST API - Life Hacks
REST API for SELLit – Single Page Application, created with Angular.

## Functionality
* Records, reads, changes and deletes information from the database.
* Server Authentication and Authorization.
* Password hashing for users, before saving in the database.
* Ability to review sent requests, urls and console data.
* Protection from incorrect data entering the database (validation).

## Technologies
* Express JS.
* bcrypt, jsonwebtoken.
* Mongoose, validator.
* cors, nodemon.

### Data structure
#### Colections
* Post
```javascript
{   
    name: String,
    imageUrl: String,
    description: String,
    condition: String,
    price: Number,
    phone: String,
    creator: mongoose.Types.ObjectId,
    likes: Array,
}
```
* User
```javascript
{   
    email: String,
    profileImg: String,
    username: String,
    password: String,
    likedPosts: Array,
}
```

## Routes:
* **URL** - http://localhost:3000

* **All Posts** - METHOD -> GET : "/all-products".
```javascript
{   
    sessionToken: false,
}
```
* **Create Post** - METHOD -> POST : "/create-product".
```javascript
{   
    sessionToken: true,
    body: Post,
}
```
* **Edit Post** - METHOD -> PUT : "/edit-product/:productId".
```javascript
{   
    sessionToken: true,
    body: Post,
}
```
* **Delete Post** - METHOD -> DELETE : "/delete-product/:productId".
```javascript
{   
    sessionToken: true,
}
```
* **Post Details** - METHOD -> GET : "/details/:productId".
```javascript
{   
    sessionToken: false,
}
```
* **Post Details** - METHOD -> GET : "/profile/:profileId".
```javascript
{   
    sessionToken: true,
}
```
* **Like Post** - METHOD -> GET : "/like/:productId".
```javascript
{   
    sessionToken: true,
}
```
* **My Favourite Posts** - METHOD -> GET : "/my-favourite-posts".
```javascript
{   
    sessionToken: true,
}
```
* **Login** - METHOD -> POST : "/auth/login".
```javascript
{   
    sessionToken: false,
    body: {
        username: String,
        password: String,
    }
}
```
* **Register** - METHOD -> POST : "/auth/register".
```javascript
{   
    sessionToken: false,
    body: {
        username: String,
        password: String,
        email: String,
    }
}
```
* **Logout** - METHOD -> GET : "/auth/logout".
```javascript
{   
    sessionToken: true,
}
```
* **Edit Profile** - METHOD -> POST : "/auth/edit-profile".
```javascript
{   
    sessionToken: true,
    body: {
        username: String,
        imageUrl: String,
    }
}
```

## Access control:
* All users can view the posts.
* Only authorized users can create a post or like it.
* Only authenticated users can access their favourite posts.
* Only authorized users (creators) can edit or delete a post.
* Only authenticated users can edit their personal information (profile image and username).