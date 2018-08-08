var mainScreen = document.getElementById('mainScreen')

//让背景动起来
var jsBg1 = document.getElementById('bg1')
var jsBg2 = document.getElementById('bg2')
var timeBg = setInterval(function(){
	jsBg1.style.top = jsBg1.offsetTop + 1 + "px"
	jsBg2.style.top = jsBg2.offsetTop + 1 + "px"
	if (jsBg1.offsetTop >= 854){
		jsBg1.style.top = "-854px"
	}else if(jsBg2.offsetTop >= 854) {
		jsBg2.style.top = "-854px"
	}
},10)


//飞机动起来
var airplane = document.getElementById('airplane')
airplane.addEventListener('mousedown',function(e){
	var ev = e || window.event
	basex = ev.pageX
	basey = ev.pageY
	
	movex = 0
	movey = 0
	//给主屏幕添加移动时间
	mainScreen.addEventListener('mousemove',function(e){
		var en = e || window.event
		movex = en.pageX - basex
		basex = en.pageX
		movey = en.pageY - basey
		basey = en.pageY
		airplane.style.left = airplane.offsetLeft + movex + "px"
		airplane.style.top = airplane.offsetTop + movey + "px"
	},false)
},false)

//子弹发射
var timerBullent = setInterval(function(){
	//创建子弹
	var bullent = document.createElement('div')
	bullent.className = 'bullent'
	bullent.style.left = airplane.offsetLeft + 82 + "px"
	bullent.style.top = airplane.offsetTop - 40 + "px"
	mainScreen.appendChild(bullent)
	//让子弹飞
	var timerBullentFly = setInterval(function(){
		bullent.style.top = bullent.offsetTop - 5 +"px"
		if (bullent.offsetTop <= -20){
			clearInterval(timerBullentFly)
			mainScreen.removeChild(bullent)
		}
	},20)
	bullent.timer = timerBullentFly
},500)

//敌人下落
//随机数
function randomNum (min,max){
	return parseInt(Math.random() * (max - min) + min);
}
var timertank = setInterval(function(){
	//创建敌人
	var tank = document.createElement('div')
	tank.className = 'tank'
	tank.style.left = randomNum(0,480) + "px"
	tank.style.top = "0 px"
	mainScreen.appendChild(tank)
	//敌人消失
	var timerTankFly = setInterval(function(){
		tank.style.top = tank.offsetTop + 10 +"px"
		if (tank.offsetTop >= 854){
			clearInterval(timerTankFly)
			mainScreen.removeChild(tank)
		}
	},20)
	tank.timer = timerTankFly
},500)

var timerPZJC = setInterval(function(){
	var allTanks = document.getElementsByClassName('tank');
	var allBullents = document.getElementsByClassName('bullent')
	for(var i = 0;i < allBullents.length;i++){
		for(var j = 0;j < allTanks.length;j++){
			var b = allBullents[i]
			var t = allTanks[j]
			
			if (pzjcFunc(b,t)){
				clearInterval(b.timer)
				clearInterval(t.timer)
				mainScreen.removeChild(b)
				mainScreen.removeChild(t)
				break
			}
		}
	}
},200)
//碰撞检测
function pzjcFunc(obj1,obj2){
	var obj1Left = obj1.offsetLeft;
	var obj1Width = obj1Left + obj1.offsetWidth;
	var obj1Top = obj1.offsetTop;
	var obj1Height = obj1Top + obj1.offsetHeight;
	
	var obj2Left = obj2.offsetLeft;
	var obj2Width = obj2Left + obj2.offsetWidth;
	var obj2Top = obj2.offsetTop;
	var obj2Height = obj2Top + obj2.offsetHeight;
	
	if (!(obj1Left > obj2Width) || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top){
		return true
	}else{
		return false
	}
}
