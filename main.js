/* Defines empty students array to pass names into */
const students = [
]

/* Defines empty array that will receive expelled students */
const expelled = [
]

/* Array of possible school assignments */
const schools = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']

/* Dom string functions */
const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildStudents = (studentCollection) => {
  document.getElementById("studentsBox").hidden = false
  domString = '';
  for (let i = 0; i < studentCollection.length; i++) { 

  domString += `
    <div class="card" id="${studentCollection[i].school}">
    <div class="card-header">
      ${studentCollection[i].school}
    </div>
    <div class="card-body">
      <h4 class="card-title">${studentCollection[i].name}</h4>
      <button href="#" class="btn btn-primary expel" id="${studentCollection[i].id}">Expel</button>
    </div>
  </div>
  `
  }
  printToDom('#cardSection', domString);
  clickExpel();
}

const buildExpelled = (expelledCollection) => {
  document.getElementById("expelledBox").hidden = false
  domString = '';
  for (let i = 0; i < expelledCollection.length; i++) { 

  domString += `
    <div class="card" id="${expelledCollection[i].school}">
    <div class="card-body">
      <h4 class="card-title">${expelledCollection[i].name}</h4>
      <img id="deathlyHallows" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Sign_of_the_Deathly_Hallows.svg/1179px-Sign_of_the_Deathly_Hallows.svg.png">
    </div>
  </div>
  `
  }
  printToDom('#expelledSection', domString);
}

/* Removes introductory jumbotron on confirmation button click */
const enterSite = () => {
  var enterWindow = document.getElementById("confirmPage");
    enterWindow.style.display = "none";
  document.getElementById("mainPage").style.display = "block";
  document.getElementById("studentsBox").hidden = true
  document.getElementById("expelledBox").hidden = true
}

/* Sets up event listener for each individual expel button */
 const clickExpel = () => {
  const expelBtns = document.getElementsByClassName('expel');
    for (let i = 0; i < expelBtns.length; i++) {  
    expelBtns[i].addEventListener('click', expelStudent);
    };
}

const clickConfirm = () => {
  document.querySelector('#confirmButton').addEventListener('click', enterSite);
}

const clickSort = () => {
  document.querySelector('#sortButton').addEventListener('click', checkStudent);
}

/* Defines variable that will be iterated over to assign each student a unique ID number */
let assignId = 0

/* Creates new objects in the students array by pulling a student name from the text box,
 a school by randomly choosing a position in the schools array, and an ID by iterating over
  the assignId variable. */
const sortStudent = () => {
  const enteredName = (document.getElementById("inputName").value);
  const classPicker = schools[Math.ceil(Math.random()*4 - 1)];
  const newStudent = 
    {
      id: assignId,
      name: enteredName,
      school: classPicker,
    }
  students.push(newStudent);
  buildStudents(students);
  assignId++;
  console.log(students);
}

/* Confirms that the value entered in the text box is not blank. If it isn't, the sortStudent function is called */
const checkStudent = () => {
if (document.getElementById("inputName").value === '') {
  alert("Incomplete paperwork. Please provide a student name before proceeding.");
  } else {
  sortStudent();
  document.getElementById("inputName").value = '';
  }
}

/* Retrieves ID of clicked button, sets up an array listing student IDs in order, uses that array to find the 
position of the student with an ID matching that of the button, removes it from the array of students and places it
in an array for expelled students, then launches functions to rebuild cards from student array and to create cards for
expelled students array.  */
const expelStudent = (e) => {
  const buttonId = e.target.id;
  const studentIds = []
  for (let i = 0; i < students.length; i++) {
      studentIds.push(students[i].id.toString())
      if (students[i].id === buttonId) {
      }
  }
       const studentPosition = studentIds.indexOf(buttonId)
       students[studentPosition].school = 'Voldemort'
       expelled.push(students[studentPosition])
       console.log('expelled', expelled)
       students.splice(studentPosition, 1);
       buildStudents(students)
       buildExpelled(expelled)
       console.log(students)
       if (students.length === 0) {
        document.getElementById("studentsBox").hidden = true
       }
}

/* Defines init function, including setting everything but the jumbotron to hide on load */
const init = () => {
  document.getElementById("mainPage").style.display = "none";
  clickConfirm();
  clickSort();
  /* clickExpel(); */
  buildStudents(students)
}

init()
