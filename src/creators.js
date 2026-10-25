const creators = [];
let nextId = 1;

export function addCreator({ handle, email, platform, followers }) {
  const creator = { id: nextId++, handle, email, platform, followers };
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
