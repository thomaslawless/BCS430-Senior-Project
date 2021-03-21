const Validator = require('validatorjs');
const Models = require("../models");

Validator.registerAsync('exist', function(value,  attribute, req, passes) {
    if (!attribute) throw new Error('Specify Requirements i.e fieldName: exist:table,column');
    
    //split table and column
    let attArr = attribute.split(",");
    if (attArr.length !== 2) throw new Error(`Invalid format for validation rule on ${attribute}`);

    //assign array index 0 and 1 to table and column respectively
    const { 0: table, 1: column } = attArr;
    //define custom error message
    let msg = (column === "username") ? `${column} has already been taken `: `${column} already in use`;
    //check if incoming value already exists in the database
    Models[table].valueExists({ [column]: value })
    .then((result) => {
        if(result){
            passes(false, msg); // return false if value exists
            return;
        }
        passes();
    });
});

const validationRule = {
        email: "required|email|exist:User,email",
        username: "required|string|exist:User,username",
        phone: "required|string",
        password: "required|string|min:6|confirmed|strict"
       
};
