import * as S from './styles'

const Sidebar = ({ selectedPage, setSelectedPage } : any) => {
    const pages = [{title: 'Página Inicial', icon: 'home_work'}, {title: 'Carômetro', icon: 'badge'}, {title: 'Relatórios', icon: 'lab_profile'}, {title : 'Estatística', icon: 'monitoring'}, {title: 'Logs', icon: 'description'}, {title: 'Configurações', icon: 'tune'}, {title: 'Suporte', icon: 'support_agent'}]
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return (
        <S.SidebarContainer>
            <S.Title>Plataforma EGM</S.Title>
            <S.Date>{new Date().getDate()} de {months[new Date().getMonth()]}, {new Date().getFullYear()}</S.Date>
            <S.PagesContainer>
                {pages.map((page, index) => (
                    <S.PageTag key={index} selected={selectedPage === index} onClick={() => {setSelectedPage(index)}}>
                        <span className="material-symbols-outlined">
                            {page.icon}
                        </span>
                        {page.title}
                    </S.PageTag>
                ))}
            </S.PagesContainer>
        </S.SidebarContainer>
    )
}

export { Sidebar };