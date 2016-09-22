/**
 * Created by George on 9/18/2016.
 *
 * https://www.typescriptlang.org/docs/tutorial.html
 */
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

class Professional {
    fullName: string;
    constructor(public prefix, public firstName, public middleInitial, public lastName) {
        this.fullName = prefix + " " + firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    middleInitial: string;
    fullName: string;
    prefix: string;
}

function greeter(person : Person) {
    return "Hello, " + person.fullName;
}

var user = new Professional("Mr.", "George", "F.", "Witte");

document.body.innerHTML = greeter(user);