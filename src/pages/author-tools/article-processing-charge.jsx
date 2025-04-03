import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const ArticleProcessingCharge = () => {
    return (
        <>
            <Head>
                <title>Article Processing Charge | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, Article Processing Charge (APC) of IJOPT, APC of IJOPT' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Article Processing Charge of IJOPT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.co.in/author-tools/article-processing-charge" />
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
                        "url": "https://ijopt.co.in/author-tools/article-processing-charge",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Article Processing Charge of IJOPT", "APC of IJOPT"],
                    })}
                </script>
            </Head>
            <section className='about-us-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/article-processing-charge']} title='Article Processing Charge | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Article Processing Charge (APC)</h1>
                    <hr className='mt-0' />

                    <p className={`${inter?.className}`}>
                        The Indian Journal of Physical Therapy (IJOPT) implements an Article Processing Charge (APC) to cover the costs associated with the publication of articles. The APC ensures the sustainability of the journal while providing services such as peer review, editing, layout formatting, and the assignment of a DOI (Digital Object Identifier) to each accepted article.
                    </p>

                    <h5>APC Details:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    <strong>For Indian Authors</strong>: The APC is ₹2000 per article
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>For International Authors</strong>: The APC is $50 per article
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>What Does the APC Cover?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            The APC covers the following services for all accepted articles:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Peer Review: Ensuring a thorough and unbiased review by experts in the field.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Copyediting and Formatting: Professional editing and formatting to meet journal standards.
                                </p>
                            </li>
                            <li>
                                <p>
                                    DOI Assignment: Each published article will be assigned a DOI (Digital Object Identifier), ensuring proper attribution and easier access to the article across platforms and databases.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Online and Print Publication: Your article will be published online and, where applicable, in the print version of the journal.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Payment Process:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Authors will be invoiced once their article is submitted for publication.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Payment can be made via bank transfer, credit/debit card, or other supported online payment methods.
                                </p>
                            </li>
                            <li>
                                <p>
                                    For international authors, the APC will be charged in USD and should be paid through secure online payment methods.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Authors are required to submit the Transaction ID or a screenshot of the payment when making the payment via email along with the Title of Article. Failure to provide the Transaction ID or payment screenshot will result in the rejection of the submission at the review stage. The submission will not be considered for review and will be directly rejected at that step.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Waivers and Discounts:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        Waivers or discounts on the APC may be available in special cases. Authors from low-income countries or those facing financial constraints can apply for a waiver. Please contact the editorial team for further details.
                    </p>

                    <h5>Refund Policy:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        Once the article is accepted and the payment is processed, the APC is non-refundable.
                    </p>

                    <h5>Contact Information:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        For further inquiries regarding the Article Processing Charge or payment details, please feel free to contact us at <strong>editor.ijopt@gmail.com</strong> or call us at <strong>+91 7984 377 794</strong>.<br /><br />
                        We appreciate your support in helping us maintain the quality and reach of IJOPT!
                    </p>
                </div>
            </section>
        </>
    )
}

export default ArticleProcessingCharge
