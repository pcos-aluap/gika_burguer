import styled from "styled-components";
import aa from "../../../assets/hamburguer.jpeg"
import { useContext, useEffect, useState } from "react";
import { QuantityInput } from "../../../elements/quantity-input";
import { ModalsAddButtonToCartButton } from "../../../elements/modals-add-to-cart-button";
import { PriceFormater } from "../../../utils/price-formater";
import { CaretLeft, Heart, X } from "@phosphor-icons/react";
import { useMediaQuery } from 'react-responsive';
import { useQuery } from "@tanstack/react-query";
import { DetailsModalContext } from "../../../contexts/details-modal-provider";
import { getDetailsMenuItem } from "../../../api/menu/get-menu";
import { useCart } from "../../../hooks/useCart";

export function DetailsModal() {
    const { closeModal, isModalOpen, menuItemId } = useContext(DetailsModalContext);
    const { addOrUpdateItem } = useCart();

    const [quantityOfItems, setQuantityOfIems] = useState<number>(1);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const { data, isLoading, isError } = useQuery({
        queryKey: ["getMenuItem", menuItemId],
        queryFn: () => getDetailsMenuItem(menuItemId!)
    })

    const [totalCost, setTotalCost] = useState(data != null ? data!.cost : 0);

    function alterTotalCost() {
        if (data != null)
            setTotalCost(data!.cost * quantityOfItems);
    }

    function incrementQuantityOfItems() {
        setQuantityOfIems(state => state += 1);
    }

    function decrementQuantityOfItems() {
        if (quantityOfItems > 1) {
            setQuantityOfIems(state => state -= 1)
        }
    }

    function addProductToCart() {
        addOrUpdateItem({
            menuItem: {
                id: data!.id,
                image: data!.image,
                name: data!.name,
                description: data!.description,
                cost: data!.cost,
                available: data!.available
            },
            quantity: quantityOfItems
        })
    }

    useEffect(() => {
        alterTotalCost();
    }, [quantityOfItems, data])

    if (isLoading) {
        return <div>Página em carregamento</div>
    }

    if (isError) {
        return <div>Houve um erro ao acessar a página</div>
    }

    if (isModalOpen) {
        if (isTabletOrMobile) {
            return (
                <Container>
                    <HeaderContainer>
                        <BackButton onClick={closeModal}><CaretLeft /></BackButton>
                        <FavoriteButton><Heart size={24} color="#574F4D" /></FavoriteButton>
                    </HeaderContainer>
                    <div>
                        <MobileImage src={aa} alt="" />
                    </div>
                    <Body>
                        <div>
                            <Name>{data!.name}</Name>
                            <Description>{data!.description}</Description>
                            <Price availability={data!.available}>R$ <span>{PriceFormater(data!.cost)}</span></Price>
                            <Label>Deseja adicionar alguma observação?</Label>
                            <Input placeholder="Deseja alguma alteração no prato?" />
                        </div>
                        <FormContainer>
                            <QuantityInput quantity={quantityOfItems} incrementQuantity={incrementQuantityOfItems} decrementQuantity={decrementQuantityOfItems} />
                            <ModalsAddButtonToCartButton onClick={addProductToCart} availability={data!.available} value={totalCost} />
                        </FormContainer>
                    </Body>
                </Container>
            );
        }

        return (
            <Background>
                <ModalContainer>
                    <CloseButton onClick={closeModal}><X size={24} /></CloseButton>
                    <Image src={aa} />
                    <InformationsContainer>
                        <Name>{data!.name}</Name>
                        <Description>{data!.description}</Description>
                        <Price availability={data!.available} >R$ <span>{PriceFormater(data!.cost)}</span></Price>
                        <form >
                            <Label>Deseja adicionar alguma observação?</Label>
                            <Input />
                            <FormContainer>
                                <QuantityInput
                                    quantity={quantityOfItems}
                                    incrementQuantity={incrementQuantityOfItems}
                                    decrementQuantity={decrementQuantityOfItems}
                                />
                                <ModalsAddButtonToCartButton
                                    onClick={addProductToCart}
                                    availability={data!.available}
                                    value={totalCost}
                                />
                            </FormContainer>
                        </form>
                    </InformationsContainer>
                </ModalContainer>
            </Background>
        );

    }

    return (
        <></>
    );

}

const Background = styled.div`
    display: flex;

    position: fixed;
    height: 100%;
    width: 100%;

    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.8);
`

const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    height: 80vh;
    width: 80vw;

    padding: 3rem;

    background-color: ${({ theme }) => theme.white};
    border-radius: 4px;

    gap: 3rem;
`

const CloseButton = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;

    right: 1rem;
    top: 1rem;
`

const Image = styled.img`
    height: 100%;
    width: 40vw;

    border-radius: 4px;

    object-fit: cover;
`

const InformationsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Name = styled.div`
    font-family: "Padauk", sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: bolder; 
`

const Description = styled.p`
    font-family: "Mukta Vaani", sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
`

interface AvailabilityProps {
    availability: boolean
}

const Price = styled.p<AvailabilityProps>`
    font-family: "Mukta Vaani", sans-serif;
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    text-align: right;

    align-self: self-end;

    span {
        font-size: 1.5rem;
        color: ${(props) => props.availability ? props.theme["cordovan-500"] : 'gray'};
        font-weight: bolder;
    }
`

const Label = styled.label`
    font-family: "Mukta Vaani", sans-serif;
    font-size: 1rem;

    margin-top: 3rem;
`

const Input = styled.textarea`
    width: 100%;
    height: 5rem;

    margin-left: 0.25rem;
    color: ${(props) => props.theme["base-text"]};

    font-family: "Mukta Vaani", sans-serif;
    font-size: 1rem;
`

const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 7rem 1fr;

    margin-top: auto;

    gap: 1rem;

    @media (width <= 1024px) {
        grid-template-columns: 5rem 1fr;

        margin-bottom: 2rem;
    }
`

// Mobile 

const Container = styled.main`
    position: fixed;

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    background-color: white;

    z-index: 5;
`

const HeaderContainer = styled.div`
    position: absolute;
    width: 85vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-inline: 1rem;
    margin-top: 1rem;
`

const BackButton = styled.button`
    display: flex;
    height: 2.5rem;
    width: 2.5rem;

    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 99px;

    font-size: 1rem;
    color: ${({ theme }) => theme["base-text"]};
`

const FavoriteButton = styled.button`
    display: flex;
    border: none;
    background-color: transparent;

    justify-content: center;
    align-items: center;
`

const Body = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-inline: 1rem;
`

const MobileImage = styled.img`
    position: relative;

    width: 100%;
    height: 15rem;
    object-fit: cover;

    z-index: -1;
`