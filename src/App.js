import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import cart from './assets/icon-cart.svg';
import del from './assets/icon-delete.svg';
import minus from './assets/icon-minus.svg';
import plus from './assets/icon-plus.svg';
import previous from './assets/icon-previous.svg';
import next from './assets/icon-next.svg';
import close from './assets/icon-close.svg';
import menu from './assets/icon-menu.svg';
import avatar from './assets/image-avatar.png';
import thumnail1 from './assets/image-product-1-thumbnail.jpg';
import thumnail2 from './assets/image-product-2-thumbnail.jpg';
import thumnail3 from './assets/image-product-3-thumbnail.jpg';
import thumnail4 from './assets/image-product-4-thumbnail.jpg';
import img1 from './assets/image-product-1.jpg';
import img2 from './assets/image-product-2.jpg';
import img3 from './assets/image-product-3.jpg'; 
import img4 from './assets/image-product-4.jpg';

function App() {
  const [selected, setSelected] = useState(0);
  const [inCart, setInCart] = useState(0)
  const [selectedResult, setSelectedResult] = useState();
  const [img, setImg] = useState(img1);
  const [imgModal, setImgModal] = useState(img1);

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
    if(e.target.id == 'thum1'){
      setImg(img1)
      e.target.className = 'active-thumbnail';
      e.target.parentElement.children[1].className = 'thumbnail';
      e.target.parentElement.children[2].className = 'thumbnail';
      e.target.parentElement.children[3].className = 'thumbnail';
    }
    else if(e.target.id == 'thum2'){
      setImg(img2)
      e.target.className = 'active-thumbnail';
      e.target.parentElement.children[0].className = 'thumbnail';
      e.target.parentElement.children[2].className = 'thumbnail';
      e.target.parentElement.children[3].className = 'thumbnail';
    }
    else if(e.target.id == 'thum3'){
      setImg(img3)
      e.target.className = 'active-thumbnail';
      e.target.parentElement.children[0].className = 'thumbnail';
      e.target.parentElement.children[1].className = 'thumbnail';
      e.target.parentElement.children[3].className = 'thumbnail';
    }
    else if(e.target.id == 'thum4'){
      setImg(img4)
      e.target.className = 'active-thumbnail';
      e.target.parentElement.children[0].className = 'thumbnail';
      e.target.parentElement.children[1].className = 'thumbnail';
      e.target.parentElement.children[2].className = 'thumbnail';
    }
  }

  
  const handleModal = e => {
    if(e.target.parentElement.parentElement.parentElement.children[0].style.display == 'none'){
      e.target.parentElement.parentElement.parentElement.children[0].style.display = 'block'
    }else {
      e.target.parentElement.parentElement.parentElement.children[0].style.display = 'none'
    }
  }

  const handleThumbnailModal = e => {
    if(e.target.id == 'thum1'){
      setImgModal(img1)
      e.target.className = 'active-thumbnail-modal';
      e.target.parentElement.children[1].className = 'thumbnail-modal';
      e.target.parentElement.children[2].className = 'thumbnail-modal';
      e.target.parentElement.children[3].className = 'thumbnail-modal';
    }
    else if(e.target.id == 'thum2'){
      setImgModal(img2)
      e.target.className = 'active-thumbnail-modal';
      e.target.parentElement.children[0].className = 'thumbnail-modal';
      e.target.parentElement.children[2].className = 'thumbnail-modal';
      e.target.parentElement.children[3].className = 'thumbnail-modal';
    }
    else if(e.target.id == 'thum3'){
      setImgModal(img3)
      e.target.className = 'active-thumbnail-modal';
      e.target.parentElement.children[0].className = 'thumbnail-modal';
      e.target.parentElement.children[1].className = 'thumbnail-modal';
      e.target.parentElement.children[3].className = 'thumbnail-modal';
    }
    else if(e.target.id == 'thum4'){
      setImgModal(img4)
      e.target.className = 'active-thumbnail-modal';
      e.target.parentElement.children[0].className = 'thumbnail-modal';
      e.target.parentElement.children[1].className = 'thumbnail-modal';
      e.target.parentElement.children[2].className = 'thumbnail-modal';
    }
  }

  const handleImgModal = e => {
    e.target.parentElement.parentElement.nextSibling.style.display = 'flex';
  }

  const handleClose = e => {
    e.target.parentElement.style.display = 'none';
  }

  const handlePrev = e => {
    if(imgModal === img2){
      setImgModal(img1)
      e.target.parentElement.lastChild.children[0].className = 'active-thumbnail-modal';
      e.target.parentElement.lastChild.children[1].className = 'thumbnail-modal';
    }
    else if(imgModal === img3){
      setImgModal(img2)
      e.target.parentElement.lastChild.children[1].className = 'active-thumbnail-modal';
      e.target.parentElement.lastChild.children[2].className = 'thumbnail-modal';
    }
    else if(imgModal === img4){
      setImgModal(img3)
      e.target.parentElement.lastChild.children[2].className = 'active-thumbnail-modal';
      e.target.parentElement.lastChild.children[3].className = 'thumbnail-modal';
    }
  }

  const handleNext = e => {
    if(imgModal === img1){
      setImgModal(img2)
      e.target.parentElement.lastChild.children[1].className = 'active-thumbnail-modal';
      e.target.parentElement.lastChild.children[0].className = 'thumbnail-modal';
    }
    else if(imgModal === img2){
      setImgModal(img3)
      e.target.parentElement.lastChild.children[2].className = 'active-thumbnail-modal';
      e.target.parentElement.lastChild.children[1].className = 'thumbnail-modal';
    }
    else if(imgModal === img3){
      setImgModal(img4)
      e.target.parentElement.lastChild.children[3].className = 'active-thumbnail-modal';
      e.target.parentElement.lastChild.children[2].className = 'thumbnail-modal';
    }
  }


  return (
    <div className="App">
      <div className="cart-modal">
        <span className='cart-name'>Cart</span>
        <div className="in-cart">
          {selected != 0 && 
            <React.Fragment>
              <img className='cart-thumnail' src={thumnail1} />
              <div className="cart-detail">
                <span className='product-name'>Fall Limited Edition Sneakers</span>
                <div>
                  <span>$125.00 x {selected} <span>${selectedResult}.00</span></span>
                </div>
              </div>
              <img className='del' src={del} onClick={handleDelete}/>
              <a href="#">Check Out</a>
            </React.Fragment>
          }
          {selected == 0 && 
            <span className="empty-cart">Your cart is empty</span>
          }
        </div>
      </div>
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
          <img onClick={handleModal} src={cart} className="cart" />
          <img className='avatar' src={avatar} />
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
              <span className='price'>$250.00</span>
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
        <div className="images">
          <img className='image' onClick={handleImgModal} src={img} />
          <div>
            <img src={thumnail1} onClick={handleImg} className='active-thumbnail' id='thum1'/>
            <img src={thumnail2} onClick={handleImg} className='thumbnail' id='thum2'/>
            <img src={thumnail3} onClick={handleImg} className='thumbnail' id='thum3'/>
            <img src={thumnail4} onClick={handleImg} className='thumbnail' id='thum4'/>
          </div>
        </div>
      </section>
      <div className="modal" style={{display: 'none'}}>
        <img src={close} onClick={handleClose} className="close" />
        <img src={previous} onClick={handlePrev} className="previous" />
        <img src={imgModal} className='img-modal' />
        <img src={next} onClick={handleNext} className="next" />
        <div>
            <img src={thumnail1} onClick={handleThumbnailModal} className='active-thumbnail-modal' id='thum1'/>
            <img src={thumnail2} onClick={handleThumbnailModal} className='thumbnail-modal' id='thum2'/>
            <img src={thumnail3} onClick={handleThumbnailModal} className='thumbnail-modal' id='thum3'/>
            <img src={thumnail4} onClick={handleThumbnailModal} className='thumbnail-modal' id='thum4'/>
        </div>
      </div>
    </div>
  );
}

export default App;
