import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import PhysioZineLogo from '../../../public/assets/img/5.png'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const IJOPT = () => {
    return (
        <>
            <Head>
                <title>About Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, About IJOPT, about indian journal of physical therapy, What is IJOPT' />
                <meta name="description" content="Learn about the Indian Journal of Physical Therapy (IJOPT). We are an open-access, peer-reviewed journal publishing original research and articles in physiotherapy." />

                <meta property="og:title" content="About Indian Journal of Physical Therapy" />
                <meta property="og:description" content="Learn about IJOPT, an open-access, peer-reviewed journal publishing original research in physiotherapy." />
                <meta property="og:url" content="https://ijopt.co.in/about/ijopt" />
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
                        "url": "https://ijopt.co.in/about/ijopt",
                        "logo": "https://ijopt.co.in/favicon.ico",
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
            <section className='about-us-section'>
                <div className='container inner-content'>
                    <BreadCrumb current='About - IJOPT' link='Home' title='About Us | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>About - Indian Journal of Physical Therapy (IJOPT)</h1>
                    <hr className='mt-0' />

                    <div className='text-center'>
                        <Image src={PhysioZineLogo} alt='PhysioZine Logo' quality={100} className='img-fluid' />
                    </div>
                    <p className={`${antonSC?.className} sub-title`}>PhysioZine's Management of the Indian Journal of Physical Therapy</p>
                    <p className={`${inter?.className}`}>PhysioZine, a leading digital platform dedicated to physiotherapy and rehabilitation sciences, proudly manages the Indian Journal of Physical Therapy (IJOPT). With a commitment to advancing physiotherapy knowledge and fostering innovation in the field, PhysioZine brings its extensive experience and expertise to ensure the journal meets the highest standards of academic excellence.</p>

                    <h5>Our Role in IJOPT:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            As the official management body, PhysioZine oversees the entire publication process of the Indian Journal of Physical Therapy, including:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Editorial Oversight</strong>: Ensuring the publication of high-quality, peer-reviewed research articles.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Publication Management</strong>: Handling the journal's operational aspects, from submission to final publication.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Digital Presence</strong>: Leveraging PhysioZine's well-established online platform to enhance the journal's visibility and accessibility.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Collaboration</strong>: Working closely with authors, reviewers, and readers to promote knowledge sharing and professional growth.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Why PhysioZine?</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            PhysioZine's reputation as a trusted resource in the physiotherapy community makes it an ideal partner for IJPT. Our platform features:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    A strong online presence through <Link href='https://physiozine.vercel.app' target='_blank'>PhysioZine's website</Link>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    A network of esteemed professionals and experts in the field.
                                </p>
                            </li>
                            <li>
                                <p>
                                    A dedication to promoting cutting-edge research and evidence-based practices.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Our Commitment to Excellence</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            PhysioZine is dedicated to upholding the integrity and quality of the Indian Journal of Physical Therapy by:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Encouraging groundbreaking research and innovation.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Providing timely and efficient publication processes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Offering a global platform for researchers to showcase their work.
                                </p>
                            </li>
                        </ul>

                        <p>
                            For more information about PhysioZine and its management of the Indian Journal of Physical Therapy, visit our website at <Link href='https://physiozine.vercel.app/' target='_blank'>https://physiozine.vercel.app/</Link> or contact us at <a href='mailto:physiozinemagazine@gmail.com' target='_blank'>physiozinemagazine@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IJOPT
