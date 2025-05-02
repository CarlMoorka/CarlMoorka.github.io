
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    const classSelect = document.getElementById('classSelect');
    if (classSelect) {
        classSelect.addEventListener('change', function() {
            console.log('Выбран класс:', this.value);
        });
    }
    
    if (window.location.pathname.includes('diary.html')) {
        const gradesTable = document.getElementById('gradesTable');
        if (gradesTable) {
            const mockData = {
                subjects: ['Математика', 'Русский язык', 'Физика', 'Химия', 'Литература'],
                grades: [['5', '4', '5', '5'], ['4', '4', '5'], ['5', '5', '5'], ['4', '5'], ['5', '5', '4']]
            };
            
            let tbody = gradesTable.querySelector('tbody');
            mockData.subjects.forEach((subject, i) => {
                let row = document.createElement('tr');
                let cellSubject = document.createElement('td');
                cellSubject.textContent = subject;
                row.appendChild(cellSubject);
                
                mockData.grades[i].forEach(grade => {
                    let cellGrade = document.createElement('td');
                    cellGrade.textContent = grade;
                    row.appendChild(cellGrade);
                });
                
                tbody.appendChild(row);
            });
        }
    }
});