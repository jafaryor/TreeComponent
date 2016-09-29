import {Component, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import {TreeModel} from "../shared/tree-model/tree-model";

@Component({
    moduleId: module.id,
    selector: 'node',
    templateUrl: 'node.component.html',
    styleUrls: ['node.component.css']
})
export class NodeComponent implements OnDestroy {
    @Input() node: TreeModel;
    @Input() level: number;
    @Output() remove: EventEmitter<TreeModel> = new EventEmitter<TreeModel>();
    showChildren: boolean = false;

    constructor() {}

    toggle() {
        if(this.node.children && this.node.children.length>0) this.showChildren = !this.showChildren;
    }

    removeNode(event?: TreeModel) {
        if(event) this.node.children.splice(this.node.children.indexOf(event), 1);
        else this.remove.emit(this.node);
    }

    ngOnDestroy() {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = null;
                delete this[key];
            }
        }
    }

}
