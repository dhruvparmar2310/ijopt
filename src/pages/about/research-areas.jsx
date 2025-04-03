import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const ResearchAreas = () => {
    return (
        <>
            <Head>
                <title>Research Areas | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, research areas of ijopt' />
                <meta name="description" content="Learn about the Indian Journal of Physical Therapy (IJOPT). We are an open-access, peer-reviewed journal publishing original research and articles in physiotherapy." />

                <meta property="og:title" content="Research Areas of IJOPT" />
                <meta property="og:description" content="Learn about IJOPT, an open-access, peer-reviewed journal publishing original research in physiotherapy." />
                <meta property="og:url" content="https://ijopt.co.in/about/research-areas" />
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
                        "url": "https://ijopt.co.in/about/research-areas",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT) is an open-access, peer-reviewed journal publishing original research in physiotherapy.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijopt@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Research Areas of IJOPT"],
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
                    <BreadCrumb basePath={['/', '/research-areas']} title='Research Areas | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Research Areas</h1>
                    <hr className='mt-0' />

                    <p className={`${inter?.className}`}>
                        The Indian Journal of Physical Therapy - An International Journal welcomes high-quality research contributions that advance the field of physical therapy and rehabilitation sciences. Our journal provides a global platform for scholars, clinicians, and researchers to publish innovative studies and evidence-based practices that enhance patient care and professional knowledge.
                    </p>

                    <div className={`${inter?.className}`}>
                        <p>
                            We encourage submissions from a wide range of research areas, including but not limited to:
                        </p>

                        <ol>
                            <li>
                                <p>Musculoskeletal Physical Therapy</p>
                            </li>
                            <li>
                                <p>Neurological Rehabilitation</p>
                            </li>
                            <li>
                                <p>Cardiopulmonary Physical Therapy</p>
                            </li>
                            <li>
                                <p>Sports Rehabilitation</p>
                            </li>
                            <li>
                                <p>Geriatric Physical Therapy</p>
                            </li>
                            <li>
                                <p>Pediatric Physical Therapy</p>
                            </li>
                            <li>
                                <p>Women's Health in Physical Therapy</p>
                            </li>
                            <li>
                                <p>Orthotics and Prosthetics</p>
                            </li>
                            <li>
                                <p>Evidence-Based Practice and Clinical Decision Making</p>
                            </li>
                            <li>
                                <p>Innovative Technologies in Rehabilitation</p>
                            </li>
                            <li>
                                <p>Community-Based Rehabilitation</p>
                            </li>
                            <li>
                                <p>Pain Management and Therapeutic Modalities</p>
                            </li>
                            <li>
                                <p>Education and Professional Development in Physical Therapy</p>
                            </li>
                            <li>
                                <p>Physiotherapy in Critical Care</p>
                            </li>
                        </ol>

                        <p>
                            We invite original research articles, systematic reviews, case studies, and clinical commentaries that contribute to the advancement of these domains.
                        </p>

                        <p>
                            Join us in fostering scientific excellence and shaping the future of physical therapy through impactful research and innovation.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResearchAreas