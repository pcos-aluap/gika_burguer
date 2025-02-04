import aa from "../../assets/hamburguer.jpeg"
import { AddToCartContainer, Description, FormContainer, Grid, Name, Price } from "./styles"
import { useEffect, useState } from "react"
import { useCart } from "../../hooks/useCart"
import { useDetailsModal } from "../../hooks/useDetailsModal"
import { CardsAddToCartButton } from "./components/card-add-to-cart-button"
import { QuantityInput } from "../../elements/quantity-input"
import { PriceFormater } from "../../utils/price-formater"
import { ShowAddToCartFormButton } from "../../elements/add-to-cart-button"
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

interface MenuItemCardProps {
    id: number
    image: string
    name: string
    description: string
    price: number
    available: boolean
    categoryId: number
}

const addMenuItemFromCardToCartFormSchema = z.object({
    quantity: z.number()
})

type AddMenuItemFromCardToCartFormInput = z.infer<typeof addMenuItemFromCardToCartFormSchema>

export function MenuCard({ name, description, price, available, id }: MenuItemCardProps) {
    const { openModal } = useDetailsModal()
    const { addOrUpdateItem, getItemQuantityBy } = useCart()

    const { control, setValue, getValues, handleSubmit } = useForm<AddMenuItemFromCardToCartFormInput>({
        resolver: zodResolver(addMenuItemFromCardToCartFormSchema),
        defaultValues: {
            quantity: 1
        }
    })

    const [isFormVisible, setIsFormVisible] = useState(false)

    const [addToCartButtonHasBeenClicked, setAddToCartButtonHasBeenClicked] = useState(false)

    function updateQuantityAccordingWithCart() {
        const currentQuantity = getItemQuantityBy(id)
        if(currentQuantity != undefined){
            setValue('quantity', currentQuantity)
        }
    }

    function handleOpenDetails() {
        openModal(id)
    }

    function handleShowForm() {
        setIsFormVisible(true)
    }

    const handleDecrementQuantity = () => {
        const quantityAtual = getValues('quantity')
        if (quantityAtual >= 1) {
            setValue('quantity', quantityAtual - 1)
        }
        else {
            setIsFormVisible(false)
        }
    }

    const handleIncrementQuantity = () => {
        setValue('quantity', getValues('quantity') + 1)
    }

    function addItemTocart () {
        addOrUpdateItem({
            menuItem: {
                id: id,
                image: "",
                name: name,
                description: description,
                cost: price,
                available: available
            },
            quantity: getValues('quantity'),
            foodPreferencies: ''
        })

        setAddToCartButtonHasBeenClicked(true)

        setTimeout(() => {
            setAddToCartButtonHasBeenClicked(false)
        }, 3000)
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
                        <FormContainer onSubmit={handleSubmit(addItemTocart)} data-testid='add-to-cart-card-form'>
                            <Controller
                                control={control}
                                name='quantity'
                                render={({ field }) => {
                                    return (
                                        <QuantityInput
                                            quantity={field.value}
                                            incrementQuantity={handleIncrementQuantity}
                                            decrementQuantity={handleDecrementQuantity}
                                        />
                                    )
                                }}
                            />
                            <CardsAddToCartButton hasBeenClicked={addToCartButtonHasBeenClicked} addItemToCart={addItemTocart} />
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


