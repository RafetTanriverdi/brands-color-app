import React, { useContext, useEffect } from 'react'
import Search from './Search'
import Brand from './Brand'
import MainContext from '../Context/MainContext'
import LazyLoad from 'react-lazyload'
import Download from './Download'
import Loader from './Laoder'
import { forceVisible } from 'react-lazyload';


function Content() {
    const { brands,selectedBrands } = useContext(MainContext);
    useEffect(() => {
        forceVisible();
      }, [brands])

    return (
        <main className='content'>
            <header className="header">
                <Search />
                {selectedBrands.length>0 && <Download/>}
            </header>
            <section className='brands'>

                {brands.map((brand, index) => (
                    <LazyLoad key={brand.slug} once={true} placeholder={<Loader/>}  overflow={true}>
                        <Brand key={index} brand={brand} />
                    </LazyLoad>

                ))}

            </section>

        </main>
    )
}

export default Content