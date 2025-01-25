import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TextLogo from '../../../public/assets/img/logo.png'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { RiMenu3Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa"
import { useScroll } from 'framer-motion'
import { IoMdHome } from "react-icons/io"
import { Col, Row } from 'react-bootstrap'
import useMediaQuery from '@/hooks/useMediaQuery'

const antonSC = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

function Header () {
  const router = useRouter()
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [dropdownOpen, setDropDownOpen] = useState(false)
  const { scrollY } = useScroll();
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const width = useMediaQuery('(max-width: 576px)')

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      // Change this value to the number of pixels you want to scroll before showing the shadow
      if (latest > 100 && !shouldShowShadow) {
        setShouldShowShadow(true);
      } else if (latest <= 100 && shouldShowShadow) {
        setShouldShowShadow(false);
      }
    });

    return () => unsubscribe();
  }, [scrollY, shouldShowShadow]);

  const handleClick = (e, path) => {
    e?.preventDefault()

    setIsNavExpanded(false)
    router?.push(path)
  }

  const allAboutRoutes = router?.route?.includes('/about/ijopt') || router?.route?.includes('/about/research-areas') || router?.route?.includes('/about/journal-information')

  const allAuthorToolsRoutes = router?.route?.includes('/author-tools/guidelines') || router?.route?.includes('/author-tools/submit-paper-online') || router?.route?.includes('/author-tools/article-processing-charge') || router?.route?.includes('/author-tools/hard-copy-certificate')

  const allPolicyRoutes = router?.route?.includes('/policy/payment-terms-and-condition') || router?.route?.includes('/policy/peer-review-policy') || router?.route?.includes('/policy/open-access-policy')
  return (
    <>
      <header id='header' className={`fixed-top bg-white header ${shouldShowShadow ? 'headerScrolled' : ''}`}
        animate={{
          boxShadow: shouldShowShadow
            ? '0px 2px 15px rgba(0, 0, 0, 0.187)'
            : "none"
        }}
        transition={{ duration: 0.5 }}
      >
        <div className={` home`}>
          <div className={isNavExpanded ? 'top_header' : 'top_headerWeb'}>
            <h1 className='logo mr-auto' title='IJOPT'>
              <Link href='/' style={{ fontWeight: '500' }} passHref>
                {/* IJOPT */}
                <Image src={TextLogo} alt='' quality={100} width={250} height={100} priority />
              </Link>
            </h1>
            <div>
              <h1 className={`text-logo ${antonSC?.className}`}>Indian Journal of Physical Therapy</h1>
              <h5 className={`sub-title ${antonSC?.className}`}>An International Journal</h5>
            </div>
            <button className='menu'
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <RiMenu3Fill />
            </button>
          </div>
          <nav className={isNavExpanded ? `nav_menu expanded d-lg-block` : `nav_menu d-lg-block`}
          >
            <ul>
              <li>
                <Link href='/' title='Home | IJOPT' className={`${router?.route === '/' && 'active'} ${inter.className} homeSvg`} onClick={(e) => handleClick(e, '/')}>Home</Link>
              </li>
              <li className='aboutUs'>
                <span title='About | IJPOT' className={`${allAboutRoutes && 'active'} ${inter.className}`}
                  onClick={() => width ? setDropDownOpen(!dropdownOpen) : ''}
                >About <FaChevronDown /></span>
                <div className={'aboutUsContent'} style={width ? (dropdownOpen ? { display: 'block' } : { display: 'none' }) : undefined}>
                  <Row>
                    <Col lg={3} md={4} sm={12}>
                      <p>Our Services</p>
                      <ul className={'dropdownMenu'}>
                        <li>
                          <Link href='/about/ijopt' title='About Us | IJOPT' className={`${router?.route?.includes('/ijopt') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/about/ijopt')}>About IJOPT</Link>
                        </li>
                        <li>
                          <Link href='/about/research-areas' title='Research Areas | IJOPT' className={`${router?.route?.includes('/about/research-areas') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/about/research-areas')}>Research Areas</Link>
                        </li>
                        <li>
                          <Link href='/about/journal-information' title='Journal Information | IJOPT' className={`${router?.route?.includes('/about/journal-information') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/about/journal-information')}>Journal Information</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                    </Col>
                  </Row>
                </div>
              </li>

              <li className='aboutUs'>
                <span title='Services | PhysioZine' className={`${allAuthorToolsRoutes && 'active'} ${inter.className}`}
                  onClick={() => width ? setDropDownOpen(!dropdownOpen) : ''}
                >For Author <FaChevronDown /></span>
                <div className={'aboutUsContent'} style={width ? (dropdownOpen ? { display: 'block' } : { display: 'none' }) : undefined}>
                  <Row>
                    <Col lg={3} md={4} sm={12}>
                      <p>Authors Tool</p>
                      <ul className='dropdownMenu'>
                        <li>
                          <Link href='/author-tools/guidelines' title='Guidelines | IJOPT' className={`${router?.route?.includes('/author-tools/guidelines') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/author-tools/guidelines')}>Guidelines</Link>
                        </li>
                        <li>
                          <Link href='/author-tools/submit-paper-online' title='Guidelines | IJOPT' className={`${router?.route?.includes('/author-tools/submit-paper-online') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/author-tools/submit-paper-online')}>Submit Paper Online</Link>
                        </li>
                        <li>
                          <Link href='/author-tools/article-processing-charge' title='Article Processing Charge | IJOPT' className={`${router?.route?.includes('/author-tools/article-processing-charge') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/author-tools/article-processing-charge')}>Article Processing Charge</Link>
                        </li>
                        <li>
                          <Link href='/author-tools/hard-copy-certificate' title='Article Processing Charge | IJOPT' className={`${router?.route?.includes('/author-tools/hard-copy-certificate') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/author-tools/hard-copy-certificate')}>Hard Copy Certificate</Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </li>
              <li>
                <Link href={'/editorialMember'} title='Editorial Members | PhysioZine' className={`${router?.route?.includes('/editorialMember') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/editorialMember')}>Editorial Board</Link>
              </li>
              <li>
                <Link href={'/editorialMember'} title='Editorial Members | PhysioZine' className={`${router?.route?.includes('/editorialMember') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/editorialMember')}>Archives</Link>
              </li>
              <li className='aboutUs'>
                <span title='Services | PhysioZine' className={`${allPolicyRoutes && 'active'} ${inter.className}`}
                  onClick={() => width ? setDropDownOpen(!dropdownOpen) : ''}
                >Policies <FaChevronDown /></span>
                <div className={'aboutUsContent'} style={width ? (dropdownOpen ? { display: 'block' } : { display: 'none' }) : undefined}>
                  <Row>
                    <Col lg={3} md={4} sm={12}>
                      <p>Terms and Conditions</p>
                      <ul className='dropdownMenu'>
                        <li>
                          <Link href='/policy/payment-terms-and-condition' title='Payment Terms and Condition | IJOPT' className={`${router?.route?.includes('/policy/payment-terms-and-condition') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/payment-terms-and-condition')}>Payment (T&C)</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                      <p>Policies</p>
                      <ul className='dropdownMenu'>
                        <li>
                          <Link href='/policy/peer-review-policy' title='Peer Review Policy | IJOPT' className={`${router?.route?.includes('/policy/peer-review-policy') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/peer-review-policy')}>Peer Review</Link>
                        </li>
                        <li>
                          <Link href='/policy/open-access-policy' title='Open Access Policy | IJOPT' className={`${router?.route?.includes('/policy/open-access-policy') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/open-access-policy')}>Open Access</Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </li>

              <li>
                <Link href={'/contact'} className={`${router?.route?.includes('/contact') && 'active'} ${inter.className}`} title='Contact | PhysioZine' onClick={(e) => handleClick(e, '/contact')}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header 