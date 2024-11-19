export function PriceFormater(price: number){
    return new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(price);
}