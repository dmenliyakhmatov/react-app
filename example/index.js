const stackElement = document.getElementById('stack');
const microtaskElement = document.getElementById('microtask');
const macrotaskElement = document.getElementById('macrotask');

const getTask = name => {
  const newTask = document.createElement('div');
  newTask.innerHTML = name;
  newTask.style.border = '1px solid black';
  newTask.style.padding = '4px';
  return newTask;
};

function createTask(name) {
  const task = getTask(name);
  stackElement.prepend(task);

  debugger;

  task.remove();

  // setTimeout(() => {
  //   ;
  //   stackElement.innerHTML = '';
  // });
}

function createMicroTask(name) {
  createTask(`Creation microtask ${name}`);

  const microTask = getTask(name);
  microtaskElement.prepend(microTask);
  debugger;
  Promise.resolve().then(() => {
    microTask.remove();
    createTask(`Task from Microtask ${name}`);
    debugger;
    microTask.remove();
  });
}

function createMacrotask(name) {
  createTask(`Creation macrotask ${name}`);

  const macroTask = getTask(name);
  macrotaskElement.prepend(macroTask);
  debugger;
  setTimeout(() => {
    macroTask.remove();
    createTask(`Task from Macrotask ${name}`);
    debugger;
    macroTask.remove();
  });
}

const fn1 = () => {
  const task = getTask('fn1');
  stackElement.prepend(task);

  debugger;

  task.remove();
};

const fn2 = () => {
  const task = getTask('fn2');
  stackElement.prepend(task);

  debugger;

  fn1();

  debugger;

  task.remove();
};

const fn3 = () => {
  const task = getTask('fn3');
  stackElement.prepend(task);

  debugger;

  fn2();

  debugger;

  task.remove();
};
// createMacrotask('Macro 1');

// createMicroTask('Micro 1');

// fn3();

// createTask('Task 1');

// createMacrotask('Macro 2');

// createMicroTask('Micro 2');

// console.log('Start of script');

// setTimeout(function () {
//   console.log('Execute macrotask (setTimeout)');
// }, 0);

// Promise.resolve().then(function () {
//   console.log('Execute microtask (Promise)');
// });

// console.log('End of script');

//=========================================================================================================

// const fn1 = () => {
//   console.log('fn1 start');
//   console.log('fn1 finish');
// };

// const fn2 = () => {
//   console.log('fn2 start');
//   fn1();
//   console.log('fn2 finish');
// };

// const fn3 = () => {
//   console.log('fn3 start');
//   fn2();
//   console.log('fn3 finish');
// };

// Promise.resolve()
//   .then(function () {
//     console.log('Execute microtask (Promise)');
//   })
//   .then(() => {
//     console.log('Execute microtask (Promise) 2');
//   });

// setTimeout(function () {
//   console.log('Execute macrotask (setTimeout)');
// }, 0);

// fn3();

//=========================================================================================================

// console.log('1');

// const fn2 = () => {
//   debugger;
//   console.log('fn2');
//   debugger;
// };

// const fn1 = () => {
//   debugger;
//   fn2();
//   debugger;
//   console.log('fn1');
//   debugger;
// };

// fn1();

// setTimeout(() => {
//   console.log('timeot');
// }, 0);
// fn1()
///stack

// const fn = () => {
//   fn();
// };

// fn();
