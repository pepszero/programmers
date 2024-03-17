function solution(progresses, speeds) {
    const finishAt = progresses.map((v,i) => Math.ceil((100-v) / speeds[i]));
    const result = [];

    let p = 0;
    while(true) {
        const nextP = finishAt.findIndex(v => v > finishAt[p], p+1);
        if (nextP === -1) {
            result.push(finishAt.length - p);
            break;
        }
        result.push(nextP - p);
        p = nextP;
    }
    
        
    return result;
}
