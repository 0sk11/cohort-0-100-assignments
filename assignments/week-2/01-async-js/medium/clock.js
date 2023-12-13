const timer = () => {
  const timeAndDate = new Date();
  console.clear();
  console.log(
    `${
      timeAndDate.getHours() % 12
    }:${timeAndDate.getMinutes()}:${timeAndDate.getSeconds()} ${
      timeAndDate.getHours() > 12 ? "PM" : "AM"
    }`
  );
};

const time = setInterval(timer, 1000);
console.clear();
