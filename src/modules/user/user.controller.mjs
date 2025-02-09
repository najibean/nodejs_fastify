import fastify from 'fastify';

class User {
  /**
   *
   * @param {import("fastify").FastifyRequest} request
   * @param {import("fastify").FastifyReply} reply
   */
  getOne(request, reply) {
    try {
      const id = request.params['id'];
      console.log(id, '--> id');
      reply.send({ message: `success with id: ${id}` });
    } catch (error) {
      reply.log.error(error);
      reply.status(500).send({ message: error.message });
    }
  }

  /**
   *
   * @param {import("fastify").FastifyRequest} request
   * @param {import("fastify").FastifyReply} reply
   */
  getAll(request, reply) {}

  /**
   *
   * @param {import("fastify").FastifyRequest} request
   * @param {import("fastify").FastifyReply} reply
   */
  create(request, reply) {
    try {
      reply.send({ message: `success create user` });
    } catch (error) {
      reply.log.error(error);
      reply.status(500).send({ message: error.message });
    }
  }

  /**
   *
   * @param {import("fastify").FastifyRequest} request
   * @param {import("fastify").FastifyReply} reply
   */
  update(request, reply) {}

  /**
   *
   * @param {import("fastify").FastifyRequest} request
   * @param {import("fastify").FastifyReply} reply
   */
  remove(request, reply) {}
}

export default new User();
