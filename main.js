const students = [
  {
    id: 1,
    name: 'Harry Potter',
    school: 'Gryffindor',
  },
  {
    id: 2,
    name: 'Gandalf',
    school: 'Ravenclaw'
  },
  {
    id: 3,
    name: 'Merlin',
    school: 'HufflePuff'
  },
  {
    id: 4,
    name: 'Jafar',
    school: 'Slytherin'
  }
]

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildStudents = (studentCollection) => {
  domString = '';
  for (let i = 0; i < studentCollection.length; i++) { 

  domString += `
  <div class="card">
  <div class="card-header">
    ${studentCollection[i].school}
  </div>
  <div class="card-body">
    <h4 class="card-title">${studentCollection[i].name}</h4>
    <a href="#" class="btn btn-primary">Expel</a>
  </div>
</div>
  `
  }
  printToDom('#cardSection', domString);
}


const enterSite = () => {
  var enterWindow = document.getElementById("confirmPage");
    enterWindow.style.display = "none";
  document.getElementById("mainPage").style.display = "block";
}

const clickConfirm = () => {
  document.querySelector('#confirmButton').addEventListener('click', enterSite);
}

const init = () => {
document.getElementById("mainPage").style.display = "none";
clickConfirm();
buildStudents(students)
}

init()
