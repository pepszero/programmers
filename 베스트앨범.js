function solution(genres, plays) {
  return makeAlbum(genres, plays);
}

function makeAlbum(genres, plays) {
  // 장르별 재생횟수 저장, playCount[장르]:해당 장르가 재생된 총 횟수
  const playCount = {};
  for (let i = 0; i < genres.length; i++) {
    playCount[genres[i]] = (playCount[genres[i]] ?? 0) + plays[i];
  }

  // 고유번호를 모은 albumNo 생성 : [0,1,2,3,4...]
  const albumNo = Array(genres.length)
    .fill(0)
    .map((v, i) => i);

  // 조건에 맞게 정렬
  albumNo.sort((a, b) => {
    var byGenre = playCount[genres[b]] - playCount[genres[a]];
    if (byGenre !== 0) return byGenre; // 장르 재생횟수 내림차순 정렬. 재생횟수가 같다면 다음 정렬조건 진행

    var byPlayed = plays[b] - plays[a];
    if (byPlayed !== 0) return byPlayed; // 재생횟수 내림차순 정렬. 재생횟수가 같다면 다음 정렬조건 진행

    var byAlbumNo = a - b;
    return byAlbumNo; // 고유번호 오름차순 정렬
  });

  // 장르별 2곡까지만 저장할 수 있음. recordCount[장르]:해당 장르로 저장된 곡 개수 (recordCount[장르] <= 2)
  const recordCount = {};
  const result = [];
  for (let i = 0; i < albumNo.length; i++) {
    const genre = genres[albumNo[i]];
    if (recordCount[genre] >= 2) continue;
    recordCount[genre] = (recordCount[genre] ?? 0) + 1;
    result.push(albumNo[i]);
  }

  return result;
}
