import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Input()
  markdownContent = '';

  @Input()
  placeholder: string = 'Creating formatted text...';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // inputTextArea(content: string) {
  //   // console.log(content);
  //   this.markdownContent = content;
  //   this.changeMarkdown.emit(content);
  // }

}
