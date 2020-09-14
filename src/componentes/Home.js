import React from 'react';
import {About} from "./about"
import  { NavigationBar } from "./navbar"
import {Features} from "./Features"
import {Client} from "./Client"


function Home ()  {
  return ( 
  <React.Fragment>
   <About/>
   <Client/>

   <Features/>
   <NavigationBar/>
    </React.Fragment>
   );
}
 
export default Home;