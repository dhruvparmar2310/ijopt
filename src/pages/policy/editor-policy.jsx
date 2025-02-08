import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const EditorPolicy = () => {
    return (
        <>
            <Head>
                <title>Editor Policy | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, Editor Policy of IJOPT' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Editor Policy of IJPOT" />
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
                        "url": "https://ijopt.vercel.app/policy/editor-policy",
                        "logo": "https://ijopt.vercel.app/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Editor Policy of IJOPT"],
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
                    <BreadCrumb current='Editor Policy - IJOPT' link='Home' title='Editor Policy | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Editor Policy – Indian Journal of Physical Therapy (IJOPT)</h1>
                    <hr className='mt-0' />

                    <p className={inter?.className}>
                        The Indian Journal of Physical Therapy (IJOPT) is committed to maintaining the highest ethical standards in academic publishing, adhering to the Committee on Publication Ethics (COPE) guidelines. The editorial team ensures a transparent, unbiased, and ethical review process, upholding integrity in research dissemination.
                    </p>

                    <p className={inter?.className}>
                        Editors are responsible for making fair and objective publication decisions based on the manuscript’s quality, originality, and relevance to the journal’s scope. Manuscripts undergo a double-blind peer-review process, and editorial decisions are independent of the authors' affiliations, nationality, or institutional connections. Any conflicts of interest must be disclosed and managed appropriately to prevent bias in the editorial and peer-review processes.
                    </p>

                    <p className={inter?.className}>
                        The journal follows strict anti-plagiarism policies, using plagiarism detection tools to ensure the originality of submitted work. Cases of suspected misconduct, including data fabrication, falsification, duplicate publication, or ethical violations, are investigated in accordance with COPE’s recommended procedures. If ethical breaches are identified, appropriate actions, such as manuscript corrections, retractions, or editorial warnings, will be taken.
                    </p>

                    <p className={inter?.className}>
                        IJOPT promotes academic integrity and confidentiality by ensuring that all submitted manuscripts and reviewer identities remain confidential. Editors and reviewers must not use unpublished materials from submitted manuscripts for personal research or advantage. The editorial board is committed to ensuring timely processing of submissions, striving to provide constructive feedback to authors to enhance the quality of their work.
                    </p>

                    <p className={inter?.className}>
                        The journal also upholds research ethics and compliance with guidelines for human and animal studies, requiring authors to provide ethical approval statements and informed consent when applicable. Any concerns related to ethical misconduct, conflicts of interest, or disputes regarding authorship are addressed in accordance with COPE’s principles, ensuring transparency and fairness.
                    </p>

                    <p className={inter?.className}>
                        By adhering to COPE guidelines, IJOPT aims to foster a credible, ethical, and high-impact platform for the dissemination of research in the field of physical therapy. The editorial board continuously works towards maintaining a rigorous and ethical publishing environment, promoting high-quality research contributions for the global scientific community.
                    </p>
                </div>
            </section>
        </>
    )
}

export default EditorPolicy