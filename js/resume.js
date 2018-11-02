var eduI = 1;
var expI = 1;
var sklI = 1;
var othI = 1;
var imgFile;
var Tfile;

window.onload = function fload(){
	var eduBtn = document.getElementById('eduBtn');
	var expBtn = document.getElementById('expBtn');
	var sklBtn = document.getElementById('SkillBtn');
	var othBtn = document.getElementById('othBtn');
	var submitBtn = document.getElementById('submitBtn');
	var state = document.getElementById('status');
	var profile = document.getElementsByName("profile")[0];
	var doc;
	
	
		
	profile.onchange = function(e){
		e.preventDefault();

		var file = profile.files[0], reader = new FileReader();
		Tfile = file;
		reader.onload = function(event){
			var img = new Image();
			img.src = event.target.result;
			if (img.width > 350){
				img.width = 350;
			}
			imgFile = img;

		};
		reader.readAsDataURL(file);
	}
	

	submitBtn.onclick =function submit(){
		doc = document.body.innerHTML;
		var Fname = document.getElementsByName("FName")[0].value;
		var Mname = document.getElementsByName("MName")[0].value;
		var Lname = document.getElementsByName("LName")[0].value;
		document.body.style.backgroundColor = "#e0ffff";
		if(Mname == ""){
			name = Fname +" "+Lname;
		}
		var name =  Fname+" "+ Mname +" "+Lname;  
		var hp = document.getElementsByName("hp")[0].value;
		var tel = document.getElementsByName("tel")[0].value;
		var mail = document.getElementsByName("email")[0].value;
		var goal = document.getElementsByName("goal")[0].value;

		

		var eduArr = [];
		for(var i=0;i<eduI;i++){
			eduArr[i] = new Array();
			eduArr[i].push(document.getElementsByName("school"+i)[0].value);
			eduArr[i].push(document.getElementsByName("major"+i)[0].value);
			eduArr[i].push(document.getElementsByName("degree"+i)[0].value);
			eduArr[i].push(document.getElementsByName("Sduration"+i)[0].value);
		}

		var expArr = [];
		for(var i=0;i<expI;i++){
			expArr[i] = new Array();
			expArr[i].push(document.getElementsByName("organization"+i)[0].value);
			expArr[i].push(document.getElementsByName("duties"+i)[0].value);
			expArr[i].push(document.getElementsByName("Eduration"+i)[0].value);
		}

		var sklArr = [];
		for(var i=0;i<sklI;i++){
			sklArr[i] = new Array();
			sklArr[i].push(document.getElementsByName("lang"+i)[0].value);
			sklArr[i].push(document.getElementsByName("lev"+i)[0].value);
		}

		var othArr = [];
		for(var i=0;i<othI;i++){
			othArr[i] = new Array();
			othArr[i].push(document.getElementsByName("oth"+i)[0].value);
		}

		document.body.innerHTML = '<div style="margin:25px;padding-bottom:20px;border:3px solid #b0e0e6;padding-left: 5px"><div id="holder"></div><div id="Rname"><h3 style= "border-bottom:3px solid #87ceeb;padding-bottom:3px">Name</h3></div><div ><h3 style= "border-bottom:3px solid #87ceeb;padding-bottom:3px">Contact</h3><div id="Rhp">H.P. :</div><div id="Rtel">TEL  :</div><div id="Rmail">E-mail :</div></div> <div id = Rgoal><h3 style= "border-bottom:3px solid #87ceeb;padding-bottom:3px">Career Goal</h3></div>	<div id = Redu><h3 style= "border-bottom:3px solid #87ceeb;padding-bottom:3px">Education</h3>	</div><div id = "Rexp"><h3 style= "border-bottom:3px solid #87ceeb;padding-bottom:3px">Experience</h3>	</div><div id = "Rskl"></div><div><h3>Others</h3><ol style="padding-left: 25px" id = Roth></ol></div></div><input type="text" name="fileName" placeholder="write file name here"><button id = "saveBtn">Save</button><button id = "cancelBtn">Cancel</button>'
		if(typeof(imgFile)!=="undefined"){
			document.getElementById("holder").innerHTML = '';
			document.getElementById("holder").appendChild(imgFile);
		}
		var Rname = document.getElementById("Rname");
		Rname.innerHTML += name;
		
		document.getElementById("Rhp").innerHTML += hp;
		document.getElementById("Rtel").innerHTML += tel;
		document.getElementById("Rmail").innerHTML += mail;

		document.getElementById("Rgoal").innerHTML += goal;



		for (var i = 0; i < eduI; i++) {
			var Redu =document.getElementById("Redu");
			Redu.innerHTML += '<div id="Rsch0">School : '+eduArr[i][0]+'</div><div id="Rmaj0">Major : '+eduArr[i][1]+'</div><div id="Rdeg0">Degree : '+eduArr[i][2]+'</div><div id="RSdur0">Duration : '+eduArr[i][3]+'</div>';
			if(i!=eduI-1){Redu.innerHTML+='<br>'};
		}
		for (var i = 0; i < expI; i++) {
			var Rexp =document.getElementById("Rexp");
			Rexp.innerHTML += '<div id="Rorg'+i+'">Organization : '+expArr[i][0]+'</div><div id="Rdut'+i+'">Duties : '+expArr[i][1]+'</div><div id="REdur'+i+'">Duration : '+expArr[i][2]+'</div><br>';
			if(i!=expI-1){Redu.innerHTML+='<br>'};
		}
		var Rskl =document.getElementById("Rskl");
		Rskl.innerHTML ='<table><tbody id= "Rtable"><tr><td style="width:180px"><h3 style="margin:0">Language / Skills</h3></td><td><h3 style="margin:0">Level</h3></td></tr></tbody></table>';
		var Rtable = document.getElementById("Rtable");
		for (var i = 0; i < sklI; i++) {
			var sklRow = Rtable.insertRow(Rtable.rows.length);
			sklRow.insertCell(0).innerHTML=sklArr[i][0];
			sklRow.insertCell(1).innerHTML=sklArr[i][1];
		}
		for (var i = 0; i < othI; i++) {
			var Roth = document.getElementById("Roth");
			var li = document.createElement('li');
			li.innerHTML = othArr[i][0];
			Roth.appendChild(li);
		}
		
		//save 버튼

		var saveBtn = document.getElementById("saveBtn");
		saveBtn.onclick = function save(){
			cancelBtn.remove();
			saveBtn.remove();
			var fileName = "download"

			var htmlContent = [document.documentElement.innerHTML];
			var bl = new Blob(htmlContent, {type: "text/html"});
	  		var a = document.createElement("a");
	  		a.href = URL.createObjectURL(bl);
	  		if(document.getElementsByName("fileName")[0].value!=""){
	  			var fn = document.getElementsByName("fileName")[0]
	  			fileName = fn.value;
	  		}
	  		fn.remove();
	  		a.download = fileName + ".html";

			a.hidden = true;
			document.body.appendChild(a);
			a.innerHTML = "";
			a.click();
		};




		var cancelBtn = document.getElementById("cancelBtn");
		cancelBtn.onclick = function cancel(){
			document.body.style.backgroundColor = "#ffffff";
			document.body.innerHTML = doc;
			document.getElementsByName("FName")[0].value = Fname;
			document.getElementsByName("MName")[0].value = Mname;
			document.getElementsByName("LName")[0].value = Lname;
			document.getElementsByName("hp")[0].value = hp;
			document.getElementsByName("tel")[0].value = tel;
			document.getElementsByName("email")[0].value = mail;
			document.getElementsByName("goal")[0].value = goal;
			document.getElementsByName("profile")[0].files[0] = Tfile;
			for(var i=0;i<eduI;i++){
				document.getElementsByName("school"+i)[0].value = eduArr[i][0];
				document.getElementsByName("major"+i)[0].value = eduArr[i][1];
				document.getElementsByName("degree"+i)[0].value = eduArr[i][2];
				document.getElementsByName("Sduration"+i)[0].value = eduArr[i][3];
			}
			for(var i=0;i<expI;i++){
				document.getElementsByName("organization"+i)[0].value = expArr[i][0];
				document.getElementsByName("duties"+i)[0].value = expArr[i][1];
				document.getElementsByName("Eduration"+i)[0].value = expArr[i][2];
			}
			for(var i=0;i<sklI;i++){
				document.getElementsByName("lang"+i)[0].value = sklArr[i][0];
				document.getElementsByName("lev"+i)[0].value = sklArr[i][1];
			}
			for(var i=0;i<othI;i++){
				document.getElementsByName("oth"+i)[0].value = othArr[i][0];
			}
			

			fload();
		}
		
	};


	othBtn.onclick = function addOth(){
		var othLi = document.getElementById("othLi");
		var li = document.createElement('li');
		li.innerHTML = '&nbsp;&nbsp;<input type="text" name="oth'+othI+'">';
		othLi.appendChild(li);
		othI++;
	};

	sklBtn.onclick = function addSkl(){
		var sklTable = document.getElementById('skillT');
		
		var sklRow1 = sklTable.insertRow(sklTable.rows.length);
		sklRow1.insertCell(0).innerHTML = '&nbsp;&nbsp;<input type="text" name="lang'+sklI+'">';
		sklRow1.insertCell(1).innerHTML = '&nbsp;&nbsp;<input type="text" name="lev'+sklI+'">';
		sklI++; 
	};


	expBtn.onclick = function addExp(){
		
		var expTable = document.getElementById('expT');
		
		var expRow1 = expTable.insertRow(expTable.rows.length);
		expRow1.insertCell(0).innerHTML = '&nbsp;&nbsp;Organization';
		expRow1.insertCell(1).innerHTML = '&nbsp;&nbsp;<input type="text" name="organization'+expI+'">';
		var expRow2 = expTable.insertRow(expTable.rows.length);
		expRow2.insertCell(0).innerHTML = '&nbsp;&nbsp;Duties';
		expRow2.insertCell(1).innerHTML = '&nbsp;&nbsp;<input type="text" name="duties'+expI+'">';
		var expRow3 = expTable.insertRow(expTable.rows.length);
		expRow3.insertCell(0).innerHTML = '&nbsp;&nbsp;Degree';
		expRow3.insertCell(1).innerHTML = '&nbsp;&nbsp;<input type="text" name="Eduration'+expI+'">';

		expTable.insertRow(expTable.rows.length);
		expTable.insertRow(expTable.rows.length);
		expTable.insertRow(expTable.rows.length);
		expTable.insertRow(expTable.rows.length);
		expI++;		
	};

	eduBtn.onclick = function addEdu(){
		
		var eduTable = document.getElementById('eduT');
		
		var eduRow1 = eduTable.insertRow(eduTable.rows.length);
		eduRow1.insertCell(0).innerHTML = '&nbsp;&nbsp;School';
		eduRow1.insertCell(1).innerHTML = '&nbsp;&nbsp;<input type="text" name="school'+eduI+'">';
		var eduRow2 = eduTable.insertRow(eduTable.rows.length);
		eduRow2.insertCell(0).innerHTML = '&nbsp;&nbsp;Major';
		eduRow2.insertCell(1).innerHTML = '&nbsp;&nbsp;<input type="text" name="major'+eduI+'">';
		var eduRow3 = eduTable.insertRow(eduTable.rows.length);
		eduRow3.insertCell(0).innerHTML = '&nbsp;&nbsp;Degree';
		eduRow3.insertCell(1).innerHTML = '&nbsp;&nbsp;<input type="text" name="degree'+eduI+'">';
		var eduRow4 = eduTable.insertRow(eduTable.rows.length);
		eduRow4.insertCell(0).innerHTML = '&nbsp;&nbsp;Duration';
		eduRow4.insertCell(1).innerHTML = '&nbsp;&nbsp;<input type="text" name="Sduration'+eduI+'">';
		eduTable.insertRow(eduTable.rows.length);
		eduTable.insertRow(eduTable.rows.length);
		eduTable.insertRow(eduTable.rows.length);
		eduTable.insertRow(eduTable.rows.length);
		eduI++;		
	};
}