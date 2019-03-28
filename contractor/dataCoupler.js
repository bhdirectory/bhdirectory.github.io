/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.headline;
  document.getElementById('headerTitle').innerText=coaches.headline;
  document.getElementById('contractorId').innerText=coaches.identifier.value;
  document.getElementById('companyName').innerText=coaches.provider.legalName;
  document.getElementById('service').innerText=coaches.serviceType;
  document.getElementById('contactName').innerText=coaches.provider.contactPoint.name;
  document.getElementById('mobile').innerText=coaches.provider.contactPoint.telephone;
  document.getElementById('telephone').innerText=coaches.provider.telephone;
  document.getElementById('website').innerText=coaches.provider.url;
  document.getElementById('email').innerText=coaches.provider.email;
  document.getElementById('jobTitle').innerText=coaches.provider.contactPoint.jobTitle;
}

dataCouple();
