/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('contractorId').innerText=coaches.identifier.value;
  document.getElementById('companyName').innerText=coaches.provider.legalName;
  document.getElementById('service').innerText=coaches.serviceType;
  document.getElementById('description').innerText=coaches.description;
  document.getElementById('contactName').innerText=coaches.provider.employee.name;
  document.getElementById('jobTitle').innerText=coaches.provider.employee.jobTitle;
  document.getElementById('telephone').innerText=coaches.provider.telephone;
  document.getElementById('mobile').innerText=coaches.provider.employee.telephone;
  document.getElementById('website').innerText=coaches.provider.url;
  document.getElementById('email').innerText=coaches.provider.email;

}

dataCouple();
