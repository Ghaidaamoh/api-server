'use strict';
const { clothes } = require('../models/index');
const express = require('express');
const router = express.Router();
const Addition = require('../models/collection-class');
const Clothes = require('../models/clothes');

const object1= new Addition(Clothes)

async function getAllClothes(req,res){
    let allItem=await object1.getAllItem()
    res.status(200).json(allItem)
}

async function addNewClothes(req,res){
    let addItem= await object1.addNew(req.body)
    res.status(201).json(addItem)
}

async function createClothes(req,res){
    let createele= await object1.createItem(req.params.id)
    res.status(200).json(createele)
}

async function updateClothes(req,res){
    let updateele= await object1.updateItem(req.params.id,req.body)
    res.status(200).json(updateele)
}

async function deleteClothes(req,res){
    let deleteele= await object1.deleteItem(req.params.id)
    res.status(204).json(deleteele)
}

router.get('/api/v1/clothes', getAllClothes);
router.post('/api/v1/clothes', addNewClothes);
router.get('/api/v1/clothes/:id', createClothes);
router.put('/api/v1/clothes/:id', updateClothes);
router.delete('/api/v1/clothes/:id', deleteClothes);
module.exports = router;