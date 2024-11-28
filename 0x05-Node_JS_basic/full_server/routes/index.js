/* import modules */
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * mapRoutes - Binds the routes to the appropriate handler in the
 * given Express application.
 * @app : The Express application.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

/* export section */
export default mapRoutes;
module.exports = mapRoutes;
