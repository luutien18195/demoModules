module.exports = {
    string : '',
    
    
    input : function(str){
        string = str;
    },

    invert : function() {
        var result='';
        for(var i = string.length-1;i >= 0;i--)
            {
                result+=string.charAt(i);
            }
        return result;
    },
    camelCase : function(){
        var result = '';
        var prevChar = undefined;
        for (var i = 0; i < string.length; i++){
            var currentChar = string.charAt(i);
            if (i === 0 || prevChar === ' ') {
                result += currentChar.toUpperCase();
            } else {
                result += currentChar;
            }
            prevChar = currentChar;
        }
        return result;
    },
    longestWord : function(){
        var subStr = new Array();      
        var count = 0;
        var temp = 0;
        subStr[count] = '';
        for(var i = 0; i < string.length; i++)
            {             
                if(string.charAt(i) !== ' '){
                    
                    subStr[count] += string.charAt(i);  
                }
                else if (string.charAt(i)=== ' '){
                        if(string.charAt(i+1) !== ' ')
                            {
                                count++;
                                subStr[count] = '';
                            }                       
                }       
            }
        for(var i = 0; i < subStr.length; i++)
            {
                var max_length = subStr[0].length;
                if(subStr[i].length > max_length)
                    {
                        max_length = subStr.length;
                        temp = i;
                    }
            }
        return subStr[temp];
       
    }
    
}