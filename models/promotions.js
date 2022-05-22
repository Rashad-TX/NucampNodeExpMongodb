require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const promotionSchema = new Schema({
    name: {
    type: String,
    required: true,
    unique: true
},
   image: {
   type: String, 
   required:true,
    unique: true
},
   featured: {
    type: String,  
    unique: true
},
   cost: {
    type: Currency,
    required: true,
    unique: true
},
    description: {
    type: String,
    required: true,
    unique: true
},
    timestamps: true
});


const Promotion = mongoose.model('Promotion', PromotionSchema);
module.exports = Promotion;