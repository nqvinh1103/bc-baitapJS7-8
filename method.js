// Hàm DOM
function domID(id){
    return document.getElementById(id)
}
// Lấy giá trị cho mảng
var numArr = []
function submit(){
    var daySo = domID('daySo').value*1
    numArr.push(daySo)
    domID('output').innerHTML = `Dãy số: ${numArr}`
}
// Bài 1
function tinhTongLogic(){
    var tong =0
    for(var i=0; i<numArr.length; i++){
        if(numArr[i]>0){
        tong += numArr[i]
        }
    }
    return tong
}
// Bài 2
function demSoDuongLogic(){
    var count=0
    for (var i=0; i<numArr.length;i++){
        if(numArr[i]>0){
            count++
        }
    }
    return count
}
// Bài 3
function timSoNhoNhatLogic(){
    var minValue = numArr[0]
    for(var i=0; i<numArr.length;i++){
        if(numArr[i]<minValue){
            minValue = numArr[i]
        }
    }
    return minValue
}
// Bài 4
function timSoDuongNhoNhatLogic(){
    var min = Infinity
    for(var i=0;i<numArr.length;i++){
        if(numArr[i]>0 && numArr[i]<min){
            min = numArr[i]
        }
    }
    return min
}
// Bài 5
function timSoChanCuoiCungLogic(){
    for(var i=numArr.length-1;i>=0;i--){
        if(numArr[i]%2==0){
            return numArr[i]
        }
    }
}
// Bài 6
function doiChoLogic(){
    var viTri1 = domID('viTri1').value*1
    var viTri2 = domID('viTri2').value*1
    var arr = numArr[viTri1]
    numArr[viTri1] = numArr[viTri2]
    numArr[viTri2] = arr
    return numArr
}
// Bài 7
function soSanh(a,b){
    return a-b
}
function sapXepLogic(a,b){
    numArr.sort(soSanh)
    return numArr
}
// Bài 8
function kiemTraSoNguyenTo(num){
    if(num<2){
        return false;
    }
    for(var i=2;i<(num-1);i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
function timSoNguyenToLogic(){
    for (var i=0; i<=numArr.length;i++){
        if(kiemTraSoNguyenTo(numArr[i])){
            return numArr[i]
        }
    }
}
// Bài 9
var newArr = []
function nhapMangMoi(){
    var soMoi = domID('newArr').value*1
    newArr.push(soMoi)
    var mergeArr = numArr.concat(newArr)
    domID('output2').innerHTML = `Dãy số mới: ${mergeArr}`
}
function demSoNguyenLogic(){
    var count =0
    var mergeArr = numArr.concat(newArr)
    for(var i=0;i<mergeArr.length;i++){
        if(Number.isInteger(mergeArr[i])){
            count++
        }
    }
    return count
}
// Bài 10
function demSoDuongLogic(){
    var soDuong = 0
    for(var i=0;i<numArr.length;i++){
        if(numArr[i]>0){
            soDuong++
        }
    }
    return soDuong
}
function demSoAmLogic(){
    var soAm = 0
    for(var i=0;i<numArr.length;i++){
        if(numArr[i]<0){
            soAm++
        }
    }
    return soAm
}
function soSanhDuongAmLogic(){
    var a = demSoDuongLogic()
    var b = demSoAmLogic()
    var ketQua =''
    if(a>b){
        ketQua = 'Số dương > Số âm'
    }
    else if(a<b){
        ketQua = 'Số âm > Số dương'
    }
    else{
        ketQua = 'Số âm = Số dương'
    }
    return ketQua
}