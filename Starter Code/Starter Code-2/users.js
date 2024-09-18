const users = [
     { firstName: "Alice", lastName: "Johnson", points: 120 },
     { firstName: "Bob", lastName: "Smith", points: 99 },
     { firstName: "Charlie", lastName: "Brown", points: 180 },
];

//map this shit

const member = users.map(function (val, i) {
     let userPoints = users[i].points;
     let memberStatus = "";
     let fullName = users[i].firstName.concat(" ".concat(users[i].lastName)); //concats a space between the first and last name
     //checks if member is Premium or not.
     if (userPoints > 100) {
          memberStatus = "Premium";
     } else {
          memberStatus = "Standard";
     }

     return {
          name: fullName,
          memberStatus: memberStatus,
     };
});
