console.log("SlotMachine");

getRandomArbitrary = () => {

  const arrRandom = Math.round(Math.random() * 7);

  return arrRandom;
}

const generateBoolean = () => getRandomArbitrary() > 3

class SlotMachine {

  constructor(name) {
    this.coins = 0;
    this.name = name;
  }

  play() {
    this.coins++;

    const random1 = generateBoolean();
    const random2 = generateBoolean();
    const random3 = generateBoolean();
    console.log(this.name);
    console.log(`Creditos o coins:${this.coins}`);


    console.log("Ruleta ", random1, random2, random3);
    if (random1 && random2 && random3) {
      console.log(`Congratulations!!!. You won ${this.coins}  coins!!
      `);
      this.coins = 0;
    }
    else {
      console.log(`Good luck next time!!
      `)
    }
  }


}

const machine1 = new SlotMachine();
const machine2 = new SlotMachine();

machine1.name = "Ruleta de la suerte";
machine2.name = "Ruleta 2";
machine1.play();
machine1.play();
machine1.play();
machine2.play();
machine2.play();
machine2.play();