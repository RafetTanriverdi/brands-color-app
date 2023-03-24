import React, { useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainContext from '../Context/MainContext'
import Brand from './Brand'
import Download from './Download';
import LazyLoad from 'react-lazyload';
import { GrFormPreviousLink } from 'react-icons/gr'

function Collections() {
  const { slugs } = useParams();
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext);

  const history = useNavigate();
  useEffect(() => {
    setSelectedBrands(slugs.split(','))


  }, [])

  const clearSelectedbutton = () => {
    setSelectedBrands([])
    history("/")
  }

  console.log(slugs);
  return (
    <main className='content'>
      <header className="header">
        <Link to="/" onClick={clearSelectedbutton}>
          <button className='back-btn'>
            < GrFormPreviousLink />

          </button>
        </Link>

        {selectedBrands.length === 0 ? history("/"): <Download />}
      </header>
      <section className='brands'>

        {selectedBrands.map(slug => {
          let brand = brands.find(brand => brand.slug === slug)
          return (
            <LazyLoad key={brand.slug} once={true} placeholder="Yükleniyor..." overflow={true}>
              <Brand brand={brand} />
            </LazyLoad>
          )
        })}

      </section>
    </main>
  )
}

export default Collections