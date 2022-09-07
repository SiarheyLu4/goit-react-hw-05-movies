import styled from "styled-components";


export const AboutPage = () => {
  return (
    <AboutContainer>
      <H2>Test Page</H2>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel expedita id exercitationem laborum odit nisi voluptate laboriosam ea! Saepe harum quidem odit doloribus quasi doloremque, dignissimos qui minus, deserunt necessitatibus ratione? Doloribus, laudantium ipsam placeat excepturi iste corporis laboriosam eligendi accusantium vitae pariatur nemo! Nobis dicta ipsum quis architecto temporibus vel dolorum sapiente illo cumque facilis veritatis ad, autem quibusdam nostrum aut earum commodi nulla quos omnis eaque totam perferendis sit placeat! Nam optio quisquam accusantium adipisci expedita quaerat harum, ab doloremque hic tempora quos atque nemo repellat itaque recusandae voluptatum reprehenderit deserunt placeat perspiciatis magni sapiente quam necessitatibus?</P>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
`
const H2 = styled.h2`
font-size: 32px;
text-align: center;
margin:12px;
`
const P = styled.p`
font-size: 20px;
text-align: center;
margin:12px;
`