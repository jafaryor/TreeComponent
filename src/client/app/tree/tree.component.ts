import {Component, OnDestroy, Input, OnInit} from '@angular/core';
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
    node.removed = true;
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
