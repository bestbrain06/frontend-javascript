export type Director = {
    name: string;
    salary: number;
    role: "director";
    workDirectorTasks: () => string;
};

export type Teacher = {
    name: string;
    salary: number;
    role: "teacher";
    workTeacherTasks: () => string;
};

export type Employee = Director | Teacher;

export function createEmployee(salary: number): Employee {
    if (salary > 500) {
        return {
            name: "Emmanuel",
            salary,
            role: "director",
            workDirectorTasks: () => "Getting to director tasks",
        };
    } else {
        return {
            name: "Ama",
            salary,
            role: "teacher",
            workTeacherTasks: () => "Getting to work",
        };
    }
}

export function isDirector(employee: Employee): employee is Director {
    return employee.role === "director";
}


export function executeWork(employee: Employee): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}


console.log(executeWork(createEmployee(200)));  
console.log(executeWork(createEmployee(1000)));  
