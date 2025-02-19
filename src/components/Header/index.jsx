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
import { saveAs } from 'file-saver'
import underTakeForm from '../../../public/assets/documents/UNDERTAKING BY AUTHORS.pdf'
import copyrightForm from '../../../public/assets/documents/COPYRIGHT FORM.pdf'
import samplePaperFormat from '../../../public/assets/documents/ijopt-paper-format.docx'

const antonSC = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

function Header () {
  const router = useRouter()
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [aboutDownOpen, setAboutDownOpen] = useState(false)
  const [authorDownOpen, setAuthorDownOpen] = useState(false)
  const [policyDownOpen, setPolicyDownOpen] = useState(false)
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

  const allAboutRoutes = router?.route?.includes('/about/ijopt') || router?.route?.includes('/about/research-areas') || router?.route?.includes('/about/journal-information') || router?.route?.includes('/indexing')

  const allAuthorToolsRoutes = router?.route?.includes('/author-tools/guidelines') || router?.route?.includes('/author-tools/submit-paper-online') || router?.route?.includes('/author-tools/article-processing-charge') || router?.route?.includes('/author-tools/hard-copy-certificate') || router?.route?.includes('/author-tools/article-formatting-service')

  const allPolicyRoutes = router?.route?.includes('/policy/payment-terms-and-condition') || router?.route?.includes('/policy/peer-review-policy') || router?.route?.includes('/policy/open-access-policy') || router?.route?.includes('/policy/privacy-policy') || router?.route?.includes('/policy/terms-and-conditions') || router?.route?.includes('/policy/disclaimer') || router?.route?.includes('/policy/refund-policy') || router?.route?.includes('/policy/copyright-policy') || router?.route?.includes('/policy/plagiarism-policy')

  const toggleDropdown = (dropdown) => {
    if (dropdown === "about") {
      setAboutDownOpen(!aboutDownOpen);
      setAuthorDownOpen(false);
      setPolicyDownOpen(false);
    } else if (dropdown === "author") {
      setAboutDownOpen(false);
      setAuthorDownOpen(!authorDownOpen);
      setPolicyDownOpen(false);
    } else if (dropdown === "policy") {
      setAboutDownOpen(false);
      setAuthorDownOpen(false);
      setPolicyDownOpen(!policyDownOpen);
    }
  }
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
                  onClick={() => width ? toggleDropdown("about") : ''}
                >About <FaChevronDown /></span>
                <div className={'aboutUsContent'} style={width ? (aboutDownOpen ? { display: 'block' } : { display: 'none' }) : undefined}>
                  <Row>
                    <Col lg={3} md={4} sm={12}>
                      <p>Our Services</p>
                      <ul className={'dropdownMenu'}>
                        <li>
                          <Link href='/about/ijopt' title='About Us | IJOPT' className={`${router?.route?.includes('/ijopt') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/about/ijopt')}>About IJOPT</Link>
                        </li>
                        <li>
                          <Link href='/about/indexing' title='Indexing | IJOPT' className={`${router?.route?.includes('/indexing') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/about/indexing')}>IJOPT Indexing</Link>
                        </li>
                        <li>
                          <Link href='/about/research-areas' title='Research Areas | IJOPT' className={`${router?.route?.includes('/about/research-areas') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/about/research-areas')}>Research Areas</Link>
                        </li>
                        <li>
                          <Link href='/about/journal-information' title='Journal Information | IJOPT' className={`${router?.route?.includes('/about/journal-information') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/about/journal-information')}>Journal Information</Link>
                        </li>
                        <li>
                          <Link href='/about/join-as-reviewer' title='Join As Reviewer | IJOPT' className={`${router?.route?.includes('/about/join-as-reviewer') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/about/join-as-reviewer')}>Join As Reviewer</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                    </Col>
                  </Row>
                </div>
              </li>

              <li className='aboutUs'>
                <span title='Author Services | IJOPT' className={`${allAuthorToolsRoutes && 'active'} ${inter.className}`}
                  onClick={() => width ? toggleDropdown("author") : ''}
                >For Author <FaChevronDown /></span>
                <div className={'aboutUsContent'} style={width ? (authorDownOpen ? { display: 'block' } : { display: 'none' }) : undefined}>
                  <Row>
                    <Col lg={3} md={4} sm={12}>
                      <p>Authors Tool</p>
                      <ul className='dropdownMenu'>
                        <li>
                          <Link href='/author-tools/guidelines' title='Guidelines | IJOPT' className={`${router?.route?.includes('/author-tools/guidelines') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/author-tools/guidelines')}>Guidelines</Link>
                        </li>
                        {/* <li>
                          <Link href='/author-tools/submit-paper-online' title='Guidelines | IJOPT' className={`${router?.route?.includes('/author-tools/submit-paper-online') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/author-tools/submit-paper-online')}>Submit Paper Online</Link>
                        </li> */}
                        <li>
                          <Link href='https://app.oxfordabstracts.com/stages/78097/submitter' target='_blank' title='Submit Paper Online | IJOPT' className={`${router?.route?.includes('/author-tools/submit-paper-online') && 'active'} ${inter.className}`}>Submit Paper Online</Link>
                        </li>
                        <li>
                          <Link href='/author-tools/article-processing-charge' title='Article Processing Charge | IJOPT' className={`${router?.route?.includes('/author-tools/article-processing-charge') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/author-tools/article-processing-charge')}>Article Processing Charge</Link>
                        </li>
                        <li>
                          <Link href='/author-tools/hard-copy-certificate' title='Article Processing Charge | IJOPT' className={`${router?.route?.includes('/author-tools/hard-copy-certificate') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/author-tools/hard-copy-certificate')}>Hard Copy Certificate</Link>
                        </li>
                        <li>
                          <Link href='/author-tools/article-formatting-service' title='Article Formatting Service | IJOPT' className={`${router?.route?.includes('/author-tools/article-formatting-service') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/author-tools/article-formatting-service')}>Article Formatting Service</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                      <p>Downloads</p>
                      <ul className={'dropdownMenu'}>
                        <li>
                          <Link href='#' title='Sample Paper Format | IJOPT' className={inter.className} onClick={(e) => saveAs(samplePaperFormat, 'Sample Paper - IJOPT')}>Sample Paper Format</Link>
                        </li>
                        <li>
                          <Link href='#' title='Undertaking Form | IJOPT' className={`${router?.route?.includes('/ijopt') && 'active'} ${inter.className}`} onClick={(e) => saveAs(underTakeForm, 'Undertaking Form - IJOPT')}>Undertaking Form</Link>
                        </li>
                        <li>
                          <Link href='#' title='Copyright Form | IJOPT' className={`${router?.route?.includes('/ijopt') && 'active'} ${inter.className}`} onClick={(e) => saveAs(copyrightForm, 'Copyright Form - IJOPT')}>Copy Right Form</Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </li>
              <li>
                <Link href={'/editorial-board'} title='Editorial Board | IJOPT' className={`${router?.route?.includes('/editorial-board') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/editorial-board')}>Editorial Board</Link>
              </li>
              <li>
                <Link href={'/archives'} title='Archives | IJOPT' className={`${router?.route?.includes('/archives') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/archives')}>Archives</Link>
              </li>
              <li className='aboutUs'>
                <span title='Policies | IJOPT' className={`${allPolicyRoutes && 'active'} ${inter.className}`}
                  onClick={() => width ? toggleDropdown("policy") : ''}
                >Policies <FaChevronDown /></span>
                <div className={'aboutUsContent'} style={width ? (policyDownOpen ? { display: 'block' } : { display: 'none' }) : undefined}>
                  <Row>
                    <Col lg={3} md={4} sm={12}>
                      <p>Terms and Conditions</p>
                      <ul className='dropdownMenu'>
                        <li>
                          <Link href='/policy/payment-terms-and-condition' title='Payment Terms and Condition | IJOPT' className={`${router?.route?.includes('/policy/payment-terms-and-condition') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/payment-terms-and-condition')}>Payment (T&C)</Link>
                        </li>
                        <li>
                          <Link href='/policy/terms-and-conditions' title='Terms and Condition | IJOPT' className={`${router?.route?.includes('/policy/terms-and-conditions') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/terms-and-conditions')}>Terms and Conditions</Link>
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
                        <li>
                          <Link href='/policy/privacy-policy' title='Privacy Policy | IJOPT' className={`${router?.route?.includes('/policy/privacy-policy') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/privacy-policy')}>Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href='/policy/disclaimer' title='Disclaimer | IJOPT' className={`${router?.route?.includes('/policy/disclaimer') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/disclaimer')}>Disclaimer</Link>
                        </li>
                        <li>
                          <Link href='/policy/refund-policy' title='Refund Policy | IJOPT' className={`${router?.route?.includes('/policy/refund-policy') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/refund-policy')}>Refund</Link>
                        </li>

                      </ul>
                    </Col>
                    <Col lg={3} md={4} sm={12}>
                      <p>&nbsp;</p>
                      <ul className='dropdownMenu'>
                        <li>
                          <Link href='/policy/copyright-policy' title='Copyright Policy | IJOPT' className={`${router?.route?.includes('/policy/copyright-policy') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/copyright-policy')}>Copyright</Link>
                        </li>
                        <li>
                          <Link href='/policy/plagiarism-policy' title='Plagiarism Policy | IJOPT' className={`${router?.route?.includes('/policy/plagiarism-policy') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/plagiarism-policy')}>Plagiarism</Link>
                        </li>
                        <li>
                          <Link href='/policy/editor-policy' title='Editor Policy | IJOPT' className={`${router?.route?.includes('/policy/editor-policy') && 'active'} ${inter.className}`} onClick={(e) => handleClick(e, '/policy/editor-policy')}>Editor Policy</Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </li>

              <li>
                <Link href={'/subscription'} className={`${router?.route?.includes('/subscription') && 'active'} ${inter.className}`} title='Subscription | IJPOT' onClick={(e) => handleClick(e, '/subscription')}>
                  Subscription
                </Link>
              </li>
              <li>
                <Link href={'/contact'} className={`${router?.route?.includes('/contact') && 'active'} ${inter.className}`} title='Contact | IJPOT' onClick={(e) => handleClick(e, '/contact')}>
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