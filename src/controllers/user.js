import { Router } from "express";
import { listUsers, createUser, deleteUser, updateUser } from "../services/user";

const router = Router()

router.get('/', async (req, res) => {
  const userList = await listUsers()
  res.send(userList)
})

router.post('/', async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).send('Usuario Cadastrado')
  } catch (error) {
    res.status(400).send(error)
  }

})


router.delete('/:userId', async (req, res) => {
  await deleteUser(req.params.userId)
  res.send('Usuario Excluido');
})

router.put('/:userId', async (req, res) => {
  await updateUser(req.params.userId, req.body)
  res.send('Usuario Alterado')
})

export default router