//this javascript file is to make the team page interactive
//2019-08-05

var softwareBtn = document.getElementById("softwareBtn");
var electricalBtn = document.getElementById("electricalBtn");
var mechanicalBtn = document.getElementById("mechanicalBtn");
var adminBtn = document.getElementById("adminBtn");
var softwarePanel = document.getElementById("softwarePanel");
var mechanicalPanel = document.getElementById("mechanicalPanel");
var electricalPanel = document.getElementById("electricalPanel");
var adminPanel = document.getElementById("adminPanel");

//add event listeners to the team buttons
softwareBtn.addEventListener("click", function()
{
  //highlight correct button
  softwareBtn.classList.add('active');
  mechanicalBtn.classList.remove('active');
  electricalBtn.classList.remove('active');
  adminBtn.classList.remove('active');
  //make this panel visible
  softwarePanel.classList.add('visiblePanel');
  softwarePanel.classList.remove('hiddenPanel');
  //hide the other panels
  mechanicalPanel.classList.remove('visiblePanel');
  mechanicalPanel.classList.add('hiddenPanel');
  electricalPanel.classList.remove('visiblePanel');
  electricalPanel.classList.add('hiddenPanel');
  adminPanel.classList.remove('visiblePanel');
  adminPanel.classList.add('hiddenPanel');
});

electricalBtn.addEventListener("click", function()
{
  //highlight correct button
  softwareBtn.classList.remove('active');
  mechanicalBtn.classList.remove('active');
  electricalBtn.classList.add('active');
  adminBtn.classList.remove('active');
  //make this panel visible
  electricalPanel.classList.add('visiblePanel');
  electricalPanel.classList.remove('hiddenPanel');
  //hide the other panels
  mechanicalPanel.classList.remove('visiblePanel');
  mechanicalPanel.classList.add('hiddenPanel');
  softwarePanel.classList.remove('visiblePanel');
  softwarePanel.classList.add('hiddenPanel');
  adminPanel.classList.remove('visiblePanel');
  adminPanel.classList.add('hiddenPanel');
});

mechanicalBtn.addEventListener("click", function()
{
  //highlight correct button
  softwareBtn.classList.remove('active');
  mechanicalBtn.classList.add('active');
  electricalBtn.classList.remove('active');
  adminBtn.classList.remove('active');
  //make this panel visible
  mechanicalPanel.classList.add('visiblePanel');
  mechanicalPanel.classList.remove('hiddenPanel');
  //hide the other panels
  electricalPanel.classList.remove('visiblePanel');
  electricalPanel.classList.add('hiddenPanel');
  softwarePanel.classList.remove('visiblePanel');
  softwarePanel.classList.add('hiddenPanel');
  adminPanel.classList.remove('visiblePanel');
  adminPanel.classList.add('hiddenPanel');
});

adminBtn.addEventListener("click", function()
{
  //highlight correct button
  softwareBtn.classList.remove('active');
  mechanicalBtn.classList.remove('active');
  electricalBtn.classList.remove('active');
  adminBtn.classList.add('active');
  //make this panel visible
  adminPanel.classList.add('visiblePanel');
  adminPanel.classList.remove('hiddenPanel');
  //hide the other panels
  electricalPanel.classList.remove('visiblePanel');
  electricalPanel.classList.add('hiddenPanel');
  softwarePanel.classList.remove('visiblePanel');
  softwarePanel.classList.add('hiddenPanel');
  mechanicalPanel.classList.remove('visiblePanel');
  mechanicalPanel.classList.add('hiddenPanel');
});