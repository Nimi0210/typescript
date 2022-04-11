function signUp() {
    let name = ((<HTMLInputElement>document.getElementById('name')).value);
    let email = ((<HTMLInputElement>document.getElementById('email')).value);
    let  pwd = ((<HTMLInputElement>document.getElementById('pass')).value);

    localStorage.setItem(email, JSON.stringify([name, email, pwd]));
    location.reload();   
}
function login() {
        let userEmail = document.getElementById("email") as HTMLInputElement;
        let Pass = document.getElementById("pass") as HTMLInputElement;
        let email = userEmail.value;
        let pass = Pass.value;
        let Email = JSON.parse(localStorage.getItem(email));
        if (email == Email[1] && pass == Email[2]) 
        { 
          hr();
        } else {
          alert("Incorrect login credentials");
        }
      }
function hr(){
  location.href="gallery.html";
}




// function saveUserData() {
//     let Name = document.getElementById("name") as HTMLInputElement;
//     let Email = document.getElementById("email") as HTMLInputElement;
//     let Pass = document.getElementById("pass") as HTMLInputElement;
//     let name = Name.value;
//     let email = Email.value;
//     let pwd = Pass.value;
  
//     localStorage.setItem(email, JSON.stringify([name, email, pwd]));
//     location.reload();
//   }
  
//   function login() {
//     let userEmail = document.getElementById("Email") as HTMLInputElement;
//     let Pass = document.getElementById("Pass") as HTMLInputElement;
//     let email = userEmail.value;
//     let pass = Pass.value;
//     let Email = JSON.parse(localStorage.getItem(email));
//     if (email == Email[1] && pass == Email[2]) {
//       location.href = "/Home/Home.html";
//     } else {
//       alert("Incorrect login credentials");
//     }
//   }