//alert('Chao em nha!') thông báo
// Khai báo biến(statements)
var fullName = 'Mai Quoc Huy';
var age = 20;

alert(fullName);
alert(age);
console.log(fullName);
console.warn(fullName);
console.error(fullName);
//confirm
confirm('Vao day lam gi?');
//prompt
prompt('Vao day lam gi?');

/**set timeout (chạy 1 đoạn code sau 1 thời gian ấn định và chỉ chạy 1 lần)
//setTimeout(function() {
    alert('Mai Quoc Huy')
},1000);
setInterval(chạy liên tục theo một khoảng thời gian ấn định)
setInterval(console() {
    console.log('Day la thong bao')
});
*/

var a = 1;
var b = 2;
if (a < b) {
    alert('Dung');
};
//Toán tử
var a = 1;
var b = 2;

var c = a + b;
console.log(c);
//Toán tử gán 
a += 2
console.log(a);
//string
var firstName = ('Huy');
var lastName = ('Mai');
console.log(firstName +' '+ lastName);
// so sánh
if (a != b) { 
    console.log('Dieu kien dung!');
} else{
    console.log('Dieu kien sai!');
};
//boolean
var isSuccess = a > b;
console.log(isSuccess);  
// if eles
if (isSuccess) {
    console.log('Dieu kien dung!');
}else {
    console.log('Dieu kien sai!');
}
/**
 * &&-and
 * !!-or
 * !not
 */
// kiểu dữ liệu
//number type
var a = 1;
var b = 2;
var c = 1.5;
console.log(typeof a);
// string type
var fullName = 'Mai Huy';
console.log(typeof fullName);
// boolean
var isSuccess = true;
console.log(typeof isSuccess)
//Underfined type
var age
console.log(typeof age);    
//Null
var isNull = null;
console.log(typeof isNull);
// symbol
var id = Symbol('id');
console.log(typeof id);
// function
var myFunction = function(){
    alert('Mai Quoc Huy')
};
// object types(chua duoc nhieu du lieu)
var myObject = {
    name: 'Mai Huy',
    age: 20,
    adress: 'Ha Noi',
    myObject1 : {
        age1: 21,
        name1: 'Y Nguyen',
        adress1: 'Ha nam',
    } 
};
console.log('myObject',myObject);
console.log(typeof myObject);
console.log("age object", myObject.age);
console.log("age1 object1", myObject.myObject1.age1);
var myArray = [// danh stt
    'Mai Huy',
    '20',
    'Ha Noi'
];
console.log('myArray',myArray);
console.log(typeof myArray);
// if esle va phep so sanh
var a = 1;
var b = 2;
if (a < b) {
    console.log('A < B');
} else {
    console.log(' A > B');
};

