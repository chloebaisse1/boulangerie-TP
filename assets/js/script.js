document.addEventListener("DOMContentLoaded", () => {
  const reserveButtons = document.querySelectorAll(".btn-action-reserver")

  console.log("Boutons trouvés :", reserveButtons.length)

  reserveButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Empêche rechargement
      e.preventDefault()

      const caption = button.closest(".carousel-caption")
      const productName = caption.querySelector("h5").innerText

      console.log("Clic sur : " + productName)

      // Alerte personnalisée
      alert(
        `🧁 Gourmandise en vue !\n\n` +
          `Vous avez choisi : ${productName}.\n` +
          `Notre équipe prépare votre réservation. À très vite à la boulangerie !`
      )

      // Animation du bouton
      const originalContent = button.innerHTML
      button.innerHTML = "<i class='fas fa-check me-2'></i>C'est noté !"
      button.classList.add("btn-success")

      setTimeout(() => {
        button.innerHTML = originalContent
        button.classList.remove("btn-success")
      }, 3000)
    })
  })
})
