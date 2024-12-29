# Cypress-End-To-End_ExerciseOnlineProject

---------------------------------------------------------------------------------------------
For running all tests 2 terminals should be open at same time

- To run only DB tests Terminal 1 and 3
- To run only Tasks tests Terminal 2 and 3
- To Terminate batch job for Terminal 1 or Terminal 2 -> CTRL+C -> Y
  
--------------------------------------------------------------
Terminal 1:
Command for DB tests

npm install concurrently --save-dev

npm run dev:full

page:
http://localhost:3000 (http://192.168.0.100:3000)

--------------------------------------------------------------
Terminal 2:
Command for vite config Tasks folder

npm run dev

page: 
http://localhost:5173/

--------------------------------------------------------------
Terminal 3:
command for running all tests in cypress

npm cypress open
