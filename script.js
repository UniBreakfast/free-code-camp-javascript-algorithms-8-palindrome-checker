const form = document.querySelector('form');
const input = document.querySelector('#text-input');
const output = document.querySelector('#out');

form.onsubmit = handleSubmit;

function handleSubmit(e) {
  e.preventDefault();

  const value = input.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const opposite = value.split("").reverse().join("");

  if (!value) {
    alert("Please input a value");
    return;
  } else if (value === opposite) {
    output.textContent = `${input.value} is a palindrome`;
  } else {
    output.textContent = `${input.value} is not a palindrome`;
  }
}
