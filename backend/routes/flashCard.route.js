import express from 'express';

const router = express.Router();
import { getFlashCards, createFlashCard, updateFlashCard, deleteFlashCard } from '../controllers/flashCard.controller.js';
// Define routes for flash cards
router.get('/', getFlashCards);
router.post('/', createFlashCard);
router.put('/:id', updateFlashCard);
router.delete('/:id', deleteFlashCard);

// Export the router
export default router;