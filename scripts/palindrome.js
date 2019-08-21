function isPalindrome(str){
    var len=str.length;
    var mid=Math.floor(len/2);// floor gives you the nect large number closest to the midpoint
    for(let i=0;i<mid;i++){
        if(str[i]!==str[len-1-i]){
            return false;
        }
    }  
    return true;  
}

function displayResult(){
    var txtStr=document.querySelector('#textStr').value;//returns value of the string
    console.log(txtStr);
    var answer=document.getElementById('answer');
    debugger;
    var isPalindromeResult=isPalindrome(textStr.value);
    if(isPalindromeResult==true){
        answer.textContent="It is a palindrome";
    }
    else{
        answer.textContent="It is not a palindrome";
    }
}
