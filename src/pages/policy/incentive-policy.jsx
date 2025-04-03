import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const IncentivePolicy = () => {
    return (
        <>
            <Head>
                <title>Incentive Policy | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, Incentive Policy of IJOPT, Editorial Policy IJOPT' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Incentive Policy of IJOPT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.co.in/policy/incentive-policy" />
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
                        "url": "https://ijopt.co.in/policy/incentive-policy",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Incentive Policy of IJOPT"],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/privacy-policy']} title='Incentive Policy | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Editorial Contribution Reward Policy</h1>
                    <hr className='mt-0' />

                    <p className={inter?.className}>
                        The Indian Journal of Physical Therapy (IJOPT) values the contributions and scholarly efforts of its esteemed Editorial Board Members. In recognition of their commitment to advancing research and maintaining the highest standards of publication, IJOPT has introduced an incentive policy related to the Article Processing Charge (APC) for Editorial Board Members who contribute as authors or co-authors to published research articles in the IJOPT.
                    </p>

                    <div className={inter?.className}>
                        <p>
                            To be eligible for this incentive, an Editorial Board Member must be listed as an author or co-author of a research article that has successfully undergone the peer-review process and has been accepted for publication in IJOPT. The incentive is applicable only for research articles.
                        </p>
                        <p>
                            Eligible Editorial Board Members will receive an amount of <strong>INR 500/-</strong> as a discount or reimbursement on the Article Processing Charge (APC) for each research article that is successfully published in IJOPT. This incentive is non-transferable and is applicable only to articles where the Editorial Board Member is a contributing author.
                        </p>
                        <p>
                            Upon submission of the research article, the Editorial Board Member must submit a formal request to the editorial office via email, mentioning their role as an author or co-author. The request should include the article title, manuscript ID, and a declaration confirming their authorship. Once the request is verified and approved, the incentive will be either deducted from the APC at the time of payment or reimbursed within 30 days of the APC payment confirmation.
                        </p>
                        <p>
                            This incentive is only applicable for Editorial Board Members who actively contribute to the journal’s research output. The incentive cannot be combined with any other ongoing discounts, waivers, or financial support provided by IJOPT. Additionally, if multiple Editorial Board Members are listed as co-authors on the same article, only one member (corresponding author or first author, if applicable) may claim the incentive. The incentive will not be applicable to articles published in collaboration with other journals or retracted publications.
                        </p>
                        <p>
                            Editorial Board Members are expected to uphold the highest ethical standards in research and publication. Any attempts to misuse or manipulate this incentive policy, such as honorary authorship or unethical authorship practices, may lead to disqualification from receiving the incentive. The journal reserves the right to audit claims and take appropriate action if discrepancies are found.
                        </p>
                        <p>
                            IJOPT reserves the right to review and modify this policy at any time based on journal requirements, financial constraints, or any other relevant considerations. Any changes will be communicated to the Editorial Board Members in advance, and the updated policy will be made available on the journal’s official platform.
                        </p>
                        <p>
                            For any queries regarding this incentive policy or the process of availing the APC discount, Editorial Board Members may contact the editorial office at <strong>editor.ijopt@gmail.com</strong>.
                        </p>
                        <p>
                            This policy aims to encourage active research participation among Editorial Board Members while ensuring transparency, fairness, and adherence to high publication standards in IJOPT.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IncentivePolicy