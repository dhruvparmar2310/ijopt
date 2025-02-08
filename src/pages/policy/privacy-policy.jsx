import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, Privacy Policy of IJOPT' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Privacy Policy of IJPOT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.vercel.app/policy/privacy-policy" />
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
                        "url": "https://ijopt.vercel.app/policy/privacy-policy",
                        "logo": "https://ijopt.vercel.app/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Privacy Policy of IJOPT"],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb current='Privacy Policy - IJOPT' link='Home' title='Privacy Policy | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Privacy Policy</h1>
                    <hr className='mt-0' />

                    <p className={inter?.className}>
                        The Indian Journal of Physical Therapy (IJOPT) is committed to protecting the privacy and confidentiality of its authors, reviewers, and website visitors. This privacy policy outlines how IJOPT collects, uses, and safeguards personal information.
                    </p>

                    <h5>Information We Collect:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Personal information such as name, email address, phone number, and institutional affiliation is collected during manuscript submission, peer review, and subscription processes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Technical information, including IP addresses, browser type, and access times, is collected for website analytics.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Payment-related information is securely processed via third-party payment gateways, and IJOPT does not store sensitive financial details.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Use of Collected Information:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Personal data is used for manuscript processing, peer review coordination, and publication-related communication.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Contact information may be used to inform users about journal updates, upcoming events, and policy changes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Aggregated, non-personal data may be used for analytical and improvement purposes.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Data Security:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    IJOPT employs industry-standard security measures to protect personal information from unauthorized access, disclosure, or alteration.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Access to personal data is restricted to authorized personnel only.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Sharing of Information:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    IJOPT does not sell, rent, or trade personal information to third parties.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Data may be shared with service providers (e.g., hosting providers, payment processors) strictly for operational purposes. Information may be disclosed if required by law or legal processes.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Retention of Data:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Personal data is retained only as long as necessary for journal operations and legal compliance.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Users may request deletion of their personal data by contacting IJOPT.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Third-Party Links:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            The IJOPT website may contain links to external sites. IJOPT is not responsible for the privacy practices of such sites.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy