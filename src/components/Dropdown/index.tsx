import { useState } from 'react'
import * as S from './styles'

interface IDropdownProps {
    title: string
    options?: any[]
    value: { value: any, id: any}
    setValue: (value: any) => void
}

const Dropdown = ({ title, options, value, setValue }: IDropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <S.DropdownContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <div style={{overflow: "hidden", flex: 1, textOverflow: 'ellipsis', whiteSpace: "nowrap"}}>
                {value ? value.value : title}
            </div>
            <span className="material-symbols-rounded">
                keyboard_arrow_up
            </span>
            {isOpen && (
                <S.Options>
                    <S.Option onClick={() => setValue(null)}>Nenhum</S.Option>

                    {options?.map((option) => (
                        <S.Option key={option.id} onClick={() => setValue(option)}>{option.value}</S.Option>
                    ))}
                </S.Options>
            )}
        </S.DropdownContainer>
        
    )
}

export { Dropdown };