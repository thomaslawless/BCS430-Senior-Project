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

let state = {
    monitor: false
}

// Start of Vorpal Commands
console.clear();

vorpal.command('capacity', 'Display current capacity').action(function(args, callback) {
    state.monitor = true;
    const maxCapacity = 100;
    const covidCapacity = maxCapacity / 2;
    const currentMembers = Math.floor((Math.random() * 50) + 1);

    this.log(`\nCurrent Members: ${currentMembers}/${covidCapacity}\n`);
    callback();
});

vorpal.command('clear', 'Clear console.').action(function(args, callback) {
    console.clear();
    callback();
});

vorpal.command('enroll trainer', 'Clear console.').action(async function(args, callback) {
    let newTrainer = await EnrollTrainer();
    trainerDB.insert(newTrainer, (err, newDoc) => {
        callback();
    })
});

vorpal.command('enroll member', 'Clear console.').action(async function(args, callback) {
    let newMember = await EnrollMember();
    memberDB.insert(newMember, (err, newDoc) => {
        callback();
    })
});

vorpal.command('monitor', 'Enables monitoring of member scanning in.').action(function(args, callback) {
    state.monitor = true;
    console.clear();
    callback();
});

vorpal.command('search trainer', 'Search for trainer by last name or ID.').action(async function(args, callback) {
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

vorpal.command('search member', 'Search for member by last name or ID.').action(async function(args, callback) {
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

vorpal.command('add class', 'create a new class on the schedule.').action(async function(args, callback){
    let newClass = await CreateClass();
    classDB.insert(newClass, (err, newDoc) => {
        callback();
    })
});

vorpal.command('search class', 'Search for class by name or ID.').action(async function(args, callback) {
    const classSearch = await prompts({
        type: 'text',
        name: 'value',
        message: 'Class Name / ID',
    });
    if (isNaN(classSearch.value)) {
        classDB.find({ className: classSearch.value.toLowerCase() }, function (err, docs) {
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

vorpal.command('join class', 'create a new class on the schedule.').action(async function(args, callback){
    let joinedClass = await JoinClass();
    classDB.update({ classID: parseInt(joinedClass.ClassID) }, { $push: { enrolledMembers: parseInt(joinedClass.MemberID) } }, {}, function (err, numReplaced) {
        callback();
    });
});

vorpal.delimiter('gym$').show();