/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.category;
  document.getElementById('contractorId').innerText=coaches.identifier.value;
  document.getElementById('companyName').innerText=coaches.provider.legalName;
  document.getElementById('companyName').href=coaches.provider.url;
  document.getElementById('service').innerText=coaches.serviceType[0] + " | " + coaches.serviceType[1] + " | " + coaches.serviceType[2];
  document.getElementById('description').innerText=coaches.description;
  document.getElementById('contactName').innerText=coaches.provider.employee[0].name;
  document.getElementById('jobTitle').innerText=coaches.provider.employee[0].jobTitle;
  document.getElementById('contactNameAlt').innerText=coaches.provider.employee[1].name;
  document.getElementById('jobTitleAlt').innerText=coaches.provider.employee[1].jobTitle;
  document.getElementById('mobile').href="tel:" + coaches.provider.employee[0].telephone;
  document.getElementById('mobile').innerText=coaches.provider.employee[0].telephone;
  document.getElementById('mobileAlt').href="tel:" + coaches.provider.employee[1].telephone;
  document.getElementById('mobileAlt').innerText=coaches.provider.employee[1].telephone;
  document.getElementById('contactEmail').innerText=coaches.provider.employee[0].email;
  document.getElementById('contactEmail').href="mailto:" + coaches.provider.employee[0].email + "?subject=Birtley House%20|%20";
  document.getElementById('contactEmailAlt').innerText=coaches.provider.employee[1].email;
  document.getElementById('contactEmailAlt').href="mailto:" + coaches.provider.employee[1].email + "?subject=Birtley House%20|%20";
  document.getElementById('telephone').href="tel:" + coaches.provider.telephone;
  document.getElementById('telephone').innerText=coaches.provider.telephone;
  document.getElementById('email').innerText=coaches.provider.email;
  document.getElementById('email').href="mailto:" + coaches.provider.email + "?subject=Birtley House%20|%20";
  document.getElementById('termsOfService').innerText=coaches.termsOfService.name;
  document.getElementById('termsOfService').href=coaches.termsOfService.url;

}

dataCouple();
