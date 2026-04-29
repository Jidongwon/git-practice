// 로그인 기능을 담당하는 파일입니다.
function login(username, password) {
    if (username === 'admin' && password === '1234') {
        return true;
    }
    return false;
}

console.log('Login module loaded.');
