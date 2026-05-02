import CardItem from "./CardItem.jsx";
import Directory from '../directory_structure.json';

export default function Cards() {

    return (
        <div id="all-cards-holder">
          {Directory.map((item) => (
            <div key={Math.floor(Math.random() * 1000) + 1} className="card-container">  {/* Key for the outer list element */}
              {/* Inner map to iterate through items */}
              <h3>{item.name}</h3>
              <div className="receptor">
              {item.contents.map((innerItem) => (
                <div className="card-item" key={Math.random() * 1000 + 1}>  {/* Key for each inner list item */}
                  {/* Perform operation on inner item */}
                  <CardItem img_src={innerItem.src}/>
                </div>
              ))}
              </div>
            </div>
          ))}
        </div>
      );
}

