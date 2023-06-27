import { styled } from "styled-components";
import ProductBox from "./ProductBox";
import Center from "./Center";


const ProdcutsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    padding-top: 20px;
`;


export default function NewProducts({products}) {
    return(
     <Center>
      <ProdcutsGrid>
        {products?.length > 0 && products.map(product => (
            <ProductBox {...product} />
        ))}
      </ProdcutsGrid>
     </Center>
    );   
}