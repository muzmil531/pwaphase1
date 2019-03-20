function getfile(file,callback) {
                                            // Creating a name for XMLHTTPRequest
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function() {
    if (xhr.readyState===4 && xhr.status=="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
                                                              // calling the data
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.IntroDetails);  // CALLING FUNCTION
  InfoDetail(data.InfoDetails); // CALLING FUNCTION
  InfoDetails(data.InfoDetails.Education);  // CALLING FUNCTION
  Skills(data.InfoDetails.Skills);  // CALLING FUNCTION
});

                                                            //Getting data to HTML
  var main=document.querySelector('.bood');                      // HTML class names in ()
  var left=document.querySelector('.intro');
  var right=document.querySelector('.bio');

                                                  // FOR EVERY DIVISON CREATE SEPERATE function
function profile(pro) {
  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);

  var NameOfEmployee=document.createElement('h2'); //('h2') tag
  NameOfEmployee.textContent=pro.NameOfEmployee; // second NameOfEmployee is ID in JSON
  left.appendChild(NameOfEmployee); // NameOfEmployee is Variable  (appending child)
  main.appendChild(left);

  var Designation=document.createElement('h3');
  Designation.textContent=pro.Designation;
  left.appendChild(Designation);
  main.appendChild(left);

  var Locality=document.createElement('h4');
  Locality.textContent=pro.Locality;
  left.append(Locality);
  main.append(left);

  var rule=document.createElement('hr');
  rule.textContent="";
  left.append(rule);
  main.append(left);

  var MobileNo=document.createElement('h4');
  MobileNo.textContent=pro.MobileNo;
  left.append(MobileNo);
  main.append(left);

  var EmailID=document.createElement('h4');
  EmailID.textContent=pro.EmailID;
  left.append(EmailID);
  main.append(left);


  var pglink=document.createElement('a');
  pglink.setAttribute('href',"index.html");
  pglink.innerHTML="EMPLOYEE PAGE";
  left.append(pglink);
  main.append(left);

}
function InfoDetail(inf) {
  var Carrierobjectives=document.createElement('h1');
  Carrierobjectives.textContent="Carrier Objectives:";
  right.appendChild(Carrierobjectives);
  main.appendChild(right);

  var Cobjective=document.createElement('h4')
  Cobjective.textContent=inf.carrierobjectives;
  right.append(Cobjective);
  main.append(right);

  var EducationDetails=document.createElement('h1');
  EducationDetails.textContent="Education Details:";
  right.appendChild(EducationDetails);
  main.appendChild(right);

  var rule=document.createElement('hr');
  right.append(rule);
}
function InfoDetails(inf) {
                                                                    // Creating Table
  var tbl=document.createElement('table');
  tbl.textContent=inf.Education;
  let row='';
  row += "<tr><th>S.No</th>"+
  "<th>"+"Degree"+"</th>"+
  "<th>"+"Institute"+"</th>"+
  "<th>"+"PassingYear"+"</th>"+
  "<th>"+"CGPA"+"</th>"+
  "</tr>";
  for(i in inf){
    row += "<tr>"+"<td>"+inf[i].SNo+"</td>"+
    "<td>"+inf[i].Degree+"</td>"+
    "<td>"+inf[i].Institute+"</td>"+
    "<td>"+inf[i].PassingYear+"</td>"+
    "<td>"+inf[i].CGPA +"</td>"+"</tr>";
  }
  tbl.innerHTML=row;
  right.append(tbl);

}
function Skills(l) {
  var head=document.createElement('h1');
  head.textContent="Skills";
  right.append(head);

  var ul=document.createElement('ul');
  right.append(ul);
  for(i in l){
    var li=document.createElement('li');
    li.textContent=l[i].skill;
    ul.append(li);
  }
}
