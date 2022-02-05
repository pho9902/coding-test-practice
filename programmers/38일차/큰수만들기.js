function solution(number, k) {
    const len = number.length - k;
    let answer = number;
    
    for(let _ = 1; _ <= k; _++) {
        for (let i = 0; i < number.length; i++) {
            if (answer[i] < answer[i + 1]) {
                answer = answer.replace(answer[i], "")
                break;
            }
        }
    }
    return answer.substr(0, len)
}