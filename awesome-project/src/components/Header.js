import React from 'react';
import change_carte from '/mnt/c/Users/koboy/Covid/awesome-project/src/components/change_carte';
  
const Header = () => {
    return (
        <div className="tt_boutuon">
            <div className="bouton">
                <button onClick={() => change_carte('France')}>Carte France</button>
                <button onClick={() => change_carte('Guadeloupe')}>Carte Guadeloupe</button>
                <button onClick={() => change_carte('Guyane')}>Carte Guyane</button>
                <button onClick={() => change_carte('Martinique')}>Carte Martinique</button>
                <button onClick={() => change_carte('Mayotte')}>Carte Mayotte</button>
                <button onClick={() => change_carte('Reunion')}>Carte Reunion</button>
            </div>
        </div>
    );
};

export default Header;
