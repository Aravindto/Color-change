import React from 'react'
import colorNames from 'colornames'


export const InputField = (props) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Change Color'
                onChange={(e) => {
                    props.setColor(e.target.value)
                    props.setHexValue(colorNames(e.target.value))
                }}
            />
            <button
                onClick={() => props.setDarkText(!props.isDarkText)}
            >Toggle Text color</button>
        </form>
    )
}
