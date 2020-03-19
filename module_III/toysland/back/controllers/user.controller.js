const User = require('../models/user.model')

module.exports.base = (req, res, next) => {
    res.json({});
}

module.exports.create = (req, res, next) => { 
    const {name, username, email, password, cp} = req.body // Destructuring. Extraigo de un objeto constantes -> req.body.name

    const user = { // Debe tener los campos required = true del modelo user o no, pero los required seguro
        name,      // name: req.body.name
        username,  // username: req.body.username
        email,     // email: req.body.email
        password,  // ...
        cp
    }

    User.create(user)
        .then(user => {
            res.status(202).json({message: "User created"})
        })
        .catch(next)
}


module.exports.login = (req, res, next) => {
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({message: 'email and password required'})
    }

    User.findOne({email})
        .then(user => {
            if(!user) {
                res.status(404).json({message: 'User not found'})
            }else{
               return user.checkPassword(password)
                .then(match => {
                    if(match){
                    res.status(200).json(user)
                }else{
                    res.status(400).json({message: 'User not found'})
                }
                })
            }

        }).catch(next)
}

module.exports.updateUser = (req, res, next) => {
    
    const id = req.params.id

    const userUpdated = req.body
    

    User.findByIdAndUpdate(id, userUpdated, {new: true})
    
        .then(user => {
            if(!user) {
                res.status(400).json({message: "User not found"})
            }else{
                res.status(200).json(user)
            }
        })
}



