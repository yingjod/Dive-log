# ReadMe Sections

## Description
The Dive-Log website is designed for divers to manage their dive books digitally.
Users can register an account and create their dive log on the profile page. Dive spot data is available to offer various dive spots for users to choose from. It provides convenient access at any time and from anywhere.

## Deployment link

[Heroku Pages](https://dive-log-tw-9e1427271c2b.herokuapp.com/)


## Getting Started/Code Installation

If you want it to run locally on your machine:
 - Go to [GitHub repository](https://github.com/yingjod/Dive-log).
 - Fork it to your own GitHub account
 - Clone in via this green button where it is written <>code and copy the link from SSH
 - Open the terminal and change the current working directory to the location where you want the cloned directory.
 - Type git clone, and then paste the URL of the SSH link you copied earlier in Step 2
 - Press Enter to create your local clone. 
 - You do have the code and all the necessary sources to run it locally on your machine

## Timeframe & Working Team (Solo)

I allocated a total of 10 days for the completion of this project as a solo.

## Technologies Used

 - Frontend: React.js, Bootstrap, React Router Dom, MDB React UI Kit
 - Backend: Node.js, Express.js, Django
 - Styling: SASS, Bootstrap
 - Other Tools: Axios, JSON Web Token, Bcrypt, Dotenv
 - Build Tools: Vite, SASS
 - Libraries: Font Awesome (Font Awesome SVG Core, Free Brands SVG Icons, React Font Awesome)
 - Deployment: Heroku (for hosting the application)

## Brief

![Brief1](/client/src/images/readme/brief1.png)
![Brief2](/client/src/images/readme/brief2.png)
![Brief3](/client/src/images/readme/brief3.png)



## Planning

The website will consist of four main pages: a login page, a registration page, a user profile page, and a page for creating and editing dive logs. I’ll leverage Django to handle backend data management, utilising models for users and dive logs. For the front end, I'll combine Bootstrap and React to build responsive and user-friendly interfaces.

![plan1](/client/src/images/readme/plan1.png)
![plan2](/client/src/images/readme/plan2.png)


## Build/Code Process

Day 1: Defined website goals and created wireframes and a DBD.
Day 2: Backend setup: Create a backend database using Python Django and establish a one-to-many relationship between DiveLog, DiveSpot, and the User.

![code1](/client/src/images/readme/code1.png)

Day 3-4: Began frontend development and configured the router for all the necessary pages on the website.

![code2](/client/src/images/readme/code2.png)

Day 5: Established the Login and Register pages to retrieve data from the backend.

![code3](/client/src/images/readme/code3.png)

Day 6: Established the Edit Divelog, Create Divelog, Home, and Profile pages to seamlessly retrieve data from the backend and meticulously styled the pages to ensure a visually appealing and user-friendly interface.

![code4](/client/src/images/readme/code4.png)

Day 7: Implemented error handling for the Login and Register pages and resolved data-related issues on the Create page.
Day 8-9: Deployed the project on Heroku.

## Challenges

- Setting up the create page as it's not smoothly sending information to the backend. 
- I need to specify the error handling return message.
- When attempting to upload the project to Heroku, encountering issues with CORS prevents successful deployment.

## Wins

One specific win from this project is the successful implementation of user authentication and profile management. Creating functional login and register pages, along with a user profile that allows users to create and edit dive logs, demonstrates my proficiency in both backend and front-end development. This achievement highlights my ability to integrate different components seamlessly and deliver a cohesive user experience.


## Key Learnings/Takeaways

Establish the connection between backend and frontend for a project.


## Bugs

No bugs


## Future Improvements

I'd like to incorporate a feature on the webpage that allows users to add new dive spots, and I also aim to enhance the link design in the footer.
