import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutContainer = ()=>{

    return (
        <>
            <Container>
                <Row>
                    <Col className='pd50'>
                        <p><h2>About Page</h2></p>
                        <p> <h1>ARSED ANSARY</h1></p>                       
                        
                         
                         <p> <h3> I'm Arsed Ansary B.tech Student
               I am a 2024 Graduate, completed my B.Tech, in Computer Science and Engineering at
               Ram Krishna Mahato Government Engineering College, Purulia (RKMGEC), Purulia. I
                love to explore myself in learing new things. I have great intrest in web development
                 field and Data Structure and Algorithim. I am a very curious person and always try to
                find opportunities. I am a very dedicated and hard working person for my work. My
                 passion for learning makes me better day by day. My motivation quote is"FACE IT!
                FIGHT IT! FINISH IT!" </h3>  </p>
               
                       <p><h1>AGE : 23</h1></p> 

                       <p><h1>Skills</h1></p>
               <h3>
                     <ul>
                        <li>JAVA</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT JS</li>
                     </ul></h3>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutContainer;