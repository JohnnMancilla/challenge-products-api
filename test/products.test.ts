import t from 'tap'
import app from '../src/app'

t.test('GET /products', async (t) => {
    const response = await app.inject({
        method: 'GET',
        url: '/products'
    })

    t.equal(response.statusCode, 200, 'returns a status code of 200')
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8', 'returns content-type application/json')

    const payload = JSON.parse(response.payload)
    t.type(payload, Array, 'payload is an array')
    t.equal(payload.length, 20, 'payload returns 20 items')
    t.equal(payload[0].id, 1, 'first item has id 1')
    t.equal(payload[0].title, 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 'first item has correct title')
})
