// This code sets the variables from the User

let name = prompt("Enter your first name.")
let state = prompt("Enter the state you live in (i.e. NE or FL).")
let degrees = prompt("Enter the temperature in Fahrenheit today.")
let message = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]
 
 // This code tells the user what to wear based off of user input using switches

 switch (true) {
  case(degrees <= 32):
    console.log(`${name}, ${message[0]}`)
    break
  case (degrees >= 32 && degrees <= 50 && state == 'NE'):
    console.log(`${name}, ${sentence[1]}`)
    break
 case (degrees >= 32 && degrees <= 50 && state == 'FL'):
    console.log(`${name}, ${message[2]}`)
    break
 case (degrees >= 50 && degrees <= 70):
    console.log(`${name}, ${message[3]}`)
    break
  default:
    console.log(`${name}, have a nice day`)
}