import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const ArticleFormattingService = () => {
    return (
        <>
            <Head>
                <title>Article Formatting Service | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, article formatting service' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Article Formatting Services of IJPOT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.co.in/author-tools/article-formatting-service" />
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
                        "url": "https://ijopt.co.in/author-tools/article-formatting-service",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijopt@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Article Formatting Services of IJOPT"],
                    })}
                </script>
            </Head>
            <section className='about-us-section'>
                <div className='container inner-content'>
                    <BreadCrumb current='Article Formatting Service - IJOPT' link='Home' title='Article Formatting Service | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Editing Article Format According to IJOPT Guidelines</h1>
                    <hr className='mt-0' />

                    <p className={`${inter?.className}`}>
                        Ensuring that your article adheres to the Indian Journal of Physical Therapy (IJOPT) formatting guidelines is crucial for a smooth publication process. To assist authors, we offer a professional <strong>article formatting service</strong> to align your submission with the <strong>IJOPT format</strong>, ensuring compliance with the journal’s standards.
                    </p>

                    <h5>What We Offer?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Proper structuring of your article as per IJOPT guidelines.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Formatting of headings, subheadings, and references.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Adjustment of font style, size, and spacing.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Standardization of tables, figures, and citations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Formatting of references as per the prescribed style.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Service Charges:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            <FontAwesomeIcon icon={faSackDollar} size='lg' color='#bd973e' /> <strong>₹1000/-</strong> per article for Indian Authors and <strong>$25</strong> for International Authors
                        </p>
                        <p>
                            If you wish to avail of this service, please contact us or submit your article for formatting. This will ensure that your manuscript meets IJOPT standards and is ready for review. For inquiries or submissions, reach out to us on <strong>editor.ijopt@gmail.com</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArticleFormattingService