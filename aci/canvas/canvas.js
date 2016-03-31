
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var logo = document.getElementById('logo');

var n,m;
var p = p2 =  Math.PI*3;
var q = q2 =  Math.PI*2;
var left, top, distance;
var length = 0;
var opa = 0;
var lastTime = 0;
var h1 = h2 = h3 = 350;

img();
line_paint_1();
line_paint_2();
animate();


function Text3(){
	if (i3 >= 270) {
		ctx.lineWidth = 6;
		ctx.strokeStyle = '#FCFCFC';
		ctx.beginPath();
		ctx.moveTo(1195,290);
		ctx.lineTo(1195,i3);
		ctx.stroke();
		i3--;
		requestAnimationFrame(Text3);
	}
	else{
		if (h3 <= 390) {
			ctx.fillStyle= '#FCFCFC';
			ctx.font = 'normal normal normal 50px normal Palatino';
			ctx.fillText('2015',1140,250);
			ctx.font = 'normal normal normal 30px normal Palatino';
			ctx.fillText('New Start...',1110,380);
			ctx.fillStyle = '#FF9224';
			ctx.fillRect(1100,h3,200,390-h3);
			h3++;
			requestAnimationFrame(Text3);
		};
	}
}

function Text2(){
	if (i2 >= 270) {
		ctx.lineWidth = 6;
		ctx.strokeStyle = '#FCFCFC';
		ctx.beginPath();
		ctx.moveTo(850,290);
		ctx.lineTo(850,i2);
		ctx.stroke();
		i2--;
		requestAnimationFrame(Text2);
	}
	else{
		if (h2 <= 470) {
			ctx.fillStyle= '#FCFCFC';
			ctx.font = 'normal normal normal 50px normal Palatino';
			ctx.fillText('2004-2015',738,250);
			ctx.font = 'normal normal normal 30px normal Palatino';
			ctx.fillText('网联在不断的发展壮大，',708,380);
			ctx.fillText('培育出无数的大神，',708,420);
			ctx.fillText('比如很会装逼的anqur(CEO)',708,460);
			ctx.fillStyle = '#FF9224';
			ctx.fillRect(700,h2,410,470-h2);
			h2++;
			requestAnimationFrame(Text2);
		}
		else{
			Text3();
		}
	}
}

function Text1(){
	if (i1 >= 270) {
		ctx.lineWidth = 6;
		ctx.strokeStyle = '#FCFCFC';
		ctx.beginPath();
		ctx.moveTo(502,290);
		ctx.lineTo(502,i1);
		ctx.stroke();
		i1--;
		requestAnimationFrame(Text1);
	}
	else{
		if (h1 <= 430) {
		ctx.fillStyle= '#FCFCFC';
		ctx.font = 'normal normal normal 50px normal Palatino';
		ctx.fillText('2004',452,250);
		ctx.font = 'normal normal normal 30px normal Palatino';
		ctx.fillText('暨南人网络联盟',402,380);
		ctx.fillText('正式成立！',402,420);
		ctx.fillStyle = '#FF9224';
		ctx.fillRect(390,h1,230,430-h1);
		h1++;
		requestAnimationFrame(Text1);
		}
		else{
			Text2();
		}
	}
}

function timeline(){
	if (length <= 700) {
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#FCFCFC';
		ctx.fillStyle = '#FCFCFC';
		ctx.strokeRect(500,290,length,40);
		ctx.fillRect(500,290,length,40);
		length = length + 5;
		requestAnimationFrame(timeline);
	}
	else{
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(1200,290);
		ctx.lineTo(1200,330);
		ctx.lineTo(1230,310);
		ctx.closePath();
		ctx.fillStyle = '#FCFCFC';
		ctx.fill();
		i1 = i2 = i3 = 290;
		ctx.font
		Text1();
	}
}

function moveimg(){
	if (left >= 65/(1349/width)) {
		distance = left - 60/(1349/width);
		left = left - distance/20;
		logo.style.left = left;
		requestAnimationFrame(moveimg);
	}
	else{
		timeline();
	}
}

function aj_opacity(){
	if (opa <= 1) {
		logo.style.opacity = opa;
		opa = opa + 0.002;
		requestAnimationFrame(aj_opacity);
	}
}

function reclearline_1(){
	if (n >= -2) {
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(485,250);
	ctx.lineTo(n,250);
	ctx.strokeStyle = '#FF9224';
	ctx.stroke();
	n = n - 3;
	requestAnimationFrame(reclearline_1);
	}
	else{setTimeout("moveimg()",1000);};
}

function reclearline_2(){
	if (m <= 1368) {
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(885,250);
	ctx.lineTo(m,250);
	ctx.strokeStyle = '#FF9224';
	ctx.stroke();
	m = m + 3;
	requestAnimationFrame(reclearline_2);
	};
}

