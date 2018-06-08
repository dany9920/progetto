import React from "react";
import Header from "../tornei/header";
import Footer from "../trovaCampetti/footer";
export default class MainTemplate extends React.Component{ 
   constructor(props){ 
      super(props); 
   }
   render(){ 
       return( 
          <div> 
             <Header/> 
             {this.props.children} 
             <Footer/> 
         </div>
      ); 
   }
}
