import Head from "next/head";
import Image from "next/image";
import { Anton, Anton_SC, Geist, Geist_Mono, Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Slider from "react-slick";

const anton = Anton({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const antonSC = Anton_SC({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '800'], style: ['normal'] })

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 1000,
  // cssEase: "linear",
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
};

const indexingImg = [
  { sImage: 'assets/img/index/google-scholar.jpg', sAlt: 'Google Scholar' },
  { sImage: 'assets/img/index/Crossref-Logo.jpeg', sAlt: 'Crossref' },
  { sImage: 'assets/img/index/issn_logo.png', sAlt: 'ISSN' },
  { sImage: 'assets/img/index/ResearchGate_logo.png', sAlt: 'Research Gate' },
  { sImage: 'assets/img/index/Open_Access_logo.png', sAlt: 'Open Access' },
  { sImage: 'assets/img/index/cukurova_logo.png', sAlt: 'Cukurova' },
  { sImage: 'assets/img/index/ici2.png', sAlt: 'ICI2' },
  { sImage: 'assets/img/index/logo_world_of_journals.png', sAlt: 'ICI World of Journal' },
  { sImage: 'assets/img/index/scispace-logo.svg', sAlt: 'scispace logo' },
  { sImage: 'assets/img/index/zenodo.png', sAlt: 'Zenodo' },
  { sImage: 'assets/img/index/DOI_logo.png', sAlt: 'DOI' },
  { sImage: 'assets/img/index/am.jpeg', sAlt: 'Acedemia' },
  { sImage: 'assets/img/index/OpenAire_Logo.jpg', sAlt: 'Open Aire' },
  { sImage: 'assets/img/index/orcid.logo.png', sAlt: 'ORCID' },
  { sImage: 'assets/img/index/Linkedin-Logo.png', sAlt: 'LinkedIn' },
  { sImage: 'assets/img/index/google-scholar.jpg', sAlt: 'Google Scholar' },
  { sImage: 'assets/img/index/Crossref-Logo.jpeg', sAlt: 'Crossref' },
  { sImage: 'assets/img/index/issn_logo.png', sAlt: 'ISSN' },
  { sImage: 'assets/img/index/ResearchGate_logo.png', sAlt: 'Research Gate' },
  { sImage: 'assets/img/index/Open_Access_logo.png', sAlt: 'Open Access' },
  { sImage: 'assets/img/index/cukurova_logo.png', sAlt: 'Cukurova' },
  { sImage: 'assets/img/index/ici2.png', sAlt: 'ICI2' },
  { sImage: 'assets/img/index/logo_world_of_journals.png', sAlt: 'ICI World of Journal' },
  { sImage: 'assets/img/index/scispace-logo.svg', sAlt: 'scispace logo' },
  { sImage: 'assets/img/index/zenodo.png', sAlt: 'Zenodo' },
  { sImage: 'assets/img/index/DOI_logo.png', sAlt: 'DOI' },
  { sImage: 'assets/img/index/am.jpeg', sAlt: 'Acedemia' },
  { sImage: 'assets/img/index/OpenAire_Logo.jpg', sAlt: 'Open Aire' },
  { sImage: 'assets/img/index/orcid.logo.png', sAlt: 'ORCID' },
  { sImage: 'assets/img/index/Linkedin-Logo.png', sAlt: 'LinkedIn' },
]

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
        <meta property="og:url" content="https://ijopt.co.in/" />
        <meta property="og:image" content="favicon.ico" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Indian Journal of Physical Therapy (IJOPT)",
            "url": "www.ijopt.co.in",
            "description": "Indian Journal of Physical Therapy (IJOPT) is a trusted source for peer-reviewed articles, latest research, and expert insights in physiotherapy, Open access International Journal.",
            "publisher": {
              "@type": "Organization",
              "name": "Indian Journal of Physical Therapy (IJOPT)",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ijopt.co.in/faicon.ico",
                "width": 512,
                "height": 512
              }
            },
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": "https://ijopt.co.in/about/ijopt",
                "name": "About Us"
              },
              {
                "@type": "ReadAction",
                "target": "https://ijopt.co.in/author-tools/guidelines",
                "name": "Author Guidelines"
              },
              {
                "@type": "ReadAction",
                "target": "https://ijopt.co.in/author-tools/submit-paper-online",
                "name": "Submit Paper Online"
              },
              {
                "@type": "ReadAction",
                "target": "https://ijopt.co.in/author-tools/article-processing-charge",
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

          <section className="index-section">
            <div className="container">
              <div className="slider">
                <Slider {...settings}>
                  {indexingImg?.map(( { sImage, sAlt }, i ) => {
                    return (
                      <div className="slider-item" key={i}>
                        <Image
                          src={sImage}
                          alt={sAlt}
                          quality={100}
                          width={100}
                          height={100}
                          className="img-fluid"
                        />
                      </div>
                    );
                  })}
                  </Slider>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
