import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { addCreator, findCreatorByHandle, listCreators, resetCreators } from '../src/creators.js';

beforeEach(() => resetCreators());

test('adds a creator with an id', () => {
  const creator = addCreator({ handle: '@ana.cooks', email: 'ana@example.com', platform: 'instagram', followers: 12000 });
  assert.equal(creator.id, 1);
  assert.equal(listCreators().length, 1);
});

test('finds a creator by handle', () => {
  addCreator({ handle: '@ana.cooks', email: 'ana@example.com', platform: 'instagram', followers: 12000 });
  assert.equal(findCreatorByHandle('@ana.cooks').followers, 12000);
});
