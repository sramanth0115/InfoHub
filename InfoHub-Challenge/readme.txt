
layered structure of your InfoHub-Challenge project:


 InfoHub-Challenge/
 ¦
 +-- client/                      (React Frontend)
 ¦   +-- package.json
 ¦   +-- vite.config.js
 ¦   +-- index.html
 ¦   +-- .gitignore
 ¦   ¦
 ¦   +-- src/
 ¦   ¦   +-- main.jsx
 ¦   ¦   +-- app.jsx             (Main UI container)
 ¦   ¦   +-- app.css 
 ¦   ¦   +-- index.css
 ¦   ¦
 ¦   +-- components/             (Your UI Components Folder)
 ¦       +-- WeatherComponent.jsx
 ¦       +-- CurrencyComponent.jsx
 ¦       +-- QuoteComponent.jsx
 ¦
 +-- server/        (Node + Express Backend)
     +-- server.js  (APIs for weather, currency, quotes)
     +-- keys.env   (API Keys Stored Here)
     +-- package.json
     +-- package-lock.json
     +-- node_modules/




TO Start project:

Step 1:
  - Open InfoHub-Challenge project folder in VS Code

Step 2:
  - In ./server Folder run server.js file to start the server at Backend side, server URL: "http://localhost:3001/api/---"

step 3:
  - In Terminal go to ./client Folder run command "npm run dev" to start the server at Frontend side URL: "http://localhost:3000"

//////// Now URL "http://localhost:3000" in Google Browser to see the Info-Challenge Webpage //////////////


Important NOTE:
  - The https://weatherstack.com/ API site have "limited free APL calls" out of 100, i already used 33/100 calls. 
