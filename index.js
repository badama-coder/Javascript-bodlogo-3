// const student = {
//     studentName: "Erdenenavch",
//     age: 26,
//     isStudent: "yes",
// }
// console.log(student)

// const fruits = ["Алим", "Банана", "Жүрж"]
// console.log(fruits);

// const person = {
//     name: "Ану",
//     age: 20,
// }
// console.log(person.name);

// const colors = ["Улаан", "Ногоон", "Цэнхэр"]
// console.log(colors[0]);

// const product = {
//     productName: "Дэвтэр",
//     price: 2500,
// }
// console.log(product["price"])

// const student = ["Бат", "Ану", "Болд"]
// console.log(student[1]);

// const person = {
//     name: "Бат",
//     age: 18
// }
// console.log(`${person.name} ${person.age} настай`)

// const animals = ["Нохой", "Муур", "Туулай", "Морь"]
// console.log(animals.length);

// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers[numbers.length-1]);

// const student = {
//     studentName: "Сараа",
//     age: 16,
//     grade: 10
// }
// const key = student.grade;
// console.log(key);

// const fruits = ["Алим", "Банана", "Жүрж"];
// const uurchilsun = fruits.splice(1,1, "Усан үзэм")
// console.log(fruits);

// const person = {
//     name: "Болд",
//     age: 17,
// }
// if (person.age >= 18) {
//     person.isAdult = "true"
// } else {
//     person.isAdult = "false"
// }
// console.log(person)

// const books = ["Математик", "Англи хэл"];
// const nemsen = books.push("Программчлал");
// console.log(books)

// const student = {
//     name: "Ану",
//     age: 15
// };
// student.grade = 9;
// console.log(student);

// const player = {
//     name: "Тэмүүлэн",
//     score: 100
// }
// if (player.score >= 100) {
//     console.log(player.score + 50)
// } else {
//     console.log(player.score + 10)
// }

// const items = ["Дэвтэр", "Бал", "Баллуур"]
// const removedItem = items.pop()
// console.log(items , removedItem);

// const queue = ["Бат", "Ану"];
// const shine = queue.unshift("Болд")
// console.log(queue);

// const lamp = {
//   isOn: true,
// };

// if (lamp.isOn) {
//   lamp.isOn = false;
//   console.log("Гэрлийг унтраалаа");
// } else {
//   lamp.isOn = true;
//   console.log("Гэрлийг асаалаа");
// }

// const queue = ["Болд", "Бат", "Ану"];
// const firstPerson = queue.shift();
// console.log(queue, firstPerson);

// const user = {
//   name: "Бат",
//   isVerified: true,
//   temporaryCode: "ABC123",
// };
// if (user.isVerified) {
//   delete user.temporaryCode;
//   console.log(user)
// } else {
//     console.log("Эхлээд бүртгэлээ баталгаажуулна уу");
// }

// const product = { name: "Дэвтэр", price: 2500, quantity: 4 }
// console.log(product.price * product.quantity);

// const rectangle = { width: 5, height: 8 };
// rectangle.area = rectangle.width * rectangle.height
// console.log(rectangle);

// const scores = { math: 80, english: 90, programming: 100 };
// console.log((scores.math + scores.english + scores.programming)/3);

// const product = { price: 50000, discountPercent: 20 };
// if (product.discountPercent > 0) {
//     product.finalPrice = product.price - product.price * product.discountPercent / 100;
// } else {
//     product.finalPrice = product.price
// }
// console.log(product.finalPrice)

// const account = { owner: "Болд", balance: 50000 };
// const withdrawAmount = 60000;
// if (account.balance >= withdrawAmount) {
//     account.balance = account.balance - withdrawAmount;
//     console.log("Гүйлгээ амжилттай", account.balance);
// } else {
//     console.log("Үлдэгдэл хүрэлцэхгүй", account.balance)
// }

// const product = { name: "Бал", stock: 0 };
// const shalgah = product.stock > 0 ? "Бэлэн байна" : "Дууссан"
// console.log(shalgah);

// const numbers = [15, 25, 10];
// console.log(numbers[0] + numbers[1] + numbers[2]);

// const scores = [80, 90, 100];
// console.log((scores[0]+scores[1]+scores[2])/ scores.length);

// const customer = { money: 10000 };
// const product = { price: 8000, stock: 3 };
// if (customer.money > product.price && product.stock > 0) {
//     console.log("Авч болно")
// } else {
//     console.log("Авч болохгүй")
// }

