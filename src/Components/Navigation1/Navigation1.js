import React from "react";
import "./Navigation1.css";


const Navigation1 = props => {
    return (
        <div className="Navigation1">
            <div className="baba">
            <div className="ipari">
            <ul className="epara">
                <select name="end" >
                    <option><li><a href="#" className="caca">Cryptos:21,200</a></li></option>
                </select>
                <select>
                    <option><li><a href="#" className="caca">Exchanges:525</a></li></option>
                </select>
                
                <select>
                    <option><li><a href="#" className="caca">Marketplaces: 3</a></li></option>
                </select>
                
                <select>
                    <option><li><a href="#" className="caca">Market Cap:$1,108,910,944,084,088</a></li></option>
                </select>
                
                <select>
                    <option><li><a href="#" className="caca">24h Vol:$102,188,690,183,10</a></li></option>
                </select>
                
                <select>
                    <option> <li><a href="#" className="caca">Dominance:BTC:41,7% ETH:18.9%</a></li></option>
                </select>
                <p><img src={require('./photos/zjarri.png')} width={8} 
                alt="zjemi" /></p>
                <select>
                    <option><li><a href="#" className="caca">Gas:30 Gwei</a></li></option>
                </select>
               
                

                
                
            </ul>
            </div>
            <div className="idyti">
                <ul className="sparta">
                <p className="usa"><img src={require('./photos/usa-6261241-5188047.png')} width={15} alt="usaFlag"/></p>
                <select className="englishi">
                    <option><li><a href="#" className="caca">English</a></li></option>
                </select>
                <div className="etreta">
                <p className="fmadh"><img src={require('./photos/gjelberta.png')}  alt="gjelberta"/>
                </p>
                <p className="fvogel"><img src={require('./photos/mbrendagjelbert.png')} alt="dolche"/></p>
                </div>
                <select className="dollari">
                    <option><li><a href="#" className="caca">Usd</a></li></option>
                </select>
        
                </ul>
             
            </div>
            
            </div>
           
                <hr className="vija"/>
        </div>
    );
}

export default Navigation1;