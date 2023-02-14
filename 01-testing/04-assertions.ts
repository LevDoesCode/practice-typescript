let myStr = 'this is a string';

let myStrLength = myStr.length;

// Any example

let someValue: any;

someValue = 'this is also a string';

let someValueLength = someValue.length;
let someValueLength2 = (someValue as string).length; // string type assertion

//#region Example 2

interface IUser {
    firstName: string;
    email?: string;
};

let user: IUser = {
    firstName: 'Bill',
    //email: 'bill@bill.com'
};

const sendEmail = (email: string) => {
    // send email
}

console.log(user.email); // logs undefined

// should be string only, IUser: email is string or undefined, they're not treated the same
sendEmail(user.email);

// We assert to the compiler that there's a string there
sendEmail(user.email as string);

// or
sendEmail(<string> user.email);