import * as S from './styles'
import { Search } from '../components/Search';
import { Dropdown } from '../components/Dropdown';
import { useState, useEffect } from 'react';

function Carometer({ setSelectedStudent, setElement }: { setSelectedStudent: any, setElement: any }) {
    const [students, setStudents] = useState<any[]>()
    const [filteredStudents, setFilteredStudents] = useState<any[]>()
    const [years, setYears] = useState<any[]>()
    const [grades, setGrades] = useState<any[]>()
    const [classes, setClasses] = useState<any[]>()
    const [selectedYear, setSelectYear] = useState<any>(null)
    const [selectedGrade, setSelectedGrade] = useState<any>(null)
    const [selectedClass, setSelectClass] = useState<any>(null)
    const [searchInput, setSearchInput] = useState<string>('')

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

    return (
        <S.PageContainer>
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
        </S.PageContainer>
    )
}

export { Carometer }