import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { addCreator, resetCreators } from '../src/creators.js';
import { createCampaign, addDeal, spent, resetCampaigns } from '../src/campaigns.js';

beforeEach(() => {
  resetCreators();
  resetCampaigns();
});

test('adds deals and counts the spend', () => {
  addCreator({ handle: '@ana.cooks', email: 'ana@example.com', platform: 'instagram', followers: 12000 });
  addCreator({ handle: '@leo.runs', email: 'leo@example.com', platform: 'tiktok', followers: 50000 });
  const campaign = createCampaign({ brand: 'GreenBowl', budget: 5000 });
  addDeal(campaign.id, '@ana.cooks', 800);
  addDeal(campaign.id, '@leo.runs', 1500);
  assert.equal(spent(campaign.id), 2300);
});
