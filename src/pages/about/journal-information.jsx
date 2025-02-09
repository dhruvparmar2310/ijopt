import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Col, Row, Table } from 'react-bootstrap'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const JournalInformation = () => {
    return (
        <>
            <Head>
                <title>Journal Information | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, About IJOPT Journal, journal info of ijopt' />
                <meta name="description" content="Learn about the Indian Journal of Physical Therapy (IJOPT). We are an open-access, peer-reviewed journal publishing original research and articles in physiotherapy." />

                <meta property="og:title" content="Journal Information of IJPOT" />
                <meta property="og:description" content="Learn about IJOPT, an open-access, peer-reviewed journal publishing original research in physiotherapy." />
                <meta property="og:url" content="https://ijopt.co.in/about/journal-information" />
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
                        "url": "https://ijopt.co.in/about/journal-information",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT) is an open-access, peer-reviewed journal publishing original research in physiotherapy.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijopt@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Journal Info of IJOPT"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.co.in/about/journal-information",
                                "name": "Journal Information"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.co.in/about/ijopt",
                                "name": "About IJOPT"
                            }
                        ]
                    })}
                </script>
            </Head>
            <section className='research-areas-section'>
                <div className='container inner-content'>
                    <BreadCrumb current='Journal Information - IJOPT' link='Home' title='Journal Information | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Journal Information</h1>
                    <hr className='mt-0' />

                    <div>
                        <Table responsive hover striped bordered>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <td>Indian Journal of Physical Therapy (IJOPT)</td>
                                </tr>
                                <tr>
                                    <th>Frequency</th>
                                    <td>4/12 (Jan - Mar, Apr - June, July - Sept, Oct - Dec)</td>
                                </tr>
                                <tr>
                                    <th>ISSN No.</th>
                                    <td>2321-5690</td>
                                </tr>
                                <tr>
                                    <th>Managing Director</th>
                                    <td>Dr. Darshan Parmar</td>
                                </tr>
                                <tr>
                                    <th>Chief Editor</th>
                                    <td>Dr. Jaspreet Kaur Kang</td>
                                </tr>
                                <tr>
                                    <th>Copyright</th>
                                    <td>Indian Journal of Physical Therapy © 2025, All Rights Reserved.</td>
                                </tr>
                                <tr>
                                    <th>Starting Year</th>
                                    <td>2013</td>
                                </tr>
                                <tr>
                                    <th>Subject</th>
                                    <td>Medical Science, Physiotherapy</td>
                                </tr>
                                <tr>
                                    <th>Language</th>
                                    <td>English</td>
                                </tr>
                                <tr>
                                    <th>Publication Format</th>
                                    <td>Online and Print</td>
                                </tr>
                                <tr>
                                    <th>Email Address</th>
                                    <td>editor.ijopt@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone No.</th>
                                    <td>+91 79843 77793</td>
                                </tr>
                                <tr>
                                    <th>Website</th>
                                    <td>www.ijopt.co.in</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>Indian Journal of Physical Therapy, Rajkot, Gujarat - 360002</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <Row className='mt-3'>
                        <Col lg={6} md={6} sm={12}>
                            <h5>Aims:</h5>
                            <hr className='mt-0' />
                            <div className={inter?.className}>
                                <p>
                                    The Indian Journal of Physical Therapy aims to:
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            Provide a platform for high-quality research and advancements in the field of physical therapy.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Foster collaboration between researchers, clinicians, and academicians.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Promote evidence-based practice to improve patient outcomes globally.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Disseminate knowledge on innovative therapeutic techniques and rehabilitation strategies.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5>Vision:</h5>
                            <hr className='mt-0' />
                            <p className={inter?.className}>
                                Our vision is to be a globally recognized and respected journal that contributes to the continuous development of physical therapy through scholarly publications, fostering innovation, and enhancing clinical practices to benefit society.
                            </p>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default JournalInformation