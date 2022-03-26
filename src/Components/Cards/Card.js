import React from 'react'
import image from '../../Assets/images.jpg'
import { Cards, ImageCard, InnerCard, TitleCard, Paragraph } from './Styles.js'


const Card = (props) => {
    return (
        <Cards key={props.id}>
            <ImageCard src={image} alt="img" />
            <InnerCard>
                <TitleCard>Image Title</TitleCard>
                <Paragraph>{props.Title}</Paragraph>
            </InnerCard>
        </Cards>
    )
}
export default Card