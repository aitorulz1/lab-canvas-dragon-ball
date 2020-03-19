const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10


const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            default: null
        },

        email: {
            type: String,
            required: true,
            minlength: 5,
            default: null,
            match: EMAIL_PATTERN
        },
        username: {
            type: String,
            required: true,
            minlength: 5,
            default: null
        },
        age: {
            type: Number,
            min: 18,
            default: null
        },
        profilePicture: {
            type: String,
            default: ''
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            default: null
        },
        cp: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 5,
            default: null
        },
        city: {
            type: String,
            default: null
        },
        country: {
            type: String,
            default: null
        }
    },{
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                ret.id = doc.id;
                delete ret._id;
                delete ret.__v;
                delete ret.password;
                return ret;
            }
        }
    }
)

userSchema.pre('save', function (next){
    const user = this

    if(user.isModified('password')){
        bcrypt.genSalt(SALT_FACTOR)
        .then(salt => {
            return bcrypt.hash(user .password, salt)
            .then(hash => {
                user.password = hash
                next()
            })
        }).catch(next)
    }
})

userSchema.methods.checkPassword = function(password) {
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema);

module.exports = User

// 1. Llamo las dependencias que me harán falta: mongoose, SCHEMA, bcrypt para el password y SALT_FACTOR para complicar a este grado el password
// 2. Creo el modelo de user: name, username, password, profilePic, edad y email. Declaro todos en null por defecto y cuáles son requeridos y su tipo
// 3. timestamps: true -> Me pintará en el jason la hora a la que fue creado y actualizado
// 4. toJSON -> Modifico el campo "_id" por "id" y declaro lo que no quiero que me muestre en el json: "__v" y password
// 5. userSchema.pre('save', function (next) -> Middleware que hace que una función se ejecute (save), después de realizar ciertas comprobaciones
// 6. hacemos checkPasswrod del hasheado con el q corresponde al password que ha insertado el usuario
// 7. Exportamos el modelo User