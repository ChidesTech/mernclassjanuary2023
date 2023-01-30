


export default function Homepage(){
  return <>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://www.topgear.com/sites/default/files/news-listicle/image/2017/03/ae21698a-153c-43b6-8990-ba7e7fb44e5f.jpg"
          className="d-block w-100" alt="..."/>
        <p>Muscles & Imports</p>
      </div>
      <div className="carousel-item">
        <img
          src="https://media.istockphoto.com/photos/new-generic-cars-picture-id1224039863?b=1&k=20&m=1224039863&s=170667a&w=0&h=kUtPJ1O4SVr0UexYaqxkMMJiilu2JQAAYyKjA00BkpM="
          className="d-block w-100" alt="..."/>
        <p>New Generic Cars</p>
      </div>
      <div className="carousel-item">
        <img
          src="https://lexus-cms-media.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/04/2005_ES_330_10-1500x900.jpg"
          className="d-block w-100" alt="..."/>
        <p>Under $10000</p>
      </div>
      <div className="carousel-item">
        <img
          src="https://media.istockphoto.com/photos/new-auto-parts-picture-id499178422?k=20&m=499178422&s=612x612&w=0&h=Y9Ek-qkjA3Eh1Pv2AcRSRVDUVYP8TVngcvXB-Abs7lo="
          className="d-block w-100" alt="..."/>
        <p>New Auto Parts</p>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  


  <center className="w">
    <h1>Our Services</h1>
  </center>
  <div className="services">
    <div className="service">
      <i className="fa fa-shopping-cart"></i>
      <h3>Auctions</h3>
      <p>We Have Auctions Once Every Four(4) Year On Exotic Cars <br/> Keep in Touch With Our Dealers So YOU Don't <br/>
        MIss The Opportunity Of Adding Our Cars To Your Gallery </p>
    </div>
    <div className="service">
      <i className="fa fa-credit-card"></i>
      <h3>Payment Methods</h3>
      <p>Cash <br/> Debit/credit cars <br/>Bank Trasnfer</p>
    </div>
    <div className="service">
      <i className="fa fa-truck"></i>
      <h3>Qucik delivery</h3>
      <p>All We Need Is A Home Address <br/>& <br/> We Deliver As Fast As Possible</p>
    </div>

  </div>
  {/* <!-- services ends --> */}
  
  {/* <!-- grid starts here --> */}
  <center className="w">
    <h1 className="m-5">FEATURED VEHICLES</h1>
  </center>
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col">
        <div className="card" style={{width : "18rem"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMPJ1oWhlJu0hfqx91XSsifKKgFwc5gTxZA&usqp=CAU"
            className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">2021 Audi RS7 </h5><br/>
            <p className="card-text">$110,000</p>
            <a href="#" className="btn btn-dark">Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width : "18rem"}}>
          <img
            src="data:image/jpeg;base64,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"
            className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">2015 Mercedes-Benz C400 4MATIC</h5>
            <p className="card-text">$23,076</p>
            <a href="#" className="btn btn-dark">Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width : "18rem"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2eQWIXajWOkOLYDBrAsqRSnZ5dI0l8r4lw&usqp=CAU"
            className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> 2022 Ford Mustang</h5><br/>
            <p className="card-text">$79,420</p>
            <a href="#" className="btn btn-dark">Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width : "18rem"}}>
          <img
            src="https://imgix.cosmicjs.com/a358d550-a018-11ec-a634-2f1716dd45af-TeslaModelXPlaidQ122SiteHero3.jpg?auto=format&fm=jpg&q=80&fit=crop&crop=entropy&w=812&h=457"
            className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Tesla Model X PLaid</h5>
            <p className="card-text">$114,990</p>
            <a href="#" className="btn btn-dark">Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width : "18rem"}}>
          <img
            src="https://image.cnbcfm.com/api/v1/image/106165374-15702116509742019dodgechallengersrthellcatredeye01.jpg?v=1570212538&w=1600&h=900"
            className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> Dodge Charger SRT Hellcat</h5>
            <p className="card-text">$77,000</p>
            <a href="#" className="btn btn-dark">Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{width : "18rem"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPeiMgo4IchqFTqGSzwFTpE8dSkQL-JmHVzw&usqp=CAU"
            className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Lexus ES 330</h5>
            <p className="card-text">$9,230</p>
            <a href="#" className="btn btn-dark">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}
