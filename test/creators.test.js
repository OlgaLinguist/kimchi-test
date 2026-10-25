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

test('throws for a handle not starting with @', () => {
  assert.throws(
    () => addCreator({ handle: 'ana.cooks', email: 'ana@example.com', platform: 'instagram', followers: 12000 }),
    /handle/i
  );
  assert.equal(listCreators().length, 0);
});

test('throws for an invalid email', () => {
  assert.throws(
    () => addCreator({ handle: '@ana.cooks', email: 'not-an-email', platform: 'instagram', followers: 12000 }),
    /email/i
  );
  assert.equal(listCreators().length, 0);
});

test('throws for an unsupported platform', () => {
  assert.throws(
    () => addCreator({ handle: '@ana.cooks', email: 'ana@example.com', platform: 'twitch', followers: 12000 }),
    /platform/i
  );
  assert.equal(listCreators().length, 0);
});

test('accepts a mixed-case platform and stores it lowercase', () => {
  const creator = addCreator({ handle: '@ana.cooks', email: 'ana@example.com', platform: 'Instagram', followers: 12000 });
  assert.equal(creator.platform, 'instagram');
  const upper = addCreator({ handle: '@leo.vlogs', email: 'leo@example.com', platform: 'YOUTUBE', followers: 500 });
  assert.equal(upper.platform, 'youtube');
});

test('throws for fractional or negative followers', () => {
  assert.throws(
    () => addCreator({ handle: '@ana.cooks', email: 'ana@example.com', platform: 'instagram', followers: 12000.5 }),
    /followers/i
  );
  assert.throws(
    () => addCreator({ handle: '@ana.cooks', email: 'ana@example.com', platform: 'instagram', followers: -1 }),
    /followers/i
  );
  assert.equal(listCreators().length, 0);
  const zero = addCreator({ handle: '@ana.cooks', email: 'ana@example.com', platform: 'instagram', followers: 0 });
  assert.equal(zero.followers, 0);
});
