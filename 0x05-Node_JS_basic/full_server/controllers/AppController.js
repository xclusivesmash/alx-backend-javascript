/* Contains the route handlers. */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

/* export section */
export default AppController;
module.exports = AppController;
