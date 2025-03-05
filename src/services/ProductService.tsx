type AddProductProps = {
    [k: string]: FormDataEntryValue;
}

export const AddProduct = async (data: AddProductProps) => {
    console.log(data)
}