export class Puissance4{
   

    public grid:string[][];
    public player:string;

    constructor(){
        this.grid = [
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
        ];
        this.player = 'Jaune';
    }

    play(x: number, y: number): string {
        
        if(this.verifCase(x,y)){
            this.grid[x][y] = this.player;
            this.alternate(this.player);

            return this.grid[x][y];
        }else{
            throw new Error("case not free");
        }
    }

    alternate(player:string): string{
        this.player = this.player === 'Jaune' ? 'Rouge':'Jaune';    
        return this.player;
    }

    verifCase(x: number, y: number): boolean{
        if(this.grid[x][y] !== null){
            return false;
        }else{
            return true;
        }
    }

    verifCoupHorizontal():boolean{
        
        for (const elem of this.grid) {
            let idTab = [];
            let count = 0;

            elem.filter()              
        }

        return true;
    }
}