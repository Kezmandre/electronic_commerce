export const serialize = (user) => {
  const { _id, name, email, role, ...rest } = user;

  return {
    _id,
    name,
    email,
    role,
  };
};
