import React, { useContext,} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id , name, price, description,image}) => {
    
    const { cartItem,addCart,removeFromCart}=useContext(StoreContext);



  return (
    <div className='food-Item'>
        <div className="food-item-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItem[id]
                ?<img className='add' onClick={()=>addCart(id)} src={assets.add_icon_white} alt="" />
                :<div className='food-item-couter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItem[id]}</p>
                    <img onClick={()=>addCart(id)} src={assets.add_icon_green} alt="" />
                </div>
                
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rata">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-discp">{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
