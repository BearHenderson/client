import React from 'react';
import { Link, Element } from 'react-scroll';
import Navbar from './Navbar';
import cover7 from '../assets/images/EM7cover.jpeg';
import sample7 from '../assets/images/EM7p3.jpeg';
import cover6 from '../assets/images/EM6cover.jpg';
import sample6 from '../assets/images/EM6p3.jpg';
import cover5 from '../assets/images/EM5cover.jpg';
import sample5 from '../assets/images/EM5p3.jpg';
import cover4 from '../assets/images/EM4cover.jpg';
import sample4 from '../assets/images/EM4p3.jpg';
import cover3 from '../assets/images/EM3cover.jpg';
import sample3 from '../assets/images/EM3p3.jpg';
import cover2 from '../assets/images/EM2cover.jpg';
import sample2 from '../assets/images/EM2p3.jpg';
import cover1 from '../assets/images/EM1cover.jpg';
import sample1 from '../assets/images/EM1p3.jpg';


const Issues = () => {
    const images = [
    {
        id: 7,
        issueInfo:"EXCUSE ME Mag No. 7: ON LOCATION!",
        coverImage: cover7,
        sampleImage: sample7,
        description: 'EXCUSE ME Mag No. 7, WINTER, 2023: The ON LOCATION Issue! New FULL COLOR format! Featuring brand new stories by Charlene Elsby, Lydia Xythali, Joe O’Brien, Salvatore Difalco, & Evelyn Winters; Art by abandoned-site photographer Cindy Vasko & Haitian artistic diplomats Mario Pierre-Louis & Company; Poetry by Thom Hawkins and Fr. Defenestrato; and comics by Jesse Hilson and Eric Henderson. 64 pages + covers. Print size 4.25″ x 5.8″',
        price:'$6.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 6,
        issueInfo:"EXCUSE ME Mag No. 6: PRIZED POSSESSIONS!",
        coverImage: cover6,
        sampleImage: sample6,
        description: 'EXCUSE ME Mag No. 6, SPRING, 2022: The PRIZED POSSESSIONS Issue! Featuring brand new stories by dave ring, Kristin Cleaveland, Brenna Gomez, Evelyn Winters, & Tim Frank; Art by illustrator René Carter & asemic writer Jay Snodgrass; Poetry by J.D. Harlock & Fr. Defenestrato; two “Night Mares” by Bryan Edenfield; and comics by Jesse Hilson and Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.',
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 5,
        issueInfo:"EXCUSE ME Mag No. 5: THE BARGAIN OF A LIFETIME!",
        coverImage: cover5,
        sampleImage: sample5,
        description: 'EXCUSE ME Mag No. 5, SUMMER, 2021: The BARGAIN OF A LIFETIME Issue! Featuring brand new stories by Sara Century, Tex Gresham, Lydia Xythali, Barrymore Tebbs, & Eric Henderson; Art by renaissance man Sam Pink & abandoned site photographer Cindy Vasko; Poetry by Barracuda Guarisco & Fr. Defenestrato; & an epic comic by Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″',
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 4,
        issueInfo:"EXCUSE ME Mag No. 4: THE BLOOD & BAD TIMES!",
        coverImage: cover4,
        sampleImage: sample4,
        description: 'EXCUSE ME Mag No. 4, FALL, 2020: The BLOOD & BAD TIMES Issue! Featuring an exclusive “deleted scene” chapter from the new novel Affect by Charlene Elsby; stories by A.M. Metivier, Jeff Chon, Lydia Xythali, & Madison McSweeney; Exclusive stills from the film Sammy-Gate by Noel Lawrence; Art by photorealist/ surrealist illustrator Chris Alsop & illustrator/designer Ken Adams; Poetry by Juliet Cook & Fr. Defenestrato; & a one-page comic by Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.',
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 3,
        issueInfo:"EXCUSE ME Mag No. 3: THE PERFORMANCE / ANXIETY!",
        coverImage: cover3,
        sampleImage: sample3,
        description: 'EXCUSE ME Mag No. 3, SUMMER, 2020: The PERFORMANCE / ANXIETY Issue! Featuring a ridiculous slice of ephemera by bizarro novelist Danger Slater; stories by Anna Tizard, RW Spryszak, Thom Hawkins & Eric Henderson; Art by puppet-maker/photographer John Staples & illustrator Brian Kerrigan; Poetry by McKenna Clarke & Fr. Defenestrato; & a comic by Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″',
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 2,
        issueInfo:"EXCUSE ME Mag No. 2: THE PERFECT MATCH!",
        coverImage: cover2,
        sampleImage: sample2,
        description: 'EXCUSE ME Mag No. 2, WINTER, 2020: The PERFECT MATCH Issue! Featuring an original short play by indie icon Mark Borchardt; stories by R. Daniel Lester, Laura Henderson, A.M. Metivier, & Eric Henderson; Art by illustrator Ilenia Madelaire & collage mayhem-maker Casey Babb; Poetry by Jessie Janeshek & Fr. Defenestrato; & a comic by Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″',
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 1,
        issueInfo:"EXCUSE ME Mag No. 1: EXISTENTIAL CRISIS!",
        coverImage: cover1,
        sampleImage: sample1,
        description: 'EXCUSE ME Mag No. 1, FALL, 2019. FIRST ISSUE SPECTACULAR: EXISTENTIAL CRISIS! Featuring an original story by underground legend Darius James; more stories by A.M. Metivier, Barrymore Tebbs, Thom Hawkins, & Eric Henderson; Art by photographer/model Ina Otzko & painter/illustrator Marybeth Chew; Poetry by Fr. Defenestrato & Eric Henderson; & a comic by Eric Henderson, too. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.',
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    
    ];

    return (
        <div className="container container-height">
        <div className="row sm-2 text-center">
            <div className="playfair-font">
            <div className="col sm-4">
                <Navbar />
            <h1 className="text-center">EXCUSE ME Mag</h1>
            </div>
        </div>
        <br />
        <div className="text-center mt-4">
            <div className='playfair-font'>
            {images.map((image) => (
            <Link
                key= {image.id}
                to={`issue${image.id}`}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="btn btn-danger"
            > Issue No.
            {image.id}
            </Link>
            ))}
        </div>
        </div>
        {images.map((image) => (
            <Element key={`issue${image.id}`} name={`issue${image.id}`}>
            <div className= "image-container">
            <div className="row justify_content-center sm-2">
                <div className='playfair-font'>
                <div className="center-col-sm-8 mb-4">
                <div className="center-col-sm-6 mb-4">
                    <div className="card center-col-sm-8 mb-4">
                    <div className="card-body center-col-sm-6 mb-4">
                        <h5 className="card-title">{image.issueInfo}</h5>
                        <div className="row justify-content-center width=60%">
                        <div className="col-4">
                            <img src={image.coverImage} alt={`Cover of Issue ${image.id}`} className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={image.sampleImage} alt={`Sample of Issue ${image.id}`} className="img-fluid" />
                        </div>
                        </div>
                        <p className="card-text col sm-4">{image.description}</p>
                        <p> Issue # {image.id} digital (.PDF) - $2.00</p>
                        <a href={image.purchaseLinkPDF} className="btn btn-danger">Purchase PDF</a>
                        <p> Issue #{image.id} {image.id <= 6 ? 'print - $5.00' : 'print - $6.00'}</p>
                        <a href={image.purchaseLink} className="btn btn-danger">Purchase Print</a>
                        <p>(Payment links through SendOwl,– $ transactions secured through Paypal)</p>
                    </div>
                    </div>
                    </div>
                </div>    
                </div>
                </div>
            </div>
            </Element>
            
        ))}
        <div className="text-center mt-4">
            <div className="playfair-font">
            {images.map((image) => (
            <Link
                key= {image.id}
                to={`issue${image.id}`}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="btn btn-danger"
            > Issue No.
            {image.id}
            </Link>
            ))}
        </div>
        </div>
        <Navbar />
        </div>
        </div>
    );
    };
    
    export default Issues;

//     return (
//         <div className="container container-height">
//         <div className="row sm-2">
//             <div className="col">
//                 <h1 className="text-center">EXCUSE ME Mag</h1>
//             <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Home</button>
//         </div>
//         <br />
//         </div>
//         <div className="text-center mt-4">
//                 {images.map((image) => (
//                     <Link
//                         key={image.id}
//                         to={`issue${image.id}`}
//                         spy={true}
//                         smooth={true}
//                         duration={500}
//                         offset={-100}
//                         className="btn btn-link"
//                     >
//                         {image.id}
//                     </Link>
//                 ))}
//             </div>
//         <div className="row">
//             {images.map((images) => (
//             <Element key={`issue${images.id}`} name={`issue${images.id}`}>
//             <div className="row">
//             <div key={images.id} className="col-md-8 mb-4">
//             <div key={images.id} className="center-col-md-8 mb-4">
//                 <div className="card">
//                 <div className="card-body">
//                 <h5 className="card-title">{images.issueInfo}</h5>
//                 <div className="row">
//                     <div className="col-6">
//                     <img src={images.coverImage} alt={`Cover of Issue ${images.id}`} className="img-fluid" />
//                 </div>
//                 <div className="col-6">
//                     <img src={images.sampleImage} alt={`Contents ${images.id}`} className="img-fluid" />
//                 </div>
//                 </div>
//                 <p className="card-text">{images.description}</p>
//                 <div className="btn-group" role="group" aria-label="Purchase Links">
//                     <p> Issue # ${images.id} digital (.PDF) - $2.00</p>
//                 <a href={images.purchaseLinkPDF} className="btn btn-danger">Buy Now</a>
//                     <p> Issue # ${images.id} print - $5.00</p>
//                 <a href={images.purchaseLink} className="btn btn-danger">Buy Now</a>
//                     <p>(Payment links through SendOwl,– $ transactions secured through Paypal)</p>
//             </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </Element>
//         ))}
//         </div>
//         </div>  
    

//     );
// };

// export default Issues;
