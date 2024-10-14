function Palindrome(str:string):any{ //intead of using string able to return it
    var longpalindrome="";
    for(let i=0;i<str.length;i++)
        {
        for(let j=i+1;j<=str.length;j++)
        {
            var strr=str.substring(i,j);
            //console.log(strr);
        var reversed="";
        for(let i=strr.length-1;i>=0;i--)
        {
        reversed=reversed+strr.charAt(i);
        }
        if(reversed==strr)
        {
        if(longpalindrome.length<reversed.length)
        {
            longpalindrome=reversed;
        }
        }
}
}
return longpalindrome.length>0?longpalindrome:"Not";
}
console.log(Palindrome("bbaccradar"));