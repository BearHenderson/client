import React from 'react'
import Navbar from './Navbar'

const Submissions = () => {
    const style = {
        textAlign: 'left',
        marginLeft: '20px',
        width: '55%',
    };
    return (
    <div style={style}>
        <Navbar />
        <br></br>
        <h3 className='playfair-font'>
        Hello, potential Excuse Me Mag author! SUBMISSIONS ARE CURRENTLY OPEN.</h3>
        <br></br>
        <h5 className='playfair-font'>Please send us your shortest, weirdest piece or 3 right now. Currently looking for weird fiction, approx. 500-1500 words, and the theme is UNWINNABLE GAMES. Please send stuff directly to <a href="mailto:excusememag@gmail.com">excusememag@gmail.com</a>. We pay only in contributor’s copies and notoriety unless we specifically solicit your contribution. We like stuff weird, especially with an irreverent or anti-authoritarian flavor, but don’t mistake that to mean we like bigots (we don’t. Go away, bigots). In general, we go for (weird but) smaller-scale stories, with just a couple/few characters. If you’re curious whether your stuff might be a good fit, email <a href="mailto:excusememag@gmail.com">excusememag@gmail.com</a> for a free copy of the latest issue. Simultaneous submissions are fine, previously published ok if not currently online/ in print (but let us know).
        </h5>
        <br></br>
        <h3 className='playfair-font'>Hello, potential Excuse Me Mag poet! SUBMISSIONS ARE CURRENTLY OPEN!</h3>
        <br></br>
        <h5 className='playfair-font'>  Send up to 5 poems. Poets needn’t worry about the theme, just send something cool to <a href="mailto:excusememag@gmail.com">excusememag@gmail.com</a>. Shorter is usually better, with roughly 10-20 lines being the sweet spot. We (so far) only accept one unsolicited poem per issue, and it’s usually the first one we see that we really like. No pay, just copies. We like stuff weird. Curious if your stuff might be a good fit? Email <a href="mailto:excusememag@gmail.com">excusememag@gmail.com</a> for a free copy of the latest issue.</h5>
        <br></br>
        <h3 className='playfair-font'>Hello, potential Excuse Me Mag artist! SUBMISSIONS ARE CURRENTLY OPEN!</h3>
        <br></br>
        <h5 className='playfair-font'> Don’t worry about the theme. Our art feature format works like this: one page of text (written by the editor, but let us know if you have a mission statement or something) followed by 7 full-page images, plus a possible bonus image for the back or inside-back cover (email us for a free copy to see what this looks like). So, we’ll use 7 or 8 images, but feel free to submit more or just point us towards your existing social media. Print-size for the magazine is 4.25″ wide x 5.8″ high, so we may need to crop your images to fit (you can be involved, no prob). No pay, just copies. We like stuff weird. Curious if you’re a good fit? Email <a href="mailto:excusememag@gmail.com">excusememag@gmail.com</a> for a free copy of the latest issue.</h5>
        <br></br>
        <h6 className='playfair-font'>Questions about any of this? You guessed it– email <a href="mailto:excusememag@gmail.com">excusememag@gmail.com</a>. You’ll find us personable. Thanks!</h6>
        <br/>
        <Navbar />
    </div>
    )
}

export default Submissions