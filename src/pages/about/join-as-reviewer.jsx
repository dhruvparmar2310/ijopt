import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const JoinAsReviewer = () => {
    return (
        <>
            <Head>
                <title>Join as Reviewer | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Join as Reviewer in IJOPT, join ijopt, volunteer in ijopt, how to apply as reviewer in ijopt' />
                <meta name="description" content="Learn about the Indian Journal of Physical Therapy (IJOPT). We are an open-access, peer-reviewed journal publishing original research and articles in physiotherapy." />

                <meta property="og:title" content="About Indian Journal of Physical Therapy" />
                <meta property="og:description" content="Learn about IJOPT, an open-access, peer-reviewed journal publishing original research in physiotherapy." />
                <meta property="og:url" content="https://ijopt.vercel.app/about/ijopt" />
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
                        "name": "About - Indian Journal of Physical Therapy (IJOPT)",
                        "url": "https://ijopt.vercel.app/about/ijopt",
                        "logo": "https://ijopt.vercel.app/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT) is an open-access, peer-reviewed journal publishing original research in physiotherapy.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijopt@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "About IJOPT", "What is IJOPT"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.vercel.app/about/ijopt",
                                "name": "About IJOPT"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.vercel.app/about/journal-information",
                                "name": "Journal Information"
                            }
                        ]
                    })}
                </script>
            </Head>
            <section className='about-us-section'>
                <div className='container inner-content'>
                    <BreadCrumb current='Join As Reviewer - IJOPT' link='Home' title='Join As Reviewer | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Join as a Volunteer Reviewer in Indian Journal of Physical Therapy (IJOPT)</h1>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        The Indian Journal of Physical Therapy (IJOPT) invites dedicated and qualified professionals to join our esteemed panel of volunteer reviewers. As a peer-reviewed journal, we are committed to maintaining the highest standards of academic excellence and scientific integrity. By becoming a reviewer, you contribute significantly to the advancement of physical therapy research and help uphold the quality of published articles.
                    </p>

                    <h5>Why Join as a Reviewer?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <ul>
                            <li>
                                <p>
                                    Gain recognition as an expert in your field.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Contribute to the development of high-quality research in physical therapy.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Enhance your academic and professional credentials.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Stay updated with the latest research and advancements in physical therapy.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Receive an official certificate of recognition for your valuable contributions.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Eligibility Criteria:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            We welcome applications from professionals with:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    A Ph.D., MPT, or equivalent qualification in physical therapy or related fields.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Significant research and academic experience.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Prior experience in peer-reviewing (preferred but not mandatory).
                                </p>
                            </li>
                            <li>
                                <p>
                                    A strong publication record in reputed journals.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Commitment to maintaining ethical review standards and confidentiality.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Reviewer Responsibilities:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            As a volunteer reviewer, you will be expected to:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Conduct a thorough, unbiased, and constructive review of submitted manuscripts.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Provide timely feedback and recommendations on research quality and relevance.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Uphold ethical standards and ensure originality in research articles.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Maintain confidentiality regarding the review process.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>How to Apply?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            Interested candidates can apply by sending their updated CV and a brief cover letter highlighting their expertise and reviewing experience to <strong>editor.ijopt@gmail.com</strong>. Our editorial board will evaluate your application and notify you upon selection.
                        </p>
                        <p>
                            Join us in our mission to promote evidence-based research and excellence in physical therapy. We look forward to your valuable contribution to IJOPT! <br /><br />
                            For any queries, feel free to contact us at <strong>editor.ijopt@gmail.com</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JoinAsReviewer