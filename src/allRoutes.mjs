import productRoute from './modules/product/product.routes.mjs';
import userRoute from './modules/user/user.routes.mjs';

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} options
 */
async function allRoutes(fastify, options) {
  fastify.register(userRoute, { prefix: '/user' });
  fastify.register(productRoute, { prefix: '/product' });
}

export default allRoutes;
