let fridgeContents = {
  lunches: 6,
  energyDrinks: [
    {
      brand: "Bang",
      flavor: "Cherry",
      size: 8
    },
    {
      brand: "Bang",
      flavor: "Cotton Candy",
      size: 12
    },
    {
      brand: "Rockstar",
      flavor: "Energy Cola",
      size: 20
    }
  ],
  water_bottles: 5,
  unknown: 3
}



// console.log(fridgeContents.energyDrinks[1].size || "Size Unknown")

let employeeOne = {
  name: "Jake",
  role: "CEO"
}

let employeeThree = {
  name: "Brittany",
  role: "Director of Recruiting"
}

let employees = [
  employeeOne,
  {
    name: "Mark",
    role: "Instructor"
  },
  {
    name: "D$",
    role: "Instructor"
  }
]
console.log(employees)

employees.push(employeeThree)


//NOTE greet any employee of a given role.
function greetEmployee(role) {
  for (var i = 0; i < employees.length; i++) {
    let employee = employees[i]
    if (i % 2 == 0) {
      return
    }
    if (employee.role == role) {
      console.log(`${employee.name} you are the best ${employee.role} EVAR!!!111!!1!`)
    }
    else {
      console.log(`${employee.name} you are not an ${role}.`)
    }

  }

  // if (employees[0].role == role) {
  //   console.log(greeting)
  // }
}

greetEmployee("CEO")


// racecar racecar
let count = 1
while (count <= 20) {
  // console.log(count)
  count++
}

let playing = false
while (playing) {
  playing = window.confirm("Do you want to keep playing?")
}


let num = 0
do {
  // console.log(num)
  num++
} while (num < 11)

let numArr = [1, 2, 3, 4, 5, 23, -7, 300]
let randomNum = Math.floor(Math.random() * numArr.length)
console.log(randomNum)

//NOTE same thing
console.log(Math.min(...numArr))
//NOTE this is what the spread operator does for us.
console.log(Math.min(1, 2, 3, 4, 5, 23, -7, 300))

console.log(Math.max(...numArr))

