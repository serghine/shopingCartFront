


const cartBox=document.querySelector('.cartBox')
const addCart=document.getElementsByClassName('addCart');


let items=[];

for (let index = 0; index < addCart.length; index++) {
addCart[index].addEventListener('click',function(e){
   console.log(e.target.parentElement.children[0].textContent)
   console.log(e.target.parentElement.children[1].children[0].textContent)
    if (typeof(Storage) !="undefined") {
      let item={
          id:index+1,
          name:e.target.parentElement.children[0].textContent,
          prix:e.target.parentElement.children[1].children[0].textContent,
          no:1
      };
    //   localStorage.setItem('items',JSON.stringify(item)); 
    if (JSON.parse(localStorage.getItem('items'))==null) {
        items.push(item)
        localStorage.setItem('items',JSON.stringify(items))
        window.location.reload();
    }else{
        const localitems = JSON.parse(localStorage.getItem('items'))
        localitems.map(data => {
            if (item.id==data.id) {
                item.no = data.no +1
                window.location.reload();
            } else {
              items.push(data)  
            }
        });
        items.push(item);
        localStorage.setItem('items',JSON.stringify(items))
        window.location.reload();
    }

    }else{
        console.log("le storage ne marche pas sur le browser")
    }

})

}

//adding to cart 
let no=0
const shopingP=document.querySelector('.shopingP');
 JSON.parse(localStorage.getItem("items")).map(data=>{
    no= no + data.no
})
shopingP.innerHTML=no
//cartBox
const cartTable=document.querySelector('table');
// console.log(cartTable);
let tableCart="";
tableCart="<tr><th>$ no</th><th>Item Name</th><th>Item No</th><th>Item Price</th><th></th></tr>";
if (JSON.parse(localStorage.getItem('items'))===null) {
    tableCart="<tr><td colspan='5'>pas de produit dans ton panier</td></tr>"

}else{
JSON.parse(localStorage.getItem('items')).map(data=>{
    tableCart +=`<tr><th>${data.no}</th><th>${data.name}</th><th>${data.prix}</th><th>${data.prix}</th><th><a href='#' onclick=supprimer(this);>Delete</a></th></tr>`
  
});
function supprimer(e){
    let items=[];
    JSON.parse(localStorage.getItem('items')).map(data=>{
        if (data.id != e.parentElement.parentElement.children[0].textContent) {
            items.push(data);
        }

    })
    localStorage.setItem('items',JSON.stringify(items))
    window.location.reload();    
}
}
cartTable.innerHTML=tableCart;