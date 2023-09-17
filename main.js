const form = document.querySelector("form");
const p = document.querySelector("#passwd + p.error");
const passwd1 = document.getElementById("passwd");
const passwd2 = document.getElementById("passwd-confirm");

function showError()
{
  p.textContent = "* Passwords do not match"
}

function clearMsg()
{
  p.textContent = "";
}

function validatePasswords(passwd1, passwd2)
{
  if (passwd1.value !== passwd2.value) {
    passwd1.setCustomValidity("Password do not match");
    passwd2.setCustomValidity("Password do not match");
    passwd1.classList.add('error');
    passwd2.classList.add('error');
    showError();
  }
  else {
    passwd1.classList.remove('error');
    passwd2.classList.remove('error');
  }
}

passwd1.addEventListener('focus', (e) => {
  clearMsg();
});

form.addEventListener('submit', (e) => {
  console.log(passwd1.value);
  console.log(passwd2.value);

  validatePasswords(passwd1, passwd2);

  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopImmediatePropagation();

    passwd1.setCustomValidity('');
    passwd2.setCustomValidity('');
  }
  else {
    form.submit();
    form.reset();
  }
});