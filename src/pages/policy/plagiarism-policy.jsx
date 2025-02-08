import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const PlagiarismPolicy = () => {
    return (
        <>
            <Head>
                <title>Plagiarism Policy | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, Plagiarism Policy of IJOPT' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Plagiarism Policy of IJPOT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.vercel.app/policy/plagiarism-policy" />
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
                        "url": "https://ijopt.vercel.app/policy/plagiarism-policy",
                        "logo": "https://ijopt.vercel.app/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Plagiarism Policy of IJOPT"],
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
                    <BreadCrumb current='Plagiarism Policy - IJOPT' link='Home' title='Plagiarism Policy | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Plagiarism Policy</h1>
                    <hr className='mt-0' />

                    <p className={inter?.className}>
                        The Indian Journal of Physical Therapy (IJOPT) is committed to upholding the highest standards of academic integrity and ethical publishing practices. We expect authors to conduct their research and write their manuscripts in full accordance with these standards.
                    </p>

                    <h5>Definition of Plagiarism:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            Plagiarism refers to the use of someone else's work, ideas, or intellectual property without proper acknowledgment. This includes, but is not limited to:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Copying text or data directly without citation
                                </p>
                            </li>
                            <li>
                                <p>
                                    Paraphrasing someone’s work without giving proper credit
                                </p>
                            </li>
                            <li>
                                <p>
                                    Using images, graphs, or other visual elements without permission or acknowledgment
                                </p>
                            </li>
                            <li>
                                <p>
                                    Submitting work that has been previously published or concurrently submitted elsewhere
                                </p>
                            </li>
                        </ul>
                    </div>

                    <h5>Policy on Plagiarism:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            <strong>Plagiarism Checking</strong>: All submitted manuscripts will undergo plagiarism detection using reliable software. If plagiarism is detected, 15% of plagiarism is acceptable by the journal, and the authors will be notified accordingly.
                        </p>
                        <p>
                            <strong>Self-Plagiarism</strong>: Authors must avoid self-plagiarism, which includes the re-use of their previously published material without proper citation. Repetitive or redundant publication of the same material in different journals or conferences is prohibited unless clearly stated and properly referenced.
                        </p>
                        <p>
                            <strong>Proper Citation and Acknowledgment</strong>: Authors must ensure that all references, quotations, and borrowed ideas or data are properly cited in accordance with the journal’s citation style. Any sources used, whether published or unpublished, must be fully acknowledged.
                        </p>
                        <p>
                            <strong>Authorship Ethics</strong>: The authors must ensure that they have the necessary permissions for the use of any third-party materials such as figures, tables, or any other content. Misleading or false authorship claims will not be tolerated.
                        </p>
                        <p>
                            <strong>Appeals Process</strong>: If an author believes that they have been wrongly accused of plagiarism, they can submit an appeal to the editorial board. The appeal will be reviewed in detail, and the final decision will be communicated to the author.
                        </p>
                        <p>
                            <strong>Educational Purpose</strong>: The IJOPT aims to educate authors on proper citation and plagiarism prevention. Resources and guidelines will be made available to assist authors in adhering to ethical research and publication standards.
                        </p>
                    </div>

                    <h5>Conclusion:</h5>
                    <hr className='mt-0' />
                    <div className={inter?.className}>
                        <p>
                            The Indian Journal of Physical Therapy takes the issue of plagiarism very seriously. We are dedicated to maintaining the integrity of the academic community by ensuring that all published work is the result of original research and ideas. Authors are expected to uphold these principles in all their submissions.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlagiarismPolicy