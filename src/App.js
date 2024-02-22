import React, { useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import Searchitem from './Searchitem';
import dataContext, { DataProvider} from './context/DataContext';

const App = () => {


  return (

    <DataProvider>
      <AppContent/>
    </DataProvider>
  )
}
const AppContent = () =>{
  const{items,search}=useContext(dataContext)

  return(
   
    <div className="App ">
     
     
      <Header title={"to do list"} />
      <AddItem/>
      <Searchitem/>
      <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}/>
      <Footer />
        </div>
   
   
  );
};

export default App;
