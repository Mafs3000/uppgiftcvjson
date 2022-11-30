// Get the form and file field
let form = document.querySelector('#upload');
let file = document.querySelector('#file');

/**
 * Log the uploaded file to the console
 * @param {event} Event The file loaded event
 */
function logFile (event) {
  let str = event.target.result;
  let json = JSON.parse(str);
  console.log('string', str);
  console.log('json', json);
}

/**
 * Handle submit events
 * @param  {Event} event The event object
 */
function handleSubmit (event) {

  // Stop the form from reloading the page
  event.preventDefault();

  // If there's no file, do nothing
  if (!file.value.length) return;

  // Create a new FileReader() object
  let reader = new FileReader();

  // Setup the callback event to run when the file is read
  reader.onload = logFile;

  // Read the file
  reader.readAsText(file.files[0]);

}

// Listen for submit events
form.addEventListener('submit', handleSubmit);

//fetch('./resume.json')
//  .then(response => response.json())
//  .then(data => console.log(data))
//  .catch(error => console.log(error));


//fetch("resume.json")

//.then(function(response){
//    return response.json();
//})
//.then(function(resumes){
//    let placeholder = document.querySelector("#data-output");
//    let out ="";
//    for(let resume of resumes){
       
//    }
//    placeholder.innerHTML = out;
//})




//$(document).ready(function() {
    //$("#getdata").on("click", function(){

        //$.getJSON("/resume.json", function(json) {
        //$(".data").html(JSON.stringify(json));

        //var htm = "";
        //json.forEach(function(val) {
          //  var keys = Object.keys(val);
        //    htm += "<div class = 'educations'>"

            //keys.forEach(function(key) {
          //      htm += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        //    });
         
         //   htm += "</div><br>"
       // });
     //   $(".data").html(htm);
   //     });
 //   });
//});




// const getInfo = async () => {

 //   const request = new Request('resume.json');
//    const response = await fetch(request);
//    const cvObj = await response.json();
    
//    return cvObj; 
//}

//const populateCv = (cvObj) => {

//    let employmentHtml = ``;

//    cvObj.employment.forEach(element => {

//        const listItem = `
//        <li>
//            <h4>${element.heading}</h4>
//            <p>
//                <span class="job-title">${element.jobTitle}</span>
//                <span class="bold-text">${element.location}</span><br>
//                ${element.text}
//            </p>
//        </li>`;

//        employmentHtml += listItem;

//    });

//document.getElementById('employmentList').innerHTML = employmentHtml;

//    let educationHtml = ``;p 

//    cvObj.education.forEach(element => {

//        const listItem = `<li>${element}</li>`;
//        educationHtml += listItem;
//    });

//    document.getElementById('educationList').innerHTML = educationHtml;

//}