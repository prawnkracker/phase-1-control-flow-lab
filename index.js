function scuberGreetingForFeet(length){
  // Write your code here!
  if (length <= 400) {
    return "This one is on me!"
  } else if (length > 400 && length < 2000) {
    return "That will be twenty bucks."
  } else if (length > 2000 && length <= 2500) {
    return "I will gladly take your thirty bucks."
  } else if (length > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const message = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return message;

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return "Bye.";
      break;
  }
}