import styled from "styled-components"

export const Container = styled.form`
    display: flex;

    width: auto;
    height: auto;

    justify-content: space-around;
    align-items: center;
`

export const InformationContainer = styled.section`
   margin-top: 1rem;

   h2 {
    font-family: "Mukta Vaani", sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) => theme["base-title"]};

    margin-bottom: 0.75rem;
   }
`