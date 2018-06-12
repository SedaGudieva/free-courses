/* Task 2 */
var a = process.argv[2];
var b = process.argv[3];
var str = []; 
var k = 0; 

if (a.length!=b.length) return process.stdout.write("-1");
if (1>a.length || b.length>10000) return process.stdout.write("-1");

for(var i=0; i<a.length; i++){
    for(var j=0; j<b.length; j++){
        if(a[i]==b[j]){
            k = i-j;
            k = Math.abs(k);
            str.push(k);
            k = 0;
            break;
        }else k=-1;
    } if (k == -1) return process.stdout.write("-1");
}
for(var e=0; e<str.length; e++){
        if(e==0){
            var min=str[e];
            continue;
        } if(min>str[e]){
             var min=str[e];}
    } process.stdout.write('' + min);
/* Put your code here */
