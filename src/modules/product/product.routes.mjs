/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} options
 */
async function productRoute(fastify, options) {
  fastify.get('/', function (request, reply) {
    return { message: 'This is route GET PRODUCT' };
  });

  fastify.post('/', function (request, reply) {
    reply.send({ message: 'This is route POST PRODUCT' });
  });
}

export default productRoute;
