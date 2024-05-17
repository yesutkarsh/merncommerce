try {
    document.querySelector("#submit").addEventListener("click",()=>{
        document.querySelector("#titleAcc").style.display = "none"
        document.querySelector("#loading").style.display = "flex"
    })
    
} catch (error) {
    console.log("error")
}
