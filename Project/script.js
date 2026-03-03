function describeRoom(room) {
    if (room === "entrance") {
        console.log("You are standing in front of a haunted house. Do you want to enter?")
    } else if (room === "hallway") {
        console.log("You are in the hallway. Do you want to go left or right?")
    } else if (room === "room") {
        console.log("You are in a room. Do you want to open the door or look under the bed?")
    } else if (room === "stairwell") {
        console.log("You are in the stairwell. Do you want to go up or down?")
    } else {
        console.log("u did some wrong")
    }
}
describeRoom("stairwell")
let entrance = {
    name: "entrance",
    image: "hauntedHouse_entrance.jpg",
    text: "You are standing in front of a haunted house. Do you want to enter?",
    choices: [""]
}
let hallway = {
    name: "hallway",
    image: "hauntedHouse_hallway.jpg",
    text: "You are in the hallway. Do you want to go left or right?",
    choices: [""]
}
let room = {
    name: "room",
    image: "hauntedHouse_room.jpg",
    text: "You are in a room. Do you want to open the door or look under the bed?",
    choices: [""]
}
let stairwell = {
    name: "stairwell",
    image: "hauntedHouse_stairwell.jpg",
    text: "You are in the stairwell. Do you want to go up or down?",
    choices: [""]
}
let storyNodes = [entrance, hallway, room, stairwell]
let index = 3
function displayNode(index) {
    document.getElementById("heading").innerHTML = storyNodes[index].name;
    document.getElementById("images").src = storyNodes[index].image;
    document.getElementById("text").innerHTML = storyNodes[index].text;
    document.getElementById("container").innerHTML = storyNodes[index].choices;
}
displayNode(index)