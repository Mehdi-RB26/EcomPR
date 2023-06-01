import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    function createProduct(){
        
        //Finish From here    1:03:00 in Video 
    }

    return(
        <Layout>
            <form onSubmit={createProduct}> 

              <h1>New Product</h1>

                <label>Product Name</label>
                <input type="text" placeholder="Product Name" value={title} onChange={ev => setTitle(ev.target.value)}/>

                <label>Description</label>
                <textarea placeholder="Description" value={description} onChange={ev => setDescription(ev.target.value)}/>

                <label>Price (In MAD)</label>
                <input type="number" placeholder="Price" value={price} onChange={ev => setPrice(ev.target.value)}/>

                <button type="submit" className="btn-primary">Save</button>

            </form>
            
            
        </Layout>
    );
}