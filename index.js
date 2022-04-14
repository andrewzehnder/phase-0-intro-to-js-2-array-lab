// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
} 

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    let copyOfCats = [...cats, name];
    return copyOfCats;
}

function prependCat (name) {
    let copyOfCats2 = [name, ...cats];
    return copyOfCats2;
}

function removeLastCat() {
    let lastCat = cats.slice(0,2);
    return lastCat
}

function removeFirstCat() {
    let firstCat = cats.slice(1);
    return firstCat
}