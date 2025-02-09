import userController from './user.controller.mjs';

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} options
 */
async function userRoute(fastify, options) {
  fastify.get('/:id', userController.getOne);
  fastify.get('/', userController.getAll);

  const bodyJsonSchema = {
    type: 'object',
    required: ['requiredKey'],
    properties: {
      someKey: { type: 'string' },
      someOtherKey: { type: 'number' },
      requiredKey: {
        type: 'array',
        maxItems: 3,
        minItems: 1,
        items: { type: 'integer' },
      },
      nullableKey: { type: ['number', 'null'] }, // or { type: 'number', nullable: true }
      multipleTypesKey: { type: ['boolean', 'number'] },
      multipleRestrictedTypesKey: {
        oneOf: [
          { type: 'string', maxLength: 5 },
          { type: 'number', minimum: 10 },
        ],
      },
      enumKey: {
        type: 'string',
        enum: ['John', 'Foo'],
      },
      notTypeKey: {
        not: { type: 'array' },
      },
    },
  };

  const schema = {
    body: bodyJsonSchema,
  };

  fastify.post('/', { schema }, userController.create);
}

export default userRoute;
