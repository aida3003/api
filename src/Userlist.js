import axios from "axios";
import { useEffect , useState } from "react";

const  Userlist = (props) =>{
     const [listeUtilisateur , setlisteUtilisateur] = useState([])
    useEffect(()=>{ 
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then ((reponse)=>{
            setlisteUtilisateur(reponse.data)
        })
        .catch((error)=>{
        console.log(error);
        
        } )
    })
    return ( 
        <div> 
            {
                listeUtilisateur.map((element)=>{
                    return(
                        <table border={1}> 
                            <tr>
                            
                                <td>{element.title}</td>
                                <td>{element.body}</td>
                            </tr>
                           
                        </table>
                    )           
                })
            }

        </div>
     );
}

export default Userlist;