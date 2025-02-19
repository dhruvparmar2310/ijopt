import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaBookReader } from "react-icons/fa"
import { Form } from 'react-bootstrap'
import logo from '../../../public/assets/img/logo.png'
import Image from 'next/image'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import { saveAs } from 'file-saver'
import underTakeForm from '../../../public/assets/documents/UNDERTAKING BY AUTHORS.pdf'
import copyrightForm from '../../../public/assets/documents/COPYRIGHT FORM.pdf'
import samplePaperFormat from '../../../public/assets/documents/ijopt-paper-format.docx'
import { useRouter } from 'next/router'
import PhysioZineLogo from '../../../public/assets/img/6.png'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const Footer = () => {
    const router = useRouter()
    const [userEmail, setUserEmail] = useState('');
    const [isSmallDevice, setIsSmallDevice] = useState(false);
    const [copyRightYear, setCopyRightYear] = useState(new Date()?.getFullYear())

    const onSubscribe = () => {
        const subject = encodeURIComponent('Subscription to PhysioZine eMagazine');
        const body = encodeURIComponent(`Dear PhysioZine Team,\n\nI would like to subscribe to your PhysioZine eMagazine. I am interested in staying up-to-date with the latest news, insights, and developments in the field of physiotherapy.\n\nPlease add me to your mailing list to receive future issues of the eMagazine.\n\nThank you for your assistance.\n\nBest regards,\n${userEmail}`);
        const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=physiozinemagazine@gmail.com&su=${subject}&body=${body}`;

        // Check if the user is logged in to Gmail
        const isLoggedIn = checkGmailLogin(userEmail);

        if (isSmallDevice) {
            window.open(gmailLink, '_blank');
        } else {
            if (isLoggedIn) {
                // Open the Gmail compose window
                reset()
                const gmailPopup = window.open(gmailLink, '_blank', 'width=800,height=600');
                setGmailWindow(gmailPopup);
            } else {
                // Navigate to the Gmail login screen
                const loginLink = `https://accounts.google.com/AccountChooser?Email=${userEmail}&continue=${encodeURIComponent(gmailLink)}`;

                reset()
                window.open(loginLink, '_blank');
            }

        }
    };

    useEffect(() => {
        const isSmallDevice = window.innerWidth <= 768; // Adjust the breakpoint as needed
        setIsSmallDevice(isSmallDevice);

        const handleResize = () => {
            const isSmallDevice = window.innerWidth <= 768;
            setIsSmallDevice(isSmallDevice);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <footer id="footer" className={`footer`}>
                <div className={`footer_top`}>
                    <div className={`footerContent`}>
                        <div className={`footer_contact`} style={{ width: '20rem' }}>
                            <h3 title='IJOPT'>
                                <Link href="/">
                                    <Image
                                        src={logo}
                                        quality={100}
                                        priority
                                    />
                                </Link>
                            </h3>

                            <div className={`line`}></div>

                            <p className={inter?.className}>
                                Email ID: <span>editor.ijopt@gmail.com</span>
                            </p>
                        </div>

                        <div className={`linkContent`}>
                            <div className={`footerLinksContent mt-lg-4`}>
                                <div className={`footer_links`}>
                                    <h4 className={inter?.className}>Useful Links</h4>
                                    <ul>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/" title='Home | IJOPT' className={inter?.className}>Home</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/about/ijopt" title='About Us | IJOPT' className={inter?.className}>About us</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/author-tools/submit-paper-online" title='Submit Paper | IJOPT' className={inter?.className}>Submit Paper</Link></li>
                                        <li><i className="ri-arrow-right-s-line"></i> <Link href="/author-tools/guidelines" title='Author Guidelines | IJOPT' className={inter?.className}>Guidelines</Link></li>
                                    </ul>
                                </div>

                                <div className={`footer_links`}>
                                    <h4 className={inter?.className}>Quick Links</h4>
                                    <ul>
                                        <li>
                                            <i className="ri-arrow-right-s-line"></i> <Link href='#' title='Sample Paper Format | IJOPT' className={inter.className} onClick={(e) => saveAs(samplePaperFormat, 'Sample Paper - IJOPT')}>Sample Paper Format</Link>
                                        </li>
                                        <li>
                                            <i className="ri-arrow-right-s-line"></i> <Link href='#' title='Undertaking Form | IJOPT' className={`${router?.route?.includes('/ijopt') && 'active'} ${inter.className}`} onClick={(e) => saveAs(underTakeForm, 'Undertaking Form - IJOPT')}>Undertaking Form</Link>
                                        </li>
                                        <li>
                                            <i className="ri-arrow-right-s-line"></i> <Link href='#' title='Copyright Form | IJOPT' className={`${router?.route?.includes('/ijopt') && 'active'} ${inter.className}`} onClick={(e) => saveAs(copyrightForm, 'Copyright Form - IJOPT')}>Copy Right Form</Link>
                                        </li>
                                        <li>
                                            <i className="ri-arrow-right-s-line"></i>  <Link href='/about/join-as-reviewer' title='Join As Reviewer | IJOPT' className={inter.className} onClick={(e) => handleClick(e, '/about/join-as-reviewer')}>Join As Reviewer</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className={`footer_links`}>
                                    <h4 className={`${inter?.className}`}>Managed By</h4>
                                    <div className='powered-by-image'>
                                        <Image src={PhysioZineLogo} quality={100} className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                            {/* <div className={`${styles.line}`}></div> */}
                            {/* <div className={`${styles?.contactDetails}`}>
                                <p style={{ fontSize: '16px' }} className='mt-2'>
                                    <span className=''>Phone:<Link href="tel:7984377793"> +91 7984-377-793</Link></span><br />
                                    <span>Email:<Link href="mailto:physiozinemagazine@gmail.com" title='physiozinemagazine@gmail.com'> physiozinemagazine@gmail.com</Link></span><br />
                                </p>
                            </div> */}
                        </div>

                    </div>
                </div >

                <div className={`row footerCopyRight`} style={{ display: 'flex !important', alignItems: 'center', justifyContent: 'center', alignContent: 'center', padding: '20px', margin: '0 auto' }}>

                    <div className="col-lg-8 p-0">
                        <div className={`copyright ${inter?.className}`}>
                            Copyright &copy; <span style={{ fontSize: '13px' }}>{copyRightYear || '2024'}</span>, <strong style={{ color: 'var(--primary-color)' }}>IJOPT</strong>. All Rights Reserved, Subject to Judiciary of Ahmedabad.
                        </div>
                        <div className={`credits ${inter?.className}`}>
                            Developed by <Link href="https://dhanparmar.netlify.app" target="_blank" title='Dhruv Parmar'>Dhruv Parmar</Link>
                        </div>
                    </div>
                    <div className={`col-lg-4 p-0 social_links`} style={{ textAlign: 'end' }}>
                        {/* <Link href="https://www.magzter.com/magazines/listAllIssues/30405" target="_blank" className={styles.linkedin} title='Magzter | PhysioZine'>
                            <FaBookReader />
                        </Link> */}
                        <Link href="https://www.linkedin.com/company/physiozine/" target="_blank" className='linkedin' title='LinkedIn | PhysioZine'>
                            <FaLinkedinIn />
                        </Link>
                        <Link href="https://chat.whatsapp.com/JDCR6lerXr95qfKZKzexoV" target="_blank" className='whatsapp' title='Whatsapp | PhysioZine'>
                            <FaWhatsapp />
                        </Link>
                        <Link href="https://www.instagram.com/physiozineofficial/" target="_blank" className='instagram' title='Instagram | PhysioZine'>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer
