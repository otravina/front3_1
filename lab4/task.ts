//------------------------ 1 ------------------------
interface Person {
    id: number;
    name: string;
    group: number;
}

const array: Person[] = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];

//------------------------ 2 ------------------------

interface CarsType {
    manufacturer: string;
    model: string;
}

let car: CarsType = {} as CarsType;

car.manufacturer = "manufacturer";
car.model = "model";

//------------------------ 3 ------------------------

interface ArrayCarsType {
    cars: CarsType[];
}

const car1: CarsType = {} as CarsType;
car1.manufacturer = "manufacturer";
car1.model = "model";

const car2: CarsType = {} as CarsType;
car2.manufacturer = "manufacturer";
car2.model = "model";

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];


//------------------------ 4 ------------------------

type MarkFilterType = ( 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10);
type DoneType = boolean;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type MarkType = {
    subject: string;
    mark: MarkFilterType;
    done: DoneType;
};

type StudentType = {
    id: number;
    name: string;
    group: GroupFilterType;
    marks: Array<MarkType>;
};

type GroupType = {
    students: Array<StudentType>;
    studentsFilter: (group: number) => Array<StudentType>;
    marksFilter: (mark: number) => Array<StudentType>;
    deleteStudent: (id: number) => void;
    mark: MarkFilterType;
    group: GroupFilterType;
};

const group: GroupType = {
    students: [],
    studentsFilter(group: number): Array<StudentType> {
        return this.students.filter(student => student.group === group);
    },
    marksFilter(mark: number): Array<StudentType> {
        return this.students.filter(student => student.marks.some(m => m.mark === mark));
    },
    deleteStudent(id: number): void {
        this.students = this.students.filter(student => student.id !== id);
    },
    mark: 1,
    group: 1,
};