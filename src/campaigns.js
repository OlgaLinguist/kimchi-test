import { findCreatorByHandle } from './creators.js';

const campaigns = [];

export function createCampaign({ brand, budget }) {
  const campaign = { id: campaigns.length + 1, brand, budget, deals: [] };
  campaigns.push(campaign);
  return campaign;
}

export function addDeal(campaignId, handle, fee) {
  const campaign = campaigns.find((c) => c.id === campaignId);
  const creator = findCreatorByHandle(handle);
  const deal = { creatorId: creator.id, handle, fee };
  campaign.deals.push(deal);
  return deal;
}

export function spent(campaignId) {
  const campaign = campaigns.find((c) => c.id === campaignId);
  return campaign.deals.reduce((sum, d) => sum + d.fee, 0);
}

export function resetCampaigns() {
  campaigns.length = 0;
}
