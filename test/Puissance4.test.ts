import { Puissance4 } from "../src/Puissance4"

describe('class Puissance4',()=>{

    let instance:Puissance4;
    
    beforeEach(()=>{
        instance = new Puissance4();
    })

    it('class exist', ()=>{
        expect(instance).toBeTruthy();
    });

    it('grid exist', ()=>{
        expect(instance.grid).toEqual([
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
            [null, null, null, null, null,null, null],
        ]); 
    });

    it('set player', ()=>{
        expect(instance.player).toEqual('Jaune');
    });
    
    it('test play set color', ()=>{
        expect(instance.play(1,2)).toEqual('Jaune');
        expect(instance.play(1,3)).toEqual('Rouge');
        expect(instance.play(1,4)).toEqual('Jaune');
        expect(instance.play(1,5)).toEqual('Rouge');
        expect(instance.play(1,6)).toEqual('Jaune');
    });

    it('test play free',()=>{
        instance.play(1,2);
        expect(()=>{instance.play(1,2)}).toThrowError("case not free");
    });

    it('test alternate', ()=>{
        const player = 'jaune';
        expect(instance.alternate(player)).toEqual('Rouge');
    });
    it('test free case exist', ()=>{
        expect(instance.verifCase(1,2)).toEqual(true);
    });
    it('test free case not exist', ()=>{
        instance.play(1,2);
        expect(instance.verifCase(1,2)).toEqual(false);
    })
})