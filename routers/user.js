import express from 'express';

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

// browsers can only make get requests that's why we use postman
router.get('/', getUsers);

router.post('/', createUser);

// / users/2 -> req.params { id: 2 }

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
