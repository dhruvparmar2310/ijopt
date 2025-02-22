import React, { Fragment, Suspense, useState } from 'react'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import { Button, Col, OverlayTrigger, Row, Spinner, Table, Tooltip } from 'react-bootstrap'
import { useRouter, withRouter } from 'next/router'
// import { articles } from '@/data/articles'
import { MdContentCopy } from "react-icons/md"
import copy from 'clipboard-copy'
import { Bounce, toast } from 'react-toastify'
import { FaDownload } from 'react-icons/fa6'
import { saveAs } from 'file-saver'
import { FaEye, FaUserCircle } from 'react-icons/fa'
import { Inter, Ubuntu } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { archiveList } from '@/data/archives'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const inter = Inter({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

function Archives ({ data }) {
    const router = useRouter()
    const [isCopied, setIsCopied] = useState(false)
    const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
    const [btnToggle, setBtnToggle] = useState({
        volOne: true,
        volTwo: false,
        volThree: false,
        volFour: false,
        volFive: false
    })

    const handleCopyLink = async (link) => {
        try {
            await copy(link)
            setIsCopied(true)
            toast.success('Copied to clipboard', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                toastId: 'copied'
            })
        } catch (err) {
            setIsCopied(false)
            toast.error('Failed to copy link', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                toastId: 'copied'
            })
        }
    }

    const handleAccordionClick = (index) => {
        setOpenAccordionIndex(index === openAccordionIndex ? -1 : index);
    };
    return (
        <>
            <Head>
                <title>Archives | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, archives of ijopt, articles of ijopt, ijopt articles' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Archives of IJPOT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.co.in/archives" />
                <meta property="og:image" content="favicon.ico" />
                <meta property="og:type" content="website" />

                <link rel="icon" href="favicon.ico" />
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
                        "url": "https://ijopt.co.in/archives",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "editor.ijopt@gmail.com",
                            "contactType": "Contact Us"
                        },
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Archives of IJOPT", "Articles of IJOPT", "IJOPT Archives", "IJOPT Articles"],
                        "potentialAction": [
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.co.in/about/ijopt",
                                "name": "About IJOPT"
                            },
                            {
                                "@type": "ReadAction",
                                "target": "https://ijopt.co.in/about/contact",
                                "name": "Contact Us"
                            }
                        ]
                    })}
                </script>
            </Head>

            <Suspense fallback={<Spinner animation='border' size='md' variant='primary' />}>
                <section className={`archives-section container`}>
                    <BreadCrumb current='Archives - IJOPT' link='Home' title='Archives | Indian Journal of Physical Therapy' />
                    <div className={`inner-content`}>
                        <h1 className='section-title'>Our Archives</h1>
                        <hr className='mt-0' />

                        <div className={``}>
                            <div className={`all-tabs`}>
                                <span className={`tab ${inter?.className} ${btnToggle?.volOne ? `active` : ''}`} onClick={() => setBtnToggle({ volOne: true })}>
                                    2013
                                </span>
                                <span className={`tab ${inter?.className} ${btnToggle?.volTwo ? `active` : ''}`} onClick={() => setBtnToggle({ volTwo: true })}>
                                    2014
                                </span>
                                <span className={`tab ${inter?.className} ${btnToggle?.volThree ? `active` : ''}`} onClick={() => setBtnToggle({ volThree: true })}>
                                    2015
                                </span>
                                <span className={`tab ${inter?.className} ${btnToggle?.volFour ? `active` : ''}`} onClick={() => setBtnToggle({ volFour: true })}>
                                    2016
                                </span>
                                <span className={`tab ${inter?.className} ${btnToggle?.volFive ? `active` : ''}`} onClick={() => setBtnToggle({ volFive: true })}>
                                    2017
                                </span>
                            </div>

                            <div className={`tab-content`}>
                                {/* //! Here volOne is not for volume, its Issue Number */}
                                {btnToggle?.volOne && (<>
                                    <Row>
                                        {archiveList?.[2013]?.map(({ _id, sName, sImage, sPdfFile, aJournals }) => {
                                            return (
                                                <Col lg={2} md={4} sm={12} key={_id}>
                                                    <div className='issue-card' onClick={() => {
                                                        aJournals?.length > 0 ? router.push({
                                                            pathname: `/articles/Volume-2/Issue-1`,
                                                            query: { publishedDate: 'February, 2025' }
                                                        })
                                                            : window.open(sPdfFile, "_blank")
                                                    }}>
                                                        <div className='card-top'>
                                                            <LazyLoadImage
                                                                alt={sName}
                                                                src={sImage}
                                                                effect='blur'
                                                                className='img-fluid'
                                                                threshold={100}
                                                            />
                                                        </div>
                                                        <div className='card-bottom'>
                                                            <p className={inter?.className}>{sName}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </>)}

                                {btnToggle?.volTwo && (<>
                                    <Row>
                                        {archiveList?.[2014]?.map(({ _id, sName, sImage, sPdfFile }) => {
                                            return (
                                                <Col lg={2} key={_id}>
                                                    <div className='issue-card' onClick={() => window.open(sPdfFile, "_blank")}>
                                                        <div className='card-top'>
                                                            <LazyLoadImage
                                                                alt={sName}
                                                                src={sImage}
                                                                effect='blur'
                                                                className='img-fluid'
                                                                threshold={100}
                                                            />
                                                        </div>
                                                        <div className='card-bottom'>
                                                            <p className={inter?.className}>{sName}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </>)}

                                {btnToggle?.volThree && (<>
                                    <Row>
                                        {archiveList?.[2015]?.map(({ _id, sName, sImage, sPdfFile }) => {
                                            return (
                                                <Col lg={2} key={_id}>
                                                    <div className='issue-card' onClick={() => window.open(sPdfFile, "_blank")}>
                                                        <div className='card-top'>
                                                            <LazyLoadImage
                                                                alt={sName}
                                                                src={sImage}
                                                                effect='blur'
                                                                className='img-fluid'
                                                                threshold={100}
                                                            />
                                                        </div>
                                                        <div className='card-bottom'>
                                                            <p className={inter?.className}>{sName}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </>)}

                                {btnToggle?.volFour && (<>
                                    <Row>
                                        {archiveList?.[2016]?.map(({ _id, sName, sImage, sPdfFile }) => {
                                            return (
                                                <Col lg={2} key={_id}>
                                                    <div className='issue-card' onClick={() => window.open(sPdfFile, "_blank")}>
                                                        <div className='card-top'>
                                                            <LazyLoadImage
                                                                alt={sName}
                                                                src={sImage}
                                                                effect='blur'
                                                                className='img-fluid'
                                                                threshold={100}
                                                            />
                                                        </div>
                                                        <div className='card-bottom'>
                                                            <p className={inter?.className}>{sName}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </>)}

                                {btnToggle?.volFive && (<>
                                    <Row>
                                        {archiveList?.[2017]?.map(({ _id, sName, sImage, sPdfFile, aJournals }) => {
                                            return (
                                                <Col lg={2} key={_id}>
                                                    <div className='issue-card' onClick={() => {
                                                        aJournals?.length > 0 ? router.push({
                                                            pathname: `/archives/2017/5/1`,
                                                        })
                                                            : window.open(sPdfFile, "_blank")
                                                    }}>
                                                        <div className='card-top'>
                                                            <LazyLoadImage
                                                                alt={sName}
                                                                src={sImage}
                                                                effect='blur'
                                                                className='img-fluid'
                                                                threshold={100}
                                                            />
                                                        </div>
                                                        <div className='card-bottom'>
                                                            <p className={inter?.className}>{sName}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </>)}
                            </div>
                        </div>
                    </div>
                </section >
            </Suspense >
        </>
    )
}

export default withRouter(Archives)

// export const getServerSideProps = async () => {
//     const res = await fetch(`${process.env.DEPLOY}/api/archives`)
//     const data = await res.json()
//     return { props: { data } }
// }