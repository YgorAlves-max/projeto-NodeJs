const express = require("express");
const app = express();
const PORT = 3000;
const User = require('../models/users');
const Cors = require('cors');

app.use(Cors())
app.use(express.json())

app.post('/register', async (req, res) => {
    await User.create(req.body)
        .then(() => {
            return res.json(
                {
                    erro: false,
                    mensage: "Cadastrado com sucesso"
                }
            )
        }).catch(() => {
            return res.json(
                {
                    erro: true,
                    mensage: "Não cadastrado"
                }
            )
        })

})
app.delete('/', (req, res) => {
    res.send('app -> delete')
})

app.listen(PORT, () => {
    console.log(`TA rodando o back ${PORT}`);
})