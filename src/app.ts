import Fastify from 'fastify'
import productsData from '../data/products.json'

const fastify = Fastify({ logger: true })

// Declare a route
fastify.get('/products', async (request, reply) => {
  return productsData
})

export default fastify
