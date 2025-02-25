import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import drDarshan from '../../public/assets/img/members/Dr.DarshanParmar.JPG'
import drJaspreetKaur from '../../public/assets/img/members/DrJaspreetKaurKang.JPG'
import drDineshSorani from '../../public/assets/img/members/DrDineshSorani.png'
import drWaqarNaqvi from '../../public/assets/img/members/waqar-naqvi.JPG'
import drAshishKakkad from '../../public/assets/img/members/DrAshishKakkad.png'
import drParitaDave from '../../public/assets/img/members/DrParitaDave.jpg'
import Link from 'next/link'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const EditorialBoard = () => {
    return (
        <>
            <Head>
                <title>Editorial Board of Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, Editorial Members of IJOPT, members of ijopt' />
                <meta name="description" content="Learn about the Indian Journal of Physical Therapy (IJOPT). We are an open-access, peer-reviewed journal publishing original research and articles in physiotherapy." />

                <meta property="og:title" content="Editorial Board of Indian Journal of Physical Therapy" />
                <meta property="og:description" content="Learn about IJOPT, an open-access, peer-reviewed journal publishing original research in physiotherapy." />
                <meta property="og:url" content="https://ijopt.co.in/editorial-board" />
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
                        "url": "https://ijopt.co.in/editorial-board",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT) is an open-access, peer-reviewed journal publishing original research in physiotherapy.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijopt@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Editorial Board of IJOPT"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.co.in/about/ijopt",
                                "name": "About IJOPT"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.co.in/about/journal-information",
                                "name": "Journal Information"
                            }
                        ]
                    })}
                </script>
            </Head>
            <section className='editorial-board-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/']} title='Editorial Board | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Editorial Board - Indian Journal of Physical Therapy (IJOPT)</h1>
                    <hr className='mt-0' />

                    <h5>Managing Director:</h5>
                    <hr className='mt-0' />
                    <div className='member-card'>
                        <div className="left-content">
                            <Image src={drDarshan} alt='Dr. Darshan Parmar' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Darshan Parmar</p>
                            <p className={inter?.className}>MPT in Neurological Conditions</p>
                            <p className={inter?.className}>Asst. Professor at KD Institute of Physiotherapy, Ahmedabad</p>
                            <p className={inter?.className}>Founder of PhysioZine</p>
                        </div>
                    </div>

                    <h5 className='mt-3'>Chief Editor:</h5>
                    <hr className='mt-0' />
                    <div className='member-card'>
                        <div className="left-content">
                            <Image src={drJaspreetKaur} alt='Dr. Jaspreet Kaur Kang' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Jaspreet Kaur Kang</p>
                            <p className={inter?.className}>PhD, MPT in Neurological Conditions</p>
                            <p className={inter?.className}>Principal at KD Institute of Physiotherapy, Ahmedabad</p>
                        </div>
                    </div>

                    <h5 className='mt-3'>Associate Editor:</h5>
                    <hr className='mt-0' />
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card'>
                                <div className="left-content">
                                    <Image src={drDineshSorani} alt='Dr. Dinesh Sorani' quality={100} className='img-fluid' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Dinesh Sorani</p>
                                    <p className={inter?.className}>PhD, MPT in Physical and Functional Diagnosis</p>
                                    <p className={inter?.className}>Principal at Govt. Physiotherapy College, Jamnagar</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card'>
                                <div className="left-content">
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Megha Sheth</p>
                                    <p className={inter?.className}>MPT in Rehabilitation</p>
                                    <p className={inter?.className}>Lecturer at SBB College of Physiotherapy, Ahmedabad</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Amrutkuvar Shivaji Rayjade</p>
                                    <p className={inter?.className}>PhD, MPT in Orthopedics</p>
                                    <p className={inter?.className}>Principal and Professor, D. Y. Patil College of Physiotherapy, Kolhapur</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <h5 className='mt-3'>International Editor:</h5>
                    <hr className='mt-0' />
                    <div className='member-card'>
                        <div className="left-content">
                            <Image src={drWaqarNaqvi} alt='Dr. Waqar Naqvi' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Waqar Naqvi</p>
                            <p className={inter?.className}>PhD - PT, PhD - Health Professions Education (ABD)</p>
                            <p className={inter?.className}>International FAIMER Institute Fellow, Qatar</p>
                        </div>
                    </div>

                    <h5 className='mt-3'>Advisory Member:</h5>
                    <hr className='mt-0' />
                    <div className='member-card'>
                        <div className="left-content">
                            <Image src={drAshishKakkad} alt='Dr. Ashish Kakkad' quality={100} className='img-fluid' />
                        </div>
                        <div className="right-content">
                            <p className={`member-name ${antonSC?.className}`}>Dr. Ashish Kakkad</p>
                            <p className={inter?.className}>PhD, MPT in Neurological Conditions</p>
                            <p className={inter?.className}>Principal at Faculty of Physiotherapy, Marwadi University (MU), Rajkot</p>
                        </div>
                    </div>

                    <h5 className='mt-3'>Editors:</h5>
                    <hr className='mt-0' />
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    {/* <Image src={drAshishKakkad} alt='Dr. Salvi Shah' quality={100} className='img-fluid' /> */}
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Moushumi Debnath</p>
                                    <p className={inter?.className}>PhD Scholar, MPT in Neurological Conditions</p>
                                    <p className={inter?.className}>Associate Professor at Rashtrant Janardan Swami College of Physiotherapy, Kokamtham</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    {/* <Image src={drAshishKakkad} alt='Dr. Salvi Shah' quality={100} className='img-fluid' /> */}
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Raj Kiran Tiku</p>
                                    <p className={inter?.className}>PhD Scholar, MPT in Cardiopulmonary Conditions</p>
                                    <p className={inter?.className}>Professor/HOD at Suryadatta Institute of Health Sciences College of Physiotherapy, Pune</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    {/* <Image src={drAshishKakkad} alt='Dr. Salvi Shah' quality={100} className='img-fluid' /> */}
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Mandeep Kang</p>
                                    <p className={inter?.className}>PhD, MPT in Sports</p>
                                    <p className={inter?.className}>Assistant Professor at Sri Guru Ram Das University of Health Sciences, Amritsar</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    {/* <Image src={drAshishKakkad} alt='Dr. Salvi Shah' quality={100} className='img-fluid' /> */}
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Advita Neville Deepak</p>
                                    <p className={inter?.className}>PhD, MPT in Cardiopulmonary Conditions</p>
                                    <p className={inter?.className}>Associate Professor at Parul University, Vadodara</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    {/* <Image src={drAshishKakkad} alt='Dr. Salvi Shah' quality={100} className='img-fluid' /> */}
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Salvi Shah</p>
                                    <p className={inter?.className}>PhD, MPT in Sports</p>
                                    <p className={inter?.className}>Associate Professor at SPB Physiotherapy College, Surat</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <h5 className='mt-3'>Reviewers:</h5>
                    <hr className='mt-0' />
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    {/* <Image src={drParitaDave} alt='Dr. Himanshu Sharma' quality={100} className='img-fluid' /> */}
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Devangi Desai</p>
                                    <p className={inter?.className}>MPT in Rehabilitation</p>
                                    <p className={inter?.className}>Professor at Pioneer Physiotherapy College, Vadodara</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    {/* <Image src={drParitaDave} alt='Dr. Himanshu Sharma' quality={100} className='img-fluid' /> */}
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Jalpa Parikh</p>
                                    <p className={inter?.className}>MPT in Neurological Conditions</p>
                                    <p className={inter?.className}>Associate Professor at LJ Institute of Physiotherapy, Ahmedabad</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    {/* <Image src={drParitaDave} alt='Dr. Himanshu Sharma' quality={100} className='img-fluid' /> */}
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Himanshu Sharma</p>
                                    <p className={inter?.className}>MPT in Neurological Conditions</p>
                                    <p className={inter?.className}>Associate Professor at Mahalaxmi College of Physiotherapy and Rehabilitation Centre Raigaon Satara Maharashtra</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    {/* <Image src={drParitaDave} alt='Dr. Himanshu Sharma' quality={100} className='img-fluid' /> */}
                                    <FontAwesomeIcon icon={faUser} color='gray' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Badri Vishal</p>
                                    <p className={inter?.className}>PhD Scholar, MPT in Neurological Conditions</p>
                                    <p className={inter?.className}>Assistant Professor at Era University, Lucknow</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='member-card mt-3'>
                                <div className="left-content">
                                    <Image src={drParitaDave} alt='Dr. Parita Dave' quality={100} className='img-fluid' />
                                </div>
                                <div className="right-content">
                                    <p className={`member-name ${antonSC?.className}`}>Dr. Parita Dave</p>
                                    <p className={inter?.className}>PhD Scholar, MPT in Cardiopulmonary Conditions</p>
                                    <p className={inter?.className}>Associate Professor at KD Institute of Physiotherapy, Ahmedabad</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default EditorialBoard
