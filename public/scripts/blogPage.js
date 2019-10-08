//this javascript file is to make the blog page interactive
//2019-08-25

var newsBtn = document.getElementById("blogsBtn");
var launchBtn = document.getElementById("missionsBtn");
var newsPanel = document.getElementById("blogsPanel");
var launchPanel = document.getElementById("missionsPanel");

//add event listeners to the team buttons
newsBtn.addEventListener("click", function()
{
  //highlight correct button
  newsBtn.classList.add('active');
  launchBtn.classList.remove('active');
  //make this panel visible
  newsPanel.classList.add('visiblePanel');
  newsPanel.classList.remove('hiddenPanel');
  //hide the other panels
  launchPanel.classList.remove('visiblePanel');
  launchPanel.classList.add('hiddenPanel');
});

launchBtn.addEventListener("click", function()
{
  //highlight correct button
  launchBtn.classList.add('active');
  newsBtn.classList.remove('active');
  //make this panel visible
  launchPanel.classList.add('visiblePanel');
  launchPanel.classList.remove('hiddenPanel');
  //hide the other panels
  newsPanel.classList.remove('visiblePanel');
  newsPanel.classList.add('hiddenPanel');
});