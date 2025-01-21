import * as S from './styles'
import { Sidebar } from './components/Sidebar';
import { Page } from './components/Page';
import { DateBox } from './components/DateBox';
import { Dropdown } from './components/Dropdown';
import { Search } from './components/Search';
import { useEffect, useState } from 'react';
import { Carometer } from './pages/Carometer';

function App() {
  const [classesFile, setClassesFile] = useState(null)
  const [studentsFile, setStudentsFile] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState<any>(null)
  const [element, setElement] = useState<any>()
  const [closed, setClosed] = useState<boolean>(false)
  const [selectedPage, setSelectedPage] = useState<number>(0)

  const handleClassFileChange = (event: any) => {
    setClassesFile(event.target.files[0])
  }

  const uploadClassesExcel = async () => {
    if (!classesFile) {
      alert("Please select a file first")
      return
    }

    const formData = new FormData()
    formData.append("file", classesFile)

    try {
      const response = await fetch("https://egm-backend.onrender.com/api/upload/classes", {
        method: "POST",
        body: formData
      })

      if (!response.ok) {
        throw new Error("Failed to upload file")
      }

      const data = await response.json()
      alert(data.message)
    } catch (error) {
      console.log(error);
      alert("An error occured")
    }
  }

  const handleStudentFileChange = (event: any) => {
    setStudentsFile(event.target.files[0])
  }

  const uploadStudentsExcel = async () => {
    if (!studentsFile) {
      alert("Please select a file first")
      return
    }

    const formData = new FormData()
    formData.append("file", studentsFile)

    try {
      const response = await fetch("https://egm-backend.onrender.com/api/upload/students", {
        method: "POST",
        body: formData
      })

      if (!response.ok) {
        throw new Error("Failed to upload file")
      }

      const data = await response.json()
      alert(data.message)
    } catch (error) {
      console.log(error);
      alert("An error occured")
    }
  }

  useEffect(() => {
    if (closed) {
      setTimeout(() => {setSelectedStudent(null); setElement(null); setClosed(false)}, 1200)
    }
  }, [closed])

  return (
    <S.AppContainer>
      <S.PageContainer>
        <Sidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <S.PagesContainer>
          <h2>Olá <em>Wanderlino</em>, seja bem-vindo!</h2>
          {/* <p>Nesta tela, você pode <em>gerenciar</em> as tabelas que o programa utiliza, <em>editando</em> ou <em>adicionando</em> informções, como os <em>usuários</em>, <em>anos</em>, <em>alunos</em> e <em>turmas</em>.</p> */}
          <p>Nesta tela, você pode <em>visualizar</em> todos os <em>alunos</em> e verificar o <em>histórico de presença</em> de cada um. <br/>
          Você pode usar os filtros e clicar no perfil de cada aluno para ter acesso a mais informações.</p>
                    {/* <input type="file" onChange={handleClassFileChange}></input>
          {classesFile && (
            <button onClick={uploadClassesExcel}>Upload classes excel</button>
          )}

          <input type="file" onChange={handleStudentFileChange}></input>
          {studentsFile && (
            <button onClick={uploadStudentsExcel}>Upload students excel</button>
          )} */}
          {selectedPage === 1 && (
            <Carometer setElement={setElement} setSelectedStudent={setSelectedStudent} />
          )}
        </S.PagesContainer>
        {element && (
          <S.SelectedStudentContainer initialPosition={element?.getBoundingClientRect() || {top: 0, left: 0, width: 0, height: 0}} closed={closed}>
            <S.SelectedStudentName closed={closed} index={0}>{selectedStudent?.name.toLowerCase()}</S.SelectedStudentName>
            <S.SelectedStudentInfo closed={closed} index={1}>RA: 000{selectedStudent?.ra}</S.SelectedStudentInfo>
            <S.SelectedStudentInfo closed={closed} index={2}>E-mail Microsoft: 0000{selectedStudent?.ra}{selectedStudent?.digit}SP@aluno.educacao.sp.gov.br</S.SelectedStudentInfo>
            <S.SelectedStudentInfo closed={closed} index={3}>E-mail Google: 0000{selectedStudent?.ra}{selectedStudent?.digit}SP@al.educacao.sp.gov.br</S.SelectedStudentInfo>
            <S.CloseButton closed={closed} index={5} className="material-symbols-rounded" onClick={() => setClosed(true)}>
              close
            </S.CloseButton>
          </S.SelectedStudentContainer>
        )}
      </S.PageContainer>
    </S.AppContainer>
  );
}

export default App;