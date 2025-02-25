import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import React from 'react'
import Head from 'next/head'
import { Table } from 'react-bootstrap'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const Subscription = () => {
    return (
        <>
            <Head>
                <title>Subscription - IJOPT</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, subscribe physiotherapy journal, subscription of ijopt' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Subscription of IJPOT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.co.in/subscription" />
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
                        "url": "https://ijopt.co.in/subscription",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Subscription of IJOPT"],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/']} title='Subscription - IJOPT' />

                    <h1 className='section-title'>Subscription Plans for Indian Journal of Physical Therapy (IJOPT)</h1>
                    <hr className='mt-0' />

                    <p className={`${inter?.className}`}>
                        Stay updated with the latest research and advancements in the field of physical therapy by subscribing to the Indian Journal of Physical Therapy (IJOPT). Our journal provides high-quality, peer-reviewed content tailored for physiotherapy professionals, researchers, and academicians.
                    </p>

                    <h5>Subscription Plans (Hard Copy):</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Plan</th>
                                    <th>Price (INR)</th>
                                    <th>Editions Included</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Single Edition</td>
                                    <td>2000 /-</td>
                                    <td>1 Edition</td>
                                </tr>
                                <tr>
                                    <td>6-Month Plan</td>
                                    <td>3600 /-</td>
                                    <td>2 Editions</td>
                                </tr>
                                <tr>
                                    <td>1 Year Plan</td>
                                    <td>6000 /-</td>
                                    <td>4 Editions</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <h5>Exclusive Benefit for Yearly Subscribers:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            Subscribers of the One-Year Plan will receive a ₹200 discount on the Article Processing Charges (APC) for every article submitted to IJOPT from their institute during their subscription period.
                        </p>
                    </div>

                    <h5>How to Subscribe?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            To subscribe, please follow these steps:
                        </p>
                        <ul>
                            <li>Select your preferred plan.</li>
                            <li>Make the payment via bank transfer/UPI (Details provided below).</li>
                            <li>Send the payment receipt along with your name, postal address, and contact details to editor.ijopt@gmail.com.</li>
                        </ul>
                    </div>

                    <h5>Payment Details:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li><p><strong>Bank Name</strong>: State Bank of India</p></li>
                            <li><p><strong>Account Holder Name</strong>: Darshan Prakashbhai Parmar</p></li>
                            <li><p><strong>Account Number</strong>: 39693011050</p></li>
                            <li><p><strong>IFSC Code</strong>: SBIN0031882</p></li>
                            <li><p><strong>UPI ID</strong>: 7984377793@ptyes</p></li>
                        </ul>

                        <p>
                            For any queries, contact us at editor.ijopt@gmail.com.<br />
                            <strong>Subscribe today and stay ahead in physiotherapy research!</strong>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscription