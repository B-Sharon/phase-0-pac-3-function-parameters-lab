let name = "Aki";
let language = "Ember.js";
//takes in an argument of a name and returns a phrase using those arguments
function introduction(name) {
    return `Hi, my name is ${ name}.` ;
}
const greeting1 = introduction(name)
console.log(greeting1);

 //takes in two arguments, and language defaults to JavaScript
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
const greeting2 = introductionWithLanguage( name, language);
console.log(greeting2);



// takes in two arguments and language defaults to JavaScript
function introductionWithLanguageOptional(name = 'Gracie' , language = 'JavaScript' ){
    return `Hi, my name is ${name} and I am learning to program in ${language }.`;
}
const greeting3 = introductionWithLanguageOptional(name, language);
console.log(greeting3);

// takes in two arguments and language defaults to Python
function introductionWithLanguageOptional(name = 'Gracie', language= 'JavaScript' ){
    return `Hi, my name is ${name } and I am learning to program in ${language}.`;
}
const greeting4 = introductionWithLanguageOptional (name, language);
console.log(greeting4); 
