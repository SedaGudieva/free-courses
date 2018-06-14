/* Task 2 */
var a=process.argv[2];
var b=process.argv[3];
 
if(a.length != b.length){
    return process.stdout.write( '-1' );
} 

for(var i = 0; i < a.length; i++){
    if(a[0] == b[i]){
        var str =b.substring(i);
        str = str + b.substring(0, i)
        if(~a.indexOf(str)){
            var shift = b.length - i;
            if (shift > i) shift = i;
            return process.stdout.write(String(shift) );
        }else
        str = "";
    }
} process.stdout.write( '-1' );
/* Put your code here */