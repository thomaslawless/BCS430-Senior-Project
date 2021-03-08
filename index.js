const vorpal = require('vorpal')();
const keyevents = require('key-events');
const keys = keyevents();

let state = {
    monitor: false
}

setInterval(() => {
    if (state.monitor) {
        console.log(`\nMember #${Math.floor(Math.random() * 9000000)} : Checked In!`);
    }
}, 10000);

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

vorpal.command('monitor', 'Enables monitoring of member scanning in.').action(function(args, callback) {
    state.monitor = true;
    console.clear();
    callback();
});

vorpal.command('search trainer', 'Search for trainer by name or ID.').action(function(args, callback) {
    state.monitor = true;
    this.log('bar');
    callback();
});

vorpal.command('search member', 'Search for member by name or ID.').action(function(args, callback) {
    state.monitor = true;
    this.log('bar');
    callback();
});

vorpal.delimiter('gym$').show();