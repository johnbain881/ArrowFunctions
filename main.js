"use strict";
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray, point, numPoints) {
//     let buildMeUp = ""
//     let pointHolder = "";
//     for (let i = 0; i < numPoints; i++) {
//         pointHolder += point;
//     }

//     for (let i = 0; i < theWordArray.length; i++) {
//         /*
//             If the current word's place (not index) in the array
//             is evenly divisible by 3, add an exclamation point
//             to the end of the word and then concatenate it to
//             `buildMeUp`.

//             Otherwise, just concatenate the word itself.
//          */
//         buildMeUp+= sentence[i];

//         if ((i + 1)%3 == 0) {
//             buildMeUp += `${pointHolder} `;
//         }
//         else {
//             buildMeUp += " ";
//         }
//         console.log(buildMeUp)
//         // Print buildMeUp to the console
//     }

// }

let addExcitement = (theWordArray, point, numPoints) => {
    let buildMeUp = ""
    let pointHolder = "";
    for (let i = 0; i < numPoints; i++) {
        pointHolder += point;
    }

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        buildMeUp+= sentence[i];

        if ((i + 1)%3 == 0) {
            buildMeUp += `${pointHolder} `;
        }
        else {
            buildMeUp += " ";
        }
        console.log(buildMeUp)
        // Print buildMeUp to the console
    }
};




addExcitement(sentence, "!", 4)