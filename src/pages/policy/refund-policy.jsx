import BreadCrumb from '@/components/BreadCrumb'
import { Anton, Anton_SC, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const RefundPolicy = () => {
    return (
        <section className='author-tools-section'>
            <div className='container inner-content'>
                <BreadCrumb current='Refund Policy - IJOPT' link='Home' title='Refund Policy | Indian Journal of Physical Therapy' />

                <h1 className='section-title'>Refund Policy</h1>
                <hr className='mt-0' />

                <p className={inter?.className}>
                    Payments made to IJOPT, including article processing charges (APCs) and subscription fees, are non-refundable. Refunds will only be considered in exceptional cases such as duplicate payments or technical errors. Requests must be submitted to editor.ijopt@gmail.com with relevant details. Approved refunds will be processed within 30 business days. IJOPT's management decision on refund matters is final.
                </p>
            </div>
        </section>
    )
}

export default RefundPolicy