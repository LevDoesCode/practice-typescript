enum UserStatus {
    Pending,
    Active,
    Disabled,
    Deleted
}

interface IUser {
    firstName: string;
    lastName: string;
    status: UserStatus;
}

let user: IUser = {
    firstName: 'Bill',
    lastName: 'Gates',
    status: UserStatus.Active
}

const greetUser = (user: IUser) => {
    const { firstName, lastName } = user;
    console.log( `Hello ${firstName} ${lastName}!` );
}

greetUser(user);

// Optional properties

interface IUser2 {
    firstName: string;
    lastName?: string;
    status?: UserStatus;
}

user = {
    firstName: `Bob`
} // Object is incomplete

let user2: IUser2 = {
    firstName: 'Alice',
    lastName: 'Blast',
    status: UserStatus.Disabled
}

user2 = {
    firstName: 'Lucia',
} // Object has optional properties

// Typos

user = {
    firstName: 'Jim',
    laastName: 'Lemo', // typo
    status: UserStatus.Pending
}

user = {
    firstName: 'Jim',
    lastName: 'Lemo', // typo
    status: UserStatus.Pending,
    address: '123 Main St' // not needed
}

user.lastName = 'Murray';

interface IUser3 {
    firstName: string;
    readonly lastName?: string;
    status?: UserStatus;
}

let user3: IUser3 = {
    firstName: 'Alice',
    lastName: 'Blast',
    status: UserStatus.Disabled
} // This is ok during initializaiton

user3.lastName = 'Murray'; // Not ok, it's ready-only

interface ISearchFunc {
    (source: string, subString: string): boolean;
}

let search: ISearchFunc = (source: string, subString: string) => source.includes(subString);
// we should also change the name of the variables and it's ok

let search2: ISearchFunc = (s: string, subS: string) => s.includes(subS);

// Extra parameter, not ok
let search3: ISearchFunc = (s: string, subS: string, num: number) => s.includes(subS);

// Index

interface IStringArray {
    [index: number]: string;
}

let myArray: IStringArray = ['Bill', 'Steve'];

let myStr: string = myArray[0];

// Dictionary

interface IDictionary {
    [index: string]: string;
}

let myDict: IDictionary = {
    gates: 'Microsoft',
    jobs: 'Apple',
    page: 'Google'
}

// Access dictionary entry
myDict['jobs'];

// Classes

interface IClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

// Clock class implements the interface
// All interface properties should be implemented by the class
class Clock implements IClockInterface {
    currentTime: Date = new Date();

    constructor(h: number, m: number) {};

    setTime(d: Date): void {
        this.currentTime = d;
    }
}

// Inheritance

interface IShape {
    color: string;
    shadowColor?: string;
}

interface IPenColor {
    penColor?: string;
}

interface IPenStroke extends IPenColor {
    penWidth: number;
}

interface ISquare extends IShape, IPenStroke {
    sideLength: number;
}

let square: ISquare = {
    color: 'blue',
    sideLength: 10,
    penWidth: 5.0
}

square.shadowColor = 'black';
square.penColor = 'white';

export {}