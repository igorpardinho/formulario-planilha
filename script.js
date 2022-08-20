
const handleSubmit = (event) => {
  event.preventDefault();
  
  const name = document.querySelector("input[name=name]").value;
  const email = document.querySelector("input[name=email]").value;
  
  fetch("https://api.sheetmonkey.io/form/kbRriF8EvzGMW4QvQnuwFN", {

  method: "post",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body:JSON.stringify({name,  email})
  });
  alert("Dados enviados com sucesso")
}

document.querySelector("form").addEventListener("submit", handleSubmit)