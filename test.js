//scope: Phạm vi
/*
- Golbal: toàn cầu
-Code block- khối mã: let, const
-Local scope- Hàm: var, function
*/
function logger(){
    var fullname = 'Mai Quoc Huy'
    console.log(logger)  
 }
 logger(fullname) 
 // Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
 function logger(first, last){
     console.log(first, last)
 }
 logger(' Huy', 'Mai')
 logger('Long''Nguyen')
 logger('Y','Nguyeen')