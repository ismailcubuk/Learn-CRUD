let users = [];

export const createUser = (req, res) => {
  console.log("user added");

  const user = req.body;

  createUser.push(user);

  res.send("User added");
};

export const getUser = (req, res) => {
  res.send(users);
};

export const getId = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send("user deleted");
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send("updated user");
};
