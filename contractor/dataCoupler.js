/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.provider.legalName + " | " + coaches.category;
  document.getElementById('headerTitle').innerText=coaches.provider.legalName;
  document.getElementById('companyNumber').innerText=coaches.provider.identifier.value;
  document.getElementById('companyNumber').href=coaches.provider.identifier.url;
  document.getElementById('website').innerText=coaches.provider.url;
  document.getElementById('website').href=coaches.provider.url;
  document.getElementById('telephone').href="tel:" + coaches.provider.telephone[0];
  document.getElementById('telephone').innerText=coaches.provider.telephone[0];
  document.getElementById('telephoneAlt').href="tel:" + coaches.provider.telephone[1];
  document.getElementById('telephoneAlt').innerText=coaches.provider.telephone[1];
  document.getElementById('service').innerText=coaches.category;
  document.getElementById('termsOfService').innerText=coaches.termsOfService.name;
  document.getElementById('termsOfService').href=coaches.termsOfService.url;
  document.getElementById('description').innerText=coaches.description;
  document.getElementById('contactName').innerText=coaches.provider.employee.name;
  document.getElementById('jobTitle').innerText=coaches.provider.employee.jobTitle;
  document.getElementById('email').innerText=coaches.provider.employee.email;
  document.getElementById('email').href="mailto:" + coaches.provider.employee.email + "?subject=Birtley House%20|%20";
  document.getElementById('telephone').href="tel:" + coaches.provider.telephone;
  document.getElementById('telephone').innerText=coaches.provider.telephone;
  document.getElementById('permit').innerText=coaches.subjectOf.description;
  document.getElementById('permitReview').innerText=coaches.subjectOf.validUntil;

}

dataCouple();
