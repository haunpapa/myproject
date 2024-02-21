let time = document.getElementById('time')
let now = new Date()
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate(); 
let now_time = `( ${year}년 ${month}월 ${day}일 )`
time.append(now_time)


// data-table의 모든 0번 로우에 체크박스를 추가하는 함수
function addCheckboxToAllRows() {
    const dataTable = document.getElementById('data-table');
    const rows = dataTable.getElementsByTagName('tr');
  
    // 첫 번째 로우부터 시작하여 모든 0번 로우에 체크박스를 추가
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      let firstCell = row.cells[0];
  
      // 체크박스 엘리먼트 생성
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      // 체크박스를 로우의 첫 번째 셀에 추가
      firstCell.appendChild(checkbox);
    }
  }
  
  // 모든 0번 로우에 체크박스 추가 실행
  addCheckboxToAllRows();


  // 페이지네이션을 처리하는 함수
function handlePagination() {
    const dataTable = document.getElementById('data-table');
    const rows = dataTable.rows;
    const itemsPerPage = 25; // 한 페이지에 보여줄 항목 수
  
    // 페이지 수 계산
    const pageCount = Math.ceil(rows.length / itemsPerPage);
  
    // 페이지네이션을 표시할 엘리먼트 선택
    const pagination = document.querySelector('.pagination');
  
    // 이전 페이지 링크 생성
    let previousLink = document.createElement('a');
    previousLink.classList.add('page-link');
    previousLink.href = '#';
    previousLink.innerText = 'Previous';
  
    // 이전 페이지 링크를 페이지네이션에 추가
    let previousItem = document.createElement('li');
    previousItem.classList.add('page-item');
    previousItem.appendChild(previousLink);
    pagination.appendChild(previousItem);
  
    // 각 페이지 링크 생성 및 추가
    for (let i = 1; i <= pageCount; i++) {
      let pageLink = document.createElement('a');
      pageLink.classList.add('page-link');
      pageLink.href = '#';
      pageLink.innerText = i;
  
      let pageItem = document.createElement('li');
      pageItem.classList.add('page-item');
      pageItem.appendChild(pageLink);
      pagination.appendChild(pageItem);
    }
  
    // 다음 페이지 링크 생성
    const nextLink = document.createElement('a');
    nextLink.classList.add('page-link');
    nextLink.href = '#';
    nextLink.innerText = 'Next';
  
    // 다음 페이지 링크를 페이지네이션에 추가
    const nextItem = document.createElement('li');
    nextItem.classList.add('page-item');
    nextItem.appendChild(nextLink);
    pagination.appendChild(nextItem);
  
    // 초기 페이지로 첫 번째 페이지 설정
    showPage(1);
  
    // 페이지를 변경할 때마다 해당 페이지의 데이터만 보여주는 함수
    function showPage(page) {
      // 각 페이지의 첫 번째 항목과 마지막 항목의 인덱스 계산
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
  
      // 모든 항목을 숨김
      for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = 'none';
      }
  
      // 해당 페이지의 항목만 보여줌
      for (let j = startIndex; j < endIndex; j++) {
        if (rows[j]) {
          rows[j].style.display = 'table-row';
        }
      }
    }
  
    // 페이지네이션 링크를 클릭할 때마다 해당 페이지로 이동하도록 이벤트 리스너 추가
    pagination.addEventListener('click', function (event) {
      event.preventDefault();
      let target = event.target;
  
      if (target.tagName === 'A') {
        let page = parseInt(target.innerText);
        if (!isNaN(page)) {
          showPage(page);
        }
      }
    });
  }
  
  // 페이지네이션 처리 실행
  handlePagination();


    // data-table의 행들을 선택합니다.
let rows = document.getElementById("data-table").getElementsByTagName("tr");

    // 각 행을 순회하면서 7번째 열의 값을 확인하고 색상을 변경합니다.
  for (let i = 0; i < rows.length; i++) {
    let cell = rows[i].getElementsByTagName("td")[6]; // 7번째 열(인덱스 6)의 값을 가져옵니다.
    let value = parseInt(cell.innerText); // 값을 정수형으로 변환합니다.

    if (value > 0) {
        cell.style.color = "red"; // 양수인 경우 빨간색으로 설정합니다.
    } else if (value < 0) {
        cell.style.color = "blue" ; // 음수인 경우 파란색으로 설정합니다.
        cell.innerText = cell.innerText.replace('-', '');
    }
  }


