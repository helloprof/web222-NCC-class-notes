var seneca = {studentID: 89008899}
var senecaCard = {studentName: "Suluxan Mohanraj"}
var senecaBalance = {studentBalance: -90.04}


var senecaObject = {
    studentID: 89008899,
    studentName: "Suluxan Mohanraj",
    studentBalance: -90.04
}

console.log(senecaObject.studentBalance)

var menu = {
    breakfast: ['eggs', 'toast', 'banana', 'coffee'],
    lunch: ['salad', 'chicken', 'apple', 'milk'],
    dinner: ['salmon', 'rice', 'green beans']
};

console.log(menu.breakfast)
console.log(menu['breakfast'])
//  example loop 
// for (var i = 0; i < menu.breakfast.length...)


var balance = {}
balance.funds = -90.04
balance.topUp = new Date()
console.log(balance)