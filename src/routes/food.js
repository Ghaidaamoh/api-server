'use strict';
const { Food } = require('../models/index');
const express = require('express');
const router = express.Router();
const Addition = require('../models/collection-class');

const object1= new Addition(Food)

async function getAllFood(req,res){
    let allItem=await object1.getAllItem()
    res.status(200).json(allItem)
}

async function addNewFood(req,res){
    let addItem= await object1.addNew(req.body)
    res.status(201).json(addItem)
}

async function createFood(req,res){
    let createele= await object1.createItem(req.params.id)
    res.status(200).json(createele)
}

async function updateFood(req,res){
    let updateele= await object1.updateItem(req.params.id,req.body)
    res.status(200).json(updateele)
}

async function deleteFood(req,res){
    let deleteele= await object1.deleteItem(req.params.id)
    res.status(204).json(deleteele)
}

router.get('/api/v1/food', getAllFood);
router.post('/api/v1/food', addNewFood);
router.get('/api/v1/food/:id', createFood);
router.put('/api/v1/food/:id', updateFood);
router.delete('/api/v1/food/:id', deleteFood);
module.exports = router;