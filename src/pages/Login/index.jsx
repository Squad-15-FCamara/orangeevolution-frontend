import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Form, Wrapper, Input , Button} from './style'
import { data } from '../../data/data'
import api from '../../services/api'

export const Login = ()=> {

    const [isLoading, setIsLoading] = useState(true)
    const [inputs, setInputs] = useState({isAdmin: false})

    useEffect(()=>{

      PostData(data)
      setIsLoading(false)
      console.log(ArrayCursos)



    },[])

    let ArrayCursos = [];

    const PostData = async (data) => {

      await Promise.all(data.courses.map((curso)=>{
        api.post('/courses', curso).then(resp =>{
          ArrayCursos.push(resp)
        })
         return ArrayCursos
      }))

    }

    const CreateUser = async (inputs) =>{
      await api
        .post('/users', inputs)
        .then(response => console.log(response))
        .catch(e => console.log(e))
    }


    if(isLoading) {
      return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', color: 'white'}}>
          Loading...
        </div>
      )
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(inputs)

        CreateUser(inputs)
        setInputs( {[inputs.name] : [inputs.value]})
    }




    const updateInput = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setInputs( {...inputs,
        [name]: value
      })

    }


    return (
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input type='text' placeholder='nome' name='name' value={inputs.name || ''} onChange={updateInput}/>
          <Input type='text' placeholder='e-mail' name='email' value={inputs.email || ''} onChange={updateInput}/>
          <Input type='text' placeholder='profissão' name='actualJob' value={inputs.actualJob || ''} onChange={updateInput}/>

          <Button type='submit'> ACESSAR TRILHAS </Button>
        </Form>

      </Wrapper>

    )

}
