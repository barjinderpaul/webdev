function showanswers(){
    let ptag = document.getElementById('fieldset-answer-ptag');
    ptag.innerHTML = '';
    let fsAnswer = document.getElementById('fieldset-answer-ptag');
    
    let username = document.getElementById("username").value;
    // alert(username)
    let passwd = document.getElementById('passwd').value;
    // alert(passwd)
    // let gender = document.getElementById('gender').innerHTML;
    console.log(username)
    // fsAnswer.innerHTML = "Username = " + username + "\n" +"Password = "+passwd
    
    // let ans = ""
    // ans+=username + "\n" + passwd
    // fsAnswer.innerHTML = ans

    let gender = document.getElementById('gender').checked

     fsAnswer.innerHTML = `Username = ${username} \n Password = ${passwd} + gender = ${gender}`
    
}