import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TreeComponent } from './tree.component';
import {NodeComponent} from "../node/node.component";
import {TreeContainerComponent} from "../tree-container/tree-container.component";

@NgModule({
  imports: [SharedModule],
  declarations: [TreeComponent, NodeComponent, TreeContainerComponent],
  exports: [TreeContainerComponent],
  providers: []
})
export class TreeModule { }
