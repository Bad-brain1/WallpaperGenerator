import { Pipe, PipeTransform } from '@angular/core';
import { Image } from './main-page/ImgInteface';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(images: Image[], searchStr: string): Image[] {
        if (!images || !searchStr) {
            return images;
        }
        return images.filter(image =>
            image.category.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    }

}