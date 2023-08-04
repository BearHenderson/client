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
        description: <>{''} <strong>EXCUSE ME Mag No. 7, WINTER, 2023: The ON LOCATION Issue!</strong>{''} New FULL COLOR format! Featuring brand new stories by {''} <strong> Charlene Elsby, Lydia Xythali, Joe O’Brien, Salvatore Difalco, & Evelyn Winters </strong> {''}; Art by abandoned-site photographer {''}<strong>Cindy Vasko{''}</strong> & Haitian artistic diplomats {''}<strong> Mario Pierre-Louis & Company{''}</strong>; Poetry by {''}<strong>Thom Hawkins{''}</strong> and {''}<strong>Fr. Defenestrato{''}</strong>; and comics by {''}<strong>Jesse Hilson{''}</strong> and {''}<strong>Eric Henderson{''}</strong>. 64 pages + covers. Print size 4.25″ x 5.8″.</>,
        price:'$6.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 6,
        issueInfo:"EXCUSE ME Mag No. 6: PRIZED POSSESSIONS!",
        coverImage: cover6,
        sampleImage: sample6,
        description:<> {''}<strong>EXCUSE ME Mag No. 6, SPRING, 2022: The PRIZED POSSESSIONS Issue!</strong>{''} Featuring brand new stories by {''}<strong>dave ring, Kristin Cleaveland, Brenna Gomez, Evelyn Winters, & Tim Frank</strong>{''}; Art by illustrator {''}<strong>René Carter</strong>{''} & asemic writer {''}<strong>Jay Snodgrass</strong>{''}; Poetry by {''}<strong>J.D. Harlock & Fr. Defenestrato</strong>{''}; two “Night Mares” by {''}<strong>Bryan Edenfield</strong>{''}; and comics by {''}<strong>Jesse Hilson</strong>{''} and {''}<strong>Eric Henderson</strong>{''}. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.</>,
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 5,
        issueInfo:"EXCUSE ME Mag No. 5: THE BARGAIN OF A LIFETIME!",
        coverImage: cover5,
        sampleImage: sample5,
        description: <>{''}<strong>EXCUSE ME Mag No. 5, SUMMER, 2021: The BARGAIN OF A LIFETIME Issue!</strong>{''} Featuring brand new stories by {''}<strong>Sara Century, Tex Gresham, Lydia Xythali, Barrymore Tebbs, & Eric Henderson</strong>{''}; Art by renaissance man {''}<strong>Sam Pink</strong>{''} & abandoned site photographer {''}<strong>Cindy Vasko</strong>{''}; Poetry by {''}<strong>Barracuda Guarisco & Fr. Defenestrato</strong>{''}; & an epic comic by {''}<strong>Eric Henderson</strong>{''}. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.</>,
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 4,
        issueInfo:"EXCUSE ME Mag No. 4: THE BLOOD & BAD TIMES!",
        coverImage: cover4,
        sampleImage: sample4,
        description:<> {''}<strong>EXCUSE ME Mag No. 4, FALL, 2020: The BLOOD & BAD TIMES Issue!</strong>{''} Featuring an exclusive “deleted scene” chapter from the new novel Affect by {''}<strong>Charlene Elsby</strong>{''}; stories by {''}<strong>A.M. Metivier, Jeff Chon, Lydia Xythali, & Madison McSweeney</strong>{''}; Exclusive stills from the film Sammy-Gate by {''}<strong>Noel Lawrence</strong>; Art by photorealist/ surrealist illustrator {''}<strong>Chris Alsop</strong>{''} & illustrator/designer {''}<strong>Ken Adams</strong>{''}; Poetry by {''}<strong>Juliet Cook & Fr. Defenestrato</strong>{''}; & a one-page comic by {''}<strong>Eric Henderson</strong>{''}. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.</>,
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 3,
        issueInfo:"EXCUSE ME Mag No. 3: THE PERFORMANCE / ANXIETY!",
        coverImage: cover3,
        sampleImage: sample3,
        description: <>{''}<strong>EXCUSE ME Mag No. 3, SUMMER, 2020: The PERFORMANCE / ANXIETY Issue!</strong>{''} Featuring a ridiculous slice of ephemera by bizarro novelist {''}<strong>Danger Slater</strong>{''}; stories by {''}<strong>Anna Tizard, RW Spryszak, Thom Hawkins & Eric Henderson</strong>{''}; Art by puppet-maker/photographer {''}<strong>John Staples</strong>{''} & illustrator {''}<strong>Brian Kerrigan</strong>{''}; Poetry by {''}<strong> McKenna Clarke & Fr. Defenestrato</strong>{''}; & a comic by {''}<strong>Eric Henderson</strong>{''}. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.</>,
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 2,
        issueInfo:"EXCUSE ME Mag No. 2: THE PERFECT MATCH!",
        coverImage: cover2,
        sampleImage: sample2,
        description: <>{''}<strong>EXCUSE ME Mag No. 2, WINTER, 2020: The PERFECT MATCH Issue!</strong>{''} Featuring an original short play by indie icon{''}<strong> Mark Borchardt</strong>{''}; stories by{''} <strong> R. Daniel Lester, Laura Henderson, A.M. Metivier, & Eric Henderson</strong>{''}; Art by illustrator {''}<strong>Ilenia Madelaire</strong>{''} & collage mayhem-maker {''}<strong> Casey Babb</strong>{''}; Poetry by {''}<strong>Jessie Janeshek & Fr. Defenestrato</strong>{''}; & a comic by {''}<strong>Eric Henderson</strong>{''}. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.</>,
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 1,
        issueInfo:"EXCUSE ME Mag No. 1: EXISTENTIAL CRISIS!",
        coverImage: cover1,
        sampleImage: sample1,
        description: <>{''}<strong>EXCUSE ME Mag No. 1, FALL, 2019. FIRST ISSUE SPECTACULAR: EXISTENTIAL CRISIS!</strong>{''} Featuring an original story by underground legend {''}<strong> Darius James</strong>{''}; more stories by {''}<strong>A.M. Metivier, Barrymore Tebbs, Thom Hawkins, & Eric Henderson</strong>{''}; Art by photographer/model {''}<strong> Ina Otzko</strong>{''} & painter/illustrator {''}<strong>Marybeth Chew</strong>{''}; Poetry by {''}<strong> Fr. Defenestrato & Eric Henderson</strong>{''}; & a comic by {''}<strong>Eric Henderson</strong>{''}, too. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.</>,
        price: '$5.00',
        purchaseLinkPDF: 'https://example.com/purchase/issue1',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    
    ];

    return (
        <div className="container container-height">
        <div className="row sm-2 text-center">
            <div className="playfair-font">
            <div className="col sm-4 mt-4">
                <Navbar />
            <h1 className="text-center">EXCUSE ME Mag</h1>
            </div>
        </div>
        <br />
        <div className="text-center">
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
        <br />
        {images.map((image) => (
            <Element key={`issue${image.id}`} name={`issue${image.id}`}>
            <div className= "image-container">
            <div className="row justify_content-center sm-2 mt-4">
                <div className='playfair-font'>
                <div className="center-col-sm-8 mb-4">
                <div className="center-col-sm-6 mb-4">
                    <div className="card center-col-sm-8 mb-4">
                    <div className="card-body center-col-sm-6 mb-4">
                        <h3 className="card-title">{image.issueInfo}</h3>
                        <div className="row justify-content-center width=60%">
                        <div className="col-4">
                            <img src={image.coverImage} alt={`Cover of Issue ${image.id}`} className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={image.sampleImage} alt={`Sample of Issue ${image.id}`} className="img-fluid" />
                        </div>
                        </div>
                        <h5 className="card-text col sm-4 mt-4">{image.description}</h5>
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
