import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import ButtonEncut from './components/ButtonEncut'
import InputUrl from './components/InputUrl'
import InputUrlCustom from './components/InputUrlCustom'
import Navbar from './components/Navbar'
import OutUrl from './components/OutUrl'
import ButtonLinkCustom from './components/ButtonLinkCustom'
import Footer from './components/Footer'
import BackgroundStyle from './components/BackgroundStyle'
import axios from 'axios'

function App() {
  const [newUrl, setNewUrl] = useState<string>('')
  const [checked, setChecked] = useState(false)

  const handlerSubmit = (values: {
    urlOrigin: string,
    urlPath: string
  }) => {
    
    if(checked === false){
      values.urlPath = ''
    }

    axios.post(
      'http://localhost:8080/register',
      values,{
        headers: {
          'Content-Type': 'application/json'
        },
      }
    ).then((response) => {
      setNewUrl(response.data.newUrl)
    }).catch((error) => {
      setNewUrl(error.response.data)
    })
  }

  return (
    <>
      <BackgroundStyle />
      
      <Navbar />

      <AppContainer>
        <Formik
          initialValues={{
            urlOrigin: '',
            urlPath: ''
          }}
          onSubmit={(values) => handlerSubmit(values)}
        >
          <Form className='form'>
            <InputUrl />
            <OutUrl newUrl={newUrl} />
            <ButtonLinkCustom checked={checked} setChecked={setChecked} />

            <ButtonLinkCustomContainer>
              <InputUrlCustom checked={checked}  />
              <ButtonEncut />
            </ButtonLinkCustomContainer>
          </Form>

        </Formik>
      </AppContainer>

      <Footer />
    </>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 600px;
  width: 100%;
  margin: auto 0;

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`

const ButtonLinkCustomContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`

export default App
