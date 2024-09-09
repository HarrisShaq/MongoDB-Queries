// // MongoDB Queries Assignment//

// // $and & $or sample_resteraunts

// 1.{borough: "Brooklyn", cuisine: "Hamburgers"}
// 2.{ $and: [{borough: "Brooklyn"}, {cuisine: "Hamburgers"}] }
// 3.{ $or: [{borough: "Brooklyn"}, {cuisine: "Hamburgers"}] }

// // $not & $nor sample_analytics accounts

// 1. {$nor: [{limits: "1000"}, {limits: "5000"}] }
// 2. {limits: {$not: /^1.*/}}

// // $eq & $ne sample_mflix movies

// 1. {runtime: {$ne: "8"}}
// 2. {year: "1993"}
// 3. {year: {$eq: "1993"}}

// // $gt & $lt sample_airbnb

// 1.{beds: {$gt: 5}}
// 2.{$and: [{beds: {$gt:6}}, {beds:{$lt:9}}]}


// // $in & $nin sample _airbnb

// 1.{property_type: {$in: ["Apartment", "Condominium"]}}
// 2.{"property_type": { "$nin": ["House", "Townhouse"] }}
// 3. { "property_type": { "$in": ["Apartment"] } }