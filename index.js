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