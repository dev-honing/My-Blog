// app.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 'client/dist' 디렉토리에서 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/dist')));

// API 라우트 정의 (필요한 경우)
// app.use('/api', yourApiRouter);

// React 앱 제공을 위한 catch-all 라우트
app.get('*', (req, res) => { // 와일드 카드 설정을 통해 어느 경로를 입력하든 index.html을 제공함
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
