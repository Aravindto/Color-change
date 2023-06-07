import React from 'react'

export const Square = (props) => {
    console.log("🚀 ~ file: Square.jsx:7 ~ Square ~ props.color:", props.color)
    console.log("🚀 ~ file: Square.jsx:9 ~ Square ~ props.hexValue:", props.hexValue)
    return (<>
        <section className='square' style={{ backgroundColor: props.color, color: props.isDarkText ? '#000' : '#fff' }}>
            <p>{props.color ? props.color : "empty value"}</p>
            <p>{props.hexValue ? props.hexValue : null}</p>
        </section>
    </>
    )
}
