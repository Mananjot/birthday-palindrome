const birthdate = document.querySelector("#birthdate");
const submitBtn = document.querySelector("#btn-submit");
const result = document.querySelector("#result");

function dateToString(date) {
    var dateArray = date.split("-");
    var dateStr = {
      day: dateArray[2],
      month: dateArray[1],
      year: dateArray[0],
    };
    return dateStr;
}

function generateAllFormats(dateStr){
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy,mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]; 
}

function checkPalindrome(dateStr) {
  var i = 0;
  var j = dateStr.length - 1;
  while (i <= j) {
    if (dateStr[i] != dateStr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

submitBtn.addEventListener("click", () => {
  result.style.display = "block";
  var dateStr = dateToString(birthdate.value);
  var dateAllFormats = generateAllFormats(dateStr);

  var isPalindrome = false;
  for (var i = 0; i < dateAllFormats.length; i++){
      if(checkPalindrome(dateAllFormats[i])){
          isPalindrome = true;
          break;
      }
  }
  console.log(birthdate.value);
  if(isPalindrome){
      result.innerText = "Yay!! your Birthday is palindrome";
  }
  else{
    result.innerText = "Oh!! your Birthday is not palindrome";
  }
});
