import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './Components/Battle/battle.component';
import { PlayerState } from './State/player.state';
import { NgxsModule } from '@ngxs/store';
import { EnemyState } from './State/enemy.state';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      PlayerState,
      EnemyState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, BattleComponent]
})
export class AppModule { }
