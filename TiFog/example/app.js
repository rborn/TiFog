require('ti.fog');

var win = Ti.UI.createWindow({
	backgroundColor:'#fff',
	backgroundImage:'greyfloral.png',
	backgroundRepeat:true
});
 

var img = Ti.UI.createImageView({
    height:225,
    width:300,
	top:80,
	image:'one.jpg'
});

var lbl = Ti.UI.createLabel({
	text:"This is a text.",
	color:'easy',
	textAlign:'center',
	top:20,
	height:20
});


win.add(lbl);
win.add(img);


win.open();


var btn_one = Ti.UI.createButton({
	title:'Blur image',
	width:140,
	height:40,
	left:10,
	bottom:20
});


var btn_two = Ti.UI.createButton({
	title:'Blur window',
	width:140,
	height:40,
	right:10,
	bottom:20
});


win.add(btn_one);
win.add(btn_two);




var overlay = Ti.UI.createView({
	backgroundColor:'#eee',
	opacity:0
});

win.add(overlay);







var clear_win =  Ti.UI.createWindow({
	width:200,
	height:80,
	left:-220,
	top:100,
	backgroundColor:'#fff',
	opacity:0.9
});

var clear_lbl = Ti.UI.createLabel({
	text:"I'M FOCUSED",
	font: {
		fontSize:25,
		fontWeight:'bold'
	},
	textAlign:'center',
	color:'#222'
});

clear_win.add(clear_lbl);

clear_win.open();








var image_blurred = false;

btn_one.addEventListener('click', function(){
	img.setBlurred( !image_blurred);
	image_blurred = !image_blurred;
})




var t1 = Ti.UI.create2DMatrix();

t1 = t1.scale(0.95);

var a1 = Titanium.UI.createAnimation();
a1.transform = t1;

var t2 = Ti.UI.create2DMatrix();

t2 = t2.scale(1);

var a2 = Titanium.UI.createAnimation();
a2.transform = t2;



btn_two.addEventListener('click', function(){
	overlay.animate({opacity:0.3});
	win.animate(a1);
	clear_win.animate({left:0});
	win.setBlurred(true);
	btn_two.title =  'wait 3 sec...';
	setTimeout(function(){
		overlay.animate({opacity:0});
		win.animate(a2);
		clear_win.animate({left:-220});
		win.setBlurred(false);
		btn_two.title = 'Blur window';
	},3000);
})
