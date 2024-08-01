# Minute To Win It Games API & Wiki

This project is a full-stack web app that features a wiki for ~100 Minute To Win It games from the [Challenges To Do website](https://challengestodo.com/minute-to-win-it-games/) AND an API to query the database. Each game has a brief description and how to play, the materials needed, and a demo video from the folks of the [Outscord YouTube channel](https://www.youtube.com/c/Outscord/videos).

For Christmas, I use these games as inspiration for the activities we do to celebrate. I needed something a little more organized than just the YouTube videos and the multitudes of blogs documenting just some games.

### Project Links

**Live site**: https://min-to-win.netlify.app

![Demo of Minute to Win It Games Wiki](https://github.com/geraldiner/min-to-win/blob/main/demo_images/min-to-win-demo.gif)

**Live API endpoint**: https://min-to-win.netlify.app/api-v1

![Demo of Minute to Win It Games API](https://github.com/geraldiner/min-to-win/blob/main/demo_images/min-to-win-api-demo.gif)

## How It's Made

**Tech used:** HTML, CSS, JavaScript, NodeJS, ExpressJS, ReactJS, Material UI

### Backend: REST API on an Express Server

The API is built on an Express server, using the `serverless-http` package. There are only a few routes right now, including `GET /games` to get a list of games, `GET /games/{gameId}` to get a single game by ID, and `POST /games` to add a single game to the database. More information about the API is documented on the website: https://min-to-win.netlify.app.

The Express server follows the Model-View-Controller (MVC) design pattern. There is a schema (model) for the data stored in the database, which is MongoDB for this project. Since this is meant to be an API, the response is given in JSON, which makes up the view. For any unaccounted routes (i.e. routes that don't have a controller), the frontend build is used to serve static files.

Finally, the Express server is exported as a serverless function so that it can be hosted on Netlify at the same domain as the main site, i.e at https://min-to-win.netlify.app/api-v1.

### Frontend: React and Redoc

The frontend is built in React, using the Material UI components for easy styling and the Redoc React Component for the API documentation. The main landing page is the Wiki site. It lists out the games in a grid of Card components.

The frontend makes use of React hooks, including `useState` and `useEffect` to keep track of the changes when a user starts searching for something or filters by the Game Type.

![Demo of Minute to Win It Games Wiki Search and Filter](https://github.com/geraldiner/min-to-win/blob/main/demo_images/min-to-win-search-filter.gif)

Furthermore, since the API is returning all games right now, pagination is handled on the frontend to breakdown the number of games per page and to avoid overwhelming the user with information.

## Optimizations

Originally, I had the API build in a single file. This was mainly for testing purposes, since I was relying heavily on each piece's documentation. When I got an MVP version up and running on Netlify, I then worked on breaking the code in to smaller pieces and modularizing it, e.g. abstracting the routes and controllers from the main app.

## Lessons Learned

Initially, the API part of this project was supposed to be made in GraphQL. I knew that for the landing page I didn't want all the information for the games displayed, but on the individual pages I did. GraphQL is supposed to help mitigate that by allowing you to query only for the information you needed. However, it was difficult for me to get it online with Netlify. I think this had to do with the fact that I was using Apollo, and currently v3 doesn't have documentation to allow deployment on Netlify. I saw that v2 did, but after following it, it still didn't work. That's when I decided to convert it to a REST API instead.

I learned a lot about making an API, including setting up endpoints with query parameters. (Though I disabled them for now due to unintended consequences on the pagination on the frontend.) As I continue to do these projects primarily based on reading documentation (as opposed to watching tutorials), my ability and confidence to work through bugs has increased. Can't wait to work on the next thing 😤





## Other Projects

Check out other stuff I've worked on:

**Secret Santa App**: https://github.com/geraldiner/secret-santa-app

**Minute To Win It Games API & Wiki**: https://github.com/geraldiner/min-to-win

## Currently I'm:

- Working full-time at <a target="_blank" href="https://nomnomnow.com">Nom Nom</a>, migrating JavaScript to TypeScript
- Building my brand, <a target="_blank" href="https://happiandco.com">Happi & Co. Studio LLC</a>

But I'm always open to hearing about your next big thing!

## Let's get to know each other!

Connect with me:

**Twitter**: [@GeraldineDesu](https://twitter.com/geraldinedesu)

**LinkedIn**: [in/GeraldineR](https://linkedin.com/in/geraldiner)

**Email**: hello [at] geraldiner [dot] com
