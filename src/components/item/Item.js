import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Button from '../button/Button'

import './item.css'

export default function Item(props) {

   const {
      title,
      desk,
      deskLink,
      backgroundImg,
      leftBtnText,
      leftBtnLink,
      rightBtnText,
      rightBtnLink,
      twoButtons,
      first
   } = props

   return (
      <div className="item" style={{
         backgroundImage: `url(${backgroundImg})`
      }}>
         <div className="item__container">
            <div className="item__text">
               <p>{title}</p>
               <div className="item__textDesc">
                  <p>{desk}</p>
               </div>
            </div>
            <div className="item__lowerThird">
               <div className="item__buttons">
                  <Button imp ="primary"
                     text={leftBtnText}
                     link={leftBtnLink} />
                  { twoButtons && (
                     <Button imp="secondary"
                        text={rightBtnText}
                        link={rightBtnLink} />
                  ) }
               </div>
               { first && (
                  <div className="item__expand">
                     <ExpandMoreIcon />
                  </div>
               ) }
            </div>
         </div>
      </div>
   )
}