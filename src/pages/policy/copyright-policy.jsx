import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const CopyrightPolicy = () => {
    return (
        <>
            <Head>
                <title>Copyright Policy | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, Copyright Policy of IJOPT, Policy of IJOPT' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Copyright Policy of IJPOT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.co.in/policy/copyright-policy" />
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
                        "url": "https://ijopt.co.in/policy/copyright-policy",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Copyright Policy of IJOPT"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.co.in/policy/privacy-policy",
                                "name": "Privacy Policy"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.co.in/policy/terms-and-condition",
                                "name": "Terms and Conditions"
                            },
                        ],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', 'guidelines']} title='Copyright Policy | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Copyright Policy</h1>
                    <hr className='mt-0' />

                    <h5>Copyright Ownership:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        Authors retain the copyright of their published work in IJOPT. By submitting their manuscripts, authors grant IJOPT a non-exclusive license to publish and distribute the content in print and online formats.
                    </p>

                    <h5>Licensing Terms:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        All articles published in IJOPT are licensed under a Creative Commons Attribution (CC BY) license. This allows users to copy, distribute, and adapt the work with proper attribution to the original author.
                    </p>

                    <h5>Author Rights:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        Authors have the right to share their published work on personal websites, institutional repositories, and other platforms with appropriate citation. Authors can use their work for educational and research purposes without seeking additional permission from IJOPT.
                    </p>

                    <h5>Third-Party Content:</h5>
                    <hr className='mt-0' />
                    <p className={inter?.className}>
                        Authors must ensure that any third-party content (e.g., figures, tables) included in their submissions complies with copyright regulations and necessary permissions are obtained. IJOPT is not responsible for any copyright infringement within submitted manuscripts.
                    </p>

                    <h5>Plagiarism Policy:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            IJOPT follows a strict plagiarism policy and reserves the right to take necessary actions, including retraction, in case of copyright violations.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CopyrightPolicy