import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const OpenAccessPolicy = () => {
    return (
        <section className='author-tools-section'>
            <div className='container inner-content'>
                <BreadCrumb current='Open Access Policy - IJOPT' link='Home' title='Open Access Policy | Indian Journal of Physical Therapy' />

                <h1 className='section-title'>Open Access Policy</h1>
                <hr className='mt-0' />

                <h5>1. Open Access Statement:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                The Indian Journal of Physical Therapy (IJOPT) is committed to the principles of open access, ensuring that all published content is freely available to readers worldwide without any subscription or paywall.
                            </p>
                        </li>
                        <li>
                            <p>
                                By adopting an open-access model, IJOPT aims to enhance the dissemination and impact of physiotherapy research globally.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>2. Licensing and Copyright:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                All published articles are licensed under a Creative Commons Attribution (CC BY) license, allowing users to read, download, copy, distribute, and adapt the content with appropriate credit to the original authors.
                            </p>
                        </li>
                        <li>
                            <p>
                                Authors retain copyright of their work while granting IJOPT the right to publish and distribute it.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>3. Accessibility and Availability:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                All articles published in IJOPT are available online through the journal's official website without any restrictions.
                            </p>
                        </li>
                        <li>
                            <p>
                                IJOPT ensures long-term preservation and accessibility of published content through partnerships with digital archiving services.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>4. Author Responsibilities:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Authors submitting to IJOPT agree to publish their work under an open-access model.
                            </p>
                        </li>
                        <li>
                            <p>
                                Authors must ensure that their submitted work complies with ethical standards and does not infringe upon any copyright or intellectual property rights.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>5. Funding and Article Processing Charges (APCs):</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                To support open access, IJOPT  charge an Article Processing Charge (APC) for accepted manuscripts. APCs cover editorial processing, peer review, and online hosting expenses.
                            </p>
                        </li>
                        <li>
                            <p>
                                Waivers and discounts are available for authors from low-income countries and under special circumstances.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>6. Benefits of Open Access:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Increased visibility and readership of published research.
                            </p>
                        </li>
                        <li>
                            <p>
                                Enhanced citation potential and research impact.
                            </p>
                        </li>
                        <li>
                            <p>
                                Immediate access to cutting-edge research findings for practitioners, researchers, and the general public.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>7. Ethical Considerations:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                IJOPT follows ethical publishing practices in compliance with COPE (Committee on Publication Ethics) guidelines.
                            </p>
                        </li>
                        <li>
                            <p>
                                Open access policies are aligned with international standards to ensure transparency and integrity.
                            </p>
                        </li>
                    </ul>
                    <p>
                        By publishing with IJOPT, authors agree to the terms and conditions of the open-access policy, contributing to the advancement of physiotherapy knowledge globally.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OpenAccessPolicy