import { Anton, Anton_SC, Inter } from 'next/font/google'
import React from 'react'
import { Button } from 'react-bootstrap'

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })
const Hero = () => {
    return (
        <section className='hero-section'>
            <div>
                <h1 className={`${antonSC?.className}`}>Indian Journal of Physical Therapy</h1>
                <h5 className={`${antonSC?.className}`}>An International Journal</h5>
            </div>

            <div>
                <p className={`${inter?.className} mt-5 mb-0`}>ISSN Approved Journal No: 2321-5690 | ESTD Year: 2013, Follow UGC CARE Journal Norms and Guidelines</p>
                <p className={`${inter?.className}`}>Scholarly open access journal and Peer-reviewed</p>
                <p className={`${inter?.className} mt-3 last-date`}><strong>Last date for Article Submission: 15th March, 2025</strong></p>
            </div>

            <div className='mt-5'>
                <Button className={`me-3 author-btn ${inter?.className}`} type='button'>Author Guidelines</Button>
                <Button type='button' className={`submit-btn ${inter?.className}`}>Submit Paper</Button>
            </div>
        </section>
    )
}

export default Hero
