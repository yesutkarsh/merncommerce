const loadingAnimation = document.getElementById("loading")
const fullImage = "https://res.cloudinary.com/dpcvcblbt/image/upload/v1716212586/"
let fetching = async ()=>{
    let data = await fetch("https://api-gold-phi.vercel.app/api")
    data = await data.json()
    loadingAnimation.style.display="none"


    let mensOnly = data.filter(menItem => menItem.gender === "men")
    mensOnly.map(EachProduct =>{
        let rootElement = document.getElementById("products")

        let product = document.createElement("div")
        product.id="product"
        
        let img = document.createElement("img")
        img.setAttribute('src', fullImage+EachProduct.image)
        let cartbutton = document.createElement("button")
        cartbutton.textContent="ADD TO CART"
        
        let purchaseButton = document.createElement("button")
        purchaseButton.textContent="VIEW"
        purchaseButton.addEventListener('click',()=>{
            window.location.href = `/viewProduct/${EachProduct.productId}`
        })



        
        product.appendChild(img)
        product.appendChild(cartbutton)
        product.appendChild(purchaseButton)
        
        rootElement.append(product)
        
        cartbutton.addEventListener('click',()=>{
            window.localStorage.setItem(elem.uid,[1,2])
        })
    })

}






fetching()
