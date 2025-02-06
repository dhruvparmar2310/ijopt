import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const Disclaimer = () => {
    return (
        <section className='author-tools-section'>
            <div className='container inner-content'>
                <BreadCrumb current='Disclaimer - IJOPT' link='Home' title='Disclaimer | Indian Journal of Physical Therapy' />

                <h1 className='section-title'>Disclaimer</h1>
                <hr className='mt-0' />

                <p className={inter?.className}>
                    The content published by the Indian Journal of Physical Therapy (IJOPT) is for informational and educational purposes only. IJOPT does not provide medical advice, diagnosis, or treatment. Readers should consult qualified healthcare professionals for medical concerns. The views expressed in published articles are those of the authors and do not necessarily reflect the views of IJOPT. IJOPT is not responsible for any inaccuracies, errors, or omissions in the content provided. Use of IJOPT content is at the reader's own risk.
                </p>

                <p className={inter?.className}>
                    <em>
                        Our journal undergoes a rigorous peer-review and refereed journals. However, for indexing status and inclusion in databases such as UGC CARE, Scopus, or Web of Science, we recommend referring to the latest and updated lists available on their respective websites. Currently Journal is only peer-review. Journal follow all above guidelines only. The information provided here may become outdated and should be independently verified
                    </em>
                </p>
            </div>
        </section>
    )
}

export default Disclaimer