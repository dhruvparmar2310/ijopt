import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import PhysioZineLogo from '../../../public/assets/img/5.png'
import Link from 'next/link'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const Indexing = () => {
    const indexingImg = [
        { sImage: '/assets/img/index/google-scholar.jpg', sAlt: 'Google Scholar' },
        { sImage: '/assets/img/index/Crossref-Logo.jpeg', sAlt: 'Crossref' },
        { sImage: '/assets/img/index/issn_logo.png', sAlt: 'ISSN' },
        { sImage: '/assets/img/index/ResearchGate_logo.png', sAlt: 'Research Gate' },
        { sImage: '/assets/img/index/Open_Access_logo.png', sAlt: 'Open Access' },
        { sImage: '/assets/img/index/cukurova_logo.png', sAlt: 'Cukurova' },
        { sImage: '/assets/img/index/ici2.png', sAlt: 'ICI2' },
        { sImage: '/assets/img/index/logo_world_of_journals.png', sAlt: 'ICI World of Journal' },
        { sImage: '/assets/img/index/scispace-logo.svg', sAlt: 'scispace logo' },
        { sImage: '/assets/img/index/zenodo.png', sAlt: 'Zenodo' },
        { sImage: '/assets/img/index/DOI_logo.png', sAlt: 'DOI' },
        { sImage: '/assets/img/index/am.jpeg', sAlt: 'Acedemia' },
        { sImage: '/assets/img/index/OpenAire_Logo.jpg', sAlt: 'Open Aire' },
        { sImage: '/assets/img/index/orcid.logo.png', sAlt: 'ORCID' },
        { sImage: '/assets/img/index/Linkedin-Logo.png', sAlt: 'LinkedIn' },
    ]
    return (
        <>
            <Head>
                <title>IJOPT Indexing</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, About IJOPT, about indian journal of physical therapy, What is IJOPT, ijopt indexing' />
                <meta name="description" content="Learn about the Indian Journal of Physical Therapy (IJOPT). We are an open-access, peer-reviewed journal publishing original research and articles in physiotherapy." />

                <meta property="og:title" content="About Indian Journal of Physical Therapy" />
                <meta property="og:description" content="Learn about IJOPT, an open-access, peer-reviewed journal publishing original research in physiotherapy." />
                <meta property="og:url" content="https://ijopt.co.in/about/indexing" />
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
                        "name": "Indexing - Indian Journal of Physical Therapy (IJOPT)",
                        "url": "https://ijopt.co.in/about/indexing",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT) is an open-access, peer-reviewed journal publishing original research in physiotherapy.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijopt@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "About IJOPT", "What is IJOPT", "IJOPT Indexing"],
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
                    <BreadCrumb basePath={['/', '/indexing']} title='IJOPT Indexing' />

                    <h1 className='section-title'>Indexing - Indian Journal of Physical Therapy (IJOPT)</h1>
                    <hr className='mt-0' />

                    <Row>
                        {indexingImg?.map(item => {
                            return (
                                <Col lg={3} md={4} sm={6} key={item.sImage}>
                                    <div className='my-3 d-flex align-center justify-content-center w-full'>
                                        <Image src={item.sImage} className='img-fluid' alt={item.sAlt} width={150} height={150} />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Indexing