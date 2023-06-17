import Center from "@/components/Center";
import styled from "styled-components";



const Bg = styled.div`
    background-color: #222;
    color:#fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;    
`;
const Desc = styled.p `
    color:#aaa;
    font-size:.8rem;
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;

export default function Featured(){
    return(
        <Bg>
          <Center>
            <Wrapper>
             <div>  
              <Title>Pro Final</Title>
               <Desc>Ta7ya L montakhab Lwatani Li rah khaser M3a janob ifriqia wa9ila
                 Ta7ya L montakhab Lwatani Li rah khaser M3a janob ifriqia wa9ila 
                 Ta7ya L montakhab Lwatani Li rah khaser M3a janob ifriqia wa9ila 
               </Desc>
             </div>
             <div>
              <img src="" alt="Tswira Jamila Jidan "/>
             </div>
            </Wrapper>     
          </Center>           
        </Bg>
    );
}