const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  /*
  if (dividend === '' || divider === '') { 
    result.innerText = 'Division not performed. Both values are required in inputs. Try again'; 
  } else {
    result.innerText = dividend / divider;
  }
  */

  let errors = false;

  try {
    switch(true) {
      case dividend === "":
        result.innerText = 'Division not performed. Both values are required in inputs. Try again'; 
        errors = true;
        break;
      case divider === '':
        result.innerText = 'Division not performed. Both values are required in inputs. Try again'; 
        errors = true;
        break;
      case divider === '0':
        result.innerText = 'Division not performed. Invalid number provided. Try again';
        errors = true;
        console.error(new Error("The string is completely empty."));
      default:
        console.log("The Fields are filled. Entries are valid.");
    }
  } finally{
  
    if (!errors) {
      result.innerText = dividend / divider;
    }
  }
});
