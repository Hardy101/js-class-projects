const newArr = [];
let tracker = 0;

for (let j = 0; j < 4; j++) {
  // populate the array with seat numbers
  const subArr = [];
  for (let k = 0; k < 4; k++) {
    const subsubArr = [++tracker];
    subArr.push(subsubArr);
  }
  newArr.push(subArr);
}

const showSeatingArrangment = () => {
  // go through the array and log the seating arrangement
  console.log("\nThis is the current sitting arrangement:");
  newArr.forEach((i) => {
    let str = "";
    i.forEach((j) => {
      j.forEach((k) => {
        str += k + "\t\t";
      });
    });

    console.log(str);
  });
};

const checkFull = () => {
  // loops through arrays checks if the seats are full
  let full = true;
  newArr.forEach((i) => {
    i.forEach((j) => {
      j.forEach((k) => {
        if (!isNaN(k)) return (full = false);
      });
      if (!full) return;
    });
    if (!full) return;
  });

  if (!full) return false;
  return true;
};

const getFirstInput = () => {
  // starts and loops the app by getting the initial input
  while (!checkFull()) {
    const input = prompt(
      "Please Enter Your name or a seat number to check who is seating there"
    );

    if (!input) {
      showSeatingArrangment();
      return;
    } else if (isNaN(input)) seatPerson(input);
    else checkPersonInSeat(input);
  }
};

const seatPerson = (name) => {
  const seatNumber = prompt("Please Enter your seat Number");

  if (!seatNumber) {
    //   check if the user entered a seat number
    alert("invalid seat number");
    return;
  } else if (isNaN(seatNumber) || seatNumber < 1 || seatNumber > 16) {
    //   check is the seatn number is valid
    alert("invalid seat number please choose another seat");
    return seatPerson(name);
  } else {
    // seat the person
    const row = Math.ceil(seatNumber / 4) - 1;
    const col = seatNumber - 4 * row;

    if (!isNaN(newArr[row][col - 1][0])) {
      // the seat is empty
      newArr[row][col - 1][0] = name;
      showSeatingArrangment();
    } else {
      // the seat is full
      alert(
        `The chosen seat is already occupied by ${
          newArr[row][col - 1][0]
        }, please choose another seat`
      );
      return seatPerson(name);
    }
  }
};

const checkPersonInSeat = (seatNumber) => {
  // checks and prints the user in a particular seat or says if the seat is empty
  const row = Math.ceil(seatNumber / 4) - 1;
  const col = seatNumber - 4 * row;
  const person = newArr[row][col - 1][0];

  if (!isNaN(person)) alert(`Seat ${seatNumber} is empty`);
  else
    alert(
      `The person siting in seat ${seatNumber} is ${newArr[row][col - 1][0]}`
    );
};

showSeatingArrangment();
getFirstInput();
