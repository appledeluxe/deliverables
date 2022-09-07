console.log("SlotMachine");

class SlotMachine {

  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    let randomBoolean1 = false;
    let randomBoolean2 = false;
    let randomBoolean3 = false;

    const getRandomArbitrary = () => {

      const arrRandom = Math.round(Math.random() * 7);

      return arrRandom;
    }

    const random1 = getRandomArbitrary();
    const random2 = getRandomArbitrary();
    const random3 = getRandomArbitrary();
    console.log(`Creditos o coins:${this.coins}`);


    if (random1 > 3) {
      randomBoolean1 = true;
    }
    if (random2 > 3) {
      randomBoolean2 = true;
    }
    if (random3 > 3) {
      randomBoolean3 = true;
    }

    console.log("Ruleta ", random1, random2, random3);
    if (randomBoolean1 && randomBoolean2 && randomBoolean3) {
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

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();