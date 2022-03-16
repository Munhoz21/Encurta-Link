import {FiLink} from 'react-icons/fi'
import './home.css';

import {useState} from 'react'
import LinkItem from '../../components/LinkItem';
import api from '../../services/api'
 

export default function Home(){

const[link, setLink]= useState('');
const[modal,setModal]=useState(false);
const[data,setData]=useState({})

async function HandleLink(){
  try{
    const response=await api.post('/shorten' ,
     {long_url: link
    }) 
    setData(response.data);
    setModal(true);
    setLink('')

  }catch{
    alert('Ops, parece que algo deu errado')
    setLink('');
  }
 
}

    return(
      <div className="container-home">

        <div className="logo">
          <img src="/logo.png" alt="Logo" height={200}/>
          <h1>EncurtaLink</h1>
          <span> Cole seu link para encurtar!</span>
        </div>  

        <div className="area-input">
          <div>
            <FiLink size={24} color='#FFF' />
            <input placeholder='Cole seu link!' value={link} onChange={(e)=>setLink(e.target.value)} ></input>
          </div>

        <button onClick={HandleLink}>Gerar Link</button>
        </div>

     

      {modal && (
        <LinkItem 
        closeModal={() => setModal(false)}
        content={data}
        />
      )}

      </div>
    )
  }