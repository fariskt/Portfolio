import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0px;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;

`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({theme})=> theme.text_primary};

  @media (max-width: 480px){
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Form = styled.div`
    form{
    width: 500px;
    height: 490px;
    background-color: ${({theme})=> theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 20px;
    font-size:18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    }
    
     input{
      padding: 15px 15px;
      color: ${({theme})=> theme.text_primary};
      background-color: rgba(59, 58, 97, 0.4);
      outline: none;
      border: none;
      border-radius: 14px;
    }
    textarea{
      margin-top:5px;
      color: ${({theme})=> theme.text_primary};
      background-color: rgba(59, 58, 97, 0.4);
      outline: none;
      border: none;
      border-radius: 10px;
      padding: 10px 15px;
    }
    button{
      margin-top:10px;
      background-color: rgba(59, 58, 97, 0.9);
      outline: none;
      border: none;
      border-radius: 10px;
      padding: 10px 15px;
      color: ${({theme})=> theme.text_primary};
      cursor: pointer;
      font-size: 18px;
    }
    @media (max-width: 768px){
    form{  
    width: 350px;
    height: 550px;
    margin-bottom: 20px;
    background-color: ${({theme})=> theme.card};
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 12px 15px;
    font-size:18px;
    display: flex;
    flex-direction: column;
    
    }
    input{
      padding: 10px 10px;
      color: ${({theme})=> theme.text_primary};
      background-color: rgba(59, 58, 97, 0.4);
      outline: none;
      border: none;
      border-radius: 10px;
    }
    textarea{
      margin-top:5px;
      color: ${({theme})=> theme.text_primary};
      background-color: rgba(59, 58, 97, 0.4);
      outline: none;
      border: none;
      border-radius: 10px;
      padding: 5px 10px;
    }
    button{
      margin-top:10px;
      background-color: rgba(59, 58, 97, 0.9);
      outline: none;
      border: none;
      border-radius: 10px;
      padding: 5px 10px;
      color: ${({theme})=> theme.text_primary};
      cursor: pointer;
      font-size: 18px;
    }
    }
`;


const Span = styled.div`
  color: white;
  small{
    color: rgba(250, 249, 246,0.8);
  }
`;



const Contact = () => {

  const [name , setName] = useState("");
  const [email , setemail] = useState("");
  const [message , setMessage] = useState("");

  const handleSumbit =(e)=> {
    e.preventDefault();
    const serviceId = "service_y0kan4n";
    const templateId = "template_2ychf2o";
    const publicKey = "wlmIeh-DW78RmHZKA";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Faris",
      message: message,
    };
    if(name && message){
      emailjs.send(serviceId, templateId, templateParams, publicKey).then((response)=> {
        alert("email send succefully", response);
         setName("");
         setemail("");
         setMessage("");
       }).catch((error)=> {
         console.error("Error sending" ,error);
       });
    }

    

  }

  return (
    <Container id='contact'>
      <Wrapper>
      <Title>Contact</Title>
      <Form>
       <form action="" onSubmit={handleSumbit} className='form-container'>
      <Span>Name  </Span>
      <input type="text" onChange={(e)=> setName(e.target.value)} placeholder='Type your name' value={name}/>
      <Span>Email   </Span>
      <input type="email" onChange={(e)=> setemail(e.target.value)} placeholder='enter your email' value={email}/>
      <Span><small>Send message here</small></Span>
      <textarea onChange={(e)=> setMessage(e.target.value)} cols="40" rows="10" placeholder='Enter your message here...' value={message}>
      </textarea>
      <button type='submit'>Submit</button>
        </form> 
      </Form>
      
      </Wrapper>
    </Container>
  )
}

export default Contact;