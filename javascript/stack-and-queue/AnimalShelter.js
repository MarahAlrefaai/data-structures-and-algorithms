'use strict'

const Queue = require('./queue.js');
class AnimalShelter {
  constructor(){
  this.name="";
  this.queue=new Queue(); }
//------------------------------------------
//enqueue
enqueue(animal){
if(typeof animal=="object"){ this.queue.enqueue(animal); }
else{ return "its not an object";   }}
//-------------------------------------
//dequeue
dequeue(pref){
  if(this.queue.peek().name==pref)
{  
  let aniName=this.queue.peek();
  this.queue.dequeue();
  return aniName;
 }else{ return null;}}}
 //------------------------------------
 //cat
class Cat extends AnimalShelter {
  constructor(name){super();this.name=name;}
  animalName(){ return this.name;}}
//--------------------------------------
//dog
class Dog extends AnimalShelter {
  constructor(name){super();this.name=name;}
  animalName(){return this.name; }}
module.exports = {AnimalShelter,Cat,Dog}