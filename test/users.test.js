import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createUser, findUserByEmail, listUsers, resetUsers } from '../src/users.js';

beforeEach(() => resetUsers());

test('creates a user with an id', () => {
  const user = createUser({ name: 'Ana', email: 'ana@example.com', age: 30 });
  assert.equal(user.id, 1);
  assert.equal(listUsers().length, 1);
});

test('finds a user by email', () => {
  createUser({ name: 'Ana', email: 'ana@example.com', age: 30 });
  assert.equal(findUserByEmail('ana@example.com').name, 'Ana');
});