function reline_1(){
	ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.moveTo(485,250);
	ctx.lineTo(n,250);
	ctx.strokeStyle = 'black';
	ctx.stroke();
	n = n - 3;
	if (p2 >= Math.PI) {
		ctx.beginPath();
		ctx.strokeStyle = '#FF9224';
		ctx.lineWidth = 6;
		ctx.arc(683,250,200,p2+Math.PI/200,p2-Math.PI/200,true);
		ctx.stroke();
		p2 = p2 - Math.PI/200;
		requestAnimationFrame(reline_1);
	}
	else{
		n = 485;
		reclearline_1();
	}
}

function reline_2(){
	ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.moveTo(885,250);
	ctx.lineTo(m,250);
	ctx.strokeStyle = 'black';
	ctx.stroke();
	m = m + 3;
	if (q2 >= 0) {
		ctx.beginPath();
		ctx.strokeStyle = '#FF9224';
		ctx.lineWidth = 6;
		ctx.arc(683,250,200,q2+Math.PI/200,q2-Math.PI/200,true);
		ctx.stroke();
		q2 = q2 - Math.PI/200;
		requestAnimationFrame(reline_2);
	}
	else{
		m = 885;
		reclearline_2();
	}
}

function clearline_1(){
	if (n <= 485) {
		ctx.lineWidth = 4;
		ctx.strokeStyle = '#FF9224';
		ctx.beginPath();
		ctx.moveTo(0,250);
		ctx.lineTo(n,250);
		ctx.stroke();
		n = n + 2.5;
		requestAnimationFrame(clearline_1);
	}
	
}

function clearline_2(){
	if (m >= 881) {
		ctx.lineWidth = 4;
		ctx.strokeStyle = '#FF9224';
		ctx.beginPath();
		ctx.moveTo(1366,250);
		ctx.lineTo(m,250);
		ctx.stroke();
		m = m - 2.5;
		requestAnimationFrame(clearline_2);
	}
	
}


function arc_paint_1(){
	if (p >= Math.PI - Math.PI/200) {
		if (n <= 485) {
			ctx.beginPath();
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.arc(683,250,200,Math.PI*3,p,true);
			ctx.stroke();
			p = p - Math.PI/200;
			requestAnimationFrame(arc_paint_1);
		}
		else{
			ctx.beginPath();
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.arc(683,250,200,p2,p,true);
			ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle = '#FF9224';
			ctx.lineWidth = 6;
			ctx.arc(683,250,200,p2+Math.PI/200,p2-Math.PI/200,true);
			ctx.stroke();

			p = p - Math.PI/200;
			p2 = p2 - Math.PI/200;
			requestAnimationFrame(arc_paint_1);
		}
	}
	else{
		n = 483;
		reline_1();
	}
}

function arc_paint_2(){
	if (q >= 0 - Math.PI/200) {
		if (m >= 881) {
			ctx.beginPath();
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.arc(683,250,200,Math.PI*2,q,true);
			ctx.stroke();
			q = q - Math.PI/200;
			requestAnimationFrame(arc_paint_2);
		}
		else{
			ctx.beginPath();
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.arc(683,250,200,q2,q,true);
			ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle = '#FF9224';
			ctx.lineWidth = 6;
			ctx.arc(683,250,200,q2+Math.PI/200,q2-Math.PI/200,true);
			ctx.stroke();

			q = q - Math.PI/200;
			q2 = q2 - Math.PI/200;
			requestAnimationFrame(arc_paint_2);
		}
	}
	else{
		m = 883;
		reline_2();
	}
}


function line_paint_1(){	
	if (n == undefined) {
		n = 0;
		requestAnimationFrame(line_paint_1);
	}
	else if (n <= 483) {
		ctx.lineWidth = 3;
		ctx.beginPath();
		ctx.moveTo(0,250);
		ctx.lineTo(n,250);
		ctx.stroke();
		n = n + 3;
		requestAnimationFrame(line_paint_1);
	}
	else{	
		n = 0;
		arc_paint_1();
		clearline_1();
		aj_opacity();
	};
}

function line_paint_2(){	
	if (m == undefined) {
		m = 1366;
		requestAnimationFrame(line_paint_2);
	}
	else if (m >= 883) {
		ctx.lineWidth = 3;
		ctx.beginPath();
		ctx.moveTo(1366,250);
		ctx.lineTo(m,250);
		ctx.stroke();
		m = m - 3;
		requestAnimationFrame(line_paint_2);	
	}
	else{
		m = 1366;
		arc_paint_2();	
		clearline_2();
	};
}

function img(){
	width = document.body.offsetWidth;
	logo.style.position = "absolute";
	logo.style.height = logo.style.width = 337/(1349/width);
	left = logo.style.left = 515/(1349/width);
	top = logo.style.top = 82/(1349/width);
}

function calculateFps(){
	var now = (+new Date),
		fps = 1000/(now-lastTime);
	lastTime = now;
	return fps;
}

function animate(time){
	ctx.clearRect(0,0,200,150);
	ctx.fillStyle="white";
	ctx.font = '30px Palatino';
	ctx.fillText(calculateFps().toFixed()+'fps',20,50);
	requestAnimationFrame(animate);
}

