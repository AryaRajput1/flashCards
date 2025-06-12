import mongoose from "mongoose";

const flashCardSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true,
    },
}, {
    timestamps: true,
})

const FlashCard = mongoose.model('FlashCard', flashCardSchema);

export default FlashCard;