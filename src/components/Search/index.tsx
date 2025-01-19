import { useState } from 'react'
import * as S from './styles'

interface ISearchProps {
    value: string
    setValue: (value: string) => void
    placeholder: string
}

const Search = ({ value, setValue, placeholder }: ISearchProps) => {
    return (
        <S.SearchContainer placeholder={placeholder} value={value} onChange={(e: any) => setValue(e.target.value)} />
    )
}

export { Search };