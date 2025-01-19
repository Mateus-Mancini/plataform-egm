import * as S from './styles'
import { useState } from 'react';

const Sidebar = () => {
    const pages = [{title: 'Página Inicial', icon: 'home_work'}, {title: 'Carômetro', icon: 'badge'}, {title : 'Estatística', icon: 'monitoring'}, {title: 'Perfil', icon: 'account_circle'} , {title: 'Suporte', icon: 'support_agent'}]
    const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0)

    return (
        <S.SidebarContainer>
            <S.Title>Plataforma EGM</S.Title>
            <S.DashedLine />
            <S.PagesContainer>
                {pages.map((page, index) => (
                    <S.PageTag key={index} selected={selectedPageIndex === index} onClick={() => {setSelectedPageIndex(index)}}>
                        <span className="material-symbols-rounded">
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