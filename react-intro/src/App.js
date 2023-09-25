import "./App.css";
import face from "./images/face.gif";

import netflixFate from "./images/netflixFate.png";
import netflixOutside from "./images/netflixOutside.png";
import netflixStarTrek from "./images/netflixStarTrek.png";
import netflixGambit from "./images/netflixGambit.png";
import netflixWitcher from "./images/netflixWitcher.png";

import airbnbCabin from "./images/airbnbCabin.png";
import airbnbHome from "./images/airbnbHome.png";
import airbnbPets from "./images/airbnbPets.png";
import airbnbUnique from "./images/airbnbUnique.png";

import bbcMorgan from "./images/bbcMorgan.png";
import bbcPandemic from "./images/bbcPandemic.png";
import bbcPay from "./images/bbcPay.png";
import bbcUnilever from "./images/bbcUnilever.png";

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1>React Intro</h1>
        <img className="face" src={face} alt="Matt's Face"></img>
        <Person name="Matt" age="33" jobTitle="junior developer" />

        <Person name="Albie" age="2" jobTitle="child" />

        <Person name="Harry" age="4 months" jobTitle="baby" />
      </div>

      <div className="netflix">
        <h1>Netflix Component Challenge</h1>
        <div className="netflixWindow">
          <Netflix source={netflixFate} />
          <Netflix source={netflixOutside} />
          <Netflix source={netflixStarTrek} />
          <Netflix source={netflixGambit} />
          <Netflix source={netflixWitcher} />
        </div>
      </div>

      <div className="airbnb">
        <h1>AirBnB Component Challenge</h1>
        <div className="airbnbWindow">
          <Airbnb source={airbnbHome} caption="Entire homes" />
          <Airbnb source={airbnbUnique} caption="Unique Stays" />
          <Airbnb source={airbnbCabin} caption="Cabins and cottages" />
          <Airbnb source={airbnbPets} caption="Pets allowed" />
        </div>
      </div>

      <div className="bbc">
        <h1>BBC Component Challenge</h1>
        <div className="bbcWindow">
          <Bbc
            source={bbcPandemic}
            headline="Don't think pandemic is over, Whitty warns"
            tagline="Unlocking too quickly would lead to a substantial surge in infection, UK chief medical adviser says."
            section="Health"
          />
          <Bbc
            source={bbcPay}
            headline="Pay rise was set to be 2.1% - NHS chief"
            tagline="NHS England boss backs ministers over pay dispute but does not rule our a one-off bonus for workers."
            section="UK Politics"
          />
          <Bbc
            source={bbcMorgan}
            headline="Charity criticises Morgan's comments about Meghan"
            tagline='Mental health charity Mind says it is "disappointed" by comments Piers Morgan made on Monday.'
            section="Entertainment & Arts"
          />
          <Bbc
            source={bbcUnilever}
            headline="Unilever drops word 'normal' from beauty products"
            tagline="The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity."
            section="Business"
          />
        </div>
      </div>
    </div>
  );
}

const Person = (props) => {
  //props is short for properties
  return (
    <div>
      <p>
        Hello I'm {props.name} and I'm {props.age}
      </p>
      <Job title={props.jobTitle} />
      <br />
    </div>
  );
};

const Job = (props) => {
  return <p>I'm a {props.title}</p>;
};

const Netflix = (props) => {
  return <img className="Netflix" src={props.source} alt={props.source} />;
};
export default App;

const Airbnb = (props) => {
  return (
    <div className="airbnbImg">
      <img className="Airbnb" src={props.source} alt={props.source} />
      <h3>{props.caption}</h3>
    </div>
  );
};

const Bbc = (props) => {
  return (
    <div className="bbcImg">
      <img className="BBC" src={props.source} alt={props.source} />
      <h3 id="headline">{props.headline}</h3>
      <p id="tagline">{props.tagline}</p>
      <h3 id="section">{props.section}</h3>
    </div>
  );
};
