/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable linebreak-style */
const request = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuários', () => {
  return request(app).get('/users').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toHaveProperty('name', 'John Doe');
  });
});

test('Deve inserir um usuário com sucesso', () => {
  return request(app).post('/users')
    .send({ name: 'Marcelo Okasaki', mail: 'marcelo@mail.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Marcelo Okasaki');
    })
});
