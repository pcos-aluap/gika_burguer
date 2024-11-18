import styled from "styled-components"

interface AvailabilityProps {
    availability: boolean
}


export const Grid = styled.div<AvailabilityProps>`
    width: 20rem;
    height: 24rem;

    display: grid;
    grid-template-areas: 
        "image image"
        "name price"
        "description description"
        "quantityInput quantityInput";

    grid-template-columns: 3fr 1.2fr;
    grid-template-rows: 11rem 3rem 1fr 3rem;
    column-gap: 1rem;
    row-gap: 0rem;

    padding: 1rem;

    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: none;

    transition: 0.2s;
        
    &:hover{
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    img {
        grid-area: image;

        object-fit: cover;
        width: 100%;
        height: 11rem;

        z-index: -1;

        border-radius: 4px;

        -webkit-filter: ${(props) => props.availability ? 'blur(0%)' : 'blur(1px)'};
        filter: ${(props) => props.availability ? 'blur(0%)' : 'blur(1px)'};
    }

    @media (width < 768px){
        width: 20rem;
        height: 6rem;

        grid-template-areas: 
        "name image"
        "description image"
        "price image";

        grid-template-columns: 1fr 3rem;
        grid-template-rows: 1fr 2rem 1fr;
        
        border: none;
        border-radius: 0%;

        padding-bottom: 1.5rem;

        border-bottom: 1px solid #eae9e9;

        img {
            width: 3rem;
            height: 3rem;
        }
    }
`

export const Name = styled.h3`
    display: inline-block;
    
    grid-area: name;

    font-family: "Mukta Vaani", sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: bolder;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    align-self: self-end;

    @media (width < 768px){
        font-size: 1rem;
    }
`

export const Price = styled.p<AvailabilityProps>`
    grid-area: price;

    font-family: "Mukta Vaani", sans-serif;
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    text-align: right;

    align-self: self-end;

    @media (width < 768px){
        font-size: 0.5rem;
        text-align: left;
        margin-top: 0.5rem;
    }

    span {
        font-size: 1.5rem;
        color: ${(props) => props.availability ? props.theme["cordovan-500"] : 'gray'};
        font-weight: bolder;

        @media (width < 768px){
            font-size: 0.875rem;
        }
    }
`

export const Description = styled.p`
    grid-area: description;
    display: -webkit-box;

    font-family: "Mukta Vaani", sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;   

    @media (width < 768px){
        font-size: 0.75rem;
        height: 2.5rem;

        line-height: 1.2rem;
    }
`

export const AddToCartContainer = styled.div`
    grid-area: quantityInput;

    align-self: flex-end;

    @media (width < 768px) {
        display: none;
    }
`

export const FormContainer = styled.div`
    grid-area: quantityInput;
    align-self: flex-end;

    display: grid;
    grid-template-columns: 1fr 3rem;

    gap: 1rem;

    @media (width < 768px) {
        display: none;
    }
`