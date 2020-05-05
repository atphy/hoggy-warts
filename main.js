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
  domString = '';
  for (let i = 0; i < studentCollection.length; i++) { 

  domString += `
    <div class="card" id="${studentCollection[i].school}">
    <div class="card-header">
      ${studentCollection[i].school}
    </div>
    <div class="card-body">
      <h4 class="card-title">${studentCollection[i].name}</h4>
      <a href="#" class="btn btn-primary" id="expelButton">Expel</a>
    </div>
  </div>
  `
  }
  printToDom('#cardSection', domString);
}

/* Removes introductory jumbotron on confirmation button click */
const enterSite = () => {
  var enterWindow = document.getElementById("confirmPage");
    enterWindow.style.display = "none";
  document.getElementById("mainPage").style.display = "block";
}

/* PROBLEM: Getting error in chrome console that addEventListener can't be added since #expelButton doesn't
exist on page load.

 const clickExpel = () => {
  document.querySelector('#expelButton').addEventListener('click', expelStudent);
} */

const clickConfirm = () => {
  document.querySelector('#confirmButton').addEventListener('click', enterSite);
}

const clickSort = () => {
  document.querySelector('#sortButton').addEventListener('click', checkStudent);
}

/* Defines variable that will be iterated over to assign each student a unique ID number */
let assignId = 1

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
      school: classPicker
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
  document.getElementById("inputName").value = ''
  }
}

/* const expelStudent = () => {
  const expelledStudent = 
  {
    id: students.id,
    name: students.name,
    school: students.school
  }
  expelled.push(expelledStudent)
  console.log(expelled)
} */

/* Defines init function, including setting everything but the jumbotron to hide on load */
const init = () => {
  document.getElementById("mainPage").style.display = "none";
  clickConfirm();
  clickSort();
  /*clickExpel();*/
  buildStudents(students)
}

init()
