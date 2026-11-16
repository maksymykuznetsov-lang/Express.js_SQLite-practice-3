const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('./app'); // Підключаємо наш сервер

test('Тест: отримання списку користувачів (GET /users)', async () => {
  const response = await request(app).get('/users');
  
  assert.strictEqual(response.status, 200);
  
  assert.ok(Array.isArray(response.body));
});