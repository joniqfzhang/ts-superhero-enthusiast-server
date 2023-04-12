import mongoose from "mongoose";

export const Heroinfo = mongoose.model('Heroinfo', {
    id: String,
    heroid: Number,
    name: String,
    token: String,
    powerstats: {
        intelligence: Number,
        strength: Number,
        speed: Number,
        durability: Number,
        power: Number,
        combat: Number
    },
    image: {
        url: String
    },
});
