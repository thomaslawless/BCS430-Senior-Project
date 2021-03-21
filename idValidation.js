/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Checks that the ID is not already in use
 */
function userModel() {
  let Model = new NeDB({
    filename: 'member.db',
    autoload: true
  });

  Model.ensureIndex({ fieldName: 'MemberID', unique: true }, err => {
    if (err) throw err;
  });

  return Model;
}
 
 
 function userModel() {
  let Model = new NeDB({
    filename: 'appointment.db',
    autoload: true
  });

  Model.ensureIndex({ fieldName: 'AppointmentID', unique: true }, err => {
    if (err) throw err;
  });

  return Model;
}
 
 function userModel() {
  let Model = new NeDB({
    filename: 'trainer.db',
    autoload: true
  });

  Model.ensureIndex({ fieldName: 'TrainerID', unique: true }, err => {
    if (err) throw err;
  });

  return Model;
}
 
 function userModel() {
  let Model = new NeDB({
    filename: 'class.db',
    autoload: true
  });

  Model.ensureIndex({ fieldName: 'ClassID', unique: true }, err => {
    if (err) throw err;
  });

  return Model;
}
 
 function userModel() {
  let Model = new NeDB({
    filename: 'payment.db',
    autoload: true
  });

  Model.ensureIndex({ fieldName: 'invoiceID', unique: true }, err => {
    if (err) throw err;
  });

  return Model;
}
 
 