const userEmail = document.querySelector("#email")
const signup = document.querySelector("#signUp")

const form = document.querySelector("#form")

form.addEventListener('submit',(event)=>{
        const email = userEmail.value.split("@")[1]
        if(email !== "outlook.com" && email !== "gmail.com" && email !== "zoho.com" && email !== "protonmail.com"){
            event.preventDefault();
            alert("Please Use Different Email Provider. (Ex. Gmail or Zoho)")
        }

})


try {
                document.querySelector("#signUp").addEventListener("click",()=>{
        document.querySelector("#titleAcc").style.display = "none"
        document.querySelector("#loading").style.display = "flex"
    })
    
} catch (error) {
    console.log(error)
}
