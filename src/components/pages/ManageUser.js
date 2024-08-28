import React  , {useState , useEffect} from 'react';
import Layout from '../Layout';
import axios from 'axios';


const ManageUser = () => {
  
  const [users , setUser ] = useState([]);

  useEffect(() => {
      getUsers();
  }, []);

  const getUsers = async() => {
    await axios({
       url: "/users",
       method: "GET",
       responseType: "json",
    }).then((response) => {
      console.log("response");
      console.log(response);
      setUser(response.data);
     }).catch((error) => {
        console.log("Error");
        console.log(error);
     });
  }
 
  const userLists  = users.map((user , index) => {
    return (
       <tr key={index}>
         <td>{user.id}</td>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>{user.created_at}</td>
         <td>
          <button className='btn btn-primary'>Edit</button>
           <button className='btn btn-danger'>Delete</button>
         </td>
      </tr>
     );  
   });
   

  return (
    <Layout>
      <div className='container mt-4 col'>
           <div className='mb-4'>
             <h2>Manage User(s)</h2>
           </div>
           <div>
            <table className='table table-dark table-striped'>
                <thead>
                  <tr>
                      <th>#</th>
                      <th>Order No</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                  { userLists }
                </tbody>
            </table>
           </div>
        </div>
    </Layout>
  );
}

export default ManageUser
