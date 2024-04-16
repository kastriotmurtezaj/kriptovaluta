import React from "react";
import "./Navigation2.css";

const Navigation2 = props => {
    return (

        <div className="navigation2">
            <div className="kryptozgjedhjet">

                <image>
                    <img src={require('./photos2/Group 2102.png')} alt="Crypto"  className="fotoocrypt"/>
                </image>
                <div className="zgjedhjet">
                    <ul>
                    <select name="end" >
                    <option><li><a href="#" className="caca">Cryptocorrencies</a></li></option>
                </select>
                <select name="end" >
                    <option><li><a href="#" className="caca">Exchanges</a></li></option>
                </select>  <select name="end" >
                    <option><li><a href="#" className="caca">NFT</a></li></option>
                </select>  <select name="end" >
                    <option><li><a href="#" className="caca">Products</a></li></option>
                </select>  <select name="end" >
                    <option><li><a href="#" className="caca">Community</a></li></option>
                </select>  <select name="end" >
                    <option><li><a href="#" className="caca">Affiliate</a></li></option>
                </select>  <select name="end" >
                    <option><li><a href="#" className="caca">Learn</a></li></option>
                </select>
                    </ul>

                    <div className="zgjedhjet2">
                        <label className="llabeli">
                        <img src={require('./photos2/Group 1230.png')} alt="vijat" className="serchi"/>
                            <input type="search"  placeholder="Search blocks, transactions, hash " className="kerkimi"/>
                            <img src={require('./photos2/Iconly-Curved-Filter.png')} alt="vijat" className="settingsi"/>
                        </label>
                    </div>
                    
                    <zgjedhjet3>
                        <img src={require('./photos2/Path 5239.png')} alt="setingsi" className="setingsii"/>
                         <input type="submit" value={'Log in'}className="loginjo" />  
                            <input type="submit" value={'Sign Up'} className="signupinjo"/>


                    </zgjedhjet3>
                </div>
            </div>
        </div>

   )
}

export default Navigation2;