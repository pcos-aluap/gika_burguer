import axios from "axios"

interface AddressAPIResponse {
    cep: string
    logradouro: string
    complemento: string
    unidade: string
    bairro: string
    localidade: string
    uf: string
    estado: string
    regiao: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

interface Address {
    street: string
    neighborhood: string
    city: string
}

export async function getAddressByCEP(cep: string): Promise<Address> {
    const response = await axios.get<AddressAPIResponse>(`https://viacep.com.br/ws/${cep}/json/`)

    const address: Address = {
        street: response.data.logradouro,
        neighborhood: response.data.bairro,
        city: response.data.localidade
    }

    return address
}