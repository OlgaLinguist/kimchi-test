import { findUserByEmail } from './users.js';

const orders = [];

export function createOrder(email, items) {
  const user = findUserByEmail(email);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const order = { id: orders.length + 1, userId: user.id, items, total };
  orders.push(order);
  return order;
}

export function getOrder(id) {
  return orders.find((o) => o.id === id);
}

export function resetOrders() {
  orders.length = 0;
}
