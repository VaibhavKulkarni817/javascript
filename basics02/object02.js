

//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary",
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj4 = {5: "e", 6: "f"}


//const obj3 = { obj1, obj2 }

//const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id : 1,
        email: "v@gmail.com"
    },
    {
        id : 2,
        email: "v@gmail.com"
    },
    {
        id : 3,
        email: "v@gmail.com"
    },
    {
        id :4,
        email: "v@gmail.com"
    },

]

//  users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js in hindi",
    prise: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {CourseInstructor : instructor} = course

console.log(instructor);

// {
//     "name" : "vaibhav",
//     "coursename" : "JS in Hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {},
]