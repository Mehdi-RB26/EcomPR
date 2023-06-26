import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function HomePage({product}) {
  
  return (
   <div>
    <Header />
    <Featured product={product}/> 
   </div>
 );
}


export async function getServerSideProps() {
  const featuredProductId = '648b30fbb165ef418a51ef1d';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  //const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {product: JSON.parse(JSON.stringify(product))},
  };
}