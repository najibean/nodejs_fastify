import buildApp from './app.mjs';

async function startServer() {
  const app = await buildApp();

  try {
    await app.listen({ port: 3080, host: '0.0.0.0' });
    app.log.info(`🚀 Server is running at port 3080`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}
startServer();
