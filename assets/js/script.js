document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner tous les boutons de réservation
  const reserveButtons = document.querySelectorAll(".btn-reserve")

  //  Ecouteur d'événement sur chaque bouton de réservation
  reserveButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Récupérer le nom du gâteau associé
      const cakeName = button
        .closest(".carousel-caption")
        .querySelector("h5").innerText

      // Affichage console
      console.log(
        `Tentative de réservation pour : ${cakeName} (Index: ${index})`
      )

      // Popup (Alerte)
      alert(
        `🧁 Gourmandise en vue !\n\nVous avez choisi : ${cakeName}.\nNotre équipe prépare votre réservation. À très vite à la boulangerie !`
      )

      // effet visuel sur le bouton
      const originalText = button.innerHTML
      button.innerHTML = "<i class='fas fa-check me-2'></i>C'est noté !"
      button.classList.replace("btn-reserve", "btn-success")

      setTimeout(() => {
        button.innerHTML = originalText
        button.classList.replace("btn-success", "btn-reserve")
      }, 3000)
    })
  })
})
