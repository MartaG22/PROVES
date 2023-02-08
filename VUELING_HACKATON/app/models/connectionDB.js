const mongoose = require('mongoose');
const companyiesJSON = require('../utils/companies.json');
const Companyia = require('../models/modelCompanies.js');

// await mongoose.connect("mongodb://localhost:27017/companyia");

const afegirCompanyies = async function afegirCompanyies() {
    try {
        companyiesJSON.forEach(async (companyia) => {
            await Companyia.create(companyia);

        })
    }catch(error) {
        console.log(error);
    }
};

// const conncectDB = async() => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/companyia");
//         console.log("connected to database");
//     }catch(error){
//         throw error;
//     }
// }

module.exports = afegirCompanyies
// function afegirCompanyies() {
//     const totalCompanyies = companyiesJSON.length
//     console.log(totalCompanyies)

//     // for (let i = 0; i < totalCompanyies; i++) {
//         companyiesJSON.forEach(item => {
//             const empresa = item.create({
//                 "id": item.id,
//                 "website": item.website,
//                 "name": item.name,
//                 "founded": item.founded,
//                 "size": item.size,
//                 "locality": item.locality,
//                 "region": item.region,
//                 "country": item.country,
//                 "industry": item.industry,
//                 "linkedin_url": item.linkedin_url

//             });
//             console.log(empresa)
//             companyia.save(empresa);
//         });
