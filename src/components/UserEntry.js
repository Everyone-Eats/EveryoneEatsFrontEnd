import React, { Fragment } from 'react';

const UserEntry = props => {
  return (
    <div class='card mb-3' style={{ maxWidth: '540px' }}>
      <div class='row no-gutters'>
        <div class='col-md-4'>
          <img
            src='https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_224ac703-fb38-4b20-ab6d-f3adc0f8a946.jpg'
            class='card-img'
            alt='...'
          />
        </div>
        <div class='col-md-8'>
          <div class='card-body'>
            <h5 class='card-title'>Card title</h5>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <p class='card-text'>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class='card-text'>
              <small class='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEntry;
