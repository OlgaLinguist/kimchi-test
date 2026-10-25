const creators = [];
let nextId = 1;

const VALID_PLATFORMS = ['instagram', 'tiktok', 'youtube'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function addCreator({ handle, email, platform, followers }) {
  if (typeof handle !== 'string' || !handle.startsWith('@')) {
    throw new Error('Invalid handle: must start with @');
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    throw new Error('Invalid email: must look like an email address');
  }
  if (typeof platform !== 'string' || !VALID_PLATFORMS.includes(platform.toLowerCase())) {
    throw new Error('Invalid platform: must be instagram, tiktok or youtube');
  }
  if (!Number.isInteger(followers) || followers < 0) {
    throw new Error('Invalid followers: must be a whole number of 0 or more');
  }
  const creator = { id: nextId++, handle, email, platform: platform.toLowerCase(), followers };
  creators.push(creator);
  return creator;
}

export function findCreatorByHandle(handle) {
  return creators.find((c) => c.handle === handle);
}

export function listCreators() {
  return [...creators];
}

export function resetCreators() {
  creators.length = 0;
  nextId = 1;
}
