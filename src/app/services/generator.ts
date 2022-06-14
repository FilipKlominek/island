export class Island {

  generate(height: number, width: number): number[][] {

    let island = new Array(height);

    for (let y = 0; y < island.length; y++) {
      island[y] = new Array(width);
    }

    for (let y = 0; y < island.length; y++) {
      for (let x = 0; x < island[y].length; x++) {
        island[y][x] = 0;
      }
    }

    /*
        let midY = island.length / 2;
        let midX = island[0].length / 2;

        let pY = 0.0;
        let pX = 0.0;

        let probability = 0;

        for (let y = 0; y < island.length; y++) {
          for (let x = 0; x < island[y].length; x++) {
            pY = Math.abs(midY - y) / midY;
            pX = Math.abs(midX - x) / midX;

            console.log(pY)
            console.log(pX)

            probability = pY * pX;

            if (probability > Math.random()) island[y][x] = 1;
          }
        }
    */


    island[island.length / 2][island[0].length / 2] = 1;


    return island;
  }

  get(height: number, width: number): number[][] {
    return this.generate(height, width);
  }
}

