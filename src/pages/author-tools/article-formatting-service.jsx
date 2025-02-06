import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const ArticleFormattingService = () => {
    return (
        <section className='about-us-section'>
            <div className='container inner-content'>
                <BreadCrumb current='Article Formatting Service - IJOPT' link='Home' title='Article Formatting Service | Indian Journal of Physical Therapy' />

                <h1 className='section-title'>Editing Article Format According to IJOPT Guidelines</h1>
                <hr className='mt-0' />

                <p className={`${inter?.className}`}>
                    Ensuring that your article adheres to the Indian Journal of Physical Therapy (IJOPT) formatting guidelines is crucial for a smooth publication process. To assist authors, we offer a professional <strong>article formatting service</strong> to align your submission with the <strong>IJOPT format</strong>, ensuring compliance with the journal’s standards.
                </p>

                <h5>What We Offer?</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Proper structuring of your article as per IJOPT guidelines.
                            </p>
                        </li>
                        <li>
                            <p>
                                Formatting of headings, subheadings, and references.
                            </p>
                        </li>
                        <li>
                            <p>
                                Adjustment of font style, size, and spacing.
                            </p>
                        </li>
                        <li>
                            <p>
                                Standardization of tables, figures, and citations.
                            </p>
                        </li>
                        <li>
                            <p>
                                Formatting of references as per the prescribed style.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>Service Charges:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <p>
                        <FontAwesomeIcon icon={faSackDollar} size='lg' color='#bd973e' /> <strong>₹1000/-</strong> per article for Indian Authors and <strong>$25</strong> for International Authors
                    </p>
                    <p>
                        If you wish to avail of this service, please contact us or submit your article for formatting. This will ensure that your manuscript meets IJOPT standards and is ready for review. For inquiries or submissions, reach out to us on <strong>editor.ijopt@gmail.com</strong>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ArticleFormattingService