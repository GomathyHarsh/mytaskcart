import './Card.css'
function Card({product,addToCart,cartItems}){
    return <div className='col-lg-4 border mt-2 p-2'>
    <div className='row'>
      <div className='col-lg-12'>
        <img className='img-fluid' src={product.image} alt="..."></img>
      </div>
      <div className='col-lg-12'>
        <h3>{product.name}</h3>
        <h6>Price Rs.{product.Price}</h6>
        <h6>Ratings:{product.ratings}</h6>
        <button disabled={cartItems.some(obj => obj.id === product.id)} onClick={() =>{
          addToCart(product)
        }} className='btn btn-sm btn-primary'>Add To Cart</button>
      </div>
    </div>
  </div>
}
export default Card;