const valipass =()=>{
    const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const password = document.getElementById("password").value;
    if(passwordRegex.test(password) === true){
        alert("passwoed amn ast")
    }
    else{
        alert("password amn nist")
    }
}