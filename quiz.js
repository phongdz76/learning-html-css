const questions = [
    // 35 Câu HTML
    { question: "1. HTML là chữ viết tắt của gì?", options: ["HyperText Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"], answer: 0 },
    { question: "2. Thẻ nào dùng để khai báo trang web dùng chuẩn HTML5 hiện đại?", options: ["<html5>", "<!DOCTYPE html>", "<doctype html5>", "<html>"], answer: 1 },
    { question: "3. Phần nào của HTML chứa các cài đặt ngầm (giống như não bộ) mà người dùng không nhìn thấy?", options: ["<body>", "<main>", "<head>", "<footer>"], answer: 2 },
    { question: "4. Thẻ nào báo cho máy tính biết ta dùng bảng mã UTF-8 để hiển thị tiếng Việt có dấu?", options: ["<meta name='utf-8'>", "<meta charset='UTF-8'>", "<character set='utf-8'>", "<html lang='vi-UTF-8'>"], answer: 1 },
    { question: "5. Thẻ nào giúp trang web tự động co giãn vừa vặn với màn hình điện thoại?", options: ["<meta name='mobile'>", "<meta name='viewport'>", "<meta name='responsive'>", "<meta name='screen'>"], answer: 1 },
    { question: "6. Thẻ nào xác định tên trang web hiển thị trên thẻ (tab) của trình duyệt?", options: ["<head>", "<title>", "<name>", "<header>"], answer: 1 },
    { question: "7. Thẻ nào dùng để tải và liên kết file CSS (ví dụ: style.css) vào file HTML?", options: ["<css>", "<script>", "<style>", "<link rel='stylesheet'>"], answer: 3 },
    { question: "8. Tất cả nội dung bạn nhìn thấy trên màn hình trang web đều nằm trong thẻ nào?", options: ["<head>", "<body>", "<main>", "<html>"], answer: 1 },
    { question: "9. Thẻ nào là thẻ tiêu đề lớn nhất trong HTML (chữ to và in đậm)?", options: ["<h6>", "<header>", "<h1>", "<title>"], answer: 2 },
    { question: "10. Thẻ nào dùng để chia khối, gom nhóm các phần tử lại với nhau (như những chiếc hộp)?", options: ["<span>", "<div>", "<section>", "<block>"], answer: 1 },
    { question: "11. Thẻ nào dùng cho các phần tử nhỏ nằm trên cùng một dòng (inline)?", options: ["<div>", "<p>", "<br>", "<span>"], answer: 3 },
    { question: "12. Thẻ nào mang ý nghĩa là một 'chương' hoặc một 'khu vực' riêng biệt của trang web?", options: ["<section>", "<div>", "<area>", "<part>"], answer: 0 },
    { question: "13. Thuộc tính nào trong HTML dùng để định nghĩa một định danh duy nhất cho phần tử?", options: ["class", "id", "name", "tag"], answer: 1 },
    { question: "14. Thuộc tính nào được dùng để xác định nhiều phần tử có chung kiểu dáng/chức năng?", options: ["id", "type", "class", "style"], answer: 2 },
    { question: "15. Thẻ nào dùng để chèn hình ảnh vào trang web?", options: ["<picture>", "<image>", "<img>", "<src>"], answer: 2 },
    { question: "16. Thuộc tính nào của thẻ <img> dùng để chỉ định đường dẫn tới ảnh?", options: ["href", "link", "src", "path"], answer: 2 },
    { question: "17. Thuộc tính nào của thẻ <img> cung cấp văn bản thay thế khi ảnh bị lỗi (hoặc cho trình đọc màn hình)?", options: ["title", "desc", "alt", "text"], answer: 2 },
    { question: "18. Thẻ nào tạo siêu liên kết (hyperlink) để chuyển sang trang khác?", options: ["<link>", "<a>", "<href>", "<nav>"], answer: 1 },
    { question: "19. Thuộc tính nào của thẻ <a> dùng để chứa địa chỉ (URL) trang web đích?", options: ["src", "link", "href", "target"], answer: 2 },
    { question: "20. Thẻ nào dùng để tạo danh sách không thứ tự (dấu chấm tròn)?", options: ["<ul>", "<ol>", "<li>", "<dl>"], answer: 0 },
    { question: "21. Thẻ nào dùng để tạo danh sách có thứ tự (số 1, 2, 3)?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: 1 },
    { question: "22. Thẻ nào dùng để định nghĩa một mục con bên trong danh sách (ul hoặc ol)?", options: ["<item>", "<li>", "<list-item>", "<ul>"], answer: 1 },
    { question: "23. Thẻ nào dùng để tạo một bảng dữ liệu (Table)?", options: ["<grid>", "<form>", "<table>", "<board>"], answer: 2 },
    { question: "24. Thẻ nào dùng để tạo một hàng trong bảng?", options: ["<td>", "<th>", "<tr>", "<row>"], answer: 2 },
    { question: "25. Thẻ nào dùng để tạo một ô dữ liệu (cột) bình thường trong bảng?", options: ["<td>", "<th>", "<tr>", "<cell>"], answer: 0 },
    { question: "26. Thẻ nào dùng để tạo ô tiêu đề trong bảng (thường in đậm và căn giữa)?", options: ["<td>", "<tr>", "<thead>", "<th>"], answer: 3 },
    { question: "27. Thẻ nào tạo ra một đoạn văn bản mới (Paragraph)?", options: ["<text>", "<p>", "<br>", "<div>"], answer: 1 },
    { question: "28. Thẻ nào dùng để ngắt dòng văn bản ngay lập tức?", options: ["<break>", "<hr>", "<br>", "<enter>"], answer: 2 },
    { question: "29. Thẻ nào tạo ra một đường kẻ ngang trên trang web?", options: ["<line>", "<br>", "<hr>", "<border>"], answer: 2 },
    { question: "30. Để tạo một biểu mẫu (form) nhập liệu cho người dùng, ta dùng thẻ nào?", options: ["<input>", "<form>", "<fieldset>", "<submit>"], answer: 1 },
    { question: "31. Thẻ nào dùng để tạo một ô nhập văn bản (text input)?", options: ["<input type='text'>", "<text>", "<textbox>", "<input type='string'>"], answer: 0 },
    { question: "32. Để gom nhóm nhiều nút 'radio' lại với nhau (chỉ chọn 1), ta gán chung thuộc tính gì?", options: ["id", "class", "value", "name"], answer: 3 },
    { question: "33. Thẻ HTML nào dùng để nhúng một đoạn video vào trang web?", options: ["<movie>", "<media>", "<video>", "<iframe>"], answer: 2 },
    { question: "34. Thẻ nào dùng để hiển thị chữ in nghiêng?", options: ["<b>", "<i>", "<mark>", "<bold>"], answer: 1 },
    { question: "35. Thẻ nào được dùng để tạo một nút bấm có thể click được?", options: ["<click>", "<press>", "<button>", "<btn>"], answer: 2 },
    
    // 15 Câu CSS
    { question: "36. CSS là viết tắt của từ gì?", options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], answer: 2 },
    { question: "37. Ký tự nào trong CSS có nghĩa là 'chọn tất cả mọi thứ'?", options: ["#", ".", "*", "&"], answer: 2 },
    { question: "38. Thuộc tính CSS nào dùng để thay đổi màu chữ?", options: ["text-color", "color", "font-color", "background-color"], answer: 1 },
    { question: "39. Thuộc tính CSS nào dùng để thay đổi màu nền?", options: ["color", "bg-color", "background-color", "background-image"], answer: 2 },
    { question: "40. Làm thế nào để chọn một phần tử có id là 'header' trong CSS?", options: [".header", "#header", "*header", "header"], answer: 1 },
    { question: "41. Làm thế nào để chọn tất cả các phần tử có class là 'menu' trong CSS?", options: ["#menu", "menu", ".menu", "*menu"], answer: 2 },
    { question: "42. Thuộc tính nào trong CSS dùng để điều chỉnh kích thước chữ?", options: ["text-size", "font-weight", "font-size", "text-style"], answer: 2 },
    { question: "43. Thuộc tính nào căn lề chữ vào chính giữa?", options: ["align: center;", "text-align: center;", "justify-content: center;", "margin: auto;"], answer: 1 },
    { question: "44. Để bỏ dấu gạch chân của một liên kết <a>, ta dùng lệnh CSS nào?", options: ["text-style: normal;", "text-decoration: none;", "underline: none;", "font-weight: normal;"], answer: 1 },
    { question: "45. Để một thẻ div trở thành Flexbox linh hoạt, ta dùng thuộc tính nào?", options: ["align-items: flex;", "position: flex;", "display: flex;", "flex-direction: row;"], answer: 2 },
    { question: "46. Trong Flexbox, thuộc tính nào căn các phần tử vào giữa theo trục chính?", options: ["align-items: center;", "text-align: center;", "vertical-align: middle;", "justify-content: center;"], answer: 3 },
    { question: "47. Thuộc tính nào làm cho các góc của một hình hộp bị bo tròn?", options: ["box-corner", "border-radius", "border-style", "corner-radius"], answer: 1 },
    { question: "48. Lệnh 'box-sizing: border-box;' trong CSS có tác dụng gì quan trọng nhất?", options: ["Tạo viền bao quanh", "Ẩn viền đi", "Đảm bảo viền và padding không làm khối phình to ra", "Làm hộp có dạng 3D"], answer: 2 },
    { question: "49. Thuộc tính z-index trong CSS dùng để làm gì?", options: ["Phóng to phần tử", "Xác định thứ tự lớp chồng lên nhau trong không gian 3 chiều", "Căn chỉnh vị trí Z", "Tạo bóng đổ"], answer: 1 },
    { question: "50. Trạng thái (pseudo-class) nào trong CSS được kích hoạt khi click và giữ chuột vào một nút?", options: [":hover", ":visited", ":focus", ":active"], answer: 3 }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);

