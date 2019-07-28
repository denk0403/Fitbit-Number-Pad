////////////////////////////////////////////
// Copy the following code for a number pad
import document from "document";

let numbers = document.getElementsByClassName("number");
let input = document.getElementById("input");
let numberPad = document.getElementById("number_entry_screen");
let enter = document.getElementById("enter");
let back = document.getElementById("back_button");
let selected;

numbers.forEach(element => {
  element.onclick = evt => {
    if (input.text.length < 15) {
      input.text = input.text + "" + element.text;
    }
  }
});

enter.onclick = evt => {
  selected.text = input.text;
  numberPad.style.visibility = "hidden";
}

back.onclick = evt => {
  input.text = input.text.slice(0, -1);
}

function setRecordTo(button) {
  input.text = button.text;
  selected = button;
}

function numberField(button) {
  button.text = "";
  button.onclick = evt => {
    setRecordTo(button);
    numberPad.style.visibility = "visible";
  }
}
// End Copy Here
////////////////////////////////////////////


// Example of how to create number field
// - Simply wrap the button in the numberField function
let example1 = document.getElementById("example_number_field1");
let example2 = document.getElementById("example_number_field2");
numberField(example1);
numberField(example2);

