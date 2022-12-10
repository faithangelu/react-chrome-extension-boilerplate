import React from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'

const App: React.FC<{}> = () => {

  var currentURL  = window.location.href

  const profileBtnClick = () => {
    let fbURL = currentURL.replace(/\/$/, '');  /* remove optional end / */ 
    let fbIntro = document.querySelector(".x2b8uid.x1l90r2v.xdppsyt").textContent 
    let fbUSN = fbURL.substring(fbURL.lastIndexOf('/') + 1);   
    let fbName = document.querySelector(".x78zum5.xdt5ytf.x1wsgfga.x9otpla").textContent  // need to remove the nickname later on 
    let fbUserId; 


    if (!fbUSN.includes("?")) {
      // if username is set -- pull the id in friends
      let getUserId = document.querySelector(".xcud41i.x4vbgl9.x1a02dak.x78zum5").getElementsByTagName('a')[0].href;
      let newURLfromImgs = getUserId.split("=")[2]
      fbUserId = newURLfromImgs.split(".")[1]
      console.log(fbUserId)
    } else {         
      // if username is not set
      fbUserId = fbUSN.split("=")[1]
      console.log(fbUserId)
    }
  
    let profileDetails = {
      name : fbName, 
      url : fbURL != null || 'undefined' ? fbURL : null, 
      intro : fbIntro != null || 'undefined' ? fbIntro : null,
      userId : fbUserId != null || 'undefined' ? fbUserId : null
    }

    // if (profileDetails) {
    //   document.getElementById("peepGet-1").innerHTML = `LOCKED`
    //   document.getElementById("peepGet-1").style.cursor = `not-allowed`
    // }

    console.log(profileDetails);         
  }

  const overviewBtn = () => {

  }


  return (
    <>
      <div className="peepNodesOuter"> 
        <div className="peepNodesInner">

          <div className="peepTopBar">
            <img src="https://ps.w.org/icon-block/assets/icon-256x256.png?rev=2787610"
              alt="[icon goes here to toggle up and down (so only peepTopBar will show)]" />
            <img src="https://ps.w.org/icon-block/assets/icon-256x256.png?rev=2787610"
              alt="[icon goes here to shift left or right]" />
          </div>  

          <div className="peepTitleArea">
            PeepNodes - Collection Checklist
          </div>  

          <div className="peepCheckList">

            <div className="peepCheckItem peepProfile">
              <img src="https://ps.w.org/icon-block/assets/icon-256x256.png?rev=2787610"
                alt="[empty icon circle here, full if collected]" />
              <div className="peepCheckTitle">
                Profile
              </div>
              <button className='peepGet' onClick={profileBtnClick}>
                GET
              </button>
            </div> 

            <div className="peepCheckItem peepOverview">
              <img src="https://ps.w.org/icon-block/assets/icon-256x256.png?rev=2787610"
                alt="[empty icon circle here, full if collected]" />
              <div className="peepCheckTitle">
                Overview
              </div>
              <div className="peepGet">
                GET
              </div>
            </div> 

            <div className="peepCheckItem peepContact">
              <img src="https://ps.w.org/icon-block/assets/icon-256x256.png?rev=2787610"
                alt="[empty icon circle here, full if collected]" />
              <div className="peepCheckTitle">
                Contact
              </div>
              <div className="peepGet">
                GET
              </div>
            </div> 

            <div className="peepCheckItem peepRelationships">
              <img src="https://ps.w.org/icon-block/assets/icon-256x256.png?rev=2787610"
                alt="[empty icon circle here, full if collected]" />
              <div className="peepCheckTitle">
                Relationships
              </div>
              <div className="peepGet">
                GET
              </div>
            </div> 

            <div className="peepCheckItem peepFriends">
              <img src="https://ps.w.org/icon-block/assets/icon-256x256.png?rev=2787610"
                alt="[empty icon circle here, full if collected]" />
              <div className="peepCheckTitle">
                Friends
              </div>
              <div className="peepGet">
                GET
              </div>
            </div> 

            <div className="peepCheckItem peepLikes">
              <img src="https://ps.w.org/icon-block/assets/icon-256x256.png?rev=2787610"
                alt="[empty icon circle here, full if collected]" />
              <div className="peepCheckTitle">
                Likes
              </div>
              <div className="peepGet">
                GET
              </div>
            </div>  

            <div className="peepCheckItem peepGroups">
              <img src="https://ps.w.org/icon-block/assets/icon-256x256.png?rev=2787610"
                alt="[empty icon circle here, full if collected]" />
              <div className="peepCheckTitle">
                Groups
              </div>
              <div className="peepGet">
                GET
              </div>
            </div>  

          </div>  

          <div className="peepDownload">
            Download CSVe
          </div>

        </div> 
      </div>  
    </>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
