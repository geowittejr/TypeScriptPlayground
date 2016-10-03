/**
 * Created by George on 9/18/2016.
 *
 * https://www.typescriptlang.org/docs/tutorial.html
 */
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Professional = (function () {
    function Professional(prefix, firstName, middleInitial, lastName) {
        this.prefix = prefix;
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = prefix + " " + firstName + " " + middleInitial + " " + lastName;
    }
    return Professional;
}());
function greeter(person) {
    return "Hello, " + person.fullName;
}
var user = new Professional("Mr.", "George", "F.", "Witte");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=Person.src.map