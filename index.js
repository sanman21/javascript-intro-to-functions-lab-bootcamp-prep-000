
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  var lowercase = string
  if (lowercase.toLowerCase() === lowercase) {
    console.log("I can't hear you!")
  }
  else{
     console.log("YES INDEED")
  }
}