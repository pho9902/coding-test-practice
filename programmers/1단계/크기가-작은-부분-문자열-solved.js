function solution(t, p) {
    const answer = [];
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
       answer.push(t.substr(i, p.length));
    }
    
    return answer.filter(el => el <= p).length;
}