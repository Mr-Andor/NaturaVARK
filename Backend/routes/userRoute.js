import express from 'express';
import User from '../models/userModel';
import {getToken} from "../util";


const router = express.Router();

router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signinUser) {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: getToken(signinUser),
        natucoin: signinUser.natucoin,
        isTrained: signinUser.isTrained
      });
    } else {
      res.status(401).send({ message: 'Senha ou email invalidos' });
    }
  });

  
router.post('/register', async (req, res) => {
  const user = new User({
    cpf: req.body.cpf,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,

  });
  const newUser = await user.save();
  if(newUser){
    res.send({
      _id: newUser.id,
      name: newUser.name,
      cpf: newUser.cpf,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
      natucoin: newUser.natucoin,
      isTrained: newUser.isTrained
    }); 
  } else {
    res.status(401).send({ message: 'Dados de usuário invalidos.' });
  }
});

router.get("/createadmin", async (req, res) =>{

    try {
        const user = new User({
            name: 'SysAdmin-VARK-Andre',
            email: 'geriath@live.com',
            password: 'senha123',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(user);
    } catch (error) {
        res.send({msg: error.message});
    }

});

export default router;