const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

function crash(){
  const body = document.getElementById('body');
  body.innerHTML ='<h1>Something critical went wrong. Please reload the page</h1>'
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
 
  let errors = false;

  try {
    switch(true) {
      case dividend === "":
        result.innerText = 'Division not performed. Both values are required in inputs. Try again'; 
        errors = true;
        break;
      case !/^\d+$/.test(dividend): // Check if dividend is numeric
        result.innerText = 'Division not performed. Dividend must be a valid whole number. Try again';
        crash();
        console.error(new Error("Invalid parameter entered!"));
        errors = true;
        break;
      case !/^\d+$/.test(divider): // Check if divider is numeric
        result.innerText = 'Division not performed. Divider must be a valid whole number. Try again';
        crash();
        console.error(new Error("Invalid parameter entered!"));
        errors = true;
        break;
      case divider === '':
        result.innerText = 'Division not performed. Both values are required in inputs. Try again'; 
        errors = true;
        break;
      case divider === '0':
        result.innerText = 'Division not performed. Invalid whole number provided. Try again';
        errors = true;
        console.error(new Error("The result is undefined as the divider is 0"));
      default:
        console.log("The Fields are filled. Entries are valid.");
    }
  } finally{
  
    if (!errors) {
      result.innerText = Math.floor(dividend / divider);
    }
  }
});
