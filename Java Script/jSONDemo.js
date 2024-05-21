let value = '{"name":"Anand","email":"deepak222@gamil.com","gender":"male"}'
let data = JSON.parse(value)
console.log(data)

var element1 = {
    "name" : "Anand",
    "email": "abc1002@gmail.com",
    "age" : 22,
    "gender": "male"
}
const final1 = JSON.stringify(element1)
console.log(final1)