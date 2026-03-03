let entrance = {
    name: "entrance",
    image: "hauntedHouse_entrance.jpg",
    text: "You are standing in front of a haunted house. Do you want to enter?",
    choices: ""
}
let hallway = {
    name: "hallway",
    image: "hauntedHouse_hallway.jpg",
    text: "You are in the hallway. Do you want to go left or right?",
    choices: ""
}
let room = {
    name: "room",
    image: "hauntedHouse_room.jpg",
    text: "You are in a room. Do you want to open the door or look under the bed?",
    choices: ""
}
let stairwell = {
    name: "stairwell",
    image: "hauntedHouse_stairwell.jpg",
    text: "You are in the stairwell. Do you want to go up or down?",
    choices: ""
}
rooms = [entrance, hallway, room, stairwell]
let index = 0
function displayNode(index) {
    document.getElementById("heading").innerHTML = rooms[index].name;
    document.getElementById("images").src = rooms[index].image;
    document.getElementById("text").innerHTML = rooms[index].text;
    document.getElementById("container").innerHTML = rooms[index].choices;
}