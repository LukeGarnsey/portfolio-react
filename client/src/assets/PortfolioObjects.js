import { weatherDashboard, workDay, Invoicinator, RecipeFinder } from "./images/work";
const recipeFinder = {
  title:"Recipe Finder",
  image: RecipeFinder,
  stack: "Static Website",
  githubURL: "https://github.com/jordaneburton/recipe-finder",
  deployedApp: "https://jordaneburton.github.io/recipe-finder/"
};
const weatherApp = {
  title:"Weather Dashboard",
  image: weatherDashboard,
  stack: "Static Website",
  githubURL: "https://github.com/LukeGarnsey/weather-dashboard",
  deployedApp: "https://lukegarnsey.github.io/weather-dashboard/"
};
const invoicinator = {
  title:"Invoicinator",
  image: Invoicinator,
  stack: "Express Node MySQL Handlebars",
  githubURL: "https://github.com/AnthonyBuffill/invoicinator",
  deployedApp: "https://invoicinator-e5b9fce169c1.herokuapp.com/"
};
const workDayApp = {
  title:"WorkDay Calendar",
  image: workDay,
  stack: "Static Website",
  githubURL: "https://github.com/LukeGarnsey/work-day-scheduler",
  deployedApp: "https://lukegarnsey.github.io/work-day-scheduler/"
};
export {recipeFinder, weatherApp, invoicinator, workDayApp};