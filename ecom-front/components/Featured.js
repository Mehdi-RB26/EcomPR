import Center from "@/components/Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";



const Bg = styled.div`
    background-color: #222;
    color:#fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;   
    font-size:3rem; 
`;
const Desc = styled.p `
    color:#aaa;
    font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
    
`;
const Column = styled.div`
    display: flex;
    align-items: center;
    
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
  
`;

export default function Featured({product}){
    return(
        <Bg>
          <Center>
            <ColumnsWrapper>
             <Column>  
               <div>
                 <Title>{product.title}</Title>
                 <Desc>{product.description}</Desc>
                 <ButtonsWrapper>
                 <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                  <Button primary >
                    <CartIcon />
                  Add To Cart</Button>
                 </ButtonsWrapper>             
                </div>             
               </Column>
               <Column>
              <img src="https://skyline-eco.s3.eu-west-3.amazonaws.com/1687881402739.png" alt="Tswira Jamila Jidan "/>
             </Column>
            </ColumnsWrapper>     
          </Center>           
        </Bg>
    );
}