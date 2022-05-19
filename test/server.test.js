const supertest = require('supertest');

const request = supertest('http://www.google.com');

test('Deve responder na porta 3001', () => {  
  // Acessar a url http://localhost:3001
  return request.get('/')
    .then(res => expect(res.status).toBe(200));
  // Verificar que a resposta foi 200
}); 
