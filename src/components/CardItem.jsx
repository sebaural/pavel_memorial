


// eslint-disable-next-line react/prop-types
export default function CardItem({img_src}) {


  return(

    <div className="card-holder">
      <div className="img-holder">
        <img src={img_src} alt={img_src}/>
      </div>
      <div className="info-holder">

      </div>
    </div>

  );

}