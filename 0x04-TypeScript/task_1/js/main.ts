type Director = {
    name: string;
    salary: number;
    role: "director";
};

type Teacher = {
    name: string;
    salary: number;
    role: "teacher";
};

type Employee = Director | Teacher;


function createEmployee(salary: number): Employee {
    if (salary > 500) {
        return { name: "Emmanuel", salary, role: "director" };
    } else {
        return { name: "Ama", salary, role: "teacher" };
    }
}


function isDirector(employee: Employee): employee is Director {
    return employee.role === "director";
}


function workDirectorTasks(): void {
    console.log("Getting to director tasks");
}

function workTeacherTasks(): void {
    console.log("Getting to work");
}


function executeWork(employee: Employee): void {
    if (isDirector(employee)) {
        workDirectorTasks();
    } else {
        workTeacherTasks();
    }
}


executeWork(createEmployee(200));  
executeWork(createEmployee(1000)); 
