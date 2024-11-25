const myCart = [
    {
        cousre:"js course",
        price:3999
    },


    {
        cousre:"py course",
        price:399
    },

    {
        cousre:"c course",
        price:4999
    },


    {
        cousre:"mobile course",
        price:5999
    }
]


const priceToPay = myCart.reduce( (acc,item) => item.price+acc ,0)

console.log(priceToPay);
