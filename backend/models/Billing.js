const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Billing = new Schema({
   id: {
      type: Number
   },
   billAmount:{
      type: Number
   },
   date:{
      type: Date
   },
   name:{
      type: String
   },   
   items:[{
       itemName: {
          type: String
       },
       itemQuantity: {
          type: String
       },
       itemTotal: {
          type: Number
       }
   }]
}, {
   collection: 'Bills'
})

module.exports = mongoose.model('Billing', Billing)
