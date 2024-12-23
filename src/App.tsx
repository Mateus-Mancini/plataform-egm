import * as S from './styles'
import { Sidebar } from './components/Sidebar';
import { Page } from './components/Page';
import { DateBox } from './components/DateBox';

function App() {
  return (
    <S.AppContainer>
      <S.PageContainer>
        <S.SidebarAndDate>
          <Sidebar />
          <DateBox />
        </S.SidebarAndDate>
        <Page />
      </S.PageContainer>
    </S.AppContainer>
  );
}

export default App;
