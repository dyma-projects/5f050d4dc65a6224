import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  compteur: number = 0;
  constructor() {}
  @Output() changementCompteur = new EventEmitter();
  ngOnInit() {}

  public incrementer(): void {
    this.compteur++;
    this.changementCompteur.emit({
      value: this.compteur,
    });
  }

  public decrementer(): void {
    this.compteur--;
    this.changementCompteur.emit({
      value: this.compteur,
    });
  }
}
