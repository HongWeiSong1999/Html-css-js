 			var myCanvas = document.getElementById("myCanvas");
			var context2D = myCanvas.getContext("2d");
			/*�����߿�Ϊ20����������Ϊƽ�ǣ������յ�ΪԲͷ*/
			context2D.lineWidth=20;
			context2D.lineJoin="bevel";
			context2D.lineCap="round";
			/*������Ӱ����Ӱ����ˮƽ����10px����ֱ����10px��ģ������Ϊ5����Ӱ��ɫΪ��ɫ��͸����Ϊ0.5*/
			context2D.shadowOffsetX=10;
			context2D.shadowOffsetY=15;
			context2D.shadowBlur=5;
			context2D.shadowColor="rgba(0,0,0,0.5)";
			/*����"H"*/
			context2D.moveTo(50,50);
			context2D.lineTo(50,150);
			context2D.moveTo(125,50);
			context2D.lineTo(125,150);
			context2D.moveTo(50,100);
			context2D.lineTo(125,100);
			/*����"T"*/
			context2D.moveTo(150,50);
			context2D.lineTo(250,50);
			context2D.moveTo(200,50);
			context2D.lineTo(200,150);
			/*����"M"*/
			context2D.moveTo(285,150);
			context2D.lineTo(285,50);
			context2D.lineTo(335,150);
			context2D.lineTo(385,50);
			context2D.lineTo(385,150);
			/*����"L"*/
			context2D.moveTo(425,50);
			context2D.lineTo(425,150);
			context2D.lineTo(500,150);
			/*������ɫ*/
			context2D.strokeStyle="#99ccff";
			context2D.stroke();
	