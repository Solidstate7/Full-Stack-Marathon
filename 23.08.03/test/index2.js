// 재귀 함수
// 특정 객체에서 몇 번 반복될지 모를 때
// 디렉토리 파악할 때

const orb = {
    job: "senior developer",
    career: "10",
    ageGroup: {
      group: 30,
      person: {
        name: "ingoo",
        id: "web7722",
      },
    },
  };

const solution = (obj) => {
    if (typeof obj !== "object") return obj

    const result = {}
    const keys = Object.keys(obj) // return type: array
    for (let i = 0; i<keys.length; i++) {
        solution(obj[keys[i]])
        result[keys[i]] = solution[obj[keys[i]]]
    }
    return result
}

const result = solution(orb)
console.log(result)

// 금 Class, WSL 설치 
// 월 Runtime
// 화 비동기 -> callback, promise