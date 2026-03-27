import { trains, brains, testFind } from './trains'


const TrainMap = () => {
  <>
      {trains.map ((train)=>{  <div>{ train>10 ? train *2: null}</div>
      })}

{
testFind.find((number)=>{number==7})
}


      
      {brains.map((brain)=>{<li>{brain.length>4 ? brain : null}</li>  
      })
      
      }
  </>

 
}

export default TrainMap