import styled from 'styled-components';


export const TestimonyContainer = styled.div`
display:flex;
flex-direction: column;
text-align: center;
max-width: 1000px;
margin: auto;
margin-top:80px;
margin-bottom: 80px;
`

export const TestimonyTitle1 = styled.h3``

export const TestimonyTitle2 = styled.h2``

export const TestimonysWrapped = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 40px;
margin-top: 30px;

@media (max-width: 1030px) {
    margin: 0px 10px;
  }

  @media (max-width: 916px) {
    grid-template-columns: 1fr;
  }
`


export const TestimonyCardWrapped = styled.div`
display: flex;
    flex-direction: column;
`
export const TestimonyParagraph = styled.p`
`

export const TestimonyAutor = styled.h3`
`

export const TestimonyDate = styled.h4`
`