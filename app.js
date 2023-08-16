let count = 0;

function updateColor() {
    const valueSpan = document.getElementById('value');
    
    if (count < 0) {
        valueSpan.style.color = 'red';
    } else if (count > 0) {
        valueSpan.style.color = 'green';
    } else {
        valueSpan.style.color = ''; // Reset the color to default
    }
}

function updateValue() {
    const valueSpan = document.getElementById('value');
    valueSpan.textContent = count;
  
    if (count === 0) {
      valueSpan.classList.add('float'); // Add the float class when count is 0
    } else {
      valueSpan.classList.remove('float'); // Remove the float class otherwise
    }
  
    updateColor(); // Call the function to update the color based on count
  }


// Create function for increasing count
function increaseCount() {
    count++;
    updateValue();
    console.log(count);
}

// Create function for decreasing count
function decreaseCount() {
    count--;
    updateValue();
    console.log(count);
}
// Create function for reset count
function resetCount() {
    count = 0;
    updateValue();
    console.log(count);
}

console.log(count);