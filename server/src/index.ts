import { CORS_ORIGIN } from "./utils/constants";
import { createServer } from "./utils/helpers/createServer";

const main = async () => {
  const { app, server } = await createServer();
  await server.start();
  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: ["https://studio.apollographql.com", CORS_ORIGIN],
    },
  });

  const PORT = 4000;

  // init Express app
  app.listen(PORT, () => {
    console.log(`Express app listening on http://localhost:${PORT}`);
  });
};

main();
