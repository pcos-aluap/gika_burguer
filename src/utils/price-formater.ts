export function PriceFormater(price: number){
    return new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(price);
}

export function FormatToBRL(price: number){
    return new Intl.NumberFormat('pt-br', {
        currency: 'BRL',
        style: 'currency',
    }).format(price)
}