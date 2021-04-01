import Category from '../models/category.js'

const categoryData = [
    {
        id: '1',
        categoryName: 'Mammal',
    },
];

export default {
    Species: {
        category(parent) {
            console.log('category:' + parent);
            return Category.findById(parent.category);
        }
    },
    Mutation: {
        addCategory: (parent, args) => {
            console.log(args);
            const newCategory = new Category(args);
            return newCategory.save();
        },
    },
};
