var Student = {
  name: "Ishna",
  roll_no: 06,
  class: 9,
  favorite_subject : "reading",
  marks: [30,64,35,25]
}


function setup() {
  createCanvas(400, 400);

  console.log(Student.name);
  Student.roll_no = 45
  console.log(Student.roll_no)
}

function draw() {
  background(220);
}