class Boram {

  constructor() {}

  pigon() {
    console.log("피곤해~~~~~");
  }

  setPigon(info) {
    this.pigon = () => console.log(`${info.msg}${info.symbol.repeat(info.num)}`)
  }
    }

const kim = new Boram()

kim.pigon()

const textinfo = {
  msg:"피고내",
  symbol:"$",
  num:8,
}

kim.setPigon(textinfo)

kim.pigon()
