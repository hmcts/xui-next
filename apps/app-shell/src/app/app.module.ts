import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppShellComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppShellComponent],
})
export class AppModule {}
