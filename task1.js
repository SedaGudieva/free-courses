/* Task 1 */
var s = process.argv[2];
var arr = [];
if (1 <= s.length <= 10000){
for(var i=0; i<s.length; i++){
    if(s[i]!='р' && s[i]!='к' && s[i]!='н' && s[i]!='Н' && s[i]!='Р' && s[i]!='К'){
        arr.push(s[i]);
    }
} 
var str = arr.join('');
process.stdout.write(str);
}
/* Put your code here */
