// WIP: 새로운 보안 기능을 개발 중입니다... (아직 커밋하기엔 일러요!)
// 로그인 기능을 담당하는 파일입니다.
function login(username, password) {
    if (username === 'admin' && password === '1234') {
        return true;
    }
    return false;
}

console.log('Login module initialized.');
console.log('Login module ready.');
