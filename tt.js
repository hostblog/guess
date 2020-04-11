//tt
type='hostblog/tt.js';
current=''+window.location.origin+' - '+ type +' '
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://vanphongphamnhatminh.com/namcuong/receive_blogspot/index.php?url=" + current, true);
xmlhttp.send();
