import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { NgbPanel, NgbPanelContent, NgbPanelHeader, NgbPanelTitle, NgbPanelToggle } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  exports: [
    NgbAccordion,
    NgbPanel,
    NgbPanelContent,
    NgbPanelHeader,
    NgbPanelTitle,
    NgbPanelToggle,
    NgbCarousel,
    NgbSlide
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class BootstrapModule { }
