window.addEventListener('load',async()=>{
    const list = document.getElementById('list');
    const result = await fetch('http://localhost:3000/product/getAllDetails');
    const data = await result.json();
    
    data.forEach(element => {
        let listele= document.createElement("li")
        listele.textContent=element.productId;
        list.appendChild(listele)
    });


})