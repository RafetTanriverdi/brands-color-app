import React,{useState} from 'react'
import Search from './Search'
import BrandsData from '../brands.json'
import Brand from './Brand'

function Content() {
    
    const brandsArray =[]
    Object.keys(BrandsData).map(key=>{
        brandsArray.push(BrandsData[key])
    })
    console.log(brandsArray);


    const [brands, setbrands] = useState(brandsArray);
    const [selectedBrands, setselectedBrands] = useState([]);


    return (
        <main className='content'>
            <header className="header">
                <Search />
            </header>
            <section className='brands'>
                {brands.map(brand=>(
                    <Brand key={brand.old_id} brand={brand}/>

                ))}

            </section>
        </main>
    )
}

export default Content