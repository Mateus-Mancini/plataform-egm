import * as S from './styles'
import { Sidebar } from './components/Sidebar';
import { Page } from './components/Page';
import { DateBox } from './components/DateBox';
import { Dropdown } from './components/Dropdown';
import { Search } from './components/Search';
import { useEffect, useState } from 'react';

function App() {
  const [students, setStudents] = useState<any[]>()
  const [filteredStudents, setFilteredStudents] = useState<any[]>()
  const [years, setYears] = useState<any[]>()
  const [grades, setGrades] = useState<any[]>()
  const [classes, setClasses] = useState<any[]>()
  const [selectedYear, setSelectYear] = useState<any>(null)
  const [selectedGrade, setSelectedGrade] = useState<any>(null)
  const [selectedClass, setSelectClass] = useState<any>(null)
  const [classesFile, setClassesFile] = useState(null)
  const [studentsFile, setStudentsFile] = useState(null)
  const [searchInput, setSearchInput] = useState<string>('')
  const [selectedStudent, setSelectedStudent] = useState<any>(null)
  const [element, setElement] = useState<any>()
  const [closed, setClosed] = useState<boolean>(false)

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
    fetch("https://egm-backend.onrender.com/api/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        setStudents(data)
      })
      .catch((error) => {
        console.log(error);
        
        throw new Error(error);
      });

      fetch("https://egm-backend.onrender.com/api/years")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        setYears(data.map((year: any) => {return {id: year.id, value: year.year}}))
      })
      .catch((error) => {
        console.log(error);
        
        throw new Error(error);
      });
  }, [])

  useEffect(() => {
    setSelectedGrade(null)
    if (selectedYear) {
      if (searchInput) {
        setFilteredStudents(students?.filter((student) => student.name.toLowerCase().startsWith(searchInput.toLowerCase()) && student.year_id === selectedYear.id))
      } else {
        setFilteredStudents(students?.filter((student) => student.year_id === selectedYear.id))
      }

      fetch(`https://egm-backend.onrender.com/api/grades?yearId=${selectedYear.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        setGrades(data.map((grade: any) => {return {id: grade.id, value: grade.number}}))
      })
      .catch((error) => {
        console.log(error);
        
        throw new Error(error);
      });
    } else {
      setGrades(undefined)
      if (searchInput) {
        setFilteredStudents(students?.filter((student) => student.name.toLowerCase().startsWith(searchInput.toLowerCase())))
      } else {
        setFilteredStudents(undefined)
      }
    }
  }, [selectedYear])

  useEffect(() => {
    setSelectClass(null)
    if (selectedGrade) {
      if (searchInput) {
        setFilteredStudents(students?.filter((student) => student.name.toLowerCase().startsWith(searchInput.toLowerCase()) && student.year_id === selectedYear.id && student.grade_id === selectedGrade.id))
      } else {
        setFilteredStudents(students?.filter((student) => student.year_id === selectedYear.id && student.grade_id === selectedGrade.id))      
      }
      
      fetch(`https://egm-backend.onrender.com/api/classes?yearId=${selectedYear.id}&gradeId=${selectedGrade.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        setClasses(data.map((schoolClass: any) => {return {id: schoolClass.id, value: schoolClass.name}}))
      })
      .catch((error) => {
        console.log(error);
        
        throw new Error(error);
      });
    } else {
      setClasses(undefined)
      if (selectedYear) {
        if (searchInput) {
          setFilteredStudents(students?.filter((student) => student.year_id === selectedYear.id && student.name.toLowerCase().startsWith(searchInput.toLowerCase())))
        } else {
          setFilteredStudents(students?.filter((student) => student.year_id === selectedYear.id))
        }
    }
  }
  }, [selectedGrade])

  useEffect(() => {
      if (selectedClass) {
        if (searchInput) {
          setFilteredStudents(students?.filter((student) => student.class_id === selectedClass.id && student.name.toLowerCase().startsWith(searchInput.toLowerCase())))
        } else {
          setFilteredStudents(students?.filter((student) => student.class_id === selectedClass.id))
        }
      } else if (selectedGrade) {
        if (searchInput) {
          setFilteredStudents(students?.filter((student) => student.year_id === selectedYear.id && student.grade_id === selectedGrade.id && student.name.toLowerCase().startsWith(searchInput.toLowerCase())))
        } else {
          setFilteredStudents(students?.filter((student) => student.year_id === selectedYear.id && student.grade_id === selectedGrade.id))
        }
      }
  }, [selectedClass])

  useEffect(() => {
    let conditions = ''

    if (selectedClass) {
      conditions += "student.class_id === selectedClass.id"
    } else if (selectedGrade) {
      conditions += "student.year_id === selectedYear.id && student.grade_id === selectedGrade.id"
    } else if (selectedYear) {
      setFilteredStudents(students?.filter((student) => student.year_id === selectedYear.id))
    }

      if (conditions.length > 0) {
        if (searchInput) {
          conditions += `&& student.name.toLowerCase().startsWith("${searchInput.toLowerCase()}")`
        }

        setFilteredStudents(students?.filter((student) => eval(conditions)))
      } else if (searchInput) {
        setFilteredStudents(students?.filter((student) => student.name.toLowerCase().startsWith(searchInput.toLowerCase())))
      } else {
        setFilteredStudents(undefined)
      }
  }, [searchInput])

  useEffect(() => {
    if (closed) {
      setTimeout(() => {setSelectedStudent(null); setElement(null); setClosed(false)}, 1200)
    }
  }, [closed])

  return (
    <S.AppContainer>
      <S.PageContainer>
        <S.SidebarAndDate>
          <Sidebar />
          <DateBox />
        </S.SidebarAndDate>
        <S.PagesContainer>
          <h2>Olá <em>Wanderlino</em>, seja bem-vindo!</h2>
          {/* <p>Nesta tela, você pode <em>gerenciar</em> as tabelas que o programa utiliza, <em>editando</em> ou <em>adicionando</em> informções, como os <em>usuários</em>, <em>anos</em>, <em>alunos</em> e <em>turmas</em>.</p> */}
          <p>Nesta tela, você pode <em>visualizar</em> todos os <em>alunos</em> e verificar o <em>histórico de presença</em> de cada um.
          Você pode usar os filtros e clicar no perfil de cada aluno para ter acesso a mais informações.</p>
          <S.DashedLine></S.DashedLine>
          <S.Filters>
            <Search placeholder={'Nome do Aluno: '} value={searchInput} setValue={setSearchInput}/>
            <Dropdown title="Ano" options={years} value={selectedYear} setValue={(year) => setSelectYear(year)} />
            <Dropdown title="Série" options={grades} value={selectedGrade} setValue={(grade) => setSelectedGrade(grade)} />
            <Dropdown title="Turma" options={classes} value={selectedClass} setValue={(schoolClass) => setSelectClass(schoolClass)} />
          </S.Filters>
          <S.StudentsContainer>
            {filteredStudents ? filteredStudents?.map((student) => (
              <S.Student 
                key={student.ra} 
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setSelectedStudent(student)
                  const target = event.target as HTMLElement;
                  setElement(target)
                }}
              >
                {student.name}
              </S.Student>
            )) : students?.map((student) => (
              <S.Student 
                key={student.ra}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setSelectedStudent(student)
                  const target = event.target as HTMLElement;
                  setElement(target)
                }}
              >
                {student.name}
              </S.Student>
            ))}
          </S.StudentsContainer>
          {/* <input type="file" onChange={handleClassFileChange}></input>
          {classesFile && (
            <button onClick={uploadClassesExcel}>Upload classes excel</button>
          )}

          <input type="file" onChange={handleStudentFileChange}></input>
          {studentsFile && (
            <button onClick={uploadStudentsExcel}>Upload students excel</button>
          )} */}
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