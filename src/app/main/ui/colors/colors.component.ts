import { Component, OnInit } from '@angular/core';
import { MatColors } from '../../../core/matColors';
import { MdTab } from '@angular/material';

@Component({
    selector   : 'fuse-colors',
    templateUrl: './colors.component.html',
    styleUrls  : ['./colors.component.scss']
})
export class ColorsComponent implements OnInit
{
    colors: {};
    selectedColor: string;
    selectedColorDefaultValue: string;

    constructor()
    {
        this.colors = MatColors.all;
        this.updateSelectedColor('red');
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
