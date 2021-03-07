
var Datastore = require('nedb');
           // Creates a table called "trainers"
var trainers = new Datastore({ filename: 'trainers.db', autoload: true });

          // Creates a table called "members"
var members = new Datastore({ filename: 'members.db', autoload: true });

         // Creates a table called "classes"
var classes = new Datastore({ filename: 'classes.db', autoload: true });

var trainers =[]; // creates an array of trainers objects
var members =[];  // creates an array of members objects
var classes =[];  // creates an array of classes objects

trainers.insert(
  {
    "TrainerID":"R001",
    "TrainerName":"Anne Rogers Clark",
    "GymName":"Muscle Monsters",
    "Address":"116 Centereach Mall",
    "City":"Centereach",
    "State":"New York",
    "Zip": 11720,
    "Phone": 516-330-2020,
    "Email":"AnneRogrs@gmail.com"
});
  
  trainers.insert(
  {
    "TrainerID":"R002",
    "TrainerName":"Francis Butler",
    "GymName":"Muscle Monsters",
    "Address":"100 Thruway Plaza",
    "City":"Cheektowaga",
    "State":"New York",
    "Zip": 14225,
    "Phone": 616-229-1529,
    "Email":"francisb@hotmail.com"
  });
  
  trainers.insert(
  {
    "TrainerID":"R006",
    "TrainerName":"Jeanette Spencer",
    "GymName":"Muscle Monsters",
    "Address":"139 Merchant Place",
    "City":"Cobleskill",
    "State":"New York",
    "Zip": 12043,
    "Phone": 633-120-5560,
    "Email":"JeaneSpen@gmail.com"
  });

   trainers.insert(  {
    "TrainerID":"R003",
    "TrainerName":"Tim Travis",
    "GymName":"Muscle Monsters",
    "Address":"85 Crooked Hill Road",
    "City":"Commack",
    "State":"New York",
    "Zip": 11725,
    "Phone": 516-349-2229,
    "Email":"timtra@hotmail.com"
  });
   trainers.insert(
  {
    "TrainerID":"R004",
    "TrainerName":"Joseph Fine",
    "GymName":"Muscle Monsters",
    "Address":"872 Route 13",
    "City":"Cortlandville",
    "State":"New York",
    "Zip":13045,
    "Phone": 216-554-1000,
    "Email":"josfine@hotmail.com"
  });
  
  trainers.insert(
  {
    "TrainerID":"R005",
    "TrainerName":"Lewis Smith",
    "GymName":"Muscle Monsters",
    "Address":"12465 Hempstead Turnpike",
    "City":"East Meadow",
    "State":"New York",
    "Zip": 11554,
    "Phone": 631-211-11286,
    "Email":"lewiss@gmail.com"
  });
  
      trainers.push(trainers);
// should give the correct result now
trainers.insert(trainers, function(err, docs) {
    docs.forEach(function(d) {
        console.log('Saved trainers:', d.name);
    });
});


members.insert(
  {
    "MemberID":"M220",
    "MemberName":"Rita Margarita",
    "GymName":"Muscle Monsters",
    "Address":"279 Troy Road",
    "City":"East Greenbush",
    "State":"New York",
    "Zip": 12061,
    "Phone": 346-100-1320,
    "Email":"ritarita@gmail.com"
});
 
members.insert(
  {
    "MemberID":"M221",
    "MemberName":"Louis Jackson",
    "GymName":"Muscle Monsters",
    "Address":"6438 Basile Rowe",
    "City":"East Syracuse",
    "State":"New York",
    "Zip":1305,
    "Phone": 718-670-9990,
    "Email":"loujackson@gmail.com"
});
   
   members.insert(
  {
    "MemberID":"M223",
    "MemberName":"Hector Diaz",
    "GymName":"Muscle Monsters",
    "Address":"25737 US Rt 11",
    "City":"Evans Mills",
    "State":"New York",
    "Zip":13637,
    "Phone": 228-740-9110,
    "Email":"diazhector@hotmail.com"
});
   
   
    members.insert(
  {
    "MemberID":"M225",
    "MemberName":"Maria Gail",
    "GymName":"Muscle Monsters",
    "Address":"901 Route 110",
    "City":"Framingdale",
    "State":"New York",
    "Zip": 11735,
    "Phone": 631-118-1765,
    "Email":"gailm@hotmail.com"
});
   
    members.insert(
  {
    "MemberID":"M226",
    "MemberName":"Austin Power",
    "GymName":"Muscle Monsters",
    "Address":"3949 Route 31",
    "City":"Clay",
    "State":"New York",
    "Zip": 13041,
    "Phone": 341-229-0085,
    "Email":"austinpwr@hotmail.com"
});

members.insert(members, function(err, docs) {
    docs.forEach(function(d) {
        console.log('Saved members:', d.name);
    });
});

  classes.insert(
  {
    "className":"Yoga",
    "classDates":"Mondays and Fridays",
    "classTime":"8:00 am, 11:30 am, 2:00 pm, 6:30 pm",
    "ClassAvailability":"available"

});

classes.insert(
  {
    "className":"Cycling",
    "classDates":"Tuesdays and Thursdays",
    "classTime":"10:00 am, 1:30 pm, 5:00 pm",
    "ClassAvailability":"available"

});

   classes.insert(
  {
    "className":"Zumba",
    "classDates":"Daily",
    "classTime":"11:00 am, 7:00pm",
    "ClassAvailability":"available"

});

classes.insert(
  {
    "className":"Water Aerobics",
    "classDates":"Weekends only",
    "classTime":"9:00 am, 3:00 pm",
    "ClassAvailability":"unavailable"
});

classes.insert(
  {
    "className":"Kickboxing",
    "classDates":"Daily",
    "classTime":"10:00 am, 12:00 pm, 5:00pm",
    "ClassAvailability":"available"
});

classes.insert(classes, function(err, docs) {
    docs.forEach(function(d) {
        console.log('Saved classes:', d.name);
    });
});