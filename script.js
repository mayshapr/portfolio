fetch("data.json")
  .then(response => response.json())
  .then(data => {

    document.getElementById("name").textContent = data.name
    document.getElementById("role").textContent = data.role
    document.getElementById("about").textContent = data.about

    const container = document.getElementById("projects")

    data.projects.forEach(project => {

      const div = document.createElement("div")

      div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `

      container.appendChild(div)

    })

  })
