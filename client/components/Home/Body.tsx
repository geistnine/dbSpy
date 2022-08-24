import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { BrandGithub, BrandLinkedin } from 'tabler-icons-react';

import logo from "../../assets/logo5-blue-cropped_all_sides.png";
import gif from "../../assets/SQL.gif";


export default function Body() {
  const date = new Date().getFullYear();

  return (
    <>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />

        {/* <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/carousel/"/> */}

        {/*<style>
       {const bd-placeholder-img = {
        fontSize: "1.125rem";
        textAnchor: "middle";
        webkitUserSelect: "none";
        mozUserSelect: "none";
        userSelect: "none";
      }}

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
    </style>*/}

        {/* <link href="carousel.css" rel="stylesheet"/> */}
      </head>
      <body className='body-Body' 
      // style={{backgroundColor: "whitesmoke"}}
      >
        

        <main>
         
          <div className="container marketing">
            {/* <!-- START THE FEATURETTES --> */}
{/* dbSpy intro */}
            {/* //changing className from className="row featurette"  */}
            <div className="body-Main-Div" 
            // style={{ padding: '50' }}
            >

              {/* //changing className from className="col-md-6"  */}
              <div className="body-Main-Div-Div" 
              // style={{textAlign: "left", margin: "auto"}} 
              >
              {/* //changing className="featurette-heading fw-normal lh-2" */}
                <h2 className="body-Main-H2" 
                // style={{lineHeight: "2"}}
                >
                  Database development simplified{' '}
                  
                </h2>
                <h4 className="body-Text-Muted-1" 
                // style={{fontWeight: "400", lineHeight: "1.5"}}
                >
                  dbSpy is an open-source tool to facilitate relational database development. It's the only tool you need to visualize, modify, and build your database. 
                </h4>
              </div>
              <div className="body-Main-Div-Logo" 
              // style={{margin: "auto"}}
              >
                <img className='body-Main-Div-Div-Img'
                // style={{width: "100%"}}
                  src={logo} alt="dbSpy logo"
                />
               
              </div>
            </div>

            <hr className="featurette-divider" />

            {/* dbSpy gif */}
            {/* // formerly className="row featurette" */}
            <div className="body-Main-Div" 
            // style={{ padding: '50' }}
            >
              {/* //body-Main-Div-Div formerly className="col-md-7"  */}
              <div className="body-Main-Div-col-md-7" 
              // style={{padding: "50 0 50 0", textAlign: "left", margin: "auto"}} 
              >
                <img className='body-Main-Div-Div-Div-Img'
                // style={{border: "1px solid black", borderRadius:"5px", width: "100%"}}
                  src={"https://user-images.githubusercontent.com/83368864/179806428-f73b2b18-b82b-4b19-8ea1-5af72ddd23d3.gif"} alt="dbSpy gif"
                />
              </div>
                
            {/* formerly className="col-md-5"  */}
            <div className="body-Main-Div-col-md-5" 
            // style={{margin: "auto", textAlign: "right"}}
            >
              <h2 className="featurette-heading-fw-normal-lh-1">
                  Key features{' '}
                </h2>
                <h4 className="body-Text-Muted-2" 
                // style={{fontWeight: "400", lineHeight: "2"}}
                >
                    Database connection
                    <br/>
                    Schema modification
                    <br/>
                    SQL query generator
                    <br/>
                    ER diagrams
                    <br/>
                    and much more!
                </h4>
            </div>
            </div>
            <hr className="featurette-divider" />
            <div className="Body-row" 
            >
              <h2
                className="Body-fw-normal-h2"
              >
                Meet the Team
              </h2>
              <div className='body-Team-Container'>
            
                <div className="Body-col-lg-3" 
                // style={{ textAlign: 'center' }}
                >
                  <img className="Body-img-col"
                  // style={{width:"140px", borderRadius:"50%"}} 
                  src="https://avatars.githubusercontent.com/u/85323481?v=4" alt="AngelGiron" />

                  <h3 className="Body-fw-normal" 
                  // style={{ paddingTop: '10px' }}
                  >
                   Angel Giron
                  </h3>
                  <p className="Body-p-software"
                  // style={{ margin: '10px' }}
                  >
                    Software Engineer
                  </p>
                  <div className="Body-footer" 
                  // style={{marginBottom: "20px"}}
                  >
                    <a className="Body-btn-btn-dark-btn-sm" href="https://www.linkedin.com/in/acgiron/" 
                    // style={{margin: "10px"}}
                    >
                      <BrandLinkedin className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                    <a className="Body-btn-btn-dark-btn-sm" href="https://github.com/g94angel" 
                    // style={{margin: "10px"}}
                    >
                      <BrandGithub className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                  </div>
                </div>


                <div className="Body-col-lg-3" 
                // style={{ textAlign: 'center' }}
                >
                  <img className="Body-img-col"
                  // style={{width:"140px", borderRadius:"50%"}} 
                  src="https://media-exp1.licdn.com/dms/image/C5603AQH-DE3IvkV3tQ/profile-displayphoto-shrink_800_800/0/1659225312575?e=1666828800&v=beta&t=eu2vPhIW8hB7Ho9BERJfVevfPpYsPAzFj0UOO6iOvIg" alt="JohnPaulAdigwu" />

                  <h3 className="Body-fw-normal" 
                  // style={{ paddingTop: '10px' }}
                  >
                    John Paul Adigwu
                  </h3>
                  <p className="Body-p-software"
                  // style={{ margin: '10px' }}
                  >
                    Software Engineer
                  </p>
                  <div className="Body-footer" 
                  // style={{marginBottom: "20px"}}
                  >
                    <a className="Body-btn-btn-dark-btn-sm" href="https://www.linkedin.com/in/johnpaul-adigwu/" 
                    // style={{margin: "10px"}}
                    >
                      <BrandLinkedin className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                    <a className="Body-btn-btn-dark-btn-sm" href="https://github.com/engineerous" 
                    // style={{margin: "10px"}}
                    >
                      <BrandGithub className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                  </div>
                </div>


                <div className="Body-col-lg-3" 
                // style={{ textAlign: 'center' }}
                >
                  <img className="Body-img-col" 
                  // style={{width:"140px", borderRadius:"50%"}} 
                  src="https://avatars.githubusercontent.com/u/11093217?v=4" alt="KevinParkLee" />

                  <h3 className="Body-fw-normal" 
                  // style={{ paddingTop: '10px' }}
                  >
                    Kevin Park-Lee
                  </h3>
                  <p className="Body-p-software" 
                  // style={{ margin: '10px' }}
                  >
                    Software Engineer
                  </p>
                <div className="Body-footer"
                //  style={{marginBottom: "20px"}}
                >
                    <a className="Body-btn-btn-dark-btn-sm" href="https://www.linkedin.com/in/kevin38424/" 
                    // style={{margin: "10px"}}
                    >
                      <BrandLinkedin className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'}
                      />
                    </a>
                    <a className="Body-btn-btn-dark-btn-sm" href="https://github.com/kevin38424" 
                    // style={{margin: "10px"}}
                    >
                      <BrandGithub className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'}
                      />
                    </a>
                  </div>
                </div>

                <div className="Body-col-lg-3" 
                // style={{ textAlign: 'center' }}
                >
                  <img className="Body-img-col"
                  // style={{width:"140px", borderRadius:"50%"}} 
                  src="https://avatars.githubusercontent.com/u/83368864?v=4" alt="TarikMokhtech" />

                  <h3 className="Body-fw-normal" 
                  // style={{ paddingTop: '10px' }}
                  >
                    Tarik Mokhtech
                  </h3>
                  <p className="Body-p-software"
                  // style={{ margin: '10px' }}
                  >
                    Software Engineer
                  </p>
                  <div className="Body-footer" 
                  // style={{marginBottom: "20px"}}
                  >
                    <a className="Body-btn-btn-dark-btn-sm" href="https://www.linkedin.com/in/tarik-mokhtech/" 
                    // style={{margin: "10px"}}
                    >
                      <BrandLinkedin className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'}
                      />
                    </a>
                    <a className="Body-btn-btn-dark-btn-sm" href="https://github.com/MockTech" 
                    // style={{margin: "10px"}}
                    >
                      <BrandGithub className="body-brand" 
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                  </div>
                </div>
                {/* the end  */}
              </div>  
              <div className='body-Team-Container 1'>

              <div className="Body-col-lg-3" 
                // style={{ textAlign: 'center' }}
                >
                  <img className="Body-img-col"
                  // style={{width:"140px", borderRadius:"50%"}} 
                  src="https://cdn.discordapp.com/attachments/1006201036714819756/1011742768286142594/hands.jpg" alt="BrettGuidry" />

                  <h3 className="Body-fw-normal" 
                  // style={{ paddingTop: '10px' }}
                  >
                    Brett Guidry
                  </h3>
                  <p className="Body-p-software"
                  // style={{ margin: '10px' }}
                  >
                    Software Engineer
                  </p>
                  <div className="Body-footer"
                  // style={{marginBottom: "20px"}}
                  >
                    <a className="Body-btn-btn-dark-btn-sm" href="https://www.linkedin.com/in/brett-guidry-6b6085107/" 
                    // style={{margin: "10px"}}
                    >
                      <BrandLinkedin className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                    <a className="Body-btn-btn-dark-btn-sm" href="https://github.com/Lurkbot9000" 
                    // style={{margin: "10px"}}
                    >
                      <BrandGithub className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                  </div>
                </div>


                <div className="Body-col-lg-3" 
                // style={{ textAlign: 'center' }}
                >
                  <span>
                  <img className="Body-img-col"
                  // style={{width:"140px", borderRadius:"50%"}} 
                  src="https://cdn.discordapp.com/attachments/1006201036714819756/1011743468017680404/IMG_0151.JPG" alt="EmilMebasser" />

                  </span>

                  <h3 className="Body-fw-normal" 
                  // style={{ paddingTop: '10px' }}
                  >
                    Emil Mebasser
                  </h3>
                  <p className="Body-p-software"
                  // style={{ margin: '10px' }}
                  >
                    Software Engineer
                  </p>
                  <div className="Body-footer"
                  // style={{marginBottom: "20px"}}
                  >
                    <a className="Body-btn-btn-dark-btn-sm" href="https://www.linkedin.com/in/emil-mebasser-a1a2a815/" 
                    // style={{margin: "10px"}}
                    >
                      <BrandLinkedin className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                    <a className="Body-btn-btn-dark-btn-sm" href="https://github.com/ejmebasser" 
                    // style={{margin: "10px"}}
                    >
                      <BrandGithub className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                  </div>
                </div>

                <div className="Body-col-lg-3" 
                // style={{ textAlign: 'center' }}
                >
                  <img className="Body-img-col"
                  // style={{width:"140px", borderRadius:"50%"}} 
                  src="https://cdn.discordapp.com/attachments/992305633787392096/1011759408931405976/IMG_3804.jpg" alt="MimiLe" />

                  <h3 className="Body-fw-normal" 
                  // style={{ paddingTop: '10px' }}
                  >
                   Mimi Le
                  </h3>
                  <p className="Body-p-software"
                  // style={{ margin: '10px' }}
                  >
                    Software Engineer
                  </p>
                  <div className="Body-footer" 
                  // style={{marginBottom: "20px"}}
                  >
                    <a className="Body-btn-btn-dark-btn-sm" href="https://www.linkedin.com/in/my-le-a94575226/" 
                    // style={{margin: "10px"}}
                    >
                      <BrandLinkedin className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                    <a className="Body-btn-btn-dark-btn-sm" href="https://github.com/kawaiiyummy14" 
                    // style={{margin: "10px"}}
                    >
                      <BrandGithub className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                  </div>
                </div>

                <div className="Body-col-lg-3" 
                // style={{ textAlign: 'center' }}
                >
                  <img className="Body-img-col"
                  // style={{width:"140px", borderRadius:"50%"}} 
                  src="https://cdn.discordapp.com/attachments/1006201036714819756/1011742184329969664/WhatsApp_Image_2022-05-21_at_1.33.01_PM.jpeg" alt="Samson Lam" />

                  <h3 className="Body-fw-normal" 
                  // style={{ paddingTop: '10px' }}
                  >
                    Samson Lam
                  </h3>
                  <p className="Body-p-software"
                  // style={{ margin: '10px' }}
                  >
                    Software Engineer
                  </p>
                  <div className="Body-footer" 
                  // style={{marginBottom: "20px"}}
                  >
                    <a className="Body-btn-btn-dark-btn-sm" href="https://www.linkedin.com/in/samson-lam-455846219/" 
                    // style={{margin: "10px"}}
                    >
                      <BrandLinkedin className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                    <a className="Body-btn-btn-dark-btn-sm" href="https://github.com/sflam2013" 
                    // style={{margin: "10px"}}
                    >
                      <BrandGithub className="body-brand"
                      // size={40} strokeWidth={1.5} color={'#FFFFFF'} 
                      />
                    </a>
                  </div>
                </div>
              </div>




            </div>
          </div>
          {/* <!-- /.container --> */}

          {/* <hr className="featurette-divider" /> */}

          {/* <!-- FOOTER --> */}
          {/* <footer className="container" style={{color: "red"}}>
            <p className="float-end">
              <a style={{textDecoration: "none", color:"black", margin:"70px"}} href="#">Back to top</a>
            </p>
            <p>dbSpy {date} </p>
          </footer> */}
        </main>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
    
  );
}
