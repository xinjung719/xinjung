document.getElementById("header").innerHTML = `<nav class="navbar navbar-dark" style="background-color: rgba(177, 177, 177, 0.14)">
        <div class="container-fluid">
            <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon"></span>
            </a>
            <a class="navbar-brand" href="#">
                <img src="/xinjung/img/logo.png" alt="欣君的網站" width="70">
            </a>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="background-color: rgba(255, 255, 255, 0.8)">
                <div class="offcanvas-header" style="background-color: rgb(31, 72, 90)">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                        <img src="/xinjung/img/logo.png" alt="欣君的網站" width="70">
                    </h5>
                    <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body ">
                    <ul class="navbar-nav justify-content-end flex-grow-1 ">
                        <div class="d-grid gap-2">
                            <a class="btn btn-outline-secondary" href="/xinjung/index.html" role="button">首頁</a>
                            <a class="btn btn-outline-secondary" href="/xinjung/app.html" role="button">APP 設計</a>
                            <a class="btn btn-outline-secondary" href="/xinjung/app.html" role="button">Web製作</a>
                            <a class="btn btn-outline-secondary" href="/xinjung/app.html" role="button">關於我</a>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    </nav>`;