window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function createPromise() {
  const randomTime = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Resolved after ${randomTime} seconds`);
    }, randomTime * 1000);
  });
}

// Create an array of five promises
for (let i = 0; i < 5; i++) {
  window.promises.push(createPromise());
}

// Use Promise.any to wait for the first promise to resolve
Promise.any(window.promises)
  .then(result => {
    // Print the result to the div with id "output"
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch(error => {
    console.error('Error:', error);
  });