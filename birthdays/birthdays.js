function createBirthday(name, month, day) {
  var birthday = {
    name: name,
    month: month,
    day: day,
  };
  return birthday;
}

function celebrateBirthday(personBirthday) {
  var celebration = `Today is ${personBirthday.month}/${personBirthday.day}! Happy birthday, ${personBirthday.name}!`;
  return celebration;
}

function countBirthdays(birthdayList, month) {
  var count = 0;
  for (let i = 0; i < birthdayList.length; i++) {
    if (birthdayList[i].month === month) {
      count += 1;
    }
  }
  return count;
}
module.exports = { createBirthday, celebrateBirthday, countBirthdays };
