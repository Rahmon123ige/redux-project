import { useDispatch, useSelector } from 'react-redux'
import { delItem } from '../redux/action/index'
import { Link } from 'react-router-dom'

function Cart() {
    const state = useSelector((state) => state.addItems)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }
    const cartItems = (cartItem) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
              <div className="container py-4">
                <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
                <div className="row justity-content-center">
                    <div className="col-md-4">
                        <img src={cartItem.img} alt="" height={'200px'} width={'180px'} />
                    </div>
                    <div className="col-md-4">
                        <h3>{cartItem.title}</h3>
                        <p className="lead fw-bold">{cartItem.price}</p>
                    </div>
                </div>
              </div>
            </div>
          )
    }
  const emptyCart = () => {
    return(
        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
            </div>
        </div>
    )
  }
  const button =() => {
    return(
        <div className="container">
            <div className="row">
                <Link className="btn btn-outline-primary mb-5 w-25 mx-auto" to='/Checkout'>Proceed to checkpoint</Link>
            </div>
        </div>
    )
  }
  return(
    <div>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !==0 && button()}
    </div>
  )
}

export default Cart
