import express, { Router } from 'express';
import connectToDatabase from './models/connection';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase()
      .then(() => {
        this.app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
      })
      .catch((error) => {
        console.log('Connection with database generated an error:\r\n');
        console.error(error);
        console.log('\r\nServer initialization cancelled');
        process.exit(0);
      });
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;