const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if((username === "245319733061" || username==="245319733062" || username==="245319733063" || username==="245319733064" ||username === "245319733065" || username==="245319733066" || username==="245319733067" || username==="245319733068" || username==="245319733069" || username==="245319733070"
     ||username === "245319733071" || username==="245319733072" || username==="245319733073" || username==="245319733074" ||username === "245319733075" || username==="245319733076" || username==="245319733077" || username==="245319733078" || username==="245319733079" || username==="245319733080"
     ||username === "245319733081" || username==="245319733082" || username==="245319733083" || username==="245319733084" ||username === "245319733085" || username==="245319733086" || username==="245319733087" || username==="245319733088" || username==="245319733089" || username==="245319733090"
      ||username === "245319733087" ||username === "245319733115" || username === "2453197330116"|| username === "245319733120")
     && password === "cseb-ngit") {
        alert("You have successfully logged in.");
        //window.open('cse-b/index.html')
        window.location = "cse-B/index.html";
    } 
    else if((username === "245319733001" || username==="245319733002" || username==="245319733003" || username==="245319733004" ||username === "245319733005" || username==="245319733006" || username==="245319733007" || username==="245319733008" || username==="245319733009" || username==="245319733010"
     ||username === "245319733011" || username==="245319733012" || username==="245319733013" || username==="245319733014" ||username === "245319733015" || username==="245319733016" || username==="245319733017" || username==="245319733018" || username==="245319733019" || username==="245319733020"
     ||username === "245319733021" || username==="245319733022" || username==="245319733023" || username==="245319733024" ||username === "245319733025" || username==="245319733026" || username==="245319733027" || username==="245319733028" || username==="245319733029" || username==="245319733030")
    && password === "csea-ngit"){
        alert("You have successfully logged in.");
        //window.open('cse-A/index.html')
        window.location = "cse-A/index.html";

    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})