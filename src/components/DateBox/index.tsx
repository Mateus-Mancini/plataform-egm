import * as S from './styles'

const DateBox = () => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return (
        <S.DateContainer>
            <S.Day>{new Date().getDate()}</S.Day>
            <S.MonthAndYear>de {months[new Date().getMonth()]} de {new Date().getFullYear()}</S.MonthAndYear>
        </S.DateContainer>
    )
}

export { DateBox }