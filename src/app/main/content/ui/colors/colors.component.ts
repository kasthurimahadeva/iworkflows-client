import { Component, OnInit } from '@angular/core';
import { MatColors } from '../../../../core/matColors';

@Component({
    selector   : 'fuse-colors',
    templateUrl: './colors.component.html',
    styleUrls  : ['./colors.component.scss']
})
export class FuseColorsComponent implements OnInit
{
    colors: {};
    selectedColor: string;
    selectedColorDefaultValue: string;

    constructor()
    {
        this.colors = MatColors.all;
        this.updateSelectedColor('primary');
    }

    ngOnInit()
    {

    }

    selectColor(selected)
    {
        this.updateSelectedColor(selected.tab.textLabel);
    }

    private updateSelectedColor(colorName)
    {
        this.selectedColor = colorName;
        this.selectedColorDefaultValue = MatColors.getColor(this.selectedColor)[500];
    }
}
