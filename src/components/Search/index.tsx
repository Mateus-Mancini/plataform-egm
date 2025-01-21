import * as S from './styles'

interface ISearchProps {
    value: string
    setValue: (value: string) => void
    placeholder: string
}

const Search = ({ value, setValue, placeholder }: ISearchProps) => {
    return (
        <div style={{ flex: 2, display: 'flex', position: 'relative' }}>
            <S.SearchContainer placeholder={placeholder} value={value} onChange={(e: any) => setValue(e.target.value)} />
            <span className="material-symbols-rounded" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '1.2rem', color: '#606AD1DE', fontSize: "2.8rem" }}>
                search
            </span>
        </div>
    )
}

export { Search };