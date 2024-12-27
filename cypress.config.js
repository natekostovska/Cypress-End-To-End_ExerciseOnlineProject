const { defineConfig } = require("cypress");
import { seed } from './prisma/seed-test';

module.exports = defineConfig({
  screenshotOnRunFailure:true,
  e2e: {
    baseUrl:'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
     // seedDatabase(filename){
          // Run NodeJD code, e.g. edit a file outside of browser it will run
        //  return filename;
        //}
        async seedDatabase() {
          await seed();
          return null;
        }
      });
    },
  },
});
