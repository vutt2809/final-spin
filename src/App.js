import React, { useState } from 'react';

import WheelComponent from './weel';
import 'react-wheel-of-prizes/dist/index.css';
import './styles.css';
import IMAGES from './assets';

import { TrPortal } from './portal';
import Confetti from 'react-confetti';

export const App = () => {
    const [portal, setPortal] = useState(false);
    const [show, setShow] = useState(false);

    let objIndex = {
        Iphone13promax: 1,
        Bosesurroundspeakers: 2,
        'Samsung65-InchCrystalUHD4KFlatSmartTV': 3,
        'MacBookAirMGN6314”Display,AppleM1ChipWith8-Core': 4,
        KIATELLURIDE2022: 5,
        SAMSUNGFRONTLOADWASHINGMACHINE16KG: 6,
        '10GRAMSGOLDCOIN': 7,
        VOUCHERFORGEORGIAFAMILYTRIPUPTO4: 8,
        AMAZONGIFTVOUCHERWORTH1000AED: 9,
        APPLEAIRPODSPRO: 10,
    };
    const segments = [
        'I phone 13 pro max',
        'Bose surround speakers',
        'Samsung 65-Inch Crystal UHD 4K Flat Smart TV ',
        'MacBook Air MGN63 14” Display, Apple M1 Chip With 8-Core',
        'KIA TELLURIDE 2022',
        'SAMSUNG FRONT LOAD WASHING MACHINE 16KG',
        '10GRAMS GOLD COIN',
        'VOUCHER FOR GEORGIA FAMILY TRIP UPTO 4',
        'AMAZON GIFT VOUCHER WORTH 1000AED',
        'APPLE AIRPODS PRO',
    ];

    const weelColors = () => {
        let arr = [];
        let colors = ['#EE4040', '#F0CF50', '#815CD1', '#3DA5E0', '#34A24F'];
        segments.forEach((el) => {
            let color = colors.shift();
            arr.push(color);
            colors.push(color);
        });

        return arr;
    };

    const segColors = weelColors();

    const onFinished = (winner) => {
        setPortal(false);
        setShow(winner);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '150px',
                paddingBottom: '150px',
                background: `url(${IMAGES.background})`,
            }}
        >
            {show && <Confetti width={1600} height={1019} />}
            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment={'1'}
                onFinished={(winner) => onFinished(winner)}
                primaryColor="gray"
                contrastColor="white"
                buttonText="Spin"
                isOnlyOnce={true}
            />
            {portal ? <TrPortal /> : null}
            {show && (
                <div className="box">
                    <div className="imageBox">
                        <img src={IMAGES[`image${objIndex[show.split(' ').join('')]}`]} alt="" />
                    </div>
                    <h2 className="titleWin">CONGRATULATIONS!!! YOU HAVE WON {show} !!!</h2>
                    <div className="closeContainer">
                        <button className="closepankaj" onClick={() => setShow(false)}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
