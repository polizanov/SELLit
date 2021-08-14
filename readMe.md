# SELLit - Single Page Application
Created with Angular

## Functionality
* Implemented authentication and authorization.
* Ability to freely view the post of other users.
* Ability to freely share your own post.
* Ability to edit and delete personal posts.
* Ability to like other users' posts and add them to Favourites. 
* Ability to check other users' profiles. 
* Ability to change your profile picture and username. 
* Interactive UX.


## Technologies
* Angular, TypeScript
* HTML, CSS, JavaScript
* Еxpress JS, Mongo DB

## Application Pages
* **Home** - Home page for users who aren’t registered.
* **Regsiter** - registration with email, username and password.
* **All Post** - view all available life posts in the database.
* **Share your post** - create a post and save it in the database.
* **Edit your post** - edit a post and save it in the database.
* **Edit your profile** - edit your personal information and save it in the database (username and Image URL).
* **Details** -Shows details about a certain post. Unauthorised users can add it to Favourites or see other users who have already added it to Favourites. Authorized users can edit or delete the certain post. 
* **My Profile** - view information about the user and their shared posts (only for authorized users).
* **My Favourite posts** - Shows the registered user's Favourite posts. 

## Access control:
* All users can view the posts.
* Only authorized users can create a post or like it.
* Only authenticated users can access their favourite posts.
* Only authorized users (creators) can edit or delete a post.
* Only authenticated users can edit their personal information (profile picture and username).
* Only unregistered users have access to the homepage.
* Only registered users can access other users' profile pages.