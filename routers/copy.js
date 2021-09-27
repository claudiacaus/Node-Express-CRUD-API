// import express from 'express';
// import { v4 as uuidv4 } from 'uuid';

// const router = express.Router();

// let users = [];

// // browsers can only make get requests that's why we use postman
// router.get('/', (req, res) => {
//   console.log(users);
//   res.send(users);
// });

// ///////////////////////////////////////////////////////////

// router.post('/', (req, res) => {
//   const user = req.body;

//   users.push({ ...user, id: uuidv4() });

//   res.send(`User with the name ${user.name} added to the database!`);
// });

// // / users/2 -> req.params { id: 2 }
// /////////////////////////////////////////////////////////////

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   const foundUser = users.find((user) => user.id === id);

//   res.send(foundUser);
// });

// ////////////////////////////////////////////////////////

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   users = users.filter((user) => user.id !== id);

//   res.send(`User with the id ${id} deleted from the database.`);
// });

// ////////////////////////////////////////////////////////

// router.patch('/:id', (req, res) => {
//   const { id } = req.params;
//   const { name, lastName, age } = req.body;

//   const user = users.find((user) => user.id === id);

//   if (name) user.name = name;
//   if (lastName) user.lastName = lastName;
//   if (age) user.age = age;

//   res.send(`User with the id ${id} has been updated.`);
// });

// export default router;
