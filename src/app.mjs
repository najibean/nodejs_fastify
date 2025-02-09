import Fastify from 'fastify';
import allRoutes from './allRoutes.mjs';

async function buildApp() {
  const fastify = Fastify({ logger: true });

  //register plugins here
  fastify.register(allRoutes, { prefix: '/api/v1' });

  return fastify;
}

export default buildApp;
