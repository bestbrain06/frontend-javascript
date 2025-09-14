export type Director = {
    name: string;
    salary: number;
    role: "director";
};

export type Teacher = {
    name: string;
    salary: number;
    role: "teacher";
};

export type Employee = Director | Teacher;

export function createEmployee(salary: number): Employee {
    if (salary > 500) {
        return { name: "Emmanuel", salary, role: "director" };
    } else {
        return { name: "Ama", salary, role: "teacher" };
    }
}

// Exported type predicate
export function isDirector(employee: Employee): employee is Director {
    return employee.role === "director";
}

export function workDirectorTasks(): void {
    console.log("Getting to director tasks");
}

export function workTeacherTasks(): void {
    console.log("Getting to work");
}

// Exported function
export function executeWork(employee: Employee): void {
    if (isDirector(employee)) {
        workDirectorTasks();
    } else {
        workTeacherTasks();
    }
}
