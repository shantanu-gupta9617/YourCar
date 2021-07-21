import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const FooterContainer=styled.div`
min-height:30em;
background-color:rgb(314,2 ,76)
${
    tw`
    flex
    flex-wrap
    min-w-full
    
    pt-7
    pb-1
    
    `
}
`;

export function Footer(){
    return <FooterContainer>Container </FooterContainer>
}
