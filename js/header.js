document.getElementById("header").innerHTML = `<nav class="navbar navbar-dark" style="background-color: rgba(177, 177, 177, 0.14)">
        <div class="container-fluid">
            <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon"></span>
            </a>
            <a class="navbar-brand" href="/xinjung/index.html">
                <img src="/xinjung/img/logo.png" alt="欣君的網站" width="70">
            </a>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="background-color: rgba(8, 63, 74, 0.67)">
                <div class="offcanvas-header" style="background-color: rgb(31, 72, 90)">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                        <img src="/xinjung/img/logo.png" alt="欣君的網站" width="70">
                    </h5>
                    <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body ">
                    <ul class="navbar-nav justify-content-end flex-grow-1 ">
                        <div class="d-grid gap-2">
                            <a class="btn btn-outline-light" href="/xinjung/index.html" role="button">首頁</a>
                                 <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">APP 設計
                                 </button>
                                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                     <li><a class="dropdown-item" href="/xinjung/app.html">APP 設計</a>
                                     </li>  <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="/xinjung/apppages/argame.html">搶救實驗室</a>
                                     </li>  <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="/xinjung/apppages/pmtree.html">PM TREE</a>
                                     </li>  <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="/xinjung/apppages/trash.html">TRASH+</a>
                                     </li>
                                 </ul>
                            <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown">Web 製作
                                 </button>
                                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                     <li><a class="dropdown-item" href="/xinjung/web.html">Web 製作</a>
                                     </li>  
                                     <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="/xinjung/webpages/think.html">微想實驗室 - 官網</a>
                                     </li>  
                                     <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="/xinjung/webpages/medicalindex.html">診所預約服務系統</a>
                                     </li>  
                                 </ul>
                            <a class="btn btn-outline-light" href="/xinjung/art.html" role="button">美術設計</a>
                            <a class="btn btn-outline-light" href="/xinjung/about.html" role="button">關於我</a>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    </nav>`;