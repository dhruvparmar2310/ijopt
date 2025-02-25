import BreadCrumb from '@/components/BreadCrumb'
import Head from 'next/head'
import { useRouter, withRouter } from 'next/router'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { saveAs } from 'file-saver'
import { FaUserCircle, FaEye } from "react-icons/fa"
import { FaDownload } from "react-icons/fa6"
import { Abril_Fatface, Comfortaa, Inter, Ubuntu } from 'next/font/google'
import { GrFormPrevious, GrPrevious, GrTextAlignFull } from "react-icons/gr"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faCircleDown, faEye, faFilePdf, faLink, faQuoteLeft, faShare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios'
import { archiveList, archives } from '@/data/archives'
const inter = Inter({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

function ArchiveID ({ data }) {
    const router = useRouter()
    const { archiveID, sArticle } = router.query
    const archivePath = Array.isArray(archiveID) ? archiveID : [];
    const [articleData, setArticleData] = useState({})
    const [currentArticle, setCurrentArticle] = useState({
        volume: '',
        issue: '',
        year: ''
    })
    useEffect(() => {
        if (archiveID) {
            const [publicationYear, Volume, Issue, journalNo] = archiveID
            setCurrentArticle({
                volume: Volume,
                issue: Issue,
                year: publicationYear
            })
            let sArticleStr = `Volume ${Volume}, Issue ${Issue}`

            const data = archiveID?.length === 3 ? archiveList[publicationYear]?.find(issue => issue?.sName === sArticleStr)
                : archiveID?.length === 4 && (archiveList[publicationYear]?.find(issue => issue?.sName === sArticleStr)?.aJournals?.find(journal => journal?._id === journalNo))

            setArticleData(data)
            // archiveList[publicationYear]?.find(issue => issue?.sName === sArticleStr)

        }
    }, [archiveID])

    return (
        <>
            <Head>
                {archiveID?.length === 3 ? (<title>Volume {currentArticle?.volume} | Issue {currentArticle?.issue} | IJOPT</title>) : <title>{articleData?.citation_title} - IJOPT</title>}
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content={`ijopt volume ${currentArticle?.volume} issue ${currentArticle?.issue}, ${articleData?.citation_title} ijopt, ijopt journals, ijopt publications, ijopt articles`} />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                {archiveID?.length === 3 ? <>
                    <meta property="og:title" content={`Volume ${currentArticle?.volume} | Issue ${currentArticle?.issue} | IJOPT`} />
                    <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                    <meta property="og:url" content={`https://ijopt.co.in/${currentArticle?.year}/${currentArticle?.volume}/${currentArticle?.issue}`} />
                    <meta property="og:image" content="favicon.ico" />
                    <meta property="og:type" content="website" />
                </> : <>
                    <meta property="og:title" content={`${articleData?.citation_title} - IJOPT`} />
                    <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                    <meta property="og:url" content={`https://ijopt.co.in/${currentArticle?.year}/${currentArticle?.volume}/${currentArticle?.issue}/${articleData?._id}`} />
                    <meta property="og:image" content="favicon.ico" />
                    <meta property="og:type" content="website" />

                    {/* citation */}
                    <meta name="citation_title" content={articleData?.citation_title} />
                    {articleData?.citation_author?.map(author => {
                        return (
                            <meta name="citation_author" content={author} key={author} />
                        )
                    })}
                    <meta name="citation_publication_date" content={articleData?.citation_publication_date} />
                    <meta name="citation_journal_title" content="Indian Journal of Physical Therapy" />
                    <meta name="citation_journal_title" content="IJOPT" />
                    <meta name="citation_volume" content={articleData?.citation_volume} />
                    <meta name="citation_issue" content={articleData?.citation_issue} />
                    <meta name="citation_firstpage" content={articleData?.citation_firstpage} />
                    <meta name="citation_lastpage" content={articleData?.citation_lastpage} />
                    <meta name="citation_pdf_url" content={`https://ijopt.co.in` + articleData?.sDownLoadUrl} />
                </>}

                <link rel="icon" href="favicon.ico" />
                <link rel="manifest" href="/manifest.json" />

                {/* <!-- Author and Publisher Meta Tags --> */}
                <meta name="author" content="Indian Journal of Physical Therapy" />
                <meta name="publisher" content="Indian Journal of Physical Therapy" />
            </Head>

            <section className={`particular-article-section readArticlePage`} style={{ marginTop: '6rem' }}>
                {Object?.keys(articleData)?.length === 0 ? <>
                    <div>
                        <Skeleton count={1} width={280} height={30} />
                        <Skeleton count={1} height={5} />

                        <Skeleton count={1} className='mt-4' width={260} height={20} />
                        <Skeleton count={1} className='mt-3' width={580} height={35} />
                        <Skeleton count={1} className='mt-1' width={200} height={35} />
                        <Skeleton count={1} className='mt-3' width={230} height={20} />
                        <Skeleton count={1} width={200} height={20} />

                        <div className='d-flex gap-3 mt-2 mb-4'>
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                        </div>

                        <Skeleton count={1} className='mt-4' width={260} height={20} />
                        <Skeleton count={1} className='mt-3' width={580} height={35} />
                        <Skeleton count={1} className='mt-1' width={200} height={35} />
                        <Skeleton count={1} className='mt-3' width={230} height={20} />
                        <Skeleton count={1} width={200} height={20} />

                        <div className='d-flex gap-3 mt-2 mb-4'>
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                        </div>

                        <Skeleton count={1} className='mt-4' width={260} height={20} />
                        <Skeleton count={1} className='mt-3' width={580} height={35} />
                        <Skeleton count={1} className='mt-1' width={200} height={35} />
                        <Skeleton count={1} className='mt-3' width={230} height={20} />
                        <Skeleton count={1} width={200} height={20} />

                        <div className='d-flex gap-3 mt-2'>
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                        </div>

                        <Skeleton count={1} className='mt-4' width={260} height={20} />
                        <Skeleton count={1} className='mt-3' width={580} height={35} />
                        <Skeleton count={1} className='mt-1' width={200} height={35} />
                        <Skeleton count={1} className='mt-3' width={230} height={20} />
                        <Skeleton count={1} width={200} height={20} />

                        <div className='d-flex gap-3 mt-2 mb-4'>
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                            <Skeleton count={1} width={80} height={20} />
                        </div>
                    </div>
                </> :
                    <div className={`inner-content`}>
                        {archiveID?.length === 3 &&
                            (<>
                                <div className='current-article'>
                                    <div className={`container ${inter.className}`}>
                                        <div>
                                            <h6>Current Issue</h6>
                                            <h1>
                                                Volume {currentArticle.volume} | Issue {currentArticle.issue} | {currentArticle.year}
                                            </h1>
                                            <BreadCrumb basePath={['/', '/archives', `/${archivePath.join('/')}`]} title={`Volume ${currentArticle.volume} | Issue ${currentArticle.issue} | ${currentArticle.year} | Archives | IJOPT`} />
                                        </div>
                                        <div>
                                            <Button type='button' onClick={() => router?.push('/archives')}><FontAwesomeIcon icon={faShare} flip='horizontal' /> Go Back</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                    <div className='all-journal-list'>
                                        <div className='issue-list'>
                                            {articleData?.aJournals?.map(item => {
                                                return (
                                                    <div key={item?._id} className={`issue-details ${inter.className}`}>
                                                        <div>
                                                            <span className={`article-tag`}>{item?.eTag}</span> <span>|</span> <span className={`date`}>Published on {item?.citation_publication_date}</span>
                                                        </div>
                                                        <h1 className={inter?.className}>{item?.citation_title}</h1>
                                                        <p className={`author-name ${inter?.className}`}> {item?.citation_author?.map(item => item)?.join(', ')} </p>
                                                        {/* {item?.sDOINo === '-' ? ''
                                                            : <p className={`doi-number`}>DOI: <span style={{ cursor: 'pointer' }} onClick={() => goToZenodo(item?.sDOINo)}>{item?.sDOINo}</span> <span><FontAwesomeIcon icon={faEye} /> {getArticleStats(item?.sDOINo)}</span></p>
                                                        } */}
                                                        <div className='action-bar'>
                                                            {item?.citation_firstpage === '-' ? '' : <><span>Page No.: {item?.citation_firstpage} - {item?.citation_lastpage}</span><span className={` pipe-symbol`}>|</span></>} <span className={`downLoad-btn`} onClick={() => router.push({
                                                                pathname: `/archives/${currentArticle?.year}/${currentArticle?.volume}/${currentArticle?.issue}/${item?._id}`,
                                                            })}><GrTextAlignFull /> Abstract</span>
                                                            {/* {archiveID?.[0]?.includes('Volume-2') &&
                                                                (item?.sDownLoadUrl === '-' ? '' : <><span className={styles?.pipeSymbol}>|</span> <span className={`downLoadBtn`} onClick={() => saveAs(`${item?.sDownLoadUrl}`, `${item?.sName}`)}><FontAwesomeIcon icon={faFilePdf} /> PDF</span></>
                                                                )} */}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className={`other-indexing`}>
                                            <div className={`card-design ${inter?.className}`}>
                                                <div className='card-title'><FontAwesomeIcon className='me-1' icon={faLink} fade size='md' /> Quick Links</div>
                                                <div className='card-body'>
                                                    <ul>
                                                        <li>
                                                            <Link href='https://app.oxfordabstracts.com/stages/78097/submitter'>Call for Publication</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='/author-tools/guidelines'>Author Guidelines</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='/author-tools/article-processing-charge'>Article Processing Charge (APC)</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='#' onClick={(e) => saveAs(samplePaperFormat, 'Sample Paper - IJOPT')}>Sample Paper Format</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='/policy/peer-review-policy'>Peer Review Policy</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='/about/indexing'>Indexing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href='/subscription'>Subscription</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }

                        {archiveID?.length === 4 &&
                            (<div className='specific-journal container'>
                                <BreadCrumb basePath={['/', '/archives', `/${archivePath.join('/')}`]} title={`${articleData?.citation_title} | Archives | IJOPT`} />
                                <div className='issue-list'>
                                    <div className='issue-details'>
                                        <div>
                                            <span className={`article-tag`}>{articleData?.eTag}</span> <span>|</span> <span className={`date`}>Published on IJOPT Volume {articleData?.citation_volume}, Issue {articleData?.citation_issue}, {articleData?.citation_publication_date}</span>
                                        </div>

                                        <h1 className={inter?.className}>{articleData?.citation_title}</h1>
                                        <p className={`author-name ${inter?.className}`}> {articleData?.citation_author?.map(item => item)?.join(', ')} </p>
                                    </div>
                                </div>
                                {/*  -heading='Article'>{archiveID?.[2]}</h1> */}
                                {/* <div className={`${styles?.line} mb-3`}></div> */}

                                {/* <div className={`actions ${inter?.className}`}>
                                    <span><strong>{articleData?.sAuthor}</strong></span>
                                    {articleData?.sDOINo === '-' ? "" : <span>DOI: <span style={{ color: 'var(--primary-color)', marginLeft: '5px', cursor: 'auto' }}>{articleData?.sDOINo}</span></span>}

                                    {articleData?.sDownLoadUrl === '-' ? '' : <span variant='dark' size='sm' onClick={() => saveAs(`${articleData?.sDownLoadUrl}`, `${articleData?.sName}`)}>
                                        <span className={`logo`}><FaDownload /></span> <span>Download PDF</span>
                                    </span>}

                                    <span>{archiveID?.slice(0, 2)?.join(', ')}</span>
                                    {articleData?.sPageNo === '-' ? '' : <span>Page No.: {articleData?.sPageNo}</span>}
                                </div> */}

                                <div className='d-flex justify-content-between flex-wrap'>
                                    <article>
                                        <div dangerouslySetInnerHTML={{ __html: articleData?.sContent }} className={`journal-html ${inter?.className}`} />
                                    </article>
                                    <div className='right-content'>
                                        <div className={`card-design ${inter?.className}`}>
                                            <div className='card-title'><FontAwesomeIcon className='me-1' icon={faQuoteLeft} fade size='md' /> Cite</div>
                                            <div dangerouslySetInnerHTML={{ __html: articleData?.citation_quotes }} className={`mt-4 citation-text ${inter?.className}`} />
                                        </div>

                                        <div className={`card-design ${inter?.className} mt-2`} onClick={() => window.open(articleData?.sDownLoadUrl, "_blank")} style={{ cursor: 'pointer' }}>
                                            <div className='card-title'><FontAwesomeIcon className='me-1' icon={faAlignLeft} size='md' /> Full Text</div>
                                        </div>

                                        <div className={`card-design ${inter?.className} mt-2`} onClick={() => saveAs(`${articleData?.sDownLoadUrl}`, `IJOPT-${articleData?.citation_title}`)} style={{ cursor: 'pointer' }}>
                                            <div className='card-title'><FontAwesomeIcon className='me-1' icon={faCircleDown} size='md' /> Download PDF</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`goBackBtn`}>
                                    <Button variant='link' className={`${inter?.className}`} onClick={() => router.push({
                                        pathname: `/archives/${currentArticle?.year}/${currentArticle?.volume}/${currentArticle?.issue}`,
                                    })}>
                                        <span><FontAwesomeIcon icon={faShare} flip='horizontal' /></span> <span>Previous Page</span>
                                    </Button>
                                </div>
                            </div>)
                        }
                    </div>}

            </section >
        </>
    )
}

export default withRouter(ArchiveID)