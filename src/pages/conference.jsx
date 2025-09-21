import React from 'react'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import logo1 from '../../public/assets/img/conference/jg-logo.png'
import logo2 from '../../public/assets/img/conference/JG-College.png'
import { Button, Table } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const Conference = () => {
    return (
        <>
            <Head>
                <title>JG Physiocon 2026</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, physiotherapy conference, conference of ijopt, conference of PhysioZine, JG Physiocon, National Physiotherapy Conference' />
                <meta name="description" content="National Physiotherapy Conference; 20th - 21st February, 2026. Venue: Ahmedabad" />

                <meta property="og:title" content="JG Physiocon 2026" />
                <meta property="og:description" content="National Physiotherapy Conference; 20th - 21st February, 2026. Venue: Ahmedabad" />
                <meta property="og:url" content="https://ijopt.co.in/conference" />
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
                        "url": "https://ijopt.co.in/conference",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "National Physiotherapy Conference; 20th - 21st February, 2026. Venue: Ahmedabad",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Conference of IJOPT", "JG Physiocon 2026"],
                    })}
                </script>
            </Head>
            <section className='conference-section'>
                <div className='container'>
                    <BreadCrumb basePath={['/']} title='Conference - IJOPT' />

                    <h1 className='section-title'>National Physiotherapy Conference</h1>
                    <hr className='mt-0' />

                    <div className='conference-content'>
                        <div className='top-content'>
                            <div className="left-content">
                                <h1 className={`${inter?.className} title`}>JG Physiocon 2026</h1>
                                <h1 className={`subtitle ${inter?.className}`}>Restoring Movement and Rebuilding Lives</h1>
                                <hr />
                                <p className={`location ${inter?.className}`}>Venue: Pandit Deendayal Upadhyay Auditorium, Rajpath Rangoli Road, Behind Rajpath Club, Off. S.G Highway, Ahmedabad</p>
                            </div>
                            <div className="right-content">
                                <div className='date'>
                                    <div className={inter?.className}>20</div>
                                    <div className={inter?.className}>21</div>
                                </div>
                                <div className={`month ${inter?.className}`}>February, 2026</div>
                                {/* <h3>Date: 20<sup>th</sup> & 21<sup>st</sup> Feb, 2026</h3> */}
                            </div>
                        </div>
                        <div className="bottom-content">
                            <div className="organizer-details">
                                <h2 className={inter?.className}>Organized By & In Association With</h2>
                                <div>
                                    <Image src={logo2} alt='logo' quality={100} priority />
                                    <Image src={logo1} alt='logo' quality={100} priority />
                                </div>
                            </div>

                            <div className={`${inter?.className} registration-details`}>
                                <p>Registration Details</p>
                                <Table bordered hover responsive striped>
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Super Early Bird (Till 15th November, 2025)</th>
                                            <th>Early Bird (16th November - 31st December, 2025)</th>
                                            <th>Late Bird (1st January - 19th February, 2026)</th>
                                            <th>Spot Registration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Student Delegates</td>
                                            <td>2700 /-</td>
                                            <td>3000 /-</td>
                                            <td>3500 /-</td>
                                            <td>4000 /-</td>
                                        </tr>
                                        <tr>
                                            <td>Academicians & Physiotherapists</td>
                                            <td>2900 /-</td>
                                            <td>3200 /-</td>
                                            <td>3700 /-</td>
                                            <td>4200 /-</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <p>Events:</p>
                                <div className="event-btn-groups">
                                    <Button onClick={() => window.open('/assets/documents/conference/Scintific.pdf', '_blank')}>Scientific Paper & Poster Presentation, Quiz</Button>
                                    <Button onClick={() => window.open('/assets/documents/conference/Sports Rules.pdf', '_blank')}>Sports</Button>
                                    <Button onClick={() => window.open('/assets/documents/conference/Cultural Rules.pdf', '_blank')}>Cultural</Button>
                                    <Button onClick={() => window.open('/assets/documents/conference/Student Forum.pdf', '_blank')}>Student Forum</Button>
                                    <Button onClick={() => window.open('/assets/documents/conference/Logo Competition.pdf', '_blank')}>Logo Competition</Button>
                                    <Button variant='success' onClick={() => window.open('https://axisbpayments.razorpay.com/jgphysiocon', '_blank')}>Registration Link</Button>
                                </div>
                                <p className="note"><em>Note: Click on the events to get rules.</em></p>
                                <hr />

                                <p>National Level Professional Awards:</p>
                                <div className='event-btn-groups'>
                                    <Button onClick={() => window.open('/assets/documents/conference/AWARD NOMINATION - JG PHYSIOCON.pdf', '_blank')}>Nomination Award Rules</Button>
                                    <Button variant='success' onClick={() => window.open('https://forms.gle/nrHBae1uu3oyi3aJ7', '_blank')}>Registration Link</Button>
                                </div>
                                <hr />

                                <p>Contact Details:</p>
                                <div className="contact-details">
                                    <h3>Dr. Mihirdev Jhala (PT) - 8849966410</h3>
                                    <h3>Dr. Gira Thakrar (PT) - 9537875513</h3>
                                </div>
                                <hr />

                                <div className='media-partner'>
                                    <div className="media-partner-details">
                                        <p>Media Partner</p>
                                        <Image src={'/assets/img/5.png'} alt='logo' width={250} height={50} quality={100} priority />
                                    </div>
                                    <div className="media-partner-details">
                                        <p>Publishing Partner</p>
                                        <Image src={'/assets/img/logo.png'} alt='logo' width={250} height={60} quality={100} priority />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Conference
