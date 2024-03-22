let students = [
  { name: "Alice", grade1: 10, grade2: 9 },
  { name: "Anna", grade1: 4, grade2: 3 },
  { name: "Maria", grade1: 7, grade2: 7 },
];

function calculateAverage(student) {
  return (student.grade1 + student.grade2) / 2;
}

function checkSuccess(student) {
  const average = calculateAverage(student);
  if (average >= 7) {
    return `A média do(a) aluno(a) ${student.name} é de ${average.toFixed(2)}
    Parabéns! ${student.name} você foi aprovado.`;
  } else {
    return `A média do(a) aluno(a) ${student.name} é de ${average.toFixed(2)}
    Não foi dessa vez ${student.name}! Tente novamente!.`;
  }
}

let results = "";
students.forEach(function (student) {
  results += checkSuccess(student) + "\n";
});

alert(results);
