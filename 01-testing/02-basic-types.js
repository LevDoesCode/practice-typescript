//#region Boolean
var isDone = true;
isDone = false;
//#endregion
//region Number
var decimal = 10;
decimal = 3.14;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var big = 100n; // Requires ES2020 and above
//#endregion
//region String
var firstName = 'John';
var secondName = 'Done';
var age = 50;
var message = "Hello, I'm ".concat(firstName, " ").concat(secondName, ". I'm ").concat(age, " years old.");
//#endregion
//regeion Array
var integers = [1, 2, 3];
var integers2 = [1, 2, 3];
integers = [4, 5, 6];
integers = ["Hello", "Wordl"]; // not valid TS
integers2[0] = 88;
integers2[0] = false; // not valid TS
//#endregion
//#region Tuple
var price = ["car", 200];
price = [200, "car"]; // not valid TS
//#region Enum
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Pending"] = 0] = "Pending";
    UserStatus[UserStatus["Active"] = 1] = "Active";
    UserStatus[UserStatus["Disabled"] = 2] = "Disabled";
    UserStatus[UserStatus["Deleted"] = 3] = "Deleted";
})(UserStatus || (UserStatus = {}));
var getStatusColor = function (status) {
    switch (status) {
        case 'Pending': return 'yellow';
        case 'Active': return 'green';
        case 'Disabled': return 'red';
        case 'Deleted': return 'black';
    }
};
getStatusColor('Pening'); // A type will cause an error
var getStatusColor2 = function (status) {
    switch (status) {
        case UserStatus.Pending: return 'yellow';
        case UserStatus.Active: return 'green';
        case UserStatus.Disabled: return 'red';
        case UserStatus.Disabled: return 'black';
    }
};
getStatusColor2(UserStatus.Active); // Leads to no errors at this line
getStatusColor2('Active'); // Causes an error because of wrong type
