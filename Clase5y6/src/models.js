const mongoose = require ("mongoose")

const ProductsSchema = mongoose.Schema ({
    name: {type: String, required: true},
    description: {type: String, required: false},
    availableUnits: {type: Number, required: false, default: 0},
    price: {type: Number, required: true},
    category: {type: String, required: true},
})

exports.Product = mongoose.model("products", ProductsSchema);


