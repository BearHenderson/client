import React from 'react';
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
        purchaseLink: 'https://example.com/purchase/issue1',
    },
    {
        id: 6,
        issueInfo:"EXCUSE ME Mag No. 6: PRIZED POSSESSIONS!",
        coverImage: cover6,
        sampleImage: sample6,
        description: 'EXCUSE ME Mag No. 6, SPRING, 2022: The PRIZED POSSESSIONS Issue! Featuring brand new stories by dave ring, Kristin Cleaveland, Brenna Gomez, Evelyn Winters, & Tim Frank; Art by illustrator René Carter & asemic writer Jay Snodgrass; Poetry by J.D. Harlock & Fr. Defenestrato; two “Night Mares” by Bryan Edenfield; and comics by Jesse Hilson and Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 5,
        issueInfo:"EXCUSE ME Mag No. 5: THE BARGAIN OF A LIFETIME!",
        coverImage: cover5,
        sampleImage: sample5,
        description: 'EXCUSE ME Mag No. 5, SUMMER, 2021: The BARGAIN OF A LIFETIME Issue! Featuring brand new stories by Sara Century, Tex Gresham, Lydia Xythali, Barrymore Tebbs, & Eric Henderson; Art by renaissance man Sam Pink & abandoned site photographer Cindy Vasko; Poetry by Barracuda Guarisco & Fr. Defenestrato; & an epic comic by Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 4,
        issueInfo:"EXCUSE ME Mag No. 4: THE BLOOD & BAD TIMES!",
        coverImage: cover4,
        sampleImage: sample4,
        description: 'EXCUSE ME Mag No. 4, FALL, 2020: The BLOOD & BAD TIMES Issue! Featuring an exclusive “deleted scene” chapter from the new novel Affect by Charlene Elsby; stories by A.M. Metivier, Jeff Chon, Lydia Xythali, & Madison McSweeney; Exclusive stills from the film Sammy-Gate by Noel Lawrence; Art by photorealist/ surrealist illustrator Chris Alsop & illustrator/designer Ken Adams; Poetry by Juliet Cook & Fr. Defenestrato; & a one-page comic by Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 3,
        issueInfo:"EXCUSE ME Mag No. 3: THE PERFORMANCE / ANXIETY!",
        coverImage: cover3,
        sampleImage: sample3,
        description: 'EXCUSE ME Mag No. 3, SUMMER, 2020: The PERFORMANCE / ANXIETY Issue! Featuring a ridiculous slice of ephemera by bizarro novelist Danger Slater; stories by Anna Tizard, RW Spryszak, Thom Hawkins & Eric Henderson; Art by puppet-maker/photographer John Staples & illustrator Brian Kerrigan; Poetry by McKenna Clarke & Fr. Defenestrato; & a comic by Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 2,
        issueInfo:"EXCUSE ME Mag No. 2: THE PERFECT MATCH!",
        coverImage: cover2,
        sampleImage: sample2,
        description: 'EXCUSE ME Mag No. 2, WINTER, 2020: The PERFECT MATCH Issue! Featuring an original short play by indie icon Mark Borchardt; stories by R. Daniel Lester, Laura Henderson, A.M. Metivier, & Eric Henderson; Art by illustrator Ilenia Madelaire & collage mayhem-maker Casey Babb; Poetry by Jessie Janeshek & Fr. Defenestrato; & a comic by Eric Henderson. 64 b/w pages + color covers. Print size 4.25″ x 5.5″',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    {
        id: 1,
        issueInfo:"EXCUSE ME Mag No. 1: EXISTENTIAL CRISIS!",
        coverImage: cover1,
        sampleImage: sample1,
        description: 'EXCUSE ME Mag No. 1, FALL, 2019. FIRST ISSUE SPECTACULAR: EXISTENTIAL CRISIS! Featuring an original story by underground legend Darius James; more stories by A.M. Metivier, Barrymore Tebbs, Thom Hawkins, & Eric Henderson; Art by photographer/model Ina Otzko & painter/illustrator Marybeth Chew; Poetry by Fr. Defenestrato & Eric Henderson; & a comic by Eric Henderson, too. 64 b/w pages + color covers. Print size 4.25″ x 5.5″.',
        purchaseLink: 'https://example.com/purchase/issue2',
    },
    
    ];

    return (
    <div className="container">
        <div className="row">
            {images.map((images) => (
            <div key={images.id} className="col-md-6 mb-4">
                <div className="card">
                <div className="card-body">
                <h5 className="card-title">{images.issueInfo}</h5>
                <div className="row">
                    <div className="col-6">
                    <img src={images.coverImage} alt={`Cover of Issue ${images.id}`} className="img-fluid" />
                </div>
                <div className="col-6">
                    <img src={images.sampleImage} alt={`Contents ${images.id}`} className="img-fluid" />
                </div>
                <br />
                </div>
                <p className="card-text">{images.description}</p>
                <a href={images.purchaseLink} className="btn btn-primary">Purchase</a>
            </div>
            </div>
        </div>
        ))}
        </div>
    </div>
    );
};

export default Issues;
