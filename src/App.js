import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import cart from './assets/icon-cart.svg';
import del from './assets/icon-delete.svg';
import minus from './assets/icon-minus.svg';
import plus from './assets/icon-plus.svg';
import avatar from './assets/image-avatar.png';
import thumnail1 from './assets/image-product-1-thumbnail.jpg';
import thumnail2 from './assets/image-product-2-thumbnail.jpg';
import thumnail3 from './assets/image-product-3-thumbnail.jpg';
import thumnail4 from './assets/image-product-4-thumbnail.jpg';
import img1 from './assets/image-product-1.jpg';
import img2 from './assets/image-product-2.jpg';
import img3 from './assets/image-product-3.jpg';
import img4 from './assets/image-product-4.jpg';

import { useEffect, useState } from 'react';

function App() {
  const [selected, setSelected] = useState(0);
  const [inCart, setInCart] = useState(0)
  const [selectedResult, setSelectedResult] = useState();
  const [img, setImg] = useState(img1)

  useEffect(() => setSelectedResult(() => {return selected * 125.00}), [selected])

  const handleDelete = () => {
    setSelected(prev => prev - 1)
  }

  const handleMinus = () => {
    if(inCart > 0){
      setInCart(prev => prev - 1)
    }
  }
  const handlePlus = () => {
    setInCart(prev => prev + 1)
  }
  const handleClick = () => {
    setSelected(prev => prev + inCart)
    setInCart(0)
  }

  const handleImg = e => {
    console.log(e)
    if(e.target.id == 'thum1'){
      setImg(img1)
      e.target.className = 'active-thumnail';
      e.target.parentElement.children[1].className = 'thumnail';
      e.target.parentElement.children[2].className = 'thumnail';
      e.target.parentElement.children[3].className = 'thumnail';
    }
    else if(e.target.id == 'thum2'){
      setImg(img2)
      e.target.className = 'active-thumnail';
      e.target.parentElement.children[0].className = 'thumnail';
      e.target.parentElement.children[2].className = 'thumnail';
      e.target.parentElement.children[3].className = 'thumnail';
    }
    else if(e.target.id == 'thum3'){
      setImg(img3)
      e.target.className = 'active-thumnail';
      e.target.parentElement.children[0].className = 'thumnail';
      e.target.parentElement.children[1].className = 'thumnail';
      e.target.parentElement.children[3].className = 'thumnail';
    }
    else if(e.target.id == 'thum4'){
      setImg(img4)
      e.target.className = 'active-thumnail';
      e.target.parentElement.children[0].className = 'thumnail';
      e.target.parentElement.children[1].className = 'thumnail';
      e.target.parentElement.children[2].className = 'thumnail';
    }
  }

  return (
    <div className="App">
      <nav>
        <img className='logo' src={logo}  />
        <div className="links">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="user">
          <img src={cart} className="cart" />
          <div className="cart-modal">
            <span>Cart</span>
            <hr />
            <div className="in-cart">
              {selected != 0 && 
                <React.Fragment>
                  <img src={thumnail1} />
                  <div className="cart-detail">
                    <span className='product-name'>Fall Limited Edition Sneakers</span>
                    <div>
                      <span>$125.00 x {selected} ${selectedResult}.00</span>
                    </div>
                  </div>
                  <img src={del} onClick={handleDelete}/>
                </React.Fragment>
              }
              {selected == 0 && 
                <span className="empty-cart">Your cart is empty</span>
              }
            </div>
          </div>
          <img src={avatar} />
        </div>
      </nav>
      <section>
        <div className="detail">
            <span className="company">SNEAKER COMPANY</span>
            <h3>Fall Limited Edition Sneakers</h3>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
            <div className="prices">
              <div>
                <span className="offered-price">$125.00</span>
                <span className='offer'>50%</span>
              </div>
              <span>$250.00</span>
            </div>
            <div className="add-cart">
              <div>
                <img src={minus} onClick={handleMinus}/>
                {inCart}
                <img src={plus} onClick={handlePlus}/>
              </div>
              <button onClick={handleClick}>
                <img src={cart} />
                <span>Add to cart</span>
              </button>
            </div>
        </div>
        <div className="imgs">
          <img className='image' src={img} />
          <div>
            <img src={thumnail1} onClick={handleImg} className='thumnail' id='thum1'/>
            <img src={thumnail2} onClick={handleImg} className='thumnail' id='thum2'/>
            <img src={thumnail3} onClick={handleImg} className='thumnail' id='thum3'/>
            <img src={thumnail4} onClick={handleImg} className='thumnail' id='thum4'/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
