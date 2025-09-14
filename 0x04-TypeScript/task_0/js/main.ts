
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const student1: Student = {
    firstName: "Emmanuel",
    lastName: "Mensah",
    age: 22,
    location: "Accra"
};

const student2: Student = {
    firstName: "Ama",
    lastName: "Owusu",
    age: 21,
    location: "Kumasi"
};


const studentsList: Student[] = [student1, student2];


const table: HTMLTableElement = document.createElement("table");
table.border = "1";


const headerRow = table.insertRow();
const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);


studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;

    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
});


document.body.appendChild(table);
