import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewPoducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function HomePage({featuredProduct,newProducts}) {
  console.log({newProducts});
  return (
   <div>
    <Header />
    <Featured product={featuredProduct}/> 
    <NewProducts products={newProducts}/>
   </div>
 );
}


export async function getServerSideProps() {
  const featuredProductId = '648b30fbb165ef418a51ef1d';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {featuredProduct: JSON.parse(JSON.stringify(product)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}