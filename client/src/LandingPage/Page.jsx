import React from 'react';
import Hero from './icon.svg'; 
import Mission from './mission.jpg';  // Ensure this path is correct
import './Page.css';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Values from './values.jpg';
import Growth from './Growth.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Vulenerability from './Vulberability.png'
import Risk from './risk.png'
import Threat from './Threat.png'
import Audits from './Audits.png'
import 'animate.css';


function Page() {
  return (
    <div>
      {/* Hero Section with Image on the Left and Text on the Right */}
    
      <div className="Hero-section">
        <div className="Hero-image">
          <img src={Hero} alt="Cybersecurity"/>
        </div>
        <div className="Hero-text">
          <h1 className="animate__animated animate__fadeInRight">SafeMax Security</h1>
          <p className="animate__animated animate__fadeInRight">Protecting What Matters with Comprehensive VAPT Services and Strategic Cybersecurity.</p>
         
          <Button as="a" variant="primary" href="#appointment" >  <Nav.Link href="#appointment">CTA</Nav.Link></Button>
        </div>
      </div>
      <br /><br />

<h2 className="animate__animated animate__fadeInRight" style={{color:'whitesmoke'}}>Foundations of Who We Are</h2>
      {/*About us- Cards for Mission, Core Values, and Growth Story */}
      <CardGroup className="Card-group" >
      <Card>
    <Card.Body>
      <h2></h2>
      <img src={Mission} alt="Mission" className="Card-img animate__animated animate__fadeInRightBig" />  
      <br />
     <h2><Card.Title className="title animate__animated animate__lightSpeedInRight">Mission of SafeMax Security</Card.Title> </h2> {/* Added a class for white text */}
     <Card.Text><h4 className="animate__animated animate__fadeInRight"> 
        SafeMax Security is committed to providing cutting-edge cybersecurity solutions to protect businesses from emerging cyber threats.
        Through tailored Vulnerability Assessment & Penetration Testing (VAPT) services, we ensure the security of digital assets and sensitive data.
        </h4></Card.Text>
    </Card.Body>
  </Card>
  
        <Card>
          <Card.Body>
            <img src={Values} alt="Values" className="Card-img animate__animated animate__fadeInRightBig"/>
            <h2> <br></br>  <Card.Title className="animate__animated animate__lightSpeedInRight">Core Values of SafeMax Security</Card.Title></h2>
            <Card.Text><h4 className="animate__animated animate__fadeInRight"> 
              At SafeMax Security, we emphasize precision, proactive threat hunting, and a client-centric approach to deliver tailored solutions.
              We focus on innovation, integrating the latest technologies to strengthen defenses.
           </h4> </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <img src={Growth} alt="Growth" className="Card-img animate__animated animate__fadeInRightBig"/>
           <h2> <br></br>  <Card.Title  className="animate__animated animate__lightSpeedInRight">Growth Story</Card.Title></h2>
            <Card.Text><h4 className="animate__animated animate__fadeInRight">
              Founded in 2020, SafeMax Security quickly became a leader in cybersecurity services, reaching a $75 million valuation by 2023.
              SafeMax aims to surpass a $200 million valuation by 2024.
           </h4> </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

<br></br><br></br><br></br><br></br><br></br>
<div id="products">
<h2 style={{color:'whitesmoke'}} className="animate__animated animate__fadeInRight">Explore Our Expertise</h2>

<CardGroup className="Card-group" >
      <Card>
    <Card.Body>
      
     <br />
     <img src={Vulenerability} alt="vulnerabilty" className="Card-img animate__animated animate__fadeInRightBig"/>
           
   <h2>  <Card.Title className="animate__animated animate__lightSpeedInRight">Vulnerability Assessment & Penetration Testing (VAPT)</Card.Title> </h2> {/* Added a class for white text */}
      <Card.Text><h4 className="animate__animated animate__fadeInRight">
        SafeMax Security is committed to providing cutting-edge cybersecurity solutions to protect businesses from emerging cyber threats.
        Through tailored Vulnerability Assessment & Penetration Testing (VAPT) services, we ensure the security of digital assets and sensitive data.
        </h4> </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
    <img src={Risk} alt="Risk" className="Card-img animate__animated animate__fadeInRightBig"/>
   
     <br />
    <h2> <Card.Title className="animate__animated animate__lightSpeedInRight">Risk Assessment & Management</Card.Title></h2>  {/* Added a class for white text */}
      <Card.Text><h4 className="animate__animated animate__fadeInRight">
      In addition to VAPT, SafeMax provides Risk Assessment & Management solutions that evaluate and rank digital threats based on their impact. Tailored strategies address these risks systematically, reducing exposure across systems. With continuous monitoring, SafeMax enables businesses to detect and respond to threats in real-time, enhancing long-term resilience.</h4></Card.Text>
    </Card.Body>
  </Card>
  
        <Card>
          <Card.Body>
          <img src={Threat} alt="vulnerabilty" className="Card-img animate__animated animate__fadeInRightBig"/>
      <h2>   <br></br>  <Card.Title className="animate__animated animate__lightSpeedInRight">Incident Response & Threat Intelligence</Card.Title></h2> 
            <Card.Text><h4 className="animate__animated animate__fadeInRight">
            For rapid response in the event of an attack, Incident Response & Threat Intelligence services are available 24/7. SafeMax’s team quickly identifies and mitigates cyber threats to minimize downtime and damage. The team also provides forensic analysis to uncover the root causes of incidents, strengthening the client’s defenses against future attacks. </h4> </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <img src={Audits} alt="Growth" className="Card-img animate__animated animate__fadeInRightBig"/>
            <br></br> <h2><Card.Title  className="animate__animated animate__lightSpeedInRight">Security Compliance & Audits</Card.Title></h2> 
            <Card.Text>
           <h4 className="animate__animated animate__fadeInRight"> SafeMax also supports Security Compliance & Audits to help organizations meet regulatory standards, such as GDPR and ISO certifications. Through thorough security audits, SafeMax verifies adherence to best practices, assisting clients in remediation to maintain compliance. This service not only safeguards against breaches but also ensures that organizations remain within legal and regulatory boundaries.</h4></Card.Text>

          </Card.Body>
        </Card>
      </CardGroup>



      </div>

      <div id="company">
    <br></br> <br></br>
    <div className="Choose">
      <h2 className="animate__animated animate__fadeInLeft">Why Choose SafeMax Security?</h2>
      <h5 className="animate__animated animate__fadeInLeft">
        SafeMax Security stands out for its specialized expertise in cybersecurity, particularly in Vulnerability Assessment & Penetration Testing (VAPT), which proactively identifies and addresses digital threats. Beyond VAPT, SafeMax offers comprehensive risk management, regulatory compliance support, and 24/7 incident response to protect clients’ critical assets. With tailored solutions that meet each client’s unique needs and an unwavering commitment to cutting-edge threat intelligence, SafeMax provides a secure foundation for businesses to grow confidently in today’s digital landscape.
      </h5>
    </div>


    {/*Client Testimony */}
    <div className="testimony">
      <h2 className="animate__animated animate__fadeInLeft">Click to read testimonies</h2>
  <Tabs 
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-4"
  >
    <Tab className="Testimonies" eventKey="Avanti Chouknis" title={<span style={{ color: 'white' }}>Avanti Chouknis</span>}>
      <div className="testimonial-text">
        "SafeMax Security has transformed our approach to cybersecurity. Their Vulnerability Assessment & Penetration Testing (VAPT) service uncovered critical vulnerabilities we didn’t even know existed. Thanks to SafeMax, we now feel confident that our digital assets are secure, and our team can focus on growth without worrying about cyber threats."
      </div>
    </Tab>
    <Tab className="Testimonies" eventKey="Shreya" title={<span style={{ color: 'white' }}>Shreya Nit</span>}>
      <div className="testimonial-text">
        "The team at SafeMax is truly outstanding. Their ability to quickly identify and address potential threats was impressive. Their risk management solutions helped us improve our overall security posture and stay ahead of emerging threats. SafeMax is more than a service provider – they are a trusted partner in safeguarding our digital infrastructure."
      </div>
    </Tab>
    <Tab className="Testimonies" eventKey="Neha Chopra" title={<span style={{ color: 'white' }}>Neha Chopra</span>}>
      <div className="testimonial-text">
        "We’ve been working with SafeMax for over a year now, and their expertise in security compliance and audits is unparalleled. With their help, we achieved ISO certification and have maintained strong security practices across our organization. SafeMax’s proactive approach and round-the-clock incident response are invaluable to us."
      </div>
    </Tab>
    <Tab className="Testimonies" eventKey="Isha Shrivastawa" title={<span style={{ color: 'white' }}>Isha Shrivastawa</span>}>
      <div className="testimonial-text">
        "The security assessments SafeMax provides have helped us identify and mitigate risks in our network and applications. Their tailored approach to cybersecurity made it easy for us to align with regulatory standards and improve our data protection strategies. I highly recommend SafeMax to any organization looking to take their cybersecurity seriously."
      </div>
    </Tab>
    <Tab className="Testimonies" eventKey="Pranav Joshi" title={<span style={{ color: 'white' }}>Geet Jes</span>}>
      <div className="testimonial-text">
        "After a serious cyber-attack, we reached out to SafeMax, and they delivered rapid and effective incident response. Their threat intelligence service was instrumental in identifying the root cause and fortifying our defenses against future attacks. SafeMax’s team goes above and beyond, and we couldn't be more satisfied with their service."
      </div>
    </Tab>
    <Tab className="Testimonies" eventKey="Chinmay Joshi" title={<span style={{ color: 'white' }}>Chinmay Joshi</span>}>
      <div className="testimonial-text">
        "SafeMax Security has been a game changer for us. Their comprehensive vulnerability assessments and penetration testing helped us discover and fix security gaps that we hadn't noticed. The team is highly professional and their continuous monitoring and incident response services give us peace of mind knowing that our network is protected 24/7. SafeMax truly stands out in the cybersecurity space!"
      </div>
      
    </Tab>
    <Tab className="Testimonies" eventKey="Rohit Chitnis" title={<span style={{ color: 'white' }}>Rohit Chitnis</span>}>
      <div className="testimonial-text">
        "After a serious cyber-attack, we reached out to SafeMax, and they delivered rapid and effective incident response. Their threat intelligence service was instrumental in identifying the root cause and fortifying our defenses against future attacks. SafeMax’s team goes above and beyond, and we couldn't be more satisfied with their service."
      </div>
    </Tab>
    <Tab className="Testimonies" eventKey="Neha Kulkarni" title={<span style={{ color: 'white' }}>Neha Kulkarni</span>}>
      <div className="testimonial-text">
        "The security assessments SafeMax provides have helped us identify and mitigate risks in our network and applications. Their tailored approach to cybersecurity made it easy for us to align with regulatory standards and improve our data protection strategies. I highly recommend SafeMax to any organization looking to take their cybersecurity seriously."
      </div>
    </Tab>
    <Tab className="Testimonies" eventKey="Rida" title={<span style={{ color: 'white' }}>Rida</span>}>
      <div className="testimonial-text">
        "We’ve been working with SafeMax for over a year now, and their expertise in security compliance and audits is unparalleled. With their help, we achieved ISO certification and have maintained strong security practices across our organization. SafeMax’s proactive approach and round-the-clock incident response are invaluable to us."
      </div>
    </Tab>
    
  </Tabs>
  <br />
</div>
</div>


<br></br><br></br>

{/*Contact form */}



    </div>
  );
}

export default Page;
