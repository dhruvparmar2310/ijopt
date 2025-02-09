import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import worldMap from '../../public/assets/img/world-map.svg'
import Link from 'next/link'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, contact ijopt, email of ijopt, phone number of ijopt, mobile number of ijopt, customer care number of ijopt' />
                <meta name="description" content="Learn about the Indian Journal of Physical Therapy (IJOPT). We are an open-access, peer-reviewed journal publishing original research and articles in physiotherapy." />

                <meta property="og:title" content="Contact Indian Journal of Physical Therapy" />
                <meta property="og:description" content="Learn about IJOPT, an open-access, peer-reviewed journal publishing original research in physiotherapy." />
                <meta property="og:url" content="https://ijopt.co.in/contact" />
                <meta property="og:image" content="/favicon.ico" />
                <meta property="og:type" content="website" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />

                {/* <!-- Author and Publisher Meta Tags --> */}
                <meta name="author" content="Indian Journal of Physical Therapy" />
                <meta name="publisher" content="Indian Journal of Physical Therapy" />

                {/* Structured Data SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Indian Journal of Physical Therapy",
                        "url": "https://ijopt.co.in/contact",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT) is an open-access, peer-reviewed journal publishing original research in physiotherapy.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijopt@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Contact IJOPT"],
                    })}
                </script>
            </Head>
            <section className='contact-section'>
                <div className='container inner-content'>
                    <BreadCrumb current='Contact - IJOPT' link='Home' title='Contact | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Contact Us</h1>
                    <hr className='mt-0' />

                    <div>
                        <Image src={worldMap} quality={100} className='img-fluid' />
                    </div>

                    <Row className='mt-4'>
                        <Col lg={4}>
                            <div className={`contact-card ${inter?.className}`}>
                                <h6>Address</h6>
                                <div className='line'></div>
                                <p>
                                    Aatishya 100, Nr. Lubi Corporate Road, opp. Tulsi Status, Ahmedabad, Gujarat 382470
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className='mt-md-0 mt-3'>
                            <div className={`contact-card ${inter?.className}`}>
                                <h6>Email Address</h6>
                                <div className='line'></div>

                                <Link href='mailto:editor.ijopt@gmail.com'>
                                    editor.ijopt@gmail.com
                                </Link>
                            </div>
                        </Col>
                        <Col lg={4} className='mt-md-0 mt-3'>
                            <div className={`contact-card ${inter?.className}`}>
                                <h6>Phone Number</h6>
                                <div className='line'></div>

                                <Link href='tel:+917984377793'>
                                    +91 7984 377 793
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Contact