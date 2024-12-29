# Cypress-End-To-End_ExerciseOnlineProject

---------------------------------------------------------------------------------------------
For running all tests 3 terminals should be open at same time

Terminal 1:
Command for DB tests

npm install concurrently --save-dev

npm run dev:full

page:
http://localhost:3000 (http://192.168.0.100:3000)

Terminal 2:
Command for vite config Tasks folder

npm run dev

page: 
http://localhost:5173/


Terminal 3:
command for running all tests in cypress

npm cypress open
