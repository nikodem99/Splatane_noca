import React, { useState } from 'react';
import '../styles/Social.scss';

const Social = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { id: 0, title: "Allegro" },
        { id: 1, title: "Facebook" },
        { id: 2, title: "Instagram" },
        // { id: 3, title: "Interview" }
    ];

    const contents = [
        {
            id: 0,
            url:"https://allegrolokalnie.pl/uzytkownik/splatane_noca?fbclid=IwY2xjawEluXJleHRuA2FlbQIxMAABHZNs3OMSqzjE7dDUH9yOyVurPIcKtlYT2L_MMF-owFj_85zaSyYiPBS-1Q_aem_iHQUBV2qMpEuyhF_Zp1q7g",
            img: "https://static.wirtualnemedia.pl/media/top/allegro-main1.png",
            title: "Kup produkt na moim Allegro!",
            text: "Śmiało kup produkt dzięki serwisowi allegro. Wszystkie moje prace znajdziesz na moim koncie. Dodatkowo w razie braku odpowiedniego towaru proszę o kontakt!"
        },
        {
            id: 1,
            img: "https://cdn.logojoy.com/wp-content/uploads/20230921104407/Facebook-logo-2015_2019-600x319.png",
            title: "Dołącz do mojego facebooka!",
            text: "Nie czekaj i dołącz do mojego facebooka. Dzięki temu będziesz na biezaco z nowymi pracami i kospektami ktore dostarczam w ramach mojej pracy."
        },
        {
            id: 2,
            img: "https://pngbuy.com/wp-content/uploads/2023/06/HD-instagram-logoinstagram-logotipo-png.png",
            title: "Odwiedz naszego instagrama",
            text: "Codziennie dodaję swoje prace w celu promowania swoich uslug. Kazdego dnia wkładam w to serce i jestem zadowolona z postępu moich prac. Odwiedz mnie i spradz moje najnowsze prace!"
        },
    ];

    return (
        <div className="social" id="find-me">
          <div class="StepsTitle_container__FrrFf"><h2>Znajdz mnie</h2></div>
            <ul className="tabs">
                {tabs.map(tab => (
                    <li key={tab.id}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={() => setActiveTab(tab.id)}>
                        {tab.title}
                    </li>
                ))}
            </ul>
            <div className="contents">
                {contents.map(content => (
                    <div key={content.id}
                         className={`box ${activeTab === content.id ? 'show' : 'hide'}`}>
                        <img src={content.img} alt="Content" />
                        <div>
                            <h3>{content.title}</h3>
                            <p>{content.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Social;
