/* creating interfaces */
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
/* creating 2 stundents */
const studentOne: Student = {
  firstName: "harry",
  lastName: "Porter",
  age: 18,
  location: "New York, America",
};
const studentTwo: Student = {
  firstName: "Siphamandla",
  lastName: "Matshiane",
  age: 28,
  location: "Johannesburg, South Africa",
};

/* creating an array */
const studentsList: Array<Student> = [studentOne, studentTwo];

/* optional to create a stylesheet */
const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
  tableHead.insertAdjacentElement('beforeend', headRow);
  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }
  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
}

/* use the created function */
displayStudents(studentsList);
/* use the stylesheet */
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacementElement('beforeend', styleSheetElement);
/* name the document */
document.title = 'Task 0';
