console.log("hello world")

class Job {
    job
    career
    // member variables
    constructor(_job, _career) {
        // this = {}
        this.job = _job
        this.career = _career
        // return = {}
    }
    // method
    move(){ // return undefined (void)
        console.log("hello world!");
    }
}

const inst1 = new Job()
inst1.move()

console.log(console.log("hello world!"))
// "hello world"
// undefined
// call stack 구조
// 출력 vs 반환 구분





const job = new Job("senior", "10")
console.log(job)

const job2 = new Job("1", "2")
console.log(job2)

console.log(job === job2)

const job3 = {
    job: "senior developer",
    career: "10",
    ageGroup: {
      group: 30,
      person: {
        name: "ingoo",
        id: "web7722",
      },
    },
    move: function() {
        console.log("hello world");
    }
  };

  console.log(job3);
  console.log(job3.move)
  job3.move()