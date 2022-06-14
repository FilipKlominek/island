export class Island {

  generate(height: number, width: number): number[][] {

    let island = new Array(height);

    for (let i = 0; i < island.length; i++) {
      island[i] = new Array(width);
    }

    for (let i = 0; i < island.length; i++) {
      for (let j = 0; j < island[i].length; j++) {
        island[i][j] = 0;
      }
    }

    let midH = island.length / 2;
    let midW = island[0].length / 2;

    let probability = 0;

    for (let i = 0; i < island.length; i++) {
      for (let j = 0; j < island[i].length; j++) {

      }
    }


    return island;
  }

  get(height: number, width: number): number[][] {
    return this.generate(height, width);
  }
}

