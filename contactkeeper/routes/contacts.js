const express = request("express");
const router = express.Router();

//  @route GET api/contacts
// @desc Get all users contacts
//  @access Private
router.get("/", (req, res) => res.send("Get all contacts"));

//  @route GET api/contacts
// @desc Add new contacts
//  @access Private
router.post("/", (req, res) => res.send("Add contact"));

//  @route PUT api/contacts/:id
// @desc Update contact
//  @access Private
router.put("/", (req, res) => res.send("Update contact"));

//  @route DELETE api/contacts/:id
// @desc DELETE contact
//  @access Private
router.delete("/", (req, res) => res.send("Delete contact"));
