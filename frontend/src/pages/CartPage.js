export default function CartPage() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    return <>
{cartItems.length == 0 ? <h1 className="text-white ms-2">No Item In Cart</h1> : <div className="cart">

<table className="table cart-items">
    <tr><th>Image</th> <th>Title</th> <th>Quantity</th> </tr>
{cartItems.map(item =>{
return  <tr>
<td><img src={item.image} alt="" /></td>
<td>{item.title}</td>
<td>{item.qty} <i className="fa fa-trash-alt text-danger ms-2"></i></td>
</tr>
})}              
</table>

<div className="cart-details">
     <div className="cart-details-text">Total price for 5 cart items</div>
     <div className="cart-details-price">$45,0000</div>
     <button className="btn btn-info">Checkout</button>
</div>

</div>  }
    
       


    </>
}