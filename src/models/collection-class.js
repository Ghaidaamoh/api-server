'use strict';

class Addition{
    constructor(model){
this.model=model
    }

async  addNew(element) {
    let addInfo = element;
    let insert = await this.model.create(addInfo);
    // res.status(201).json(food);
    return insert
}
async  createNew(element) {
    const id = parseInt(element);
    let food = await this.model.findOne({ where: { id: id } });
    // res.status(200).json(food);
    return food
}
async  getAllItem() {
    let all = await this.model.findAll();
    // res.status(200).json(all);
    return all
}
async  updateItem(element,item) {
    const id = parseInt(element);
    let itemInfo = item;
    let updateItem = await this.model.findOne({ where: { id } });
    let update = await updateItem.update(itemInfo);
    // res.status(200).json(updateFood);
    return update
}
async  deleteItem(item) {
    const id = parseInt(item);
    let deleteItem = await this.model.destroy({ where: { id } });
    // res.status(204).json(deleteFood);
    return deleteItem
}}
module.exports=Addition