// const student = { name: "Сараа", score: 85 };
// if (student.score >= 90) {
//     console.log("Маш сайн");
// } else if (student.score >= 60 && student.score < 90) {
//     console.log("Тэнцсэн");
// } else {
//     console.log("Тэнцээгүй");
// }

// const student = { name: "Бат", age: 16 };
// let ageBaigaa;
// let emailBaigaa;
// if ("age" in student) {
//     ageBaigaa = true;
// } else {
//     ageBaigaa = false;
// }
// if ("email" in student) {
//     emailBaigaa = true;
// } else {
//     emailBaigaa = false;
// }
// console.log(ageBaigaa , emailBaigaa);

// const student = { name: "Болд", address: { city: "Улаанбаатар", district: "Хан-Уул" } };
// console.log(student.address.city);

// const person = { name: "Ану", address: { city: "Улаанбаатар", district: "Баянзүрх" } };
// if (person.address.city === "Улаанбаатар") {
//     console.log(person.address.district);
// } else {
//     console.log("Орон нутгийн оршин суугч")
// }

// const student = { name: "Бат", scores: { math: 70, english: 80 } };
// if (student.scores.math < 80) {
//     student.scores.math = student.scores.math + 10;
//     console.log(student.scores.math)
// } else {
//     console.log("Нэмэлт оноо шаардлагагүй");
// }

// const names = ["Бат", "Ану"];
// let temp1 = names[0];
// let temp2 = names [1];
// names[0] = temp2;
// names[1] = temp1;

// console.log(names)

// const fruits = ["Алим", "Банана", "Жүрж"];
// const shalgah = fruits.includes("Банана") ? "Банана байна" : "Банана байхгүй";
// console.log(shalgah);

// const students = ["Бат", "Ану", "Болд", "Сараа"];
// console.log(students.indexOf("Болд"));

// const order = { product: { price: 5000, quantity: 3 }, delivery: { fee: 2500 } };
// if ((order.product.price * order.product.quantity) >= 20000) {
//     order.delivery.fee = 0;
// };
// order.total = order.product.price * order.product.quantity + order.delivery.fee;
// console.log(order.total);

// const user1 = { name: "Болд", age: 20 };
// const user2 = { email: "bold@example.com", city: "Улаанбаатар" };
// const users = Object.assign(user1, user2)
// console.log(users);

// const cart = [];
// if (cart.length === 0) {
//     console.log("Сагс хоосон");
// } else {
//     console.log("Сагсанд бараа байна");
// }

// const numbers = [35, 20];
// if (numbers[0] > numbers[1]) {
//     console.log(numbers[0]);
// } else if (numbers[1] > numbers[0]) {
//     console.log(numbers[1]);
// } else {
//     console.log("Хоёр тоо тэнцүү");
// }

// const students = ["Бат", "Ану"];
// const newStudent = "Сараа";
// if (students.includes(newStudent)) {
//     console.log("Энэ нэр бүртгэлтэй байна", students);
// } else { students.push(newStudent); console.log(students)
// }

//  const user1 = { name: "Ану", age: 18 };
//  const user2 = { email: "anu@example.com", city: "Улаанбаатар" };
//  const users = {...user1, ...user2}
//  console.log(users);

// const groupA = ["Бат", "Ану"];
// const groupB = ["Болд", "Сараа"];
// const allStudents = groupA.concat(groupB)
// console.log(allStudents);

// const original = [10, 20, 30];
// let copied = [...original];
// copied.shift();
// copied.unshift(90);
// console.log( original , copied);

// const numbers = [10, 20, 30, 40, 50];
// const shine = numbers.slice(1, 4);
// console.log(shine);

// const { name: userName, age } = {
//   name: "Сараа",
//   age: 22,
//   email: "saraa@example.com",
// };

// const profile = { name: userName, age };
// profile.name = "Бат";
// console.log(userName, profile.name);

// const colors = ["Улаан", "Ногоон", "Цэнхэр", "Шар"];
// colors.splice(1,1)
// console.log(colors)

// const days = ["Даваа", "Лхагва"];
// days.splice(1,0,"Мягмар");
// console.log(days);

// const words = ["Би", "JavaScript", "сурч", "байна."];
// console.log(words.join(" "));

const students = [
  { name: "Бат", score: 75 },
  { name: "Ану", score: 90 },
];
students[0].score += 10;
if (students[1].score >= 90) {
  console.log("Ану маш сайн");
} else {
  console.log("Ану хичээгээрэй");
}


