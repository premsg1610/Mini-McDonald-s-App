


// let countBurger = 0;
// let countWrap = 0;
// let countBeverages = 0;
// let countMcPuff = 0;
// let countFries = 0;
// let countIceTea = 0;
// let countIceCream = 0;


let order = []

let imgArr = []





function burgerFun(){

    let store = document.querySelector("#burgerLabel").innerText
    if(document.querySelector("#burger").checked == true)
    {
        order.push(store)
        console.log(order)  
        imgArr.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyinr23OWU38hw4Yl75nPqtVSEJltalBi-tg&usqp=CAU") 
        console.log(imgArr)
    }
    else{
        for(let i=0; i<order.length; i++)
         {
            if(order[i] == store)
            {
                order.splice(i,1)
                imgArr.splice(i,1)
            }
         }
        // order.pop()
        console.log(order)
        console.log(imgArr)
       }
}

function wrapFun(){

    let store = document.querySelector("#wrapLabel").innerText
    if(document.querySelector("#wrap").checked == true)
    {
        order.push(store)
        console.log(order)   
        imgArr.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb2IaFYwACVnQ0sTmshnkLdGJk87jckOKqA&usqp=CAU") 
        console.log(imgArr)
    }
    else{
        for(let i=0; i<order.length; i++)
         {
            if(order[i] == store)
            {
                order.splice(i,1)
                imgArr.splice(i,1)
            }
         }
        // order.pop()
        console.log(order)
        console.log(imgArr)
    } 
}



function cokeFun(){

    let store = document.querySelector("#cokeLabel").innerText
    if(document.querySelector("#coke").checked == true)
    {
        order.push(store)
        console.log(order) 
        imgArr.push("https://www.rd.com/wp-content/uploads/2020/10/mcdonalds-coke-collage.jpg?fit=700,1024")
        console.log(imgArr)
    }
    else{
        for(let i=0; i<order.length; i++)
         {
            if(order[i] == store)
            {
                order.splice(i,1)
                imgArr.splice(i,1)
            }
         }
        // order.pop()
        console.log(order)
        console.log(imgArr)
    }    
}

function mcPuffFun(){

    let store = document.querySelector("#mcPuffLabel").innerText
    if(document.querySelector("#mcPuff").checked == true)
    {
        order.push(store)
        console.log(order) 
        imgArr.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQ_D1P96TD10C2qpLk3wv3HwI6iiJGFCFQg&usqp=CAU")
        console.log(imgArr)
    }
    else{
        for(let i=0; i<order.length; i++)
         {
            if(order[i] == store)
            {
                order.splice(i,1)
                imgArr.splice(i,1)
            }
         }
        // order.pop()
        console.log(order)
        console.log(imgArr)
    }   
}

function friesFun(){

    let store = document.querySelector("#friesLabel").innerText
    if(document.querySelector("#fries").checked == true)
    {
        order.push(store)
        console.log(order) 
        imgArr.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRhaGcIa1_9a-Gp25snfCHTVUhccdO4RUhw&usqp=CAU")
        console.log(imgArr)
    }
    else{
        for(let i=0; i<order.length; i++)
         {
            if(order[i] == store)
            {
                order.splice(i,1)
                imgArr.splice(i,1)
            }
         }
        // order.pop()
        console.log(order)
        console.log(imgArr)
    }  
}




function iceCreamFun(){

    let store = document.querySelector("#iceCreamLabel").innerText
    if(document.querySelector("#iceCream").checked == true)
    {
        order.push(store)
        console.log(order) 
        imgArr.push("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mcdonalds-popcorn-caramel-ice-cream-cone-1579804983.jpg")
        console.log(imgArr)
    }
    else{
        for(let i=0; i<order.length; i++)
         {
            if(order[i] == store)
            {
                order.splice(i,1)
                imgArr.splice(i,1)
            }
         }
        // order.pop()
        console.log(order)
        console.log(imgArr)
    }  
}


    

// on click order function

function orderFood(){


    let status = "open"
   

    let myPromise = new Promise(function (resolve,reject) {

        let time = Math.random() * 10 * 1000;
        // math.random gives value b/w 0 and 1
        // to get max value i.e, 1, we multiplied it with 10
        // multiplied by 1000 to convert it into seconds
        
        setTimeout(function () {

            if(status === "open" && order.length>0){
                resolve(order)
            }
            else{
                reject()
            }
        },time);
    });

    myPromise.then(function(res){

        console.log(`Your ${res} is ready`)
        // console.log("Your Order Id is: " + Math.floor(Math.random()*100))

        let orderId = "Your Order Id is: " + Math.floor(Math.random()*100 +1);
        document.querySelector("#orderId").innerText = orderId


        // to show order images

        document.querySelector("#bottomBox").innerHTML = null
        imgArr.map(function(el){

            let image = document.createElement("img")
            image.src = el

            document.querySelector("#bottomBox").append(image)
        })
    })
    myPromise.catch(function(err){
        console.log(`Please Select the food item first`)
        let errordiv= document.querySelector("#bottomBox")
        errordiv.innerHTML = null
        let errorMsg = document.createElement("h2")
        // errorMsg.style.border = "1px solid black"
        errorMsg.style.width = "100vw"
        errorMsg.style.textAlign = "center"
        errorMsg.style.color = "rgb(255, 208, 0)"
        errorMsg.innerText = "Please Select the food item first"
        errordiv.append(errorMsg)

        document.querySelector("#orderId").innerText = "Your Order id is:------"
        
    })
}








// combo--https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals:1-4-product-tile-desktop

// burger-- https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyinr23OWU38hw4Yl75nPqtVSEJltalBi-tg&usqp=CAU

// wrap---> 

// fries-->https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRhaGcIa1_9a-Gp25snfCHTVUhccdO4RUhw&usqp=CAU

// coke--->

// icecream--->

// mcpuff-->