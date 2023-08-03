// spread operator는 symbol에 대한 이해가 필요하다.

const job = {
    job: "senior developer",
    career: "10",
    ageGroup: {
        group: 30,
        person: {
            name: "ingoo",
            id: "web7722",
        },
    },
}

// job 객체의 메모리 구조 그리기
console.dir(job)

const naming = {...job}
// 단계적 복사 (주소를 타고타고 들어가서 다 바꿔줘야 된다.)
naming.ageGroup = {...job.ageGroup}
naming.ageGroup.person = {...job.ageGroup.person}

naming.ageGroup.person.name = "pikachu"
//원본을 훼손하지 않도록 "이름"만의 주소를 갖게 한다.
// key값은 같지만 각 property의 메모리 주소는 다르다.
// 하위 객체의 name을 넣어준다 -> 깊은 복사
console.dir(naming)

console.log(job === naming)
console.log(job.ageGroup === naming.ageGroup)
console.log(job.ageGroup.person === naming.ageGroup.person)
// 빈 객체 새로 생성 -> naming과 그 하위 객체들에 넣음 
// -> 메모리 주소가 다르다 -> 동일하지 않음


const obj = {
    text: "hello",
    text: "world"
}

// key 값이 같으면 마지막 값으로 덮어쓰기 된다.
