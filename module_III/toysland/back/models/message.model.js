const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        saler: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        message: {
            type: String,
            required: true,
            required: 'Comment is required'
        },
        date: {
            type: Date,
            default: Date.now
        }, 
    }, {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    });

    const Message = mongoose.model('Message', messageSchema);

    module.exports = Message;