export default function CRT(props) {
  
  
    return (
    <>
      <div className="container">
          <div className="CRTs">
            <img className="ProfPic"
              src={props.pic}
              alt=""/>
            <section className="CRTinfos">
              <h2 className="Name" id="Name">
                {props.name}
              </h2>
              <hr />
              <h3>Details:</h3>
              <p><strong>Condition: </strong>
              {props.status}
              </p>
              <p><strong>Species: </strong>
              {props.species}
              </p>
              <p><strong>Origin: </strong>
              {props.origin}</p>
            </section>
          </div>
      </div>
    </>
  );
}
