import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

}
// script.ts
function updateInfo() {
  const infoElement = document.getElementById("info");
  if (infoElement) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    infoElement.textContent = `Última atualização em ${formattedDate}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const updateButton = document.getElementById("updateButton");
  if (updateButton) {
    updateButton.addEventListener("click", updateInfo);
  }
});

