function opredelitZnak(){
	var dayBorn = $("#dayBorn").val();
	var mounsBorn = $("#mounsBorn").val();
	dayBorn = parseInt(dayBorn);
	mounsBorn = parseInt(mounsBorn);
	if(mounsBorn == 1){
		if(dayBorn <=21){
			$("#nameZnak").html('Козерог');
			$("#info").html('');
			document.getElementById("znak").src = "img/10.jpg";
		}
		else{
			$("#nameZnak").html('Водолей');
			document.getElementById("znak").src = "img/11.jpg";
		}
	}
	else if(mounsBorn == 2){
		if(dayBorn <=20){
			$("#nameZnak").html('Водолей');
			document.getElementById("znak").src = "img/11.jpg";
		}
		else{
			$("#nameZnak").html('Рыбы');
			document.getElementById("znak").src = "img/12.jpg";
		}
	}
	else if(mounsBorn == 3){
		if(dayBorn <=20){
			$("#nameZnak").html('Рыбы');
			document.getElementById("znak").src = "img/12.jpg";
		}
		else{
			$("#nameZnak").html('Овен');
			document.getElementById("znak").src = "img/1.jpg";
		}
	}
	else if(mounsBorn == 4){
		if(dayBorn <=20){
			$("#nameZnak").html('Овен');
			document.getElementById("znak").src = "img/1.jpg";
		}
		else{
			$("#nameZnak").html('Телец');
			document.getElementById("znak").src = "img/2.jpg";
		}
	}
	else if(mounsBorn == 5){
		if(dayBorn <=20){
			$("#nameZnak").html('Телец');
			document.getElementById("znak").src = "img/2.jpg";
		}
		else{
			$("#nameZnak").html('Близнецы');
			document.getElementById("znak").src = "img/3.jpg";
		}
	}
	else if(mounsBorn == 6){
		if(dayBorn <=21){
			$("#nameZnak").html('Близнецы');
			document.getElementById("znak").src = "img/3.jpg";
		}
		else{
			$("#nameZnak").html('Рак');
			document.getElementById("znak").src = "img/4.jpg";
		}
	}
	else if(mounsBorn == 7){
		if(dayBorn <=22){
			$("#nameZnak").html('Рак');
			document.getElementById("znak").src = "img/4.jpg";
		}
		else{
			$("#nameZnak").html('Лев');
			document.getElementById("znak").src = "img/5.jpg";
		}
	}
	else if(mounsBorn == 8){
		if(dayBorn <=23){
			$("#nameZnak").html('Лев');
			document.getElementById("znak").src = "img/5.jpg";
		}
		else{
			$("#nameZnak").html('Дева');
			document.getElementById("znak").src = "img/6.jpg";
		}
	}
	else if(mounsBorn == 9){
		if(dayBorn <=23){
			$("#nameZnak").html('Дева');
			document.getElementById("znak").src = "img/6.jpg";
		}
		else{
			$("#nameZnak").html('Весы');
			document.getElementById("znak").src = "img/7.jpg";
		}
	}
	else if(mounsBorn == 10){
		if(dayBorn <=23){
			$("#nameZnak").html('Весы');
			document.getElementById("znak").src = "img/7.jpg";
		}
		else{
			$("#nameZnak").html('Скорпион');
			document.getElementById("znak").src = "img/8.jpg";
		}
	}
	else if(mounsBorn == 11){
		if(dayBorn <=22){
			$("#nameZnak").html('Скорпион');
			document.getElementById("znak").src = "img/8.jpg";
		}
		else{
			$("#nameZnak").html('Стрелец');
			document.getElementById("znak").src = "img/9.jpg";
		}
	}
	else if(mounsBorn == 12){
		if(dayBorn <=21){
			$("#nameZnak").html('Стрелец');
			document.getElementById("znak").src = "img/9.jpg";
		}
		else{
			$("#nameZnak").html('Козерог');
			document.getElementById("znak").src = "img/10.jpg";
		}
	}
}