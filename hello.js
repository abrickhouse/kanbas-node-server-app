const Hello = (app) => {
 app.get("/hello", (req, res) => {
  res.send("Life is goo!");
 });
 app.get("/", (req, res) => {
  res.send("Welcome to Full Stack Developmen!");
 });
};
export default Hello;
