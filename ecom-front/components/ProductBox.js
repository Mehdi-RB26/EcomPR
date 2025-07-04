import Link from "next/link";
import Button from "@/components/Button";
import { styled } from "styled-components";
import CartIcon from "./icons/CartIcon";

const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled.div`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 110px;
      }
`;
//7:54:00 css d shit 
const Title = styled.h2`
  font-weight: normal;
  font-size: 0.7rem;
  margin:0;
`;
const ProductInfoBox = styled.div`
  margin-top: 10px;
`;
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;
const Price = styled.div`
font-size: 1.5rem;
font-weight: bold;
`;

export default function ProductBox ({_id,title,description,price,images}) {
    return(
        <ProductWrapper>
            <WhiteBox>
                <div>
                    <img src={images[0]} alt=""/> 
                </div>              
            </WhiteBox>
            <ProductInfoBox>
              <Title>{title}</Title>
              <PriceRow>
                <div>
                {price}Dh
                </div>                
                <Button primary outline>Add To Cart</Button>                
              </PriceRow>
            </ProductInfoBox>            
        </ProductWrapper>
    );
} 