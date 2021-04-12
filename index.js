var Datastore = require('nedb');
memberDB = new Datastore({ filename: './db/members', autoload: true });
trainerDB = new Datastore({ filename: './db/trainers', autoload: true });
classDB = new Datastore( {filename: './db/classes', autoload: true} );

const vorpal = require('vorpal')();
const prompts = require('prompts');

const EnrollMember = require('./forms/EnrollMember').EnrollMember;
const EnrollTrainer = require('./forms/EnrollTrainer').EnrollTrainer;
const CreateClass = require('./forms/CreateClass').CreateClass;
const JoinClass = require('./forms/JoinClass').JoinClass;
const ChangeMember = require('./forms/ChangeMember').ChangeMember;

let state = {
    monitor: false
}

// Start of Vorpal Commands
console.clear();

const maxCap = 100;
let currentCap = 50;

vorpal.command('clear', 'Clear console\n').action(function(args, callback) {
    console.clear();
    callback();
});

// -----------------------------------------------------------

vorpal.command('enroll member', 'Enroll a Member').action(async function(args, callback) {
    let newMember = await EnrollMember();
    memberDB.insert(newMember, (err, newDoc) => {
        callback();
    })
});

vorpal.command('change member', 'Modify an Existing Member').action(async function(args, callback) {
    let changeMember = await ChangeMember();
    memberDB.update({ memberID: parseInt(changeMember.MemberID) }, { $set: { membership: changeMember.Membership } }, {}, function (err, numReplaced) {
        callback();
    });
});

vorpal.command('search member', 'Search for member by last name or ID\n').action(async function(args, callback) {
    const lastNameSearch = await prompts({
        type: 'text',
        name: 'value',
        message: 'ID / Last Name',
    });
    if (isNaN(lastNameSearch.value)) {
        memberDB.find({ last: lastNameSearch.value.toLowerCase() }, function (err, docs) {
            console.log('');
            console.log(docs);
            vorpal.delimiter('gym$').show();
        });
    } else {
        memberDB.find({ memberID: parseInt(lastNameSearch.value) }, function (err, docs) {
            console.log('');
            console.log(docs);
            vorpal.delimiter('gym$').show();
        });
    }
    callback();
});

// -------------------------------------------------------------------

vorpal.command('enroll trainer', 'Enroll a Trainer').action(async function(args, callback) {
    let newTrainer = await EnrollTrainer();
    trainerDB.insert(newTrainer, (err, newDoc) => {
        callback();
    })
});

vorpal.command('search trainer', 'Search for trainer by last name or ID\n').action(async function(args, callback) {
    const trainerLastNameSearch = await prompts({
        type: 'text',
        name: 'value',
        message: 'ID / Last Name',
    });
    if (isNaN(trainerLastNameSearch.value)) {
        trainerDB.find({ last: trainerLastNameSearch.value.toLowerCase() }, function (err, docs) {
            console.log('');
            console.log(docs);
            vorpal.delimiter('gym$').show();
        });
    } else {
        trainerDB.find({ trainerID: parseInt(trainerLastNameSearch.value) }, function (err, docs) {
            console.log('');
            console.log(docs);
            vorpal.delimiter('gym$').show();
        });
    }
    callback();
});

// ------------------------------------------------------------------------

vorpal.command('add class', 'Create a new class').action(async function(args, callback){
    let newClass = await CreateClass();
    classDB.insert(newClass, (err, newDoc) => {
        callback();
    })
});

vorpal.command('search class', 'Search for class by name or ID').action(async function(args, callback) {
    const classSearch = await prompts({
        type: 'text',
        name: 'value',
        message: 'Class Name / ID / Time',
    });
    if (isNaN(classSearch.value) && !classSearch.value.includes(':')) {
        classDB.find({ className: classSearch.value.toLowerCase() }, function (err, docs) {
            console.log('');
            console.log(docs);
            vorpal.delimiter('gym$').show();
        });
    } else if (classSearch.value.includes(':')) {
        classDB.find({ time: classSearch.value.toLowerCase() }, function (err, docs) {
            console.log('');
            console.log(docs);
            vorpal.delimiter('gym$').show();
        });
    } else {
        classDB.find({ classID: parseInt(classSearch.value) }, function (err, docs) {
            console.log('');
            console.log(docs);
            vorpal.delimiter('gym$').show();
        });
    }
    callback();
});

