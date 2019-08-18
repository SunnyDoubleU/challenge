// Rover Object Goes Here
// ======================
const marsRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W" 
      console.log("The rover is now facing 'W'.");
      break;
    case "W":
      rover.direction = "S"
      console.log("The rover is now facing 'S'.");
      break;
    case "S":
      rover.direction = "E"
      console.log("The rover is now facing 'E'.");
      break;
    case "E":
      rover.direction = "N"
      console.log("The rover is now facing 'N'.");
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E"
      console.log("The rover is now facing 'E'.");
      break;
    case "E":
      rover.direction = "S"
      console.log("The rover is now facing 'S'.");
      break;
    case "S":
      rover.direction = "W"
      console.log("The rover is now facing 'W'.");
      break;
    case "W":
      rover.direction = "N"
      console.log("The rover is now facing 'N'.");
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  if (rover.x >= 0 && rover.x < 10 && rover.y >=0 && rover.y < 10) {
    switch(rover.direction) {
      case "N":
        rover.y -= 1 
        console.log("The coordinates are now " + rover.x + " and " + rover.y);
        break;
      case "E":
        rover.x += 1
        console.log("The coordinates are now " + rover.x + " and " + rover.y);
        break;
      case "S":
        rover.y += 1
        console.log("The coordinates are now " + rover.x + " and " + rover.y);
        break;
      case "W":
        rover.x -= 1
        console.log("The coordinates are now " + rover.x + " and " + rover.y);
        break;
    }
  } else {
      console.log("Mars Rover cannot access outside of the board!");
    }
}

function moveBackward(rover){
console.log("moveBackward was called");
if (rover.x >= 0 && rover.x < 10 && rover.y >=0 && rover.y < 10) {
  switch(rover.direction) {
    case "N":
      rover.y += 1 
        console.log("The coordinates are now " + rover.x + " and " + rover.y);
      break;
    case "E":
      rover.x -= 1
      console.log("The coordinates are now " + rover.x + " and " + rover.y);
      break;
    case "S":
      rover.y -= 1
      console.log("The coordinates are now " + rover.x + " and " + rover.y);
      break;
    case "W":
      rover.x += 1
      console.log("The coordinates are now " + rover.x + " and " + rover.y);
      break;
    }
} else {
    console.log("Mars Rover cannot access outside of the board!");
  }
}

function command(comm){
    for (let i = 0; i < comm.length; i++){
      switch(comm[i]){
        case "l": // left
          turnLeft(marsRover);
          marsRover.travelLog.push([marsRover.x, marsRover.y])
          break;
        case "r": // right
          turnRight(marsRover);
          marsRover.travelLog.push([marsRover.x, marsRover.y])
          break;
        case "f": // forward
          moveForward(marsRover);
          marsRover.travelLog.push([marsRover.x, marsRover.y])
          break;
        case "b": //backward
          moveBackward(marsRover);
          marsRover.travelLog.push([marsRover.x, marsRover.y])
          break;
          default:
          console.log("Please enter a valid command!")
      }
    }
  console.log("The rover is now facing " + marsRover.direction + ". Coordinates are: " + marsRover.x + " and " + marsRover.y);
  console.log(marsRover.travelLog);
}

command("rfflfffbr");

