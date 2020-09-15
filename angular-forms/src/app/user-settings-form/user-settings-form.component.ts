import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/IUserSettings';

@Component({
  selector: 'af-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: 'André',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Lifetime',
    notes: 'Here are some notes...',
  };

  userSettings: IUserSettings = { ...this.originalUserSettings };

  constructor() {}

  ngOnInit(): void {}
}
