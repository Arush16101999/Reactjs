import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these BREED Dogs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/d2.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Sheperd'
              path='/'
            />
            <CardItem
              src='images/d1.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Labrador Retirever'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/d4.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Foliage'
              path='/services'
            />
            <CardItem
              src='images/d3.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Husky'
              path='/products'
            />
            <CardItem
              src='images/d5.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Golden Retirever'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
