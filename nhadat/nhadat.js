//http://www.nhadatyeuthuong.com/
		type='guess/nhadat/nhadat.js';
		current=''+window.location.origin+' - '+ type +' '
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://vanphongphamnhatminh.com/namcuong/receive_blogspot/index.php?url=" + current, true);
		xmlhttp.send();
