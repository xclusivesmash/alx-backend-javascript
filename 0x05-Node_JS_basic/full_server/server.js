/* import modules */
import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

mapRoutes(app);
/* initialize server */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

/* export section */
export default app;
module.exports = app;
