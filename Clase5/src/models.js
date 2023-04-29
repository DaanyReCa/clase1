const mongoose = require ("mongoose")

const ProductsSchema = mongoose.Schema ({
    name: {type: String, required: true},
    description: {type: String, required: false},
    availableUnits: {type: Number, required: false, default: 0},
    price: {type: Number, required: true},
    category: {type: String, required: true},
})

exports.Products = mongoose.model("products", ProductsSchema);


