// create getFlashCards, createFlashCard, updateFlashCard, deleteFlashCard

import mongoose from "mongoose";
import FlashCard from "../models/flashCard.model.js";

// Get all flash cards
export const getFlashCards = async (req, res) => {
  try {
    const flashCards = await FlashCard.find();

    if (flashCards.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No flash cards found" });
    }

    res.status(200).json({ success: true, data: flashCards });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createFlashCard = async (req, res) => {
  const { question, answer, difficulty } = req.body;

  if (!question || !answer || !difficulty) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Question, answers and difficulty are required",
      });
  }

  try {
    const newFlashCard = new FlashCard({ question, answer, difficulty });
    await newFlashCard.save();

    res.status(201).json({ success: true, data: newFlashCard });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateFlashCard = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Flash card ID is required" });
  }

  const { question, answer, difficulty } = req.body;

  if (!question && !answer && !difficulty) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Question, answers or difficulty are required",
      });
  }

  try {
    const updatedFlashCard = await FlashCard.findById(id);

    if (!updatedFlashCard) {
      return res
        .status(404)
        .json({ success: false, message: "Flash card not found" });
    }

    updatedFlashCard.question = question || updatedFlashCard.question;
    updatedFlashCard.answer = answer || updatedFlashCard.answer;
    updatedFlashCard.difficulty = difficulty || updatedFlashCard.difficulty;
    await updatedFlashCard.save();

    res.status(200).json({ success: true, data: updatedFlashCard });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteFlashCard = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Flash card ID is required" });
    }

    // check is correct mongoose id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Flash card ID" });
    }

    const deletedFlashCard = await FlashCard.findByIdAndDelete(id);

    if (!deletedFlashCard) {
      return res
        .status(404)
        .json({ success: false, message: "Flash card not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Flash card deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
