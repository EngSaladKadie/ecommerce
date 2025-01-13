import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-Menu' id='explore-Menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu text'>choose from a dirverse menu featuring
             a delectalble array pf fishees. Our mession is sitfy your craving and elevate your dining expernces one dellicious mealat time</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default ExploreMenu