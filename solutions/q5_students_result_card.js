// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
var studentDetails=[
    {
    "name":"Kumar",
    "subjects":[{"id":"Accounts","marks":85},{"id":"Grammar","marks":90}]
},
{
    "name":"Krishna",
    "subjects":[{"id":"Physics","marks":90},{"id":"Grammar","marks":95}]
},
]

var percentage=0,markcards='';
function calculatePercentage(studentDetails){
    for(var students of studentDetails){
        students.subjects.forEach(function(item){
           percentage += item[marks];

    });
    percentage=percentage/sudents.subjects.length;
    markcards +=JSON.stringify({"name":students.name,"Percentage":percentage});

    }
    return markcards;
}
Math.random