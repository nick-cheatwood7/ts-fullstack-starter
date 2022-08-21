import { createServer } from "./utils/helpers/createServer";

const main = async () => {
  const { app } = await createServer();

  const PORT = 4000;

  // init Express app
  app.listen(PORT, () => {
    console.log(`Express app listening on http://localhost:${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api`);
  });
};

main();
