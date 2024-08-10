import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-tertiary border-bottom">
            <div class="container-fluid">
                <a class="navbar-brand px-2" href="#">To Do App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item px-5">
                            <a class="nav-link" aria-current="page" href="/">Add</a>
                        </li>
                        <li class="nav-item px-5">
                            <a class="nav-link" href="/search">Search</a>
                        </li>
                        <li class="nav-item px-5">
                            <a class="nav-link" href="/viewall">View All</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
