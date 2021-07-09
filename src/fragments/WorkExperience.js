import data from './data.txt';

export default function WorkExperience() {
  
  function return1(){
    /*function that changes the text stored 
    in the html based on the users choice in the dropdown menu*/
    fetch(data).then(r => r.text()).then(text => {
      /*Splits into an array when a new line is taken, text file consists of job title 
      on one line then description under it on the next line*/
      let arr = text.split("\n");
        
        if (document.getElementById("dropDown").value === "0") {
          document.getElementById("jobTitle").innerHTML = arr[0];
          document.getElementById("jobDesc").innerHTML = arr[1];
        } else if (document.getElementById("dropDown").value === "1") {
          document.getElementById("jobTitle").innerHTML = arr[2];
          document.getElementById("jobDesc").innerHTML = arr[3];
        } else if (document.getElementById("dropDown").value === "2") {
          document.getElementById("jobTitle").innerHTML = arr[4];
          document.getElementById("jobDesc").innerHTML = arr[5];
        } else if (document.getElementById("dropDown").value === "3") {
          document.getElementById("jobTitle").innerHTML = arr[6];
          document.getElementById("jobDesc").innerHTML = arr[7];
        }
        
      });
  }
    
  
    
  
  
    return (
        <body >
          
        <div class="contentHolder">
            {/*Box for all forms which contains general information*/}
            <div className="infoBox" >
            <img src="User.png"></img>
            <br></br>
            <p>Name:   Michael McLean</p>
            <p>Email:  mgmclean99@gmail.com</p>
            <p>Mobile: 07718285950</p>
            <a href="https://www.linkedin.com/in/michael-mclean-/">Linkedin</a>
            <p></p>
            <a href="https://www.facebook.com/michael.mclean.9081323/">Facebook</a>

            </div>
          <div class="divider" >
            </div>
            <div className="content4H" >
            <p id="jobTitle">PHP/SQL Developer - School Placement</p>
            </div>
            <div className="content4" >
            <p id="jobDesc">Software Company in Coleraine providing a GIS based property analysis toolset. Acted as a PHP, SQL developer to fully develop their in-house image error handling function. I acted as team-lead within a two-man team responsible for overall delivery, planning, tasks assignment. All development delivered within the set time and quality.</p>
            </div>
            {/*Drop down box with onChange to handle the manipulation 
            of the text displayed on the page*/}
            <select type="text" className="content4Drop" 
            id="dropDown"  onChange={() => return1()}> 
              <option value="0" selected="selected">Spatialest </option>
              <option value="1" >Fujitsu </option>
              <option value="2" >G Andrews Ltd</option>
              <option value="3" >Henderson Retail</option>
            </select>
        </div>
        </body>
        
      );
}


