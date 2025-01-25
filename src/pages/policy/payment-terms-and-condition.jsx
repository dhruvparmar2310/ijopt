import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const PaymentTermsAndCondition = () => {
    return (
        <section className='author-tools-section'>
            <div className='container inner-content'>
                <BreadCrumb current='Payment Terms And Condition - IJOPT' link='Home' title='Payment Terms And Condition | Indian Journal of Physical Therapy' />

                <h1 className='section-title'>Payment Terms And Condition</h1>
                <hr className='mt-0' />

                <h5>1. Payment Structure:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Authors are required to pay publication fees as per the latest fee structure outlined on the IJOPT website.
                            </p>
                        </li>
                        <li>
                            <p>
                                Payment must be made in full before the article is processed for peer review and publication.
                            </p>
                        </li>
                        <li>
                            <p>
                                Fees are subject to change, and authors are advised to check the website for the latest updates.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>2. Payment Methods:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Payments can be made via bank transfer, UPI, credit/debit card, or other methods specified on the website.
                            </p>
                        </li>
                        <li>
                            <p>
                                All payments should be made in Indian Rupees (INR) for domestic authors and in USD for international authors.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>3. Refund Policy:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Publication fees are non-refundable once the article has been processed.
                            </p>
                        </li>
                        <li>
                            <p>
                                No refunds will be provided for articles rejected after peer review.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>4. Processing Charges:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                IJOPT charges a processing fee that covers editorial evaluation, peer review, and publication.
                            </p>
                        </li>
                        <li>
                            <p>
                                Additional charges may apply for expedited processing, special formatting, or supplementary materials.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>5. Late Payment Policy:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Failure to make payments within the specified time may result in publication delays.
                            </p>
                        </li>
                        <li>
                            <p>
                                Late payments may attract additional charges or result in article withdrawal.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>6. Waiver and Discounts:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                IJOPT offers waivers and discounts to students, researchers from low-income countries, and under special circumstances at the discretion of the editorial board.
                            </p>
                        </li>
                        <li>
                            <p>
                                Requests for waivers must be submitted before article submission with appropriate supporting documents.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>7. Compliance and Disputes:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Authors must comply with the payment terms as agreed upon during the submission process.
                            </p>
                        </li>
                        <li>
                            <p>
                                Any payment disputes must be raised within 14 days of the transaction date.
                            </p>
                        </li>
                        <li>
                            <p>
                                IJOPT reserves the right to take necessary action in case of non-compliance with payment policies.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>8. Contact Information:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <p>
                        For any payment-related queries, authors can reach out via the official email: editor.ijopt@gmail.com or visit our website for further details. By submitting an article to IJOPT, authors acknowledge and agree to abide by these payment terms and conditions.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PaymentTermsAndCondition