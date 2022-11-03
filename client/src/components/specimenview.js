import React from "react";
import '../HerbariumS1.css';
export default function SpecimenView() {
    return (
        <div>
          <div id="infoNsearch"> 
            <div id="info">
              <ul id="infoList">
                <li className="infoListData"><u>Common Name:</u> Redwood, Giant Redwood</li>
                <li className="infoListData"><u>Genus:</u> Sequoia, Sequoiadendron, Metasequoia</li>
                <li className="infoListData"><u>Region:</u> Pacific Northwest</li>
                <li className="infoListData"><u>Tags:</u> Redwood, Giant, Tall, Local</li>
                <li className="infoListData"><u>Type:</u> Local </li>
                <li className="infoListData"><u>Catalog Number:</u> 00001</li>		
              </ul>
            </div>
            <div id="search">
              <div id="searchEntry">
                <div id="floraTypeid">
                  <p> Search by Type </p>
                  <select name="floraType">
                    <option value="none">Type</option>
                    <option value="Medicinal">Medicinal Plants</option>
                    <option value="Food">Food Plants</option>
                    <option value="Poisonous">Poisonous Plants</option>
                    <option value="House">House Plants</option>
                    <option value="Local">Local Plants</option>
                    <option value="Cultural">Cultural Connections</option>
                    <option value="Economic">Economic Botany</option>
                  </select>
                </div>
                <div>
                  <p> --OR-- </p>
                  <p> Search by Keyword </p>
                  <input type="Keyword" name="status" id="Keyword" placeholder="Keyword" /><br /><br /><br />
                  <input type="submit" defaultValue="Search" />
                </div>
              </div>
              <div id="imageSearch">
                <div id="prevImage">
                  <p className="floraPad">&lt;&lt;&nbsp;&nbsp;<u>Previous</u></p>
                  <p className="pImage"><img src="https://goodstock.photos/wp-content/uploads/blade-grass-extend-forward-dew.jpg" alt="grass" width="80%" height="100%" /></p>
                  <p className="floraLabel">Grass</p>
                </div>
                <div id="nextImage">
                  <p className="floraPad"><u>Next</u>&nbsp;&nbsp;&gt;&gt;</p>
                  <p className="pImage"><img src="https://urnabios.com/wp-content/uploads/2015/08/Albino-Redwood.jpg" alt="Albino Redwood" width="80%" height="100%" /></p>
                  <p className="floraLabel">Albino Redwood</p>
                </div>
              </div>
            </div> 
          </div>
          <article>
            <div id="iframeDiv"> 
              <iframe title="Massive -- Redwood Style -- Tree" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/7918ffb5528647519ce40daf96acd8d2/embed" width="100%" height="100%" frameBorder={0}> 
              </iframe> 
            </div>
          </article>
          <footer>
            <div className="footLink" id="meetLink">About</div>
            <div className="footLink">Meet the Team</div>
            <div className="footLink">Cal Poly Humboldt</div>
          </footer>
        </div>
      );
    }