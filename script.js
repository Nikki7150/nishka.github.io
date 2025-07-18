/*Personalized message*/
var displaymessage = document.getElementById("message");
var button = document.getElementById("signup");

if (button) {
  button.addEventListener("click", displaymsg);
}

function displaymsg() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  displaymessage.innerHTML = "Hi " + name + "! Thank you for subscribing to the New Roots newsletter. I am so excited to have you on board! By subscribing to this newsletter, you are agreeing to get emails from New Roots to your email: " + email + ". You will recieve all the details about new events, scholarships, tools, resources and lots of opportunities right in your inbox. You will also get notified when someone new shares their story. I am so happy you decided to join us! Hope these emails help you excel at school. Thank you for your participation!";
}

/*Inspiring stories generator*/
var storylist = [
  "Brenda Alvarez, a migrant student and valedictorian with a 4.68 GPA, earned a scholarship to Stanford for Bioengineering. Her speech honored her culture and migrant background.", 
  "Born into an immigrant famiy, Alejandra Campoverdi became the first in her family to attend college. She studied at USC and Harvard and worked in the Obama White House. Her memoir First Gen champions first-gen students.", 
  "Born in Fiji to Indian parents, Prerna Lal became undocumented in the US but pursued higher education agaisnt great odds. She earned a law degree, became a US citizen, and now advocates for immigrant students and co-authored Unsung America.", 
  "After arriving at age 9 and facing undocumented status, Nadia eventually enrolled in UCSF's Doctor of Physical Therapy program. She now advocates for access to healthcare education for immigrant students.", 
  "A first-gen Salvadoran-American, Daniel from North Carolina, earnt both a high school diploma and an associates degree through a dual-enrollment program. He's headed to Vanderbilt with a paralegal certification and a $50K+ salary potential at 18."
];

var story = document.getElementById("story");
var count = 0;
var storybtn = document.getElementById("storybtn");

if (storybtn) {
  storybtn.addEventListener("click", displaystory);
}

function displaystory() {
  story.innerHTML = storylist[count];
  count++;
  if (count == storylist.length) {
    count = 0;
  }
}