const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const questionCount = document.getElementById('questionCount');
const progressBar = document.getElementById('progressBar');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

function initQuiz() {
    loadQuestion(0);
}

function loadQuestion(index) {
    const q = questions[index];
    questionText.textContent = q.question;
    questionCount.textContent = `Câu ${index + 1} / ${questions.length}`;
    
    const progress = ((index) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    optionsGrid.innerHTML = '';

    q.options.forEach((opt, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (userAnswers[index] === i) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.textContent = String.fromCharCode(65 + i) + '. ' + opt;
        optionDiv.onclick = () => selectOption(i);
        optionsGrid.appendChild(optionDiv);
    });

    btnPrev.disabled = index === 0;
    if (index === questions.length - 1) {
        btnNext.textContent = 'Hoàn thành';
        btnNext.disabled = userAnswers[index] === null;
    } else {
        btnNext.textContent = 'Tiếp theo';
        btnNext.disabled = userAnswers[index] === null;
    }
}

function selectOption(optionIndex) {
    userAnswers[currentQuestion] = optionIndex;
    
    const options = optionsGrid.children;
    for (let i = 0; i < options.length; i++) {
        if (i === optionIndex) {
            options[i].classList.add('selected');
        } else {
            options[i].classList.remove('selected');
        }
    }

    btnNext.disabled = false;
}

btnNext.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        showResults();
    }
});

