export function generateId(users) {
  if (users.length) {
    return users[users.length - 1].id + 1;
  } else {
    return 1;
  }
}