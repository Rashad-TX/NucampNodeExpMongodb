require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const partnerSchema = new Schema({
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
   description: {
    type: String,
    required: true,
    unique: true
},
    timestamps: true
});


const Partner = mongoose.model('Partner', PartnerSchema);
module.exports = Partner;