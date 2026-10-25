import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createUser, resetUsers } from '../src/users.js';
import { createOrder, getOrder, resetOrders } from '../src/orders.js';

beforeEach(() => {
  resetUsers();
  resetOrders();
});

test('creates an order with the right total', () => {
  createUser({ name: 'Ana', email: 'ana@example.com', age: 30 });
  const order = createOrder('ana@example.com', [
    { name: 'Book', price: 10, qty: 2 },
    { name: 'Pen', price: 1.5, qty: 4 },
  ]);
  assert.equal(order.total, 26);
  assert.equal(getOrder(order.id).userId, 1);
});
