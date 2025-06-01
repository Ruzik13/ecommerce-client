import Header from "@/components/Header"
import Featured from "@/components/Featured"
import NewProducts from "@/components/NewProducts"



export default function HomePage({product}){
  return(
    <div>
      <Header />
      <Featured product={product}/>
      <NewProducts />
    </div>
  )
}
