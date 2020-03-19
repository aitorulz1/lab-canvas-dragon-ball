const express = require('express');
const router = express.Router();
const userRoutes = require('../controllers/user.controller')



router.get('/') // Home

router.get('/login', userRoutes.login) // Form Log in
router.post('/register', userRoutes.create) // Form Registrarse


router.get('/:category') // Cuando clickas a una categoría específica

router.get('/item/:id') // Cuando clikas en un producto de interés
router.post('/item/:id') // Cuando editas un producto

router.get('/user/:id') // Ver perfil
router.post('/user/:id', userRoutes.updateUser) // Actualizar perfil

module.exports = router