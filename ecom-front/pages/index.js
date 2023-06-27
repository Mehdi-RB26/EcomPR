import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewPoducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function HomePage({featuredProduct,newProducts}) {
  return (
   <div>
    <Header />
    <Featured product={featuredProduct}/> 
    <NewProducts products={newProducts}/>
   </div>
 );
}


export async function getServerSideProps() {
  const featuredProductId = '649b072fb716abe34c17775f';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}