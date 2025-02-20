import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Outlet } from "react-router-dom"

const newOrderFormSchema = z.object({
    name: z.string().min(3, 'Informe o seu nome'),
    phone: z.string().regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, {
        message: "Informe um telefone para contato",
    }),
    cep: z.string().min(8, 'Informe o CEP'),
    street: z.string().min(3, 'Informe a rua'),
    number: z.string().min(1, 'Informe o número'),
    fullAddress: z.string().optional(),
    neighborhood: z.string().min(3, 'Informe o bairro'),
    landMark: z.string().min(3, 'Informe a cidade'),
    paymentMethod: z.enum(['credit', 'debit', 'pix', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
    change: z.string().optional(),
})

export type NewOrderFormInputs = z.infer<typeof newOrderFormSchema>


export function CartForm() {
    const formMethods = useForm<NewOrderFormInputs>({
        resolver: zodResolver(newOrderFormSchema),
    })

    return (
        <FormProvider {...formMethods}>
            <Outlet />
        </FormProvider>
    )
}