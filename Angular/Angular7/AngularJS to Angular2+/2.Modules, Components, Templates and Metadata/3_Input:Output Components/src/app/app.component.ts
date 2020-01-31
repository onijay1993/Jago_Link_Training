import { Component } from '@angular/core';

@Component({
  selector: 'story-app',
  template: `
  <div>
    <h1>Storyline Tracker</h1>
    <h3>Component Demo</h3>
    <story-characters [storyId]="7" (changed)=changedOut($event)></story-characters>
  </div>
  `
})

export class AppComponent {
  changedOut(changedCharacter: any) {
    if (changedCharacter) {
      console.log(`Event Emitter said you selected ${changedCharacter.name}`);
    }
  }
}
