import aa from "../../assets/hamburguer.jpeg"
import { AddToCartContainer, Description, FormContainer, Grid, Name, Price } from "./styles"
import { useEffect, useState } from "react"
import { useCart } from "../../hooks/useCart"
import { useDetailsModal } from "../../hooks/useDetailsModal"
import { CardsAddToCartButton } from "./components/card-add-to-cart-button"
import { QuantityInput } from "../../elements/quantity-input"
import { PriceFormater } from "../../utils/price-formater"
import { ShowAddToCartFormButton } from "../../elements/add-to-cart-button"

interface MenuItemCardProps {
    id: number
    image: string
    name: string
    description: string
    price: number
    available: boolean
    categoryId: number
}

export function MenuCard({ name, description, price, available, id }: MenuItemCardProps) {
    const { openModal } = useDetailsModal()
    const { addOrUpdateItem, cartState } = useCart()

    const [quantityOfItems, setQuantityOfIems] = useState<number>(0)
    const [isFormVisible, setIsFormVisible] = useState(false)

    const [addToCartButtonHasBeenClicked, setAddToCartButtonHasBeenClicked] = useState(false)

    function updateQuantityAccordingWithCart() {
        const cartItem = cartState.find(item => item.menuItem.id === id)
        if (cartItem) {
            setQuantityOfIems(cartItem.quantity)
            setIsFormVisible(true)
        }
    }

    function handleOpenDetails() {
        openModal(id)
    }

    function handleShowForm() {
        setIsFormVisible(true)
    }

    function incrementQuantityOfItems() {
        setQuantityOfIems(state => state += 1)
    }

    function decrementQuantityOfItems() {
        if (quantityOfItems > 1) {
            setQuantityOfIems(state => state -= 1)
        }
        else {
            setIsFormVisible(false)
        }
    }

    function addItemTocart() {
        addOrUpdateItem({
            menuItem: {
                id: id,
                image: "",
                name: name,
                description: description,
                cost: price,
                available: available
            },
            quantity: quantityOfItems,
            foodPreferencies: ''
        })

        setAddToCartButtonHasBeenClicked(true)
    }

    useEffect(() => {
        updateQuantityAccordingWithCart()
    }, [])

    return (
        <Grid availability={available} onClick={handleOpenDetails}>
            <img src={aa} />
            <Name>{name}</Name>
            <Price availability={available}>R$ <span>{PriceFormater(price)}</span></Price>
            <Description>{description}</Description>
            {
                isFormVisible ?
                    (
                        <FormContainer data-testid='add-to-cart-card-form'>
                            <QuantityInput
                                quantity={quantityOfItems}
                                incrementQuantity={incrementQuantityOfItems}
                                decrementQuantity={decrementQuantityOfItems}
                            />
                            <CardsAddToCartButton addToCart={addItemTocart} hasBeenClicked={addToCartButtonHasBeenClicked} />
                        </FormContainer>
                    ) :
                    (
                        <AddToCartContainer data-testid='show-add-to-cart-form-button' >
                            <ShowAddToCartFormButton availability={available} showForm={handleShowForm} />
                        </AddToCartContainer>
                    )
            }

        </Grid>
    )
}
