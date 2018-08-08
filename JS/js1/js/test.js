var num;
num = 'a';
console.log(typeof(num),num);

var num1 = 10;
var num2 = 10;
var sum = num1 + num2;
console.log('sum = ' + sum);

var num5 = 1e309;
console.log(num5);
var num3 = Infinity + 1;
var num4 = NaN;


var str1 = 'disman';
console.log(str1 + '!');
console.log(typeof(str1))


var b = true
var c = false


//var num5 = parseInt(prompt('请输入数字'))
//console.log(num5)
//console.log(typeof(num5))


var num6 = 10;
var num7 = 3;
console.log(parseInt( num6 / num7))

var num8 = 10;
var num9 = 10;
console.log(num8++);
console.log(num8);

console.log(++num9);
console.log(num9);

//var num10 = parseInt(prompt())
//if (num10 % 2 == 0){
//	console.log('偶数')
//}else{
//	console.log('奇数')
//}


console.log(1==1)
console.log(1===1)
console.log(1==='1')


//console.log(1?2:3)


//var num11 = parseInt(prompt());
//switch (num11){
//	case 1:
//		console.log('星期一');
//		break;
//	case 2:
//		console.log('星期二');
//		break;
//	case 3:
//		console.log('星期三');
//		break;
//	case 4:
//		console.log('星期四');
//		break;
//	case 5:
//		console.log('星期五');
//		break;
//	case 6:
//		console.log('星期六');
//		break;
//	case 7:
//		console.log('星期日');
//		break;
//	default:
//		console.log('输入有误！');
//		break;
//}

var num12 = 1;
var sum12 = 0;
while (num12 <= 20){
	sum12 += num12;
	num12++;
}
console.log('sum12 = ' + sum12)