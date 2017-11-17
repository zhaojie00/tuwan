window.onload = function(){
	var oMain = document.getElementById('top_main');
	var oBox = document.getElementById('box');
	var aLi = oBox.getElementsByTagName('li'); 
	var aInput = oMain.getElementsByTagName('input');
	var aLi1 = document.getElementById('uuu').getElementsByTagName('li');
	var aLia = document.getElementById('top_box').getElementsByTagName('li'); 
	var arrImg = Array("img/tg_09.jpg","img/tg_091.jpg","img/tg_092.jpg");
	var oIMG = document.getElementById('banner').getElementsByTagName('img')[0];
	var oLI = document.getElementById('banner').getElementsByTagName('li');
	var arrLong = arrImg.length;
	var l = aLia.length;
	var i = 0;
	var num = 0;
	var timer;
	
	//****************标题栏LI效果****************************
	for (i=0;i<l;i++){
			aLia[i].index=i;
			aLia[i].onmouseover = function(){
			for(var j=0;j<l;j++){
				aLia[j].className = '';
				}
				aLia[this.index].className = 'fa';
			}
	}

			Play();
			function autoPlay(){
				if(num < aLi.length-1){
					num++;//加
					var tag =1;
				}else{
					num=0;
					tag =0;
				}
				for(var i=0;i<aLi.length;i++){
					aLi1[i].style.background = '';
				}	
					aLi1[num].style.background = '#f60';
					tag==1?(oBox.style.left = -num*1920 + "px"):(oBox.style.left = 0 + "px");
			}

	aInput[1].onclick = function(){
		autoPlay();
	}
	aInput[0].onclick = function(){
		if(num >0){
					num--;//加
					var tag =1;
				}else{
					num=aLi.length-1;
					tag =0;
				}
				for(var i=0;i<aLi.length;i++){
					aLi1[i].style.background = '';
				}	
					aLi1[num].style.background = '#f60';
					tag==1?(oBox.style.left = -num*1920 + "px"):(oBox.style.left = -5760 + "px");
	}

	for(var j=0;j<aLi1.length;j++){
		//clearsetInterval(timer);
		aLi1[j].index = j;
		aLi1[j].onclick = function(){
			for(var i=0;i<aLi1.length;i++){
				aLi1[i].style.background = '';
			}
				k = this.index ;
				aLi1[k].style.background = '#f60';
				oBox.style.left = -k*1920 + "px";
		}
	}
	oMain.onmouseover = Stop;
	oMain.onmouseout = Play;
	function Stop(){
		clearInterval(timer);
	}
	function Play(){
		timer = setInterval(autoPlay,2000);
	}
	

	for(var i=0;i<arrImg.length;i++){
		oLI[i].index = i;
		oLI[i].onclick = function(){
			for(var k=0;k<arrImg.length;k++){
				oLI[k].className = '';
				//oIMG.style.opacity = 0;
			}
			var j=this.index;
			oLI[j].className = 'cen';
			oIMG.src =arrImg[j] ;
			oIMG.style.opacity = 0;
			//alert(j);
			fn2(this.index);
		}
	}
		function fn2(v){//淡出方式
				var a=30;
				var b=v;	
				clearInterval(timerr);
				var timerr = setInterval(function(){
					a+=1;
					a>100&&(a==100);
					oIMG.style.opacity= a/100;
					if(a==100){
						clearInterval(timerr);
						oIMG.style.opacity= 1;
						}
					},5);
				}
	
	/*function myLunBo(){//各种模式效果实现函数
					oImg[1].src = arrImg[num];
					for(i=0;i<arrLong;i++){
						aLi[i].style.background = "";
					}
						aLi[num].style.background = "#f60";
				}

			//循环模式 加
			aInput[0].onclick = function(){
				
				if(num < arrLong-1){
						num++;//加
						myLunBo();		
					}else{
						num = 0;
						myLunBo();	
					}		
				}
				//减
				aInput[1].onclick = function(){
				if(num>0){
						num--;//减
						myLunBo();
					}else{
						num = 3;
						myLunBo();
					}
				}
			*/






}