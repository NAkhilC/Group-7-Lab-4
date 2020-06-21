
function Display()
{
    if(document.getElementById("dispdiv").style.display == 'block')
    {
    	document.getElementById("dispdiv").style.display = 'none';
    }
    else
    {
    	document.getElementById("dispdiv").style.display = 'block';
    }
}
var arr = new Array();
window.onload = function() {
  arr.push({"fname":"Eduardo","lname":"Coelho Reis","job":"Professor","salary":"5689","image":"reis.jpeg"},{"fname":"Akhil","lname":"Nallamothu","job":"Developer","salary":"4256","image":"akhil.jpg"},{"fname":"Percy","lname":"Mittagadapu","job":"Associate","salary":"4258","image":"percy.jpg"},{"fname":"Pavan","lname":"Venkata","job":"Sales","salary":"4249","image":"pavan.jpg"})
view_table();

};
 
function insert(){
	var fname=document.getElementById('fname').value;
	var lname=document.getElementById('lname').value;
	var job=document.getElementById('job').value;
	var salary=document.getElementById('salary').value;
	var image=document.getElementById('im').value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
	if(fname===null && lname==="" && job==="" && salary==="")
	{
		alert("One of the field requires your action");
		return false;
	}
    arr.push({fname,lname,job,salary,image}); 
    view_table();
}
function view_table()
{
    var firstn="",lastn="",idi="";
    var table="";
    table=table+'<tr><th>Delete</th><th>First Name</th><th>Last Name</th><th>Job</th><th>Salary</th><th>Image</th></tr>';
    for(i=0;i<arr.length;i++)
    {
      table=table+'<tr id="tdz">';
      table=table+'<td  ><img style="width:20px;height:20px;" src="close.jpg" onClick="Delete('+i+');" ></td>';
      table=table+'<td>'+arr[i]["fname"]+'</td>';
      table=table+'<td>'+arr[i]["lname"]+'</td>';
      table=table+'<td>'+arr[i]["job"]+'</td>';
      table=table+'<td>'+arr[i]["salary"]+'</td>';
      table=table+'<td ><img src="'+arr[i]["image"]+'" id="img1" > </td>';
      table=table+'</tr>';
    }
    if(arr.length<1)
    {
    	table="<h6 style='color:red;'>No content to display. Add data to view</h6>";
    }
    document.getElementById('table1').innerHTML = table;  

}
    

function Delete(e)
{
	arr.splice(e,1);
	view_table();
}
