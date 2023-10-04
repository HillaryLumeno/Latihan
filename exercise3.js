//Array exercise

let people = ["Greg", "Mary", "Devon", "James"];

//1. using a for-loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//2. using forEach()
people.forEach(person => {
    console.log(person);
});

//3. Remove "Greg"
people.shift();

//4. remove "James"
people.pop();

//5. Add "Matt" to the front
people.unshift("Matt");

//6.Add name 
people.push("Hillary");

//7.using a for-loop with break
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

//8. Make a copy of the Array using slice 
let copy = people.slice(1, 4);

//9.remove "Devon" and add "Elizabeth" and "Artie"
people.splice(2, 1, "Elizabeth","Artie");

//10.Create a new variable withBob
let withBob = people.concat("Bob");

console.log(withBob);



//Object exercise

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://stackoverFlow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1.Add "Go" to the end of the languages array
programming.languages.push("Go");

//2.change the difficulty to the value of 7 using bracket notation
programming["difficulty"] = 7;

//3.remove the jokes key using the delete keyword
delete programming.jokes;

//4. Add a new key called isFun with a value of true using dot notation
programming.isFun = true;

//5.ulangi array languages menggunakan map() dan perbarui setiap elemen
let updateLanguages = programming.languages.map((language, index) => '${index} - ${language}');
console.log(updateLanguages);