vorpal.command('join class', 'Sign a member up for a class\n').action(async function(args, callback){
    let joinedClass = await JoinClass();
    classDB.find({ classID: parseInt(joinedClass.ClassID) }, function (err, docs) {
        if (docs.length == 0) {
            console.log("ERROR: Class ID Invalid")
        } else {
            if (docs[0].enrolledMembers.length >= docs[0].sizeLimit) { 
                console.log("ERROR: Class is at max capacity")
            } else if (docs[0].enrolledMembers.includes(parseInt(joinedClass.MemberID))) {
                console.log("ERROR: Member is already in this class")
            } else {
                memberDB.find({ memberID: parseInt(joinedClass.MemberID) }, function (err, docs) {
                    if (docs.length == 0) {
                        console.log("ERROR: Member ID Invalid")
                    } else {
                        if (docs[0].membership == 'level_3') {
                            classDB.update({ classID: parseInt(joinedClass.ClassID) }, { $push: { enrolledMembers: parseInt(joinedClass.MemberID) } }, {}, function (err, numReplaced) {
                                callback();
                            });
                            console.log(`Enrolled member #${parseInt(joinedClass.MemberID)} into class #${parseInt(joinedClass.ClassID)}`)
                        } else if (docs[0].membership == 'level_2') {
                            if (docs[0].classAllowance < 3) {
                                classDB.update({ classID: parseInt(joinedClass.ClassID) }, { $push: { enrolledMembers: parseInt(joinedClass.MemberID) } }, {}, function (err, numReplaced) {
                                    callback();
                                });
                                memberDB.update({ memberID: parseInt(joinedClass.MemberID) }, { $set: { classAllowance: docs[0].classAllowance + 1 } }, {}, function (err, numReplaced) {
                                    callback();
                                });
                                console.log(`Enrolled member #${parseInt(joinedClass.MemberID)} into class #${parseInt(joinedClass.ClassID)}`)
                            } else {
                                console.log(`ERROR: Member #${parseInt(joinedClass.MemberID)}, has used their monthly classes`)
                            }
                        } else {
                            console.log(`ERROR: Member #${parseInt(joinedClass.MemberID)}, does not have remaining classes`)
                        }
                    }
                    vorpal.delimiter('gym$').show();
                });
            }
        }
        vorpal.delimiter('gym$').show();
    });
});

// ---------------------------------------------------------------------------

vorpal.command('capacity', 'Display current capacity').action(function(args, callback) {
    this.log(`\nCurrent Members: ${currentCap}/${maxCap}\n`);
    callback();
});

vorpal.command('checkin', 'Check user into facility').action(async function(args, callback) {
    const lastNameSearch = await prompts({
        type: 'text',
        name: 'value',
        message: 'Last Name',
    });

    memberDB.find({ last: lastNameSearch.value.toLowerCase() }, async function (err, docs) {
        console.log(`Member #${docs[0].memberID} checked in!`);
        currentCap++;
        vorpal.delimiter('gym$').show();
    });

    callback();
});

vorpal.command('checkout', 'Check user out of facility').action(async function(args, callback) {
    const lastNameSearch = await prompts({
        type: 'text',
        name: 'value',
        message: 'Last Name',
    });

    memberDB.find({ last: lastNameSearch.value.toLowerCase() }, async function (err, docs) {
        console.log(`Member #${docs[0].memberID} checked out!`);
        currentCap--;
        vorpal.delimiter('gym$').show();
    });

    callback();
});

console.clear();

vorpal.delimiter('gym$').show();