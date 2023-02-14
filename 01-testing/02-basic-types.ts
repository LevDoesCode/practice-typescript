//#region Boolean

let isDone: boolean = true;
isDone = false;

//#endregion

//region Number

let decimal: number = 10;
decimal = 3.14;

let hex: number = 0xf00d;
let binary: number = 0b01010;
let octal: number = 0o744;

let big: bigint = 100n; // Requires ES2020 and above

//#endregion

//region String

let firstName: string = 'John';
let secondName: string = 'Done';
let age: number = 50;

const message: string = `Hello, I'm ${firstName} ${secondName}. I'm ${age} years old.`;

//#endregion

//regeion Array
let integers: number[] = [1, 2, 3];
let integers2: Array<number> = [1, 2, 3];

integers = [4, 5, 6];
integers = ["Hello", "Wordl"]; // not valid TS
integers2[0] = 88;
integers2[0] = false; // not valid TS
//#endregion

//#region Tuple
let price: [string, number] = ["car", 200];
price = [200, "car"]; // not valid TS

//#region Enum

enum UserStatus {
    Pending,
    Active,
    Disabled,
    Deleted
}

const getStatusColor = (status: string) => {
    switch(status) {
        case 'Pending': return 'yellow';
        case 'Active': return 'green';
        case 'Disabled': return 'red';
        case 'Deleted': return 'black';
    }
}

getStatusColor('Pening'); // A type will cause an error in JS

const getStatusColor2 = (status: UserStatus) => {
    switch(status) {
        case UserStatus.Pending: return 'yellow';
        case UserStatus.Active: return 'green';
        case UserStatus.Disabled: return 'red';
        case UserStatus.Disabled: return 'black';
    }
}

getStatusColor2(UserStatus.Active); // Leads to no errors at this line

getStatusColor2('Active'); // Causes a TS compiler error because of wrong type

//#endregion

//region Any

let someValue: any;

someValue = 100;
someValue = 'hello';

let someArray: any[] = [100, 'hello', false];

someArray[0] = "hello";

let data: any = someLib.getData()
switch (typeof data) {
    case 'string': { /* ... */ }
}

//#endregion

//#region Void

const logMessage = (message: string): void => {
    console.log(message);
}

let result = logMessage('Hello world');
let result2: void;
result2 = logMessage('Hello world');
console.log(result);
result = 5;
result2 = 10;

//#endregion

//#region Null and Undefined

let undefinedValue: undefined = undefined; // Unnecessary type declaration
let nullValue: null = null; // null and undefined are subtypes of the other types

let messageString: string[] = undefined;
let logoURL: string = undefined;

//#endregion

//region Never

const error = (message: string): never => {
    throw new Error(message);
}

const fail = () => error("Another error");

//#endregion

//#region Objects

let user = {
    firstName: 'John',
    lastName: 'Done'
}

user = { firstName: 'Bob'}; // Cannot reassign without all the properties
user = { firstName: 'Bob', lastName: 'Doe'} // This is ok

const greetUser = (user: { firstName: string, lastName: string }) => {
    const { firstName, lastName } = user;
    console.log(`Hello ${firstName} ${lastName}`);
}

greetUser(user);

let newUser = { firstName: 'Emma' };
greetUser(newUser); //can't use a parameter that doesn't match what is required by the function.

//#endregion

export default {}