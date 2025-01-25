import React from 'react'
import Link from 'next/link'
import { Ubuntu } from 'next/font/google'
import { FaAngleRight } from "react-icons/fa"

const BreadCrumb = ({ title, link, current }) => {
    return (
        <>
            <div className={`breadcrumbContent container`}>
                <div className={`breadcrumb`}>
                    <span className={`breadcrumbItem`}>
                        <Link href={link === 'Home' ? '/' : link} title={title}>{link}</Link>
                    </span>
                    <span><FaAngleRight /></span>
                    <span className={`currentPage`}>{current}</span>
                </div>
            </div>
        </>
    )
}

export default BreadCrumb
