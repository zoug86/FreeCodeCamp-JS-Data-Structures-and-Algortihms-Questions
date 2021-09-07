// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       count = count;
//       break;

//   }

//     if(count <= 0){
//       return count.toString() + ' Hold';
//     }
//     if(count > 0){
//       return count.toString() + ' Bet'
//     }

//   // Only change code above this line
// }

// cc(2);
//cc(3);

// ----------------------------------------------------------------------------------------------------

// Setup
// var recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: []
//     },
//     5439: {
//         albumTitle: 'ABBA Gold'
//     }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//     if (prop !== 'tracks' && value) {
//         records[id][prop] = value;
//     }
//     else if (prop === 'tracks' && !records[id].hasOwnProperty("tracks")) {
//         records[id][prop] = [];
//         records[id][prop].push(value);
//     }
//     else if (prop === 'tracks' && value && records[id].hasOwnProperty("tracks")) {
//         records[id][prop].push(value);
//     }
//     else if (!value) {
//         delete records[id][prop];
//     }
//     return records;
// }

// //updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// //updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// //updateRecords(recordCollection, 2548, "artist", "");
// //updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
// //updateRecords(recordCollection, 2468, "tracks", "Free");
// updateRecords(recordCollection, 2548, "tracks", "");

// console.log(recordCollection)

// ----------------------------------------------------------------------------------------------------

// Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop) {
//     // Only change code below this line
//     // if the both exist
//     var count1 = 0;
//     var count2 = 0;
//     for (var i = 0; i < contacts.length; i++) {
//         if (contacts[i]['firstName'] === name && contacts[i].hasOwnProperty(prop)) {
//             return contacts[i][prop];
//         }
//         if (contacts[i]['firstName'] !== name) {
//             count1++;
//             if (count1 === contacts.length) {
//                 return 'No such contact';
//             }
//         }

//         if (!contacts[i].hasOwnProperty(prop)) {
//             count2++;
//             if (count2 === contacts.length) {
//                 return 'No such property';
//             }
//         }

//     }
//     console.log(count1, count2);

// }


// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));
// console.log(lookUpProfile("Akira", "address"));
// console.log(lookUpProfile("Bob", "potato"));
// console.log(lookUpProfile("Bob", "number"));

// ----------------------------------------------------------------------------------------------
// var arr = []
// function countdown(n) {
//     if (n < 1) {
//         return [];
//     }

//     arr.push(n);
//     countdown(n - 1);
//     return arr;
// }

// console.log(countdown(20));

// ----------------------------------------------------------------------------------------------
var arr = [];
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) return [];
    arr.push(startNum);
    rangeOfNumbers(startNum + 1, endNum);
    return arr;
}

console.log(rangeOfNumbers(10, 20));
