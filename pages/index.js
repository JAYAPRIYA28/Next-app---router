import Navbar from "../Components/Navbar";
import {useRouter} from "next/router"




function HomePage(){
   const router = useRouter();

   function handleClick(){
    router.push("/docs");
   }

  return <div>
  <Navbar />
  HomePage
  <button onClick={handleClick}>submit</button>
  </div>

}

export default HomePage; 