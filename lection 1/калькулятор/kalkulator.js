function mul() {
	var data = document.getElementById("val").value;
	data = parseInt(data);
	var data2 = document.getElementById("val2").value;
	data2 = parseInt(data2);
	var dataDo = document.getElementById("do").value;
	if(dataDo == '+'){
		document.getElementById("result").value =data+data2;
	}
	else if(dataDo == '-'){
		document.getElementById("result").value =data-data2;
	}
	else if(dataDo == '*'){
		document.getElementById("result").value =data*data2;
	}
	else if(dataDo == '/'){
		document.getElementById("result").value =data/data2;
	}
}

