function shout(string){
  return string.toUpperCase();
} 
function whisper(string){
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
  var upperCase = shout(string);
  var lowerCase = whisper(string);
  if (upperCase === string){
    return "YES INDEED!";
  } else if (lowerCase === string){
    return "I can't hear you!";
  } else if (string === "I love you, Grandma."){
    return "I love you, too.";
  } else {
    return;
  }
}

