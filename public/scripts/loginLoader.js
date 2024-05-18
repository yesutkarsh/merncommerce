const userEmail = document.querySelector("#email")
const signup = document.querySelector("#signUp")

const form = document.querySelector("#form")



try {
       document.querySelector("#signUp").addEventListener("click",()=>{
        document.querySelector("#titleAcc").style.display = "none"
        document.querySelector("#loading").style.display = "flex"
    })
    
} catch (error) {
    console.log(error)
}
