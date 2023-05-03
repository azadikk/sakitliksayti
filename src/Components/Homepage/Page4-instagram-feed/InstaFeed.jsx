import End from './EndPage';
import './InstaFeed.css';
import Social from './SocialAccount';

export default function InstaFeed() {
    return (
        <div className='feedPage'>
            <h1>Instagram feed</h1>
            <div className='layoutBox'>
                <img id='insta' src='instafeedbg.png' />
                <img id='instaLogo' src='instaLogo.png' />
                <img id='houseRepeat' src='house3.jpg' />
                <img id='house' src='house.png' />

                <img id='house2' src='house2.jpg' />
                <img id='house3' src='house3.jpg' />
            </div>
            <Social />
            <End />
        </div>
    );
}