btnPrev.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
});

function showResults() {
    score = 0;
    userAnswers.forEach((ans, index) => {
        if (ans === questions[index].answer) {
            score++;
        }
    });

    const finalScore = Math.round((score / questions.length) * 10);
    
    progressBar.style.width = '100%';
    quizScreen.style.display = 'none';
    resultsScreen.classList.add('active');

    document.getElementById('correctCount').textContent = score;
    document.getElementById('scoreText').textContent = finalScore;

    const feedback = document.getElementById('feedbackText');
    if (finalScore >= 9) {
        feedback.textContent = 'Tuyệt vời! Bạn là Master HTML/CSS! 🏆';
        feedback.style.color = 'var(--success)';
    } else if (finalScore >= 7) {
        feedback.textContent = 'Khá tốt! Bạn đã nắm được kiến thức nền tảng! 🌟';
        feedback.style.color = 'var(--primary)';
    } else if (finalScore >= 5) {
        feedback.textContent = 'Tạm ổn! Nhưng hãy xem lại lý thuyết một chút nhé! 📚';
        feedback.style.color = 'var(--text-main)';
    } else {
        feedback.textContent = 'Cố gắng lên! Hãy đọc kỹ trang lý thuyết và thử lại! 💪';
        feedback.style.color = 'var(--danger)';
    }
}

initQuiz();

function showReview() {
    resultsScreen.classList.remove('active');
    document.getElementById('reviewScreen').style.display = 'block';
    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = '';

    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.answer;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'review-item';
        
        const qTitle = document.createElement('div');
        qTitle.className = 'review-question';
        qTitle.innerHTML = `<strong>${q.question}</strong>`;
        itemDiv.appendChild(qTitle);

        q.options.forEach((opt, optIndex) => {
            const optDiv = document.createElement('div');
            optDiv.className = 'review-option';
            
            // Format option text
            let optText = String.fromCharCode(65 + optIndex) + '. ' + opt;
            
            if (optIndex === q.answer) {
                optDiv.classList.add('correct-answer');
                optText += ' ✓ (Đáp án đúng)';
            } else if (optIndex === userAnswer) {
                optDiv.classList.add('wrong-answer');
                optText += ' ✗ (Bạn đã chọn)';
            }

            optDiv.textContent = optText;
            itemDiv.appendChild(optDiv);
        });

        reviewContent.appendChild(itemDiv);
    });
}
