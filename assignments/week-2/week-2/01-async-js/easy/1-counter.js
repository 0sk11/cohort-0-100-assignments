// // timer
// let _counter = 0;
// const timer = setInterval(() => {
//   console.log(_counter++);
// }, 1000);

// timer;

const timer = (fn, duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        fn();
        resolve();
      } catch (err) {
        reject(new Error("Something went wrong"));
      }
    }, duration);
  });
};

const duration = 1000;

function printCounter(counter) {
  console.log(counter);
}

let counter = 0;

function runTimers() {
  if (counter < 5) {
    counter++;
    timer(() => printCounter(counter), duration)
      .then(() => runTimers())
      .catch((error) => console.error(error.message));
  }
}

runTimers();
