import React, { useContext } from 'react'
import { getContrastYIQ } from '../Helpers'
import MainContext from '../Context/MainContext'
import ClipboardButton from 'react-clipboard.js';


function Brand({ brand }) {
    const { setselectedBrands, selectedBrands, setcopied } = useContext(MainContext);

    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setselectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setselectedBrands([...selectedBrands, brand.slug])
        }
    }
    const setColor = (color) => {
        setcopied(color)
    }


    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected} >{brand.title}</h5>
            <div className='brand-colors'>
                {brand.colors.map(color => (
                    <ClipboardButton data-clipboard-text={"#"+color} onSuccess={() => setColor(color)} component="span" style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>
                        {"#"+color}
                    </ClipboardButton>
                ))}
            </div>
        </div>
    )
}

export default Brand