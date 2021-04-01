'use strict';
import Animal from '../models/animal.js'



const animalData = [
    {
        id: '1',
        animalName: 'Frank',
        species: '1',
    },
];

export default {
    Query: {
        animals: (parent, args) => {
            return Animal.find();
        },
    },
    Mutation: {
        addAnimal: (parent, args) => {
            console.log(args);
            const newAnimal = new Animal(args);
            return newAnimal.save();
        },
        modifyAnimal: (parent, args) => {
            console.log(args);
            const data = {
                animalName: args.animalName,
                species: args.species,
            };
            return(Animal.findByIdAndUpdate(args.id, data));
        }
    },
};
