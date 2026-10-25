const users = [];
let nextId = 1;

export function createUser({ name, email, age }) {
  const user = { id: nextId++, name, email, age };
  users.push(user);
  return user;
}

export function findUserByEmail(email) {
  return users.find((u) => u.email === email);
}

export function listUsers() {
  return [...users];
}

export function resetUsers() {
  users.length = 0;
  nextId = 1;
}
