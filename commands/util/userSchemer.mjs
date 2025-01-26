import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true },
  username: String,
  balance: { type: Number, default: 0 },
  lastWork : {type : Number},
  inventory : [],
  health : {type : Number, default: 100},
  profession : {type : String, default : "Unemployed"},
  alive : {type : Boolean, default : true},
  lastCrime : {type : Number},
  totalCrimes : {type : Number, default : 0}
});

export default mongoose.model('User', UserSchema);