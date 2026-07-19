fetch('data/routine.json')
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('ece-body');
        tbody.innerHTML = '';
        data.NCE_Routine.forEach(item => {
            const row = `<tr>
                <td>${item.Day}</td>
                <td>${item['08:00']}</td>
                <td>${item['09:00']}</td>
                <td>${item['10:00']}</td>
                <td>${item['11:00']}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
