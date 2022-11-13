import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ChosedRoadCard } from "../../components/ChosedRoadCard";
import api from '../../services/api';
import { Wrapper, Title } from "./style";


export function Search() {

  const [searchState, setSearchState] = useState([])
  const [fetchResults, setFetchResults] = useState([])
  const location = useLocation()
  const data = location.state?.data.search;

    const { search } = useParams()
    const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    // setSearchState(data)
    fetching()
  },[])


  // useEffect(()=>{
  //   if(searchState){
  //     fetching()
  //   }
  //   setIsLoading(false)
  // },[searchState])




  const fetching = async () => {
    const response = await api
      .get(`/courses/titles/${search}`)
      .then((response) => setFetchResults(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });

    return response

  }


      if(isLoading) {
      return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: 'black', zIndex: '99999'}}>
          Loading...
        </div>
      )
    }


  return (
    <Wrapper>
      <Title> Resultados da busca "{search}"</Title>
      {console.log(fetchResults)}
      {search.map((course)=>{
        return <ChosedRoadCard title={course.title}/>
      })}
    </Wrapper>
  );
}
