
const classExists = document.getElementsByClassName('peepNodesOuter').length > 0;

  let userHasScrolled = false;
  window.onscroll = function (e)
  {
      userHasScrolled = true;
      console.log(userHasScrolled)
      console.log(e.timeStamp)
  }

  if (!classExists) { 
  console.log('loaded script');
    
    
    let peepNodeHTML = document.createElement("div");
    peepNodeHTML.innerHTML = `<div class="peepNodesOuter togglePopup" >
      <div class="peepNodesInner">

        <div class="peepTopBar">
          <img src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTAuOTc4IDE0Ljk5OXYzLjI1MWMwIC40MTItLjMzNS43NS0uNzUyLjc1LS4xODggMC0uMzc1LS4wNzEtLjUxOC0uMjA2LTEuNzc1LTEuNjg1LTQuOTQ1LTQuNjkyLTYuMzk2LTYuMDY5LS4yLS4xODktLjMxMi0uNDUyLS4zMTItLjcyNSAwLS4yNzQuMTEyLS41MzYuMzEyLS43MjUgMS40NTEtMS4zNzcgNC42MjEtNC4zODUgNi4zOTYtNi4wNjguMTQzLS4xMzYuMzMtLjIwNy41MTgtLjIwNy40MTcgMCAuNzUyLjMzNy43NTIuNzV2My4yNTFoOS4wMmMuNTMxIDAgMS4wMDIuNDcgMS4wMDIgMXYzLjk5OGMwIC41My0uNDcxIDEtMS4wMDIgMXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=="
            alt="[icon goes here to toggle up and down (so only peepTopBar will show)]" id="toggler"/>
          <img src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTYuNSAxMS45OTVjMC0xLjI0MiAxLjAwOC0yLjI1IDIuMjUtMi4yNXMyLjI1IDEuMDA4IDIuMjUgMi4yNS0xLjAwOCAyLjI1LTIuMjUgMi4yNS0yLjI1LTEuMDA4LTIuMjUtMi4yNXptLTYuNzUgMGMwLTEuMjQyIDEuMDA4LTIuMjUgMi4yNS0yLjI1czIuMjUgMS4wMDggMi4yNSAyLjI1LTEuMDA4IDIuMjUtMi4yNSAyLjI1LTIuMjUtMS4wMDgtMi4yNS0yLjI1em0tNi43NSAwYzAtMS4yNDIgMS4wMDgtMi4yNSAyLjI1LTIuMjVzMi4yNSAxLjAwOCAyLjI1IDIuMjUtMS4wMDggMi4yNS0yLjI1IDIuMjUtMi4yNS0xLjAwOC0yLjI1LTIuMjV6Ii8+PC9zdmc+"
            alt="[icon goes here to shift left or right]" />
        </div>  <!-- END .peepTopBar -->

        <div class="peepTitleArea">
          PeepNodes - Collection Checklist
        </div>  <!-- END .peepTitleArea -->

        <div class="peepCheckList">

          <div class="peepCheckItem peepProfile">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtMy4xMjMgMC01LjkxNC0xLjQ0MS03Ljc0OS0zLjY5LjI1OS0uNTg4Ljc4My0uOTk1IDEuODY3LTEuMjQ2IDIuMjQ0LS41MTggNC40NTktLjk4MSAzLjM5My0yLjk0NS0zLjE1NS01LjgyLS44OTktOS4xMTkgMi40ODktOS4xMTkgMy4zMjIgMCA1LjYzNCAzLjE3NyAyLjQ4OSA5LjExOS0xLjAzNSAxLjk1MiAxLjEgMi40MTYgMy4zOTMgMi45NDUgMS4wODIuMjUgMS42MS42NTUgMS44NzEgMS4yNDEtMS44MzYgMi4yNTMtNC42MjggMy42OTUtNy43NTMgMy42OTV6Ii8+PC9zdmc+"
              alt="[empty icon circle here, full if collected]" />
            <div class="peepCheckTitle">
              Profile
            </div>
            <button class="peepGet" id="peepGet-1">
              GET
            </button>
          </div>  <!-- END .peepProfile -->

          <div class="peepCheckItem peepOverview">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAydjIwaDI0di0yMGgtMjR6bTEzIDE1aC0xMHYtLjQxN2MtLjAwNC0xLjExMi4wNDQtMS43NDcgMS4zMjQtMi4wNDMgMS40MDMtLjMyNCAyLjc4Ny0uNjEzIDIuMTIyLTEuODQxLTEuOTczLTMuNjM3LS41NjMtNS42OTkgMS41NTQtNS42OTkgMi4wNzcgMCAzLjUyMSAxLjk4NSAxLjU1NiA1LjY5OS0uNjQ3IDEuMjIuNjg4IDEuNTEgMi4xMjEgMS44NDEgMS4yODQuMjk3IDEuMzI4LjkzNiAxLjMyMyAyLjA1N3YuNDAzem04IDBoLTZ2LTJoNnYyem0wLTRoLTZ2LTJoNnYyem0wLTRoLTZ2LTJoNnYyeiIvPjwvc3ZnPg=="
              alt="[empty icon circle here, full if collected]" />
            <div class="peepCheckTitle">
              Overview
            </div>
            <button class="peepGet" id="peepGet-2">
              GET
            </button>
          </div>  <!-- END .peepOverview -->

          <div class="peepCheckItem peepContact">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNzE4IDEwLjUyOGMwIC43OTItLjI2OCAxLjgyOS0uNjg0IDIuNjQyLTEuMDA5IDEuOTgtMy4wNjMgMS45NjctMy4wNjMtLjE0IDAtLjc4Ni4yNy0xLjc5OS42ODctMi41OCAxLjAyMS0xLjkyNSAzLjA2LTEuNjI0IDMuMDYuMDc4em0xMC4yODIgMS40NzJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnMtMTItNS4zNzMtMTItMTIgNS4zNzMtMTIgMTItMTIgMTIgNS4zNzMgMTIgMTJ6bS01LTEuMTk0YzAtMy4yNDYtMi42MzEtNS42MDEtNi4yNTYtNS42MDEtNC45NjcgMC03Ljc0NCAzLjE0OS03Ljc0NCA3LjA3MyAwIDMuNjcyIDIuNDY3IDYuNTE3IDcuMDI0IDYuNTE3IDIuNTIgMCA0LjEyNC0uNzI2IDUuMTIyLTEuMjg4bC0uNjg3LS45OTFjLTEuMDIyLjU5My0yLjI1MSAxLjEzNi00LjI1NiAxLjEzNi0zLjQyOSAwLTUuNzMzLTIuMTk5LTUuNzMzLTUuNDczIDAtNS43MTQgNi40MDEtNi43NTggOS4yMTQtNS4wNzEgMi42MjQgMS42NDIgMi41MjQgNS41NzguNTgyIDcuMDgzLTEuMDM0LjgyNi0yLjE5OS43OTktMS44MjEtLjc1NiAwIDAgMS4yMTItNC40ODkgMS4zNTQtNC45NzVoLTEuMzY0bC0uMjcxLjk1MmMtLjI3OC0uNzg1LS45NDMtMS4yOTUtMS45MTEtMS4yOTUtMi4wMTggMC0zLjcyMiAyLjE5LTMuNzIyIDQuNzgzIDAgMS43My45MTMgMi44MDQgMi4zOCAyLjgwNCAxLjI4MyAwIDEuOTUtLjcyNiAyLjM2NC0xLjM3My0uMyAyLjg5OCA1LjcyNSAxLjU1NyA1LjcyNS0zLjUyNXoiLz48L3N2Zz4="
              alt="[empty icon circle here, full if collected]" />
            <div class="peepCheckTitle">
              Contact
            </div>
            <button class="peepGet" id="peepGet-3">
              GET
            </button>
          </div>  <!-- END .peepContact -->

          <div class="peepCheckItem peepRelationships">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgNC40MTljLTIuODI2LTUuNjk1LTExLjk5OS00LjA2NC0xMS45OTkgMy4yNyAwIDcuMjcgOS45MDMgMTAuOTM4IDExLjk5OSAxNS4zMTEgMi4wOTYtNC4zNzMgMTItOC4wNDEgMTItMTUuMzExIDAtNy4zMjctOS4xNy04Ljk3Mi0xMi0zLjI3eiIvPjwvc3ZnPg=="
              alt="[empty icon circle here, full if collected]" />
            <div class="peepCheckTitle">
              Relationships
            </div>
            <button class="peepGet" id="peepGet-4">
              GET
            </button>
          </div>  <!-- END .peepRelationships -->

          <div class="peepCheckItem peepFriends">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNLjAwMiAyMGg2LjAwMWMtLjAyOC02LjU0MiAyLjk5NS0zLjY5NyAyLjk5NS04LjkwMSAwLTIuMDA5LTEuMzExLTMuMDk5LTIuOTk4LTMuMDk5LTIuNDkyIDAtNC4yMjYgMi4zODMtMS44NjYgNi44MzkuNzc1IDEuNDY0LS44MjUgMS44MTItMi41NDUgMi4yMDktMS40OS4zNDQtMS41ODkgMS4wNzItMS41ODkgMi4zMzNsLjAwMi42MTl6bTIwLjQ5OC03Yy0xLjkzMiAwLTMuNSAxLjU2Ny0zLjUgMy41czEuNTY4IDMuNSAzLjUgMy41IDMuNS0xLjU2NyAzLjUtMy41LTEuNTY4LTMuNS0zLjUtMy41em0xLjUgNGgtMXYxaC0xdi0xaC0xdi0xaDF2LTFoMXYxaDF2MXptLTQuODE0IDNoLTkuMTgzbC0uMDAzLS44MjljMC0xLjY3OS4xMzMtMi42NDkgMi4xMTgtMy4xMDcgMi4yNDMtLjUxOCA0LjQ1OC0uOTgxIDMuMzk0LTIuOTQ1LTMuMTU2LTUuODItLjkwMS05LjExOSAyLjQ4OC05LjExOSA0LjA2IDAgNC44NTcgNC4xMTkgMy4wODUgNy45MDMtMS45NzIuNjA5LTMuNDE5IDIuNDI4LTMuNDE5IDQuNTk3IDAgMS4zOC41ODkgMi42MTkgMS41MiAzLjV6Ii8+PC9zdmc+"
              alt="[empty icon circle here, full if collected]" />
            <div class="peepCheckTitle">
              Friends
            </div>
            <button class="peepGet" id="peepGet-5">
              GET
            </button>
          </div>  <!-- END .peepFriends -->

          <div class="peepCheckItem peepLikes">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptNC4zMDggMTEuNzk0Yy40MTguMDU2LjYzLjMyOC42My42MSAwIC4zMjMtLjI3Ny42Ni0uODQ0LjcwNS0uMzQ4LjAyNy0uNDM0LjMxMi0uMDE2LjQwNi4zNTEuMDguNTQ5LjMyNi41NDkuNTkxIDAgLjMxNC0uMjc5LjY1NC0uOTEzLjc3MS0uMzgzLjA3LS40MjEuNDQ1LS4wMTYuNDc3LjM0NC4wMjYuNDc5LjE0Ni40NzkuMzEyIDAgLjQ2Ni0uODI2IDEuMzMzLTIuNDI2IDEuMzMzLTIuNTAxLjAwMS0zLjQwNy0xLjQ5OS02Ljc1MS0xLjQ5OXYtNC45NjRjMS43NjYtLjI3MSAzLjQ4NC0uODE3IDQuMzQ0LTMuODAyLjIzOS0uODMxLjM5LTEuNzM0IDEuMTg3LTEuNzM0IDEuMTg4IDAgMS4yOTcgMi41NjIuODQ0IDQuMzkxLjY1Ni4zNDQgMS44NzUuNDY4IDIuNDg5LjQ0Mi44ODYtLjAzNiAxLjEzNi40MDkgMS4xMzYuNzQ1IDAgLjUwNS0uNDE2LjY3NS0uNjc3Ljc1NS0uMzA0LjA5NC0uNDQ0LjQwNC0uMDE1LjQ2MXoiLz48L3N2Zz4="
              alt="[empty icon circle here, full if collected]" />
            <div class="peepCheckTitle">
              Likes
            </div>
            <button class="peepGet" id="peepGet-6">
              GET
            </button>
          </div>  <!-- END .peepLikes -->          

        </div>  <!-- END .peepCheckList -->

        <a class="peepDownload" id="peepDownload" style="text-decoration:none;" disabled>
          Download CSV
        </a>

      </div>  <!-- END .peepNodesInner -->
    </div>  <!-- END .peepNodesOuter -->

    <!-- Trigger/Open The Modal -->
    <button id="myBtn">Open Modal</button>

    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <p class="modal-content-p">Download CSV for the data below</p>        
      </div>

    </div>
    `;

    let peepNodeCSS = `
    body {
      /* background-color: #1c1c1c; */
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        overflow: auto;
        position: absolute
    }

    .peepNodesOuter {
      z-index: 2;
      display: block;
      position: fixed;
      height: -webkit-fill-available;
      top: 0;
      bottom: 0;
      padding: 20px;
      box-shadow: 0 0 15px #777;
      color: #fff;
      background: rgb(30, 190, 255);
      background: -moz-linear-gradient(180deg, rgba(30, 190, 255, 1) 0%, rgba(49, 255, 97, 1) 100%);
      background: -webkit-linear-gradient(180deg, rgba(30, 190, 255, 1) 0%, rgba(49, 255, 97, 1) 100%);
      background: linear-gradient(180deg, rgba(30, 190, 255, 1) 0%, rgba(49, 255, 97, 1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1ebeff", endColorstr="#31ff61", GradientType=1);
    }

    #toggler {
      // transition: transform 1s;            
    }
    
    .spinArrow {
      // transition: transform 1s;            
      transform: rotate(180deg);
    }

    .togglePopup {
      right: 0;
    }

     label {
        // display: block;
        padding-left: 15px;
        // text-indent: -15px;
      }
      input {
        width: 15px;
        height: 15px;
        padding: 0;
        margin: 0;
        vertical-align: bottom;
        // position: relative;
        top: -1px;
      }

      .peepNodesInner {
        display: flex;
        flex-direction: column;
      }
      .peepTopBar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 12px 0;
        margin-bottom: 12px;
      }
      .peepTopBar img {
        width: 40px;
      }
      .peepTitleArea {
        font-size: 1.5em;
        font-weight: 700;

      }
      .peepCheckList {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
      }
      .peepCheckItem {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 0;
        position: relative;
      }
        .peepProfile {}
        .peepOverview {}
        .peepContact {}
        .peepRelationships {}
        .peepFriends {}
        .peepLikes {}
        .peepGroups {}
      .peepCheckTitle {
        font-size: 1.2em;
        font-weight: 600;
      }
      .peepCheckItem img {
        width: 25px;
        margin-right: 25px;
      }
      .peepGet {
        border-color: transparent;
        position: absolute;
        right: 0;
        background: #f7f779;
        color: #555;
        font-weight: 600;
        padding: 7px 9px;
        border-radius: 5px;
        cursor: pointer;
      }
      .peepDownload {
        margin-top: 15px;
        background: #1ebeff;
        color: #fff;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 7px;
        padding: 12px 0;
        cursor: not-allowed; /* default */
        text-decoration:none;
      }

      /* The Modal (background) */
    .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 99999; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content/Box */
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 80%; /* Could be more or less, depending on screen size */
    }

    /* The Close Button */
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    `

    let divTag = document.getElementsByTagName('div')[0];
    divTag.parentNode.insertBefore(peepNodeHTML, divTag);

    let addCss = document.createElement('style');
    addCss.innerText = peepNodeCSS;
    document.head.appendChild(addCss)

    const openModalCsv = document.querySelector(".peepDownload");
    const btns = [...document.querySelectorAll('.peepGet')];
    btns.forEach((btn) => {
      btn.addEventListener('click', function(e) {
        const target = e.target as HTMLInputElement;
        console.log(target.id)
        peepClickBtn(target.id)
      });
    })
    


    // button to put the popup in the right
    const toggleThePopup = document.getElementById("toggler"); 
    toggleThePopup.addEventListener("click", (e) => {
      chrome.storage.local.get(["isPopupRight"], (res) => {
        chrome.storage.local.set({
          isPopupRight: !res.isPopupRight
        }, () => {
          (<HTMLElement>document.querySelector(".peepNodesOuter")).classList.toggle("togglePopup");          
          (<HTMLElement>document.querySelector("#toggler")).classList.toggle("spinArrow");          
        })
        
      })
    })


    // btns
    let firedClick = 1;  
    const peepClickBtn = (btn) => {
      switch(btn) {
          case "peepGet-1":
            profileDetailsBtn(btn)         
            break;
          case "peepGet-2":
            overviewDetailsBtn(btn)
            break;
          case "peepGet-3":      
            contactDetailsBtn(btn)    
            break;
          case "peepGet-4":
            relationDetailsBtn(btn)          
            break;
          case "peepGet-5":
            friendsDetailsBtn(btn)
            break;     
          case "peepGet-6":
            likesDetailsBtn(btn)
            break;     
        }
    }

    /*** functions for different buttons */
    const profileDetailsBtn = (btn) => {    
      const profileBtn = document.getElementById("peepGet-1");
  
      if (checkURL("/")){  
        let fbURL = window.location.href.replace(/\/$/, '');  /* remove optional end / */ 
        let fbUSN = fbURL.substring(fbURL.lastIndexOf('/') + 1);   

        let fbUserId; 
        
        if (!window.location.search) {
          // if username is set -- pull the id in friends
          let getUserId = document.querySelector(".xcud41i.x4vbgl9.x1a02dak.x78zum5").getElementsByTagName('a')[0].href;
          console.log(getUserId)
    
          let newURLfromImgs = getUserId.split("=")[2]
          fbUserId = newURLfromImgs.split(".")[1]
          console.log(fbUserId)
        } else {         
          // if username is not set
          fbUserId = fbUSN.split("=")[1]
          console.log(fbUserId)
        }

        let fbIntro = document.querySelector(".x2b8uid.x1l90r2v.xdppsyt") !== null ? document.querySelector(".x2b8uid.x1l90r2v.xdppsyt").textContent : null;
        let fbName = document.querySelector(".x78zum5.xdt5ytf.x1wsgfga.x9otpla").textContent  // need to remove the nickname later on 
        let fbImageData = document.querySelector(".x1jx94hy.x14yjl9h.xudhj91.x18nykt9.xww2gxu.x1iorvi4.x150jy0e.xjkvuk6.x1e558r4 > a").getAttribute("href")
      
        let profileDetails = {
          name : fbName, 
          url : fbURL != null || 'undefined' ? fbURL : null, 
          intro : fbIntro != null || 'undefined' ? fbIntro : null,
          userId : fbUserId != null || 'undefined' ? fbUserId : null,
          imageData : fbImageData
        }
        console.log(profileDetails)
    
        profileBtn.textContent = "Unlocked?"
        profileBtn.style.background = "red" 
        
        // store data to chrome local storage
        chrome.storage.local.set({
          firedClick: firedClick++
        })    
    
        // store data in Session
        sessionStorage.setItem("profileDetails", JSON.stringify(profileDetails))    

        checkSessionStorage("profileDetails");
    
        chrome.storage.local.get(["firedClick"]).then((result) => {      
          if (result.firedClick % 2 == 0) {        
            removeData()
          }
        });
      } else {
        alert("You are not in Profile page")
      }

      function removeData() {
        alert("Are you sure you want to unlock and remove the data? ")
        sessionStorage.removeItem('profileDetails');
        profileBtn.innerText = "GET"
        profileBtn.style.background = "#f7f779" 
      }
    }

    const overviewDetailsBtn = (btn) => {    
      // console.log(checkURL("about"));
      if (checkURL("about")) {        
        let overviews = document.querySelectorAll(".xzsf02u.x6prxxf.xvq8zen.x126k92a");
        let fbOverviews = [];
        
        overviews.forEach((overview) => {
          let list = overview.firstChild.childNodes       
          let info = list[0].textContent.trim().split(' ').join('_').toLowerCase();
          if (!list[1]) return                
          
          fbOverviews[info] = list[1].textContent; 
        })                

        let overviewDetails = Object.assign({}, fbOverviews)
        sessionStorage.setItem("overviewDetails", JSON.stringify(overviewDetails))
        checkSessionStorage("overviewDetails")           

        disableBtn(fbOverviews, btn)    
      } else {
        alert("You are not in Overview Page.");
      }
    }

    const contactDetailsBtn = (btn) => {
      if (checkURL("about_contact_and_basic_info")) {
        let contacts = document.querySelectorAll(".x1e56ztr.x1gslohp");
        let contactAndBasicInfo = [];
      
        contacts.forEach(contact => {          
          let details = contact.firstChild.childNodes[0].textContent
          let info = contact.firstChild.childNodes[1].textContent
          contactAndBasicInfo[info] = details // needs updating if social links are many
        });

        let contactDetails = Object.assign({}, contactAndBasicInfo)
        sessionStorage.setItem("contactDetails", JSON.stringify(contactDetails))
        checkSessionStorage("contactDetails")    
        
        disableBtn(contactAndBasicInfo, btn)      
      } else {
        alert("You are not in Contact and Basic Info page!")       
      }
    }

    const relationDetailsBtn = (btn) => {
      if (checkURL("about_family_and_relationships")) {
        let relationship = document.querySelector(".xzsf02u.x6prxxf.xvq8zen.x126k92a").textContent;
        let familyMembers = document.querySelectorAll(".xzsf02u.x6prxxf.xvq8zen.x126k92a.x12nagc");
        let families = []; 
        
        // family members
        familyMembers.forEach((member) => {
          families.push(member.textContent);
        })
    
        let familyAndRelationship = {
          relationship,
          families: families.join(" | ")
        }
    
        // let contactDetails = Object.assign({}, contactAndBasicInfo)
        sessionStorage.setItem("familyDetails", JSON.stringify(familyAndRelationship))
        checkSessionStorage("familyDetails");    
    
        disableBtn(familyAndRelationship, btn)     
      } else {
        alert("You are not in Family and relationship page!")
      }
    }

    const friendsDetailsBtn = (btn) => {
      if (checkURL("friends")) {
        let friends = document.querySelectorAll(".x1iyjqo2.x1pi30zi");
        let friendName = [];
        let friendURL = [];
        
        friends.forEach(element => {                    
          if (element.childNodes.length > 1) {
            friendName.push(element.getElementsByTagName('a')[0].innerText)   
            friendURL.push(element.getElementsByTagName('a')[0].href)      
          } 
        });

        let friendsDetails = {
          friendName,
          friendURL
        }

        sessionStorage.setItem("friendsDetails", JSON.stringify(friendsDetails))
        checkSessionStorage("friendsDetails"); 
    
        disableBtn(friendsDetails, btn)     
      } else {
        alert("You are not in Contact and basic info page!")
      }
    }

    const likesDetailsBtn = (btn) => {
      console.log(btn)
      if (checkURL("likes_all")) {
        console.log(document.body.scrollHeight);
        window.scrollTo(0, document.body.scrollHeight);

        let likeslINK = document.querySelectorAll(".x9f619.x1r8uery.x1iyjqo2.x6ikm8r.x10wlt62.x1n2onr6 > div > div > a")
        let likesURL = [];
        let likesName = [];
        let likeImage = [];

        likeslINK.forEach(element => {
          likesURL.push(element.getAttribute("href"));
          likesName.push(element.childNodes[0].textContent);
          likeImage.push(element.getElementsByTagName('img')[0].currentSrc);      
        });

        
        let likesDetails = {
          likesURL,
          likesName,
          likeImage
        }

        sessionStorage.setItem("likesDetails", JSON.stringify(likesDetails))
        checkSessionStorage("likesDetails"); 

        disableBtn(likesDetails, btn)     
      } else {
        alert("You are not in Likes Page!")
      }

    }
    function groupsDetailsBtn(btn) {}

    /** check current URL  */
    const checkURL = (slug) => {
      console.log(window.location);
      // check if fb has not set username
      if (window.location.pathname === "/profile.php")      {
        const urlParams = new URLSearchParams(window.location.search);
        const sk = urlParams.get("sk")
        
        if (sk === slug) return true
      } else {
        // username is set
        let pathname = window.location.pathname // /aybanluwis
        let fbId = pathname.split('/'); // ["", "aybanluwis"]

        if (slug === "/") {
          // checkk pathname length 
          if (fbId.length === 2) return true
        } else {
          if (fbId.length > 2 ) {
            if (fbId[2] === slug ) return true              
          } else {
            return false
          }
        }

      }
    }

    /** disable the buttons when data is fetched */
    const disableBtn = (data, btnId) => {      
      if (data) {
        document.getElementById(btnId).innerHTML = `LOCKED`
        document.getElementById(btnId).style.cursor = `not-allowed`
      } 
    }

    /** Create checkbox when data is loaded in session */
    const createCheckbox = (attr) => {
      let div = document.createElement("div");
      div.classList.add(".checkbox-content")
      let checkbox = document.createElement("INPUT");
      checkbox.setAttribute("type", "checkbox");    

      let label = document.createElement("LABEL");
      let text = document.createTextNode(attr);
      label.setAttribute("for", attr);
      label.appendChild(text);
      div.appendChild(checkbox);
      checkbox.after(label);
      console.log(div.outerHTML);
      console.log(label);

      document.querySelector(".modal-content").appendChild(div)
      // text.insertAdjacentElement("beforebegin", checkbox);
    }

    /** Open Modal CSV */
    let modal = document.getElementById("myModal");
    openModalCsv.addEventListener("click", (e) => {
    
      let storage = []
      Object.keys(sessionStorage).forEach((key) => {
          if (key !== "ps:tabID" && key !== "TabId") {
            storage[key] = sessionStorage.getItem(key);
            console.log(key)
            storage.push(key)
          }            
      });
      
      console.log(storage);
      let data = sessionStorage.getItem("profileDetails");
      if (data) {
        modal.style.display = "block";
        // let csv = arrayToCsv([Object.keys(res.profileDetails), Object.values(res.profileDetails)]);
        // console.log(csv)
        // downloadBlob(csv, 'export.csv', 'text/csv;charset=utf-8;')
      } else {
        alert("Save data from your session first.")
      }
      console.log('clicked download CSV')
    })

    /** When the user clicks anywhere outside of the modal, close it */ 
    window.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    })
    
    /** Get the <span> element that closes the modal */ 
    // When the user clicks on <span> (x), close the modal
    let span = document.getElementsByClassName("close")[0];
    span.addEventListener("click",() => {
      modal.style.display = "none";
    })
    

    /** check session for data */
    const checkSessionStorage = (data) => {
      let session = sessionStorage.getItem(data);
      console.log(session);
      // return session;

      if (session) {
        document.querySelector(".peepDownload").removeAttribute("disabled");            
        (<HTMLElement>document.querySelector(".peepDownload")).style.cursor = "pointer";            
        createCheckbox(data);
      } else {
        return document.querySelector(".modal-content-p").innerHTML = "Data not saved in session";
      }

    }

    /** convert array to csv */
    const arrayToCsv = (data) => {   
      return data?.map(row =>
        row
        .map(String)  // convert every value to String
        .map(v => v.replaceAll('"', '""'))  // escape double colons
        .map(v => `"${v}"`)  // quote it
        .join(',')  // comma-separated
      ).join('\r\n');  // rows starting on new lines
    }

    /** Download contents as a file
     * Source: https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
     */
    const downloadBlob = (content, filename, contentType) => {
      console.log(content) 
      // return
      // Create a blob
      var blob = new Blob([content], { type: contentType });
      var url = URL.createObjectURL(blob);

      // Create a link to download it
      var pom = document.getElementById('peepDownload')  as HTMLAnchorElement | null;;
      pom.href = url;
      pom.setAttribute('download', filename);
      pom.click()
    }

  } else {
    chrome.storage.local.get(["isClicked", "isPopupOpen"], (res) => {
      console.log(res)
      chrome.storage.local.set({
        isClicked: !res.isClicked,
        isPopupOpen: !res.isPopupOpen,
      }, () => {
          (<HTMLElement>document.querySelector(".peepNodesOuter")).parentElement.remove()
      })
    })
  }