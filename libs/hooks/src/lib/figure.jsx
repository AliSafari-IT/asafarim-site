import React from 'react';


export const Figure = props => {
    return (
      <figure className="center container">
        <object className="image" data={props.data} type="image/png"></object>
        <figcaption class="overlay">{props.caption}</figcaption>
      </figure>
    )
  }