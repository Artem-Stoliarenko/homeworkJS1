import './App.css';
  const Logo = () => 
  <div className="logo">
  <svg width="149" height="30" viewBox="0 0 149 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 13.2912V29.3236H2.99051V16.2817H16.2817V13.2912H0ZM0 3.23972H19.0645V0.249209H0V3.23972ZM31.3588 0.249209H28.6175L17.6108 29.3236H20.9336L29.9882 5.02572L39.0013 29.3236H42.324L31.3588 0.249209ZM58.938 26.6654C52.3764 26.6654 47.682 21.3489 47.682 14.7864C47.682 8.26544 52.3764 2.94898 58.938 2.94898C62.9253 2.94898 66.2897 4.90112 68.2833 7.93228L70.9416 6.60405C68.4504 2.6167 64.0883 0 58.938 0C50.7565 0 44.6085 6.60405 44.6085 14.7864C44.6085 22.9688 50.7565 29.6144 58.938 29.6144C64.0883 29.6144 68.4504 26.9977 70.9416 22.9688L68.2833 21.6812C66.2897 24.7133 62.9253 26.6654 58.938 26.6654ZM73.0183 3.23972H94.0774V0.249209H73.0183V3.23972ZM82.0314 29.3236H85.0634V8.05777H82.0314V29.3236ZM108.822 0C100.639 0 94.7004 6.64558 94.7004 14.828C94.7004 23.0103 100.639 29.6559 108.822 29.6559C117.005 29.6559 122.903 23.0103 122.903 14.828C122.903 6.64558 117.005 0 108.822 0ZM108.822 26.7069C102.259 26.7069 97.7731 21.3905 97.7731 14.828C97.7731 8.26544 102.259 2.94898 108.822 2.94898C115.343 2.94898 119.829 8.26544 119.829 14.828C119.829 21.3905 115.343 26.7069 108.822 26.7069ZM148.197 29.3236L141.635 17.6939C145.124 16.4063 147.491 13.042 147.491 9.26228C147.491 4.31963 143.836 0.249209 138.354 0.249209C133.494 0.249209 127.471 0.249209 127.471 0.249209V3.23972H138.354C142.049 3.23972 144.376 5.98102 144.376 9.26228C144.376 12.502 142.049 15.2848 138.354 15.2848H127.471V29.3236H130.462V18.2753H138.354C138.436 18.2753 138.478 18.2753 138.52 18.2753L144.75 29.3236H148.197Z" fill="white"/>
      </svg>
  </div>
  
  const Menu = () =>
  <div className="menu">
          <a className="menu__button" href="google.com">Menu</a>
          <div className="burger">
              <div className="burger__slice"></div>
              <div className="burger__slice"></div>
          </div>
          </div>

  const Arrow = () =>
  <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M24.2206 7.87969C24.063 8.0401 23.8006 8.0401 23.6375 7.87969C23.4798 7.72469 23.4798 7.46671 23.6375 7.31208L26.5945 4.40466L0.408252 4.40466C0.180792 4.4043 0 4.22654 0 4.00289C0 3.77924 0.180792 3.5957 0.408252 3.5957L26.5945 3.5957L23.6375 0.693704C23.4798 0.533285 23.4798 0.274952 23.6375 0.120314C23.8006 -0.0401049 24.0634 -0.0401049 24.2206 0.120314L27.8776 3.71601C28.0408 3.87101 28.0408 4.12899 27.8776 4.28362L24.2206 7.87969Z" fill="#202020"/>
  </svg> 

  const Slash = () => 
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z" fill="#FFCA00"/>
  </svg>
          
  const HeaderMobile = () =>
  <header className="header-mobile">
        <Logo/>
        <Menu/>
    </header>

  const Header = () =>
  <header className="header">
        <Logo/>
        <div className="header__info">
            <ul className="navigation">
                <li>
                    <a href="google.com">Services</a>
                </li>
                <li>
                    <a href="google.com">Portfolio</a>
                </li>
                <li>
                    <a href="google.com">About</a>
                </li>
                <li className="navigation_contact">
                    <a href="google.com">Contact</a>
                </li>
            </ul>
            <a className="navigation_discuss" href="google.com">Discuss Your Idea</a>
        </div>
        <div className="header__aside">
            <a className="mail" href="mailto:hello@digitfactor.com">hello@digitfactor.com</a>
            <Menu/>
        </div>
    </header>
    
    const HeadSection = () =>
    <section className="head-section">
            <video  className="video" loop muted autoPlay src="./video/GettyImages.mp4"></video>
            <div className="head-section__main-block">
            <div className="head-section__main">
                <div className="sub-title">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z" fill="#FFCA00"/>
                        </svg>
                        Welcome to Digit Factor
                </div>
                <h1 className="title">
                    Creative Web Production from Ukraine
                </h1>
                    <a className="title-discuss_link" href="google.com">Discuss Your Idea<div className="title-discuss_link_circle"></div></a>
            </div>
            </div>
        {/* <!-- <div class="arrow">
            <svg width="8" height="48" viewBox="0 0 8 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.87969 44.2206C8.0401 44.063 8.0401 43.8006 7.87969 43.6375C7.72469 43.4798 7.46671 43.4798 7.31208 43.6375L4.40466 46.5945L4.40466 0.408252C4.4043 0.180792 4.22654 0 4.00289 0C3.77924 0 3.5957 0.180792 3.5957 0.408252L3.5957 46.5945L0.693704 43.6375C0.533285 43.4798 0.274952 43.4798 0.120314 43.6375C-0.0401049 43.8006 -0.0401049 44.0634 0.120314 44.2206L3.71601 47.8776C3.87101 48.0408 4.12899 48.0408 4.28362 47.8776L7.87969 44.2206Z" fill="#7E7E7E"/>
                </svg>  
                Scroll down              
        </div> --> */}
        <button className="messanger">
            <svg width="76" height="76" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.1" width="100" height="100" rx="48" fill="#FFCA00"/>
                <rect x="12" y="12" width="76" height="76" rx="38" fill="#FFCA00"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M62.3377 42.8074V49.9809C62.3377 52.636 60.1488 54.7883 57.4485 54.7883H45.015L39.385 60.2345C39.1844 60.4285 38.9181 60.5314 38.6474 60.5314C38.5105 60.5314 38.3725 60.5052 38.2412 60.451C37.8505 60.29 37.5962 59.914 37.5962 59.4975V54.7789C35.0325 54.6299 33 52.5393 33 49.9809V42.8074C33 40.1523 35.1889 38 37.8891 38H57.4486C60.1487 38 62.3377 40.1523 62.3377 42.8074ZM64.4399 50.7387V50.3689C65.8857 50.5627 67.0001 51.7809 67 53.2555V57.6041C67 59.155 65.7679 60.4224 64.2137 60.5127V63.3732C64.2137 63.6257 64.0596 63.8536 63.8227 63.9513C63.7431 63.9839 63.6595 64 63.5764 64C63.4124 64 63.251 63.9375 63.1293 63.8199L59.7164 60.5184H52.1792C50.5424 60.5184 49.2154 59.2137 49.2154 57.6041V56.8428H58.2321C61.6551 56.8428 64.4399 54.1045 64.4399 50.7387Z" fill="#202020"/>
                </svg>
        </button>
        </section>
 const ServiceItem = ({serviceTitleContent, serviceContent, imgSrc}) =>
    <div className="service-list_item">
                       <img  className="item-img"  width="130" height="130" src={imgSrc} alt="icon-engineering-service"></img>
                        <div className="service-list_item_service-description">
                            <a href="google.com" className="item_title">{serviceTitleContent} </a>
                            <div className="item_description">{serviceContent}</div>
                            <a href="google.com" className="learn-more">Learn More
                                   <Arrow/>                                
                            </a>
                        </div>
                    </div>

  const Main = () =>
        <div className="body-section">
            <div className="body-section__service-block">
                <div className="service-block__title">
                    <div className="list_title">
                            <Slash/>  
                            Service
                    </div>
                </div>
                <div className="service__items">
                <div className="body-section__service-list">
                <ServiceItem imgSrc='./images/icon-engineering-service .png' serviceTitleContent='Engineering Service' serviceContent='Software Development / Software Testing / Solutions Architecture / Business Analysis / Operations Support'/>
                </div>
                <div className="body-section__service-list">
                <ServiceItem imgSrc='./images/icon internet of thing.png' serviceTitleContent='Internet of Things' serviceContent='Intelligent Mobility / Predictive Maintenance / Smart Manufacturing'/>
                </div>
                <div className="body-section__service-list">
                <ServiceItem imgSrc='./images/icon extended reality.png' serviceTitleContent='Extended Reality XR' serviceContent='VR / MR / AR'/>
                </div>
                <div className="body-section__service-list">
                <ServiceItem imgSrc='./images/icon al & im.png' serviceTitleContent='AL & ML' serviceContent='Artificial Intelligence / Intelligent Automation / Advanced Analytics'/>
                </div>
                <div className="body-section__service-list">
                <ServiceItem imgSrc='./images/icon big data and analityc.png' serviceTitleContent='Big data & Analytics' serviceContent='BI & Augmented Analytics / Enterprise Data Platforms / Data Strategy and Governance'/>
                </div>
                <div className="body-section__service-list">
                <ServiceItem imgSrc='./images/icon blockchain.png' serviceTitleContent='Blockchain' serviceContent='Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы'/>
                </div>
                <div className="body-section__service-list">
                <ServiceItem imgSrc='./images/icon game art.png' serviceTitleContent='Game Art Production' serviceContent='Concept art, UI, illustration / 3D models and environments / VXT and animations'/>
                </div>
                    </div>
            </div>
        </div>

  const App = () =>
    <div className="Body">
      <HeaderMobile/>
      <Header/>
      <HeadSection/>
      <Main/>
    </div>


export default App;
