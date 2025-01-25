import Head from "next/head";
import Image from "next/image";
import { Anton, Anton_SC, Geist, Geist_Mono, Inter } from "next/font/google";
import Hero from "@/components/Hero";

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Indian Journal of Physical Therapy</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='IJOPT, Indian Journal of Physical Therapy, Indian Journal of Physiotherapy, Open Access Journal, Physiotherapy Journal, Physical Therapy Journal, International Journal for Physiotherapy, PhysioZine, IJPT, IJPHY, UGC Care Journal, UGC Approved Journal, Top 10 Physiotherapy Journal, Scopus Indexed Physiotherapy Journal' />
        <meta name="description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access Journal. Explore now!" />
        <meta property="og:title" content="Indian Journal of Physical Therapy - Open Access & Peer-Reviewed Journal" />
        <meta property="og:description" content="Indian Journal of Physical Therapy (IJOPT): Your trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access International Journal. Explore now!" />
        <meta property="og:url" content="https://ijopt.vercel.app/" />
        <meta property="og:image" content="assets/img/logo.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="assets/img/logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Indian Journal of Physical Therapy (IJOPT)",
            "url": "https://ijopt.vercel.app/",
            "description": "Indian Journal of Physical Therapy (IJOPT) is a trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access International Journal.",
            "publisher": {
              "@type": "Organization",
              "name": "Indian Journal of Physical Therapy (IJOPT)",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ijopt.vercel.app/assets/img/logo.png",
                "width": 512,
                "height": 512
              }
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": "https://ijopt.vercel.app/about/ijopt",
                "name": "About Us"
              },
              {
                "@type": "ReadAction",
                "target": "https://ijopt.vercel.app/author-tools/guidelines",
                "name": "Author Guidelines"
              },
              {
                "@type": "ReadAction",
                "target": "https://ijopt.vercel.app/author-tools/submit-paper-online",
                "name": "Submit Paper Online"
              },
              {
                "@type": "ReadAction",
                "target": "https://ijopt.vercel.app/author-tools/article-processing-charge",
                "name": "Article Processing Charge"
              }
            ],
            // "sameAs": [
            //   "https://www.facebook.com/physiozine",
            //   "https://www.instagram.com/physiozine",
            //   "https://twitter.com/physiozine"
            // ]
          })}
        </script>
      </Head>
      <div
        className={`page`}
      >
        <main className='main'>
          <Hero />

          <section className="about-section">
            <div className="container">
              <h1 className={antonSC?.className}>About IJOPT</h1>
              <p className={`${inter?.className} main-content`}>
                Welcome to the Indian Journal of Physical Therapy - An International Journal, a premier platform dedicated to advancing the field of physical therapy and rehabilitation sciences. Powered by PhysioZine, this peer-reviewed journal connects researchers, clinicians, and educators worldwide, promoting innovative practices and evidence-based research. We cover diverse areas, including musculoskeletal, neurological, and sports rehabilitation. Committed to excellence, our open-access approach ensures global visibility for your work, bridging the gap between research and clinical practice. Join us in shaping the future of physical therapy and fostering a healthier tomorrow.
              </p>

              <h5 className={`${antonSC?.className} mt-4`}>Scope of Journal</h5>
              <p className={`${inter?.className} mb-0 mt-2`}>The journal welcomes original research, reviews, case studies, and editorials in areas such as:</p>
              <ul>
                <li>
                  <p>Musculoskeletal and Orthopedic Rehabilitation</p>
                </li>
                <li>
                  <p>Neurological Rehabilitation</p>
                </li>
                <li>
                  <p>Cardiopulmonary Physical Therapy</p>
                </li>
                <li>
                  <p>Pediatric and Geriatric Rehabilitation</p>
                </li>
                <li>
                  <p>Sports Medicine and Injury Prevention</p>
                </li>
                <li>
                  <p>Pain Management</p>
                </li>
                <li>
                  <p>Biomechanics and Kinesiology</p>
                </li>
                <li>
                  <p>Emerging Technologies in Physical Therapy</p>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
