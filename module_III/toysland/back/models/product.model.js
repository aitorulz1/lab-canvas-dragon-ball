const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        productPicture: {
            type: String,
            required: true,
            default: null
        },
        category: {
            type: String,
            required: true,
            //minlength: 5,
            //maxlength: 30,
            default: null
        },
         name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 30,
            default: null
        },
        description: {
            type: String,
            required: true,
            minlength: 20,
            maxlength: 70,
            default: null
        },
        price: {
            type: Number,
            required: true,
            maxlength: 4,
            default: 0
        },
        coin: {
            type: String,
            enum: ['€', '$', '£', null],
            default: null
        },
        ubication: {
            type: String,
            required: true,
            default: null
        }
    },{
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                ret.id = doc.id
                delete ret._id
                delete ret.__v
                return ret
            }
        }
    }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product