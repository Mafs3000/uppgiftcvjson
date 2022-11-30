fetch("resumes.json")
.then(function(response){
   return response.json();
})
.then(function(resumes){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let resume of resumes){
      out += `
         <ul>
            <h2>${resume.title}</h2>
            <h4>${resume.subtitle}</h4>
            <p>${resume.position}
            <br>${resume.description}</p>
         </ul>
      `;
   }
   
   placeholder.innerHTML = out;
})



