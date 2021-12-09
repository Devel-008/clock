var new_map = new Map();
new_map.set("Name", "Isha").set("Age", "22");
console.log(new_map);
new_map.forEach(function(value, againvalue, new_map) {
    console.log(value);
});
for (let value of new_map.values()) {
    console.log(value);
}

var raw = new Map();
var unit = new Map();
var fit = new Map();
var ear = new Map();
var kit = new Map();
var sum = 0;

raw.set("Name", "neha").set("Total-Marks", "252").set("English", "89").set("hindi", "87").set("Maths", "76");
unit.set("Name", "kiya").set("Total-Marks", "165").set("English", "55").set("hindi", "45").set("Maths", "65");
fit.set("Name", "viraj").set("Total-Marks", "200").set("English", "50").set("hindi", "70").set("Maths", "80");
ear.set("Name", "kim").set("Total-Marks", "210").set("English", "70").set("hindi", "80").set("Maths", "60");
kit.set("Name", "ken").set("Total-Marks", "186").set("English", "50").set("hindi", "66").set("Maths", "70");

var ret = new Set();

ret.add(raw).add(unit).add(fit).add(ear).add(kit);
ret.forEach(function(key, againvalue, ret) {
    console.log(key);
});
for (let i of ret.keys()) {
    for (let j of ret.values()) {

    }

}