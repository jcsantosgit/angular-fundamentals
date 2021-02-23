import { Pipe } from '@angular/core';

@Pipe({
    name: 'myReplace'
})
export class ReplacePipe {
    transform(value: string, char: string, valueToReplace: string){
        return value.replace(char, valueToReplace);
    }
}