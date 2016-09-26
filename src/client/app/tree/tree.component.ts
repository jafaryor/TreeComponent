import {Component, OnDestroy, Input} from '@angular/core';
import {TreeModel} from "../shared/tree-model/tree-model";

/**
 * This class represents the lazy loaded TreeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css'],
})

export class TreeComponent implements OnDestroy {
  @Input() tree: TreeModel[];

  /**
   * Creates an instance of the TreeComponent with the injected
   * NameListService.
   */
  constructor() {}

  removeNode(node: TreeModel) {
    this.tree.splice(this.tree.indexOf(node), 1);
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
