import React from 'react'

function Header () {
  return (
    <>
    <header class="d-flex align-items-center justify-content-between" >
    <div class="mb-1 ml-2 vs-container-fluid vs-header-container">
      <a href="#">
        <img class="" src="./assets/images/logo.png" width="40" height="20" alt="Logo"/>
      </a>
    </div>
    <div class="d-block d-md-none">
      <nav class="navbar navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <ul class="collapse" id="navbarToggleExternalContent">
          <li class="nav-item">
            <a class="nav-link" href="#">Definiciones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Vista Tarjetas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Costo Beneficio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Base Datos</a>
          </li>
        </ul>
    </div>
    <div class="d-none d-md-block">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="#">Definiciones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Vista Tarjetas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Costo Beneficio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Base Datos</a>
        </li>
      </ul>
    </div>
  </header> 
    </>
  )
}

export default Header

