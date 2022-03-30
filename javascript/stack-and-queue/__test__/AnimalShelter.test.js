'use strict'
const { AnimalShelter, Cat, Dog } = require('../AnimalShelter.js');
describe('testing creation AnimalShelter 1 ', () => {
  it('test creating an AnimalShelter instance', () => {
    const Animal = new AnimalShelter();
    expect(Animal).toBeDefined();
  })
})
describe('test AnimalShelter 2', () => {

  it('test adding cat object ', async () => {

    const animal = new AnimalShelter();
    const cat = new Cat("cat");

    animal.enqueue(cat);
    expect(animal.queue.length).toBe(1);
    console.log(animal.queue.front);
    expect((animal.queue.peek()).animalName()).toBe("cat");
    console.log(animal.queue.front);
  })
  it('test adding dog object ', async () => {
    const animal = new AnimalShelter();
    const dog = new Dog("dog");
    animal.enqueue(dog);
    expect(animal.queue.length).toBe(1);
    expect(animal.queue.peek().animalName()).toBe("dog");
    console.log(animal.queue.front);
    expect(animal.enqueue("cat")).toBe("its not an object");
  })
  it('deleting object ', async () => {
    const animal = new AnimalShelter();
    const dog = new Dog("dog");
    animal.enqueue(dog);
    expect(animal.queue.length).toBe(1);
    expect(animal.queue.peek().animalName()).toBe("dog");
    expect(typeof (animal.dequeue("dog"))).toBe("object");
    expect(animal.queue.length).toBe(0);
  })

})