import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const Disclaimer = () => {
    return (
        <>
            <Head>
                <title>Disclaimer | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, Disclaimer of IJOPT' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Disclaimer of IJPOT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.vercel.app/policy/disclaimer" />
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
                        "url": "https://ijopt.vercel.app/policy/disclaimer",
                        "logo": "https://ijopt.vercel.app/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Disclaimer of IJOPT"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.vercel.app/policy/privacy-policy",
                                "name": "Privacy Policy"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.vercel.app/policy/terms-and-condition",
                                "name": "Terms and Conditions"
                            },
                        ],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb current='Disclaimer - IJOPT' link='Home' title='Disclaimer | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Disclaimer</h1>
                    <hr className='mt-0' />

                    <p className={inter?.className}>
                        The content published by the Indian Journal of Physical Therapy (IJOPT) is for informational and educational purposes only. IJOPT does not provide medical advice, diagnosis, or treatment. Readers should consult qualified healthcare professionals for medical concerns. The views expressed in published articles are those of the authors and do not necessarily reflect the views of IJOPT. IJOPT is not responsible for any inaccuracies, errors, or omissions in the content provided. Use of IJOPT content is at the reader's own risk.
                    </p>

                    <p className={inter?.className}>
                        <em>
                            Our journal undergoes a rigorous peer-review and refereed journals. However, for indexing status and inclusion in databases such as UGC CARE, Scopus, or Web of Science, we recommend referring to the latest and updated lists available on their respective websites. Currently Journal is only peer-review. Journal follow all above guidelines only. The information provided here may become outdated and should be independently verified
                        </em>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Disclaimer