import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const PeerReviewPolicy = () => {
    return (
        <section className='author-tools-section'>
            <div className='container inner-content'>
                <BreadCrumb current='Peer Review Policy - IJOPT' link='Home' title='Peer Review Policy | Indian Journal of Physical Therapy' />

                <h1 className='section-title'>Peer Review Policy</h1>
                <hr className='mt-0' />

                <h5>1. Overview of Peer Review Process:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                All submitted manuscripts undergo a rigorous peer review process to ensure high academic and scientific standards.
                            </p>
                        </li>
                        <li>
                            <p>
                                The peer review process is double-blind, ensuring anonymity of both authors and reviewers.
                            </p>
                        </li>
                        <li>
                            <p>
                                Manuscripts are reviewed based on originality, significance, methodological rigor, and clarity.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>2. Initial Screening:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Upon submission, manuscripts are screened by the editorial team for compliance with journal guidelines.
                            </p>
                        </li>
                        <li>
                            <p>
                                Submissions that do not meet formatting or ethical standards may be returned to authors for revision or rejected outright.
                            </p>
                        </li>
                        <li>
                            <p>
                                Plagiarism checks are conducted using plagiarism detection software.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>3. Reviewer Selection:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                Manuscripts are assigned to experts in the relevant field who possess appropriate academic and research credentials.
                            </p>
                        </li>
                        <li>
                            <p>
                                Reviewers are selected based on their expertise, publication record, and past review performance.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>4. Review Criteria:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <p>Manuscripts are evaluated based on:</p>
                    <ul>
                        <li>
                            <p>
                                Relevance to the field of physiotherapy.
                            </p>
                        </li>
                        <li>
                            <p>
                                Scientific soundness and methodological validity.
                            </p>
                        </li>
                        <li>
                            <p>
                                Originality and contribution to existing literature.
                            </p>
                        </li>
                        <li>
                            <p>
                                Clarity and coherence in writing.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>5. Peer Review Timeline:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                The typical review timeline is 4-6 weeks, but may vary depending on reviewer availability and manuscript complexity.
                            </p>
                        </li>
                        <li>
                            <p>
                                Authors will be informed of any delays or additional review rounds if required.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>6. Decision Outcomes:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <p>Based on reviewer feedback, the editorial board will make one of the following decisions:</p>
                    <ul>
                        <li>
                            <p>
                                Acceptance without revision.
                            </p>
                        </li>
                        <li>
                            <p>
                                Acceptance with minor or major revisions.
                            </p>
                        </li>
                        <li>
                            <p>
                                Rejection with feedback.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Authors are expected to address reviewer comments within the stipulated revision period.
                    </p>
                </div>

                <h5>7. Confidentiality and Ethics:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                All submitted manuscripts and review reports are treated as confidential documents.
                            </p>
                        </li>
                        <li>
                            <p>
                                Reviewers must disclose any conflicts of interest before accepting a review assignment.
                            </p>
                        </li>
                        <li>
                            <p>
                                Ethical breaches, including data fabrication or plagiarism, will result in immediate rejection.
                            </p>
                        </li>
                    </ul>
                </div>

                <h5>8. Post-Publication Review:</h5>
                <hr className='mt-0' />
                <div className={inter?.className}>
                    <ul>
                        <li>
                            <p>
                                IJOPT encourages post-publication discussions and corrections if substantial issues are identified.
                            </p>
                        </li>
                        <li>
                            <p>
                                Authors may submit post-publication clarifications or corrections, subject to editorial approval.
                            </p>
                        </li>
                    </ul>
                    <p>
                        By submitting a manuscript to IJOPT, authors agree to comply with the journal's peer review policies.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PeerReviewPolicy