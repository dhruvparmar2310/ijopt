import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const HardCopyCertificate = () => {
    return (
        <section className='about-us-section'>
            <div className='container inner-content'>
                <BreadCrumb current='Hard Copy Certificate - IJOPT' link='Home' title='Hard Copy Certificate | Indian Journal of Physical Therapy' />

                <h1 className='section-title'>Hard Copy Certificate</h1>
                <hr className='mt-0' />

                <p className={`${inter?.className}`}>
                    The Indian Journal of Physical Therapy (IJOPT) offers authors the option to receive a Hard Copy Certificate for their published article. This certificate serves as an official acknowledgment of your contribution to the journal and can be a valuable addition to your professional portfolio.
                </p>

                <h5>Pricing Details:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                <strong>For Indian Authors</strong>: The hard copy of the certificate is available at a charge of <strong>₹ 500 per author</strong>.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>For International Authors</strong>: Unfortunately, the hard copy of the certificate is <strong>not available</strong> for international authors due to logistical and shipping constraints.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>How to Request the Hard Copy Certificate?</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ol>
                        <li>
                            <p>
                                <strong>Eligibility</strong>: The certificate is available only for authors whose articles have been accepted and published in the journal.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Request Process</strong>: Once your article is published, you can request the hard copy of the certificate by filling out the Hard Copy Certificate Request Form. Payment of <strong>₹500</strong> for each Indian author must be completed via online payment.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Payment Method</strong>: The payment can be made through <strong>bank transfer, credit/debit card, or other supported online payment methods</strong>. After payment, please provide the <strong>Transaction ID or screenshot</strong> to confirm the payment.
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Delivery</strong>: The certificate will be mailed to the author's registered address within <strong>2-4 weeks</strong> after the payment and request have been confirmed. Please ensure that your address details are correctly entered during the request process.
                            </p>
                        </li>
                    </ol>
                </div>

                <h5 className='text-danger'>Important Notes:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <p>
                        The hard copy certificate is a physical document, and delivery times may vary depending on your location. No Refunds will be provided once the certificate has been printed and shipped.
                    </p>
                </div>

                <h5>Contact Information:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <p>
                        For any questions or assistance regarding the Hard Copy Certificate request process, please contact us at <strong>editor.ijopt@gmail.com</strong> or call us at <strong>+91 7984 377 793</strong>.<br /><br />
                        We thank you for your valuable contribution to the Indian Journal of Physical Therapy and are pleased to offer this recognition for your academic achievements.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HardCopyCertificate