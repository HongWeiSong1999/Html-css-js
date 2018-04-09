 			var myCanvas = document.getElementById("myCanvas");
			var context2D = myCanvas.getContext("2d");
			/*设置线宽为20，线条交点为平角，线条终点为圆头*/
			context2D.lineWidth=20;
			context2D.lineJoin="bevel";
			context2D.lineCap="round";
			/*设置阴影：阴影距离水平方向10px，垂直方向10px；模糊级别为5，阴影颜色为黑色，透明度为0.5*/
			context2D.shadowOffsetX=10;
			context2D.shadowOffsetY=15;
			context2D.shadowBlur=5;
			context2D.shadowColor="rgba(0,0,0,0.5)";
			/*画出"H"*/
			context2D.moveTo(50,50);
			context2D.lineTo(50,150);
			context2D.moveTo(125,50);
			context2D.lineTo(125,150);
			context2D.moveTo(50,100);
			context2D.lineTo(125,100);
			/*画出"T"*/
			context2D.moveTo(150,50);
			context2D.lineTo(250,50);
			context2D.moveTo(200,50);
			context2D.lineTo(200,150);
			/*画出"M"*/
			context2D.moveTo(285,150);
			context2D.lineTo(285,50);
			context2D.lineTo(335,150);
			context2D.lineTo(385,50);
			context2D.lineTo(385,150);
			/*画出"L"*/
			context2D.moveTo(425,50);
			context2D.lineTo(425,150);
			context2D.lineTo(500,150);
			/*设置颜色*/
			context2D.strokeStyle="#99ccff";
			context2D.stroke();
	