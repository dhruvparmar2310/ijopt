import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const ReferAndEarn = () => {
    return (
        <>
            <Head>
                <title>Refer And Earn Policy | Indian Journal of Physical Therapy</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, Refer and Earn Policy IJOPT' />
                <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />

                <meta property="og:title" content="Refer and Earn Policy of IJOPT" />
                <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
                <meta property="og:url" content="https://ijopt.co.in/policy/refer-and-earn" />
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
                        "url": "https://ijopt.co.in/policy/refer-and-earn",
                        "logo": "https://ijopt.co.in/favicon.ico",
                        "description": "Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!",
                        "keywords": ["Physiotherapy Journal", "Open Access", "Research Articles", "Physical Therapy", "Incentive Policy of IJOPT"],
                    })}
                </script>
            </Head>
            <section className='author-tools-section'>
                <div className='container inner-content'>
                    <BreadCrumb basePath={['/', '/privacy-policy']} title='Refer and Earn Policy | Indian Journal of Physical Therapy' />

                    <h1 className='section-title'>Refer and Earn Policy</h1>
                    <hr className='mt-0' />

                    <p className={inter?.className}>
                        At the Indian Journal of Physical Therapy (IJOPT), we value the contributions of our authors and appreciate their efforts in expanding our scholarly community. To encourage and reward referrals, we are pleased to introduce our Refer and Earn Policy, which provides authors and co-authors with an exclusive discount on the Article Processing Charges (APC) for successfully referring new submissions.
                    </p>

                    <div className={inter?.className}>
                        <p>
                            Under this policy, any author or co-author who refers a new manuscript to IJOPT will be eligible for a ₹200 discount on the APC of their own article. This discount can be availed when they submit an article in which they are listed as either an author or co-author. The discount will remain valid for up to two upcoming editions from the date of the successful referral. A referral will be considered successful only if the referred article undergoes the complete peer-review process and is officially accepted and published in IJOPT.
                        </p>
                        <p>
                            To claim this discount, the referring author must send a formal email to editor.ijopt@gmail.com at the time of submission of the referred article. The email should include details such as the title of the referred manuscript, the names of the referred authors, and confirmation that the article has been submitted to IJOPT. This email should be sent before or at the time of submission of the referred manuscript to ensure eligibility for the benefit. IJOPT reserves the right to verify the referral claim and approve the discount accordingly.
                        </p>
                        <p>
                            Each author may refer multiple articles, and for every successfully published referral, the discount will be applicable. However, the discount is non-transferable and cannot be exchanged for cash or any other benefits. Additionally, the maximum discount that can be applied to a single article’s APC cannot exceed the total APC amount. If multiple referrals are made, the discount can be accumulated and used for separate submissions within the validity period.
                        </p>
                        <p>
                            IJOPT reserves the right to modify, suspend, or discontinue this referral program at any time without prior notice. The final decision regarding the application of discounts rests with the IJOPT editorial and administrative team. By participating in this program, authors acknowledge and agree to comply with the terms and conditions stated herein.
                        </p>
                        <p>
                            We look forward to your continued support in strengthening the reach of IJOPT and advancing the field of physical therapy research. If you have any questions or require further clarification regarding the Refer and Earn Policy, please feel free to reach out to us at <strong>editor.ijopt@gmail.com</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReferAndEarn