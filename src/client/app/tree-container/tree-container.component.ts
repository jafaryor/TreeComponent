import {Component, OnInit, OnDestroy} from '@angular/core';
import {TreeModel} from "../shared/tree-model/tree-model";


@Component({
    moduleId: module.id,
    selector: 'tree-container',
    template: `<tree [tree]="tree"></tree>`
})
export class TreeContainerComponent implements OnInit, OnDestroy {
    tree: TreeModel[] = [];

    constructor() {}

    ngOnInit() {
      // Change the data you pass
      this.tree = [
        {
          title: "2000",
          children: [
            { title: "Jan" },
            { title: "Feb" },
            {
              title: "Mar",
              children: [
                { title: "1 Jan" },
                {
                  title: "5 Jan",
                  children: [
                    { title: "4 Jan" },
                    {
                      title: "5 Jan",
                      children: [
                        { title: "2 Jan" },
                        { title: "3 Jan" },
                        { title: "2 Jan" },
                        { title: "4 Jan" },
                        { title: "2 Jan" },
                      ]
                    },
                    { title: "16 Jan" }
                  ]
                },
                { title: "15 Jan" }
              ]
            },
            { title: "Apr" }
          ]
        }, {
          title: "2001",
          children: [
            { title: "Jan", children: [
              { title: "1 Jan" },
              { title: "5 Jan" },
              { title: "15 Jan" }
            ]
            },
            { title: "Feb" },
            { title: "Mar" },
            { title: "Apr" }
          ]
        }, {
          title: "2002",
          children: [
            { title: "May" },
            { title: "Jun" },
            { title: "Sep", children: [
              { title: "1 Sep" },
              { title: "5 Sep" },
              { title: "15 Sep" }
            ]
            },
            { title: "Dec" }
          ]
        }, {
          title: "Dec"
        }
      ];
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
