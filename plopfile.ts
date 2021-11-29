import { NodePlopAPI} from 'plop';
import path = require("path");

module.exports = function (plop: NodePlopAPI) {

  // test with dynamic actions, regarding responses to prompts
  plop.setGenerator("dynamic actions", {
    description: "another test using an actions function",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "name is required";
        },
      },
      {
        type: "confirm",
        name: "hasPotatoes",
        message: "Do you want potatoes with your burger?",
      },
    ],
    actions: function (data) {
      console.log('Hello world');

      return [];
    },
  });
};