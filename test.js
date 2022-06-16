/*
Scope: Pham vi
- Golbal- khoi ma : let, const
-Local scope: var, function

*/
var fullName = 'Mai Quoc Huy'
function logger(){
    var fullName = ' Mai Quoc Huy'
    console.log(logger);
};
logger(fullName)
function logger( first, last){
    console.log(first,last)
};
logger('Huy','Mai');
logger('Y','Nguyen');
logger('Long','Nguyen');
/*
Vong lap - loops
1.for: Lap voi dieu kien dung
2.for/in : Lap qua key cua doi tuong
3.for/off: Lap qua value cua doi tuong
4.while: Lap khi dieu kien dung
5.do/while: Lap lai 1 lan, sau do lap lai dieu kien dung
*/
//for
myArray = [
    ' Mai Quoc Huy',
    ' Nguyen Phi Long',
    ' Nguyen Duc Y',
    ' Tran Thuy Trang'
];
var arrayLength = myArray.length
for ( var i = 0; i<arrayLength; i++){
    console.log(myArray[i])
};
//for in   
var string = ' Mai Quoc Huy';
var languages = 'Mai Quoc Huy';
for ( var key in languages){
    console.log(languages[key])
};
// for of
var myInfo = {
    name :'Mai Huy',
    age: '20',
    address: ' Ha Noi'
};
for ( var value of Object.keys(myInfo)){
    console.log(myInfo[value])
};
//while
var myArray = [
    'He he',
    'Hi hi'
];
var i = 0; 
while (i< myArray.length){
    console.log(myArray[i]); i++

};
//do/while
var i=0;
var isSuccess = false
do {
    i++;
    console.log(i);
    if (true) {
        isSuccess =true;

    }
} while (!isSuccess && i<3);
// So sanh for va while
// for va while van chay nhanh hon
// khi it phan tu thi for se chay nhanh hon while 
// conditions: dieu kien
var a =1 ;
var b =2 ;
if ( a<b){
    console.log('A<B')
} else{
    console.log('A>B')
};
//functions
console.log(sum(82,91))
function sum(a,b){
    return a+b
};
// statements: Khai bao bien
var fullName = 'Mai Quoc Huy';
var age = ' 20';
console.log(fullName);
console.log(age);
console.warn(fullName);
console.error(fullName);
alert(fullName);
alert(age);
confirm('Vao day lam gi?');
prompt('Chao em nha?');
setTimeout(function() { // thoi gian chay cho 1 doan code chay 1 lan duy nhat
    alert('Mai Quoc Huy')
    
},1000);
//setInterval(console()){// thoi gian chay cho 1 doan code cho 1 thoi gian nhat dinh va chay
    //console.log('Day la thong bao')
//}
//variables- operators : toan tu
var a = 2;
var b = 3;
if ( a<b ) {
    console.log(' a < b');  
};
// toan tu 
var a = 4;
var b = 5;
var c = a*b;
console.log(c );
//toan tu gan
a += 2
console.log(a);
// string
var firstName = ' Mai';
var lastName = ' Huy';
console.log( firstName, lastName);
// so sanh
if ( a!=b){
    console.log('Dung');
}else{
    console.log('Sai')
};
//date types
// boolean
var a = 10;
var b = 12;
var isSuccess = a > b;
console.log(isSuccess);
//number types
var a = 11;
var b = 13;
var c = c;
console.log( typeof c);// number
// string type
var fullName = ' Nguyen Phi Long';
console.log(typeof fullName);// string
// underfineds typeof
var age = ' 22'
console.log( typeof age);// string
var isNull = null
console.log( typeof isNull);// object
//symbol
var id = Symbol('id')
console.log(typeof id);// symbol
var myFunction = function(){
    alert = 'Huy dayyyy'

}
console.log(typeof myFunction)// function
// object ( chua duoc nhieu du lieu)
var myObject = {// hien thi hang ngang
    name : ' Nguyen Duc Y',
    age : ' 20',
    address: 'Ha Noi',
    myObject2 : {
        name: 'Nguyen Phi Long',
        age:'20',
        address:'Vinh Phuc'

    }
};
console.log('myObject', myObject);
console.log('myObject',myObject.myObject2);
console.log(typeof myObject);// object
var myArray = [
    ' Mai Huy',
    '20',
    ' Ha Nam'

];
console.log('myArray', myArray);
console.log(typeof myArray)// object
/* var, let, const
code thuần :var
babel: const, let
Khi định nghĩa và không gán lại cho biến đó : const
khi cần gán lại giá trị cho biến : let
var,let, const scope   
let, const khi {}, if else, loop,...    
let, const không hỗ trợ hosting 
*/
/*
 So sánh null && underfined
Underfined là không xác định, khi khai báo một biến mà chưa gán giá trị cho nó thì giá trị của biến đó là underfined
Null là rỗng, sử dụng để gán một biến đại diện cho không có giá trị

*/
// Đệ quy : 1 hàm tự gọi lại chính nó
// Tính giai thừa N! theo đệ quy
    function  tinhGiaithua(n) {
        if (n > 0) {
            return n * tinhGiaithua(n - 1);
        } else {
            return 1;
        }
    }
console.log(tinhGiaithua(3));
// fibonacci : số tiếp theo bằng tổng 2 số trước 
function fibonacci( n) {
    f0 = 0,
    f1 = 1,
    fn = 1
    if (n < 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};
console.log(fibonacci(5));










