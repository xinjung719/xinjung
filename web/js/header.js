document.getElementById("header").innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgba(177, 177, 177, 0.14)">
        <div class="container-md">
            <a class="navbar-brand" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/index.html">
           <img src="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/img/logo.png" alt="欣君的網站" width="70">
       </a>
            <a class="navbar-toggler btn justify-content-end" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <span class="navbar-toggler-icon"></span>
            </a>
            <div class="collapse navbar-collapse nav justify-content-end">
                <ul class="navbar-nav mb-2 mb-lg-0  gap-3">
                    <li class="nav-item btn p-0">
                        <a class="nav-link active" aria-current="page" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/index.html" role="button">首頁</a>
                    </li>
                    <li class="nav-item dropdown btn p-0">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            APP 設計
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: rgba(255, 255, 255, 0.79);">
                            <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/app.html">APP 設計</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/apppages/argame.html">搶救實驗室</a></li>
                            <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/apppages/pmtree.html">PM TREE</a></li>
                            <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/apppages/trash.html">TRASH+</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown btn p-0">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Web 製作
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: rgba(255, 255, 255, 0.79);">
                            <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/web.html">Web 製作</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/webpages/think.html">微想實驗室 - 官網</a></li>
                            <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/webpages/medicalindex.html">診所預約服務系統</a></li>
                            <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/webpages/login.html">Game-事前預約</a></li>
                        </ul>
                    </li>
                    <li class="nav-item btn p-0">
                        <a class="nav-link active" aria-current="page" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/art.html" role="button">美術設計</a>
                    </li>
                    <li class="nav-item btn p-0">
                        <a class="nav-link active" aria-current="page" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/about.html" role="button">關於我</a>
                        </li>
                </ul>
            </div>
            
        </div>
    </nav>
    <nav class="navbar p-0">
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="background-color: rgba(8, 63, 74, 0.67)">
                <div class="offcanvas-header" style="background-color: rgb(31, 72, 90)">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                        <img src="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/img/logo.png" alt="欣君的網站" width="70">
                    </h5>
                    <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body ">
                    <ul class="navbar-nav justify-content-end flex-grow-1 ">
                        <div class="d-grid gap-2">
                            <a class="btn btn-outline-light" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/index.html" role="button">首頁</a>
                                 <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">APP 設計
                                 </button>
                                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                     <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/app.html">APP 設計</a>
                                     </li>  <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/apppages/argame.html">搶救實驗室</a>
                                     </li>  <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/apppages/pmtree.html">PM TREE</a>
                                     </li>  <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/apppages/trash.html">TRASH+</a>
                                     </li>
                                 </ul>
                            <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown">Web 製作
                                 </button>
                                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                     <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/web.html">Web 製作</a>
                                     </li>  
                                     <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/webpages/think.html">微想實驗室 - 官網</a>
                                     </li>  
                                     <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/webpages/medicalindex.html">診所預約服務系統</a>
                                     </li>
                                     <li><hr class="dropdown-divider"></li>
                                     <li><a class="dropdown-item" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/webpages/login.html">Game-事前預約</a>
                                     </li> 
                                 </ul>
                            <a class="btn btn-outline-light" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/art.html" role="button">美術設計</a>
                            <a class="btn btn-outline-light" href="https://raw.githubusercontent.com/xinjung719/xinjung/gh-pages/web/about.html" role="button">關於我</a>
                        </div>
                    </ul>
                </div>
            </div>
    </nav>